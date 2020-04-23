import { Component, OnInit } from "@angular/core";
import { LibraryService } from "src/app/shared/service/library.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-books",
  templateUrl: "./my-books.component.html",
  styleUrls: ["./my-books.component.scss"],
})
export class MyBooksComponent implements OnInit {
  books = [];

  constructor(private router: Router, public ls: LibraryService) {}

  ngOnInit() {
    this.books = this.ls.bookRequests;
  }

  filter(key: string) {
    const regex = new RegExp(key, "gi");
    this.books = this.ls.bookRequests.filter((book) => {
      if (book.title.match(regex) !== null) {
        return book;
      }
    });
  }

  return(id) {
    this.ls.returnBook(id);
  }

  openBook(book) {
    this.router.navigate(["main", "my-books", `${book.id}`]);
  }
}
