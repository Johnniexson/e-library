import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LandingComponent } from "./landing.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DebugElement } from "@angular/core";
import { Router } from "@angular/router";
import { LibraryService } from "../shared/service/library.service";

const libraryServiceMock = {
  user: "admin",
  auth: "librarian",
};
describe("LandingComponent", () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: LibraryService, useValue: libraryServiceMock }],
      // schemas: [NO_ERRORS_SCHEMA],
      declarations: [LandingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
