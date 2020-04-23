import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CKEditorModule],
  exports: [FormsModule, ReactiveFormsModule, CKEditorModule],
})
export class SharedModule {}
