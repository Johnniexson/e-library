import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { LibraryService } from "../shared/service/library.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  name = new FormControl("", Validators.required);

  constructor(public ls: LibraryService, private router: Router) {}

  ngOnInit() {}

  go(where) {
    this.ls.user = this.name.value;
    if (where === "library") {
      this.ls.auth = "user";
    } else {
      this.ls.auth = "librarian";
    }
    this.router.navigate(["main", `${where}`]);
  }
}
