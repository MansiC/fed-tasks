import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @Input() book!: Book;

  openBookDetails() {
    this.router.navigate([this.book.title]);
  }
}
