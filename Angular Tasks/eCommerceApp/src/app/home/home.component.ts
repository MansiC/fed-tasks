import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books!: Book[];
  show = false;

  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      // console.log(typeof data, data, 'get request data');
      this.books = data;
      console.log(this.books);
    });
    // this.books = this.bookSer
  }
}
