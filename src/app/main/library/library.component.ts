import { Component, OnInit } from "@angular/core";
import { LibraryService } from "src/app/shared/service/library.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-library",
  templateUrl: "./library.component.html",
  styleUrls: ["./library.component.scss"],
})
export class LibraryComponent implements OnInit {
  libraryBooks = [];
  constructor(public ls: LibraryService, private router: Router) {}

  ngOnInit() {
    this.libraryBooks = this.ls.books.filter((book) => book.published === true);
  }

  borrow(book) {
    this.ls.requestBook(book);
  }

  openBook(book) {
    this.router.navigate(["main", "library", `${book.id}`]);
  }

  filter(key: string) {
    const regex = new RegExp(key, "gi");
    this.libraryBooks = this.ls.books.filter((book) => {
      if (book.title.match(regex) !== null && book.published === true) {
        return book;
      }
    });
  }
}
