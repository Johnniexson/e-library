import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class LibraryService {
  auth = "librarian";
  user = "Admin";

  books = [
    {
      id: uuidv4(),
      title: "My story",
      coverImgUrl:
        "https://images.unsplash.com/photo-1568137223715-939ee931710e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      content: "This is a simple story of me",
      publisher: "John snow",
      createdAt: "02/02/2020, 2:23:50 pm",
      modified: "02/03/2020, 2:23:50 pm",
      published: false,
    },
    {
      id: uuidv4(),
      title: "My story",
      coverImgUrl:
        "https://images.unsplash.com/photo-1461419912973-9964f1f54b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      content: "This is a simple story of me",
      publisher: "John Doe",
      createdAt: "02/02/2020, 2:23:50 pm",
      modified: "02/03/2020, 2:23:50 pm",
      published: true,
    },
  ];
  libraryBooks = this._libraryBooks;
  bookRequests = [];

  get _libraryBooks() {
    return this.books.filter((book) => book.published === true);
  }
  constructor(private snackbar: MatSnackBar) {}

  getBook(id) {
    return this.books.find((book) => book.id === id);
  }

  addBook(data) {
    const _data = {
      id: uuidv4(),
      ...data,
    };
    this.books.push(_data);
    this.openSnackBar("New Book added", "Success!");
  }

  updateBook(id, data) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books[index] = { ...this.books[index], ...data };
    console.log(this.books[index]);
    this.openSnackBar("updated succefully", "Success!");
  }

  publishBook(id) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books[index] = {
      ...this.books[index],
      published: !this.books[index].published,
    };
    console.log(this.books[index]);
    if (this.books[index].published) {
      this.openSnackBar("Book published to library", "Success!");
    } else {
      this.openSnackBar("Book removed from library", "Success!");
    }
  }

  deleteBook(id) {
    const index = this.books.findIndex((book) => book.id === id);
    this.books.splice(index, 1);
    console.log(this.books);
    this.openSnackBar("deleted succefully", "Success!");
  }

  openSnackBar(message, action) {
    this.snackbar.open(message, action, {
      duration: 3000,
    });
  }

  requestBook(book) {
    book.approved = false;
    const _book = {
      ...book,
    };
    this.bookRequests.push(_book);
    this.openSnackBar("book request sent, wait for approval", "Success!");
  }

  returnBook(id) {
    const index = this.bookRequests.findIndex((book) => book.id === id);
    // const book = this.bookRequests[index];
    this.bookRequests.splice(index, 1);
    // this.books.push(book);
    this.openSnackBar("book returned to shelve", "Success!");
  }

  approveBook(id) {
    const index = this.bookRequests.findIndex((book) => book.id === id);
    this.bookRequests[index] = { ...this.bookRequests[index], approved: true };
    this.openSnackBar("book request approved", "Success!");
  }

  checkBorrow(id) {
    const book = this.bookRequests.find((_book) => _book.id === id);
    return book ? true : false;
  }
}
