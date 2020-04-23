import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LibraryService } from "src/app/shared/service/library.service";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"],
})
export class BookDetailsComponent implements OnInit {
  id;
  book;

  constructor(private route: ActivatedRoute, public ls: LibraryService) {
    this.route.paramMap
      .subscribe((d) => {
        this.id = d.get("id");
      })
      .unsubscribe();
  }

  ngOnInit() {
    this.book = this.ls.getBook(this.id);
  }
}
