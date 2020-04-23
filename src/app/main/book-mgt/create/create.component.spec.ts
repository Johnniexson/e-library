import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateComponent } from "./create.component";
import { DebugElement } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/app/shared/module/material.module";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibraryService } from "src/app/shared/service/library.service";
import { SharedModule } from "src/app/shared/shared.module";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

const libraryServiceMock = {
  user: "admin",
  auth: "librarian",
  books: [],
  bookRequests: [],
  addBook: jasmine.createSpy(),
  updateBook: jasmine.createSpy(),
  publishBook: jasmine.createSpy(),
  returnBook: jasmine.createSpy(),
  approveBook: jasmine.createSpy(),
  filter: jasmine.createSpy(),
};

describe("CreateComponent", () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterialModule,
        SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: LibraryService, useValue: libraryServiceMock },
        { provide: MAT_DIALOG_DATA },
        { provide: MatDialogRef },
      ],
      // schemas: [NO_ERRORS_SCHEMA],
      declarations: [CreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    component.data = "create";
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
