import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { CreateComponent } from "./create/create.component";
import { LibraryService } from "src/app/shared/service/library.service";

@Component({
  selector: "app-book-mgt",
  templateUrl: "./book-mgt.component.html",
  styleUrls: ["./book-mgt.component.scss"],
})
export class BookMgtComponent implements OnInit {
  books = [];

  constructor(private dialog: MatDialog, public ls: LibraryService) {}

  ngOnInit() {
    this.books = this.ls.books;
  }

  openCreateModal(data) {
    const dialogRef = this.dialog.open(CreateComponent, {
      autoFocus: false,
      closeOnNavigation: true,
      disableClose: false,
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(result);
    });
  }

  delete(id) {
    this.ls.deleteBook(id);
  }

  publish(id) {
    console.log(id);
    this.ls.publishBook(id);
  }

  filter(key: string) {
    const regex = new RegExp(key, "gi");
    this.books = this.ls.books.filter((book) => {
      if (book.title.match(regex) !== null) {
        return book;
      }
    });
  }
}
