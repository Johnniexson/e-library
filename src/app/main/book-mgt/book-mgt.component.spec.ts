import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookMgtComponent } from "./book-mgt.component";
import { DebugElement } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibraryService } from "src/app/shared/service/library.service";
import { MatDialog } from "@angular/material";
import { MaterialModule } from "src/app/shared/module/material.module";

const libraryServiceMock = {
  user: "admin",
  auth: "librarian",
  books: [],
  getBook: jasmine.createSpy(),
  deleteBook: jasmine.createSpy(),
  publishBook: jasmine.createSpy(),
  filter: jasmine.createSpy(),
};

describe("BookMgtComponent", () => {
  let component: BookMgtComponent;
  let fixture: ComponentFixture<BookMgtComponent>;
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
      providers: [
        { provide: LibraryService, useValue: libraryServiceMock },
        { provide: MatDialog },
      ],
      // schemas: [NO_ERRORS_SCHEMA],
      declarations: [BookMgtComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMgtComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
