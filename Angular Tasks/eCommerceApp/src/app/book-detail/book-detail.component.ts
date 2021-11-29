import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Book, BookService } from '../book.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private orderService: OrdersService,
    private _router: Router
  ) {}

  booktitle!: string;
  book?: Book;
  ngOnInit(): void {
    this.booktitle = this.activatedRoute.snapshot.params['booktitle'];

    this.bookService.getBook(this.booktitle).subscribe((data) => {
      if (data.length) {
        this.book = data[0];
        console.log(data, typeof data, this.book);
      }
    });
  }

  checkout() {
    this._router.navigate(['checkout']);
    this.addToCart();
  }
  addToCart() {
    this.orderService.addtoCart(this.booktitle, 0);
  }
}
