import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MediaMatcher } from "@angular/cdk/layout";
import { LibraryService } from "../shared/service/library.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  @ViewChild("menu", { static: false }) menu: ElementRef<HTMLElement>;
  hidden = false;
  private _mobileQueryListener: () => void;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    public mediaMatcher: MediaMatcher,
    public ls: LibraryService
  ) {
    this.mobileQuery = mediaMatcher.matchMedia(`(max-width : 720px)`);
    this._mobileQueryListener = () => {
      if (window.innerWidth > 720) {
        this.menu.nativeElement.style.display = "block";
      }
      cdRef.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  isScreenSmall() {
    return this.mobileQuery.matches;
  }

  expandMenu() {
    this.hidden = !this.hidden;
    if (!this.hidden) {
      this.menu.nativeElement.style.display = "block";
    } else {
      this.menu.nativeElement.style.display = "none";
    }
  }
}
