import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
// import * as BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import * as InlineEditor from "@ckeditor/ckeditor5-build-inline";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import * as moment from "moment";
import { LibraryService } from "src/app/shared/service/library.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  public Editor = InlineEditor;
  form: FormGroup;

  config = {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "|",
      "bulletedList",
      "numberedList",
      "undo",
      "redo",
    ],
  };
  get controls() {
    return this.form.controls;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateComponent>,
    public ls: LibraryService
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (this.data !== "create") {
      this.form.patchValue(this.data);
    }
  }

  close() {
    this.dialogRef.close();
  }

  createForm() {
    this.form = this.fb.group({
      title: ["", Validators.required],
      coverImgUrl: [""],
      publisher: ["", Validators.required],
      content: [
        "<h3>Introduction</h3><p>Hello, world!</p>",
        Validators.required,
      ],
    });
  }

  submit() {
    let form = this.form.value;
    const data = {
      ...form,
      published: false,
      createdAt: moment().format("d/MM/YYYY, h:mm:ss a"),
      modified: moment().format("d/MM/YYYY, h:mm:ss a"),
    };
    this.ls.addBook(data);
    this.dialogRef.close(data);
  }

  update() {
    let form = this.form.value;
    const data = {
      ...form,
      modified: moment().format("d/MM/YYYY, h:mm:ss a"),
    };
    this.ls.updateBook(this.data.id, data);
    this.dialogRef.close(data);
  }
}
