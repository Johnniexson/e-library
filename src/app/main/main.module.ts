import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { LibraryComponent } from "./library/library.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookMgtComponent } from "./book-mgt/book-mgt.component";
import { CreateComponent } from "./book-mgt/create/create.component";
import { MaterialModule } from "../shared/module/material.module";
import { SharedModule } from "../shared/shared.module";
import { BookRequestsComponent } from "./book-mgt/book-requests/book-requests.component";
import { MyBooksComponent } from "./my-books/my-books.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "library",
        component: LibraryComponent,
      },
      {
        path: "my-books",
        component: MyBooksComponent,
      },
      {
        path: "book-mgt",
        component: BookMgtComponent,
      },
      {
        path: "book-requests",
        component: BookRequestsComponent,
      },
      {
        path: "library/:id",
        component: BookDetailsComponent,
      },
      {
        path: "my-books/:id",
        component: BookDetailsComponent,
      },
      {
        path: "**",
        redirectTo: "main/library",
      },
    ],
  },
];
@NgModule({
  declarations: [
    MainComponent,
    LibraryComponent,
    BookMgtComponent,
    BookDetailsComponent,
    CreateComponent,
    BookRequestsComponent,
    MyBooksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
  ],
  entryComponents: [CreateComponent],
})
export class MainModule {}
