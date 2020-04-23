import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LibraryService } from "src/app/shared/service/library.service";

@Component({
  selector: "app-book-requests",
  templateUrl: "./book-requests.component.html",
  styleUrls: ["./book-requests.component.scss"],
})
export class BookRequestsComponent implements OnInit {
  key = "all";
  books = [];

  constructor(private router: Router, public ls: LibraryService) {}

  ngOnInit() {
    this.books = this.ls.bookRequests;
  }

  filter(key: string) {
    if (key === "all") {
      this.books = this.ls.bookRequests;
    } else {
      this.books = this.ls.bookRequests.filter(
        (book) => book.approved.toString() === key
      );
    }
  }

  return(id) {
    this.ls.returnBook(id);
  }

  approve(id) {
    this.ls.approveBook(id);
  }
}
