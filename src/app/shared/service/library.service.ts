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
      coverImgUrl: "https://myimage.com/image.jpg",
      content: "This is a simple story of me",
      publisher: "string",
      createdAt: "02/02/2020, 2:23:50 pm",
      modified: "02/03/2020, 2:23:50 pm",
      published: false,
    },
    {
      id: uuidv4(),
      title: "My story",
      coverImg: "",
      content: "This is a simple story of me",
      publisher: "string",
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
    this.books.push(data);
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
