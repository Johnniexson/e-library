import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MyBooksComponent } from "./my-books.component";
import { DebugElement } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/module/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibraryService } from "src/app/shared/service/library.service";

const libraryServiceMock = {
  user: "admin",
  auth: "librarian",
  books: [],
  libraryBooks: [],
  bookRequests: [],
  getBook: jasmine.createSpy(),
  deleteBook: jasmine.createSpy(),
  requestBook: jasmine.createSpy(),
  returnBook: jasmine.createSpy(),
  approveBook: jasmine.createSpy(),
  filter: jasmine.createSpy(),
};

describe("MyBooksComponent", () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: LibraryService, useValue: libraryServiceMock }],
      // schemas: [NO_ERRORS_SCHEMA],
      declarations: [MyBooksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
