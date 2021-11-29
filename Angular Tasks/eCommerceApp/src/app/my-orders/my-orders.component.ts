import { Component, OnInit } from '@angular/core';
import { Book, BookService } from '../book.service';
import { Order, OrdersService } from '../orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  constructor(
    private orderService: OrdersService,
    private bookService: BookService
  ) {}

  orders: Order[] = [];
  books: Book[] = [];
  date = new Date();

  ngOnInit(): void {
    this.orderService.getUser(0).subscribe((user) => {
      if (user) {
        this.orders = user.orders;
        console.log(this.orders);

        this.orders.forEach((order) => {
          this.bookService
            .getBook(order.bookname)
            .subscribe((book) => this.books.push(book[0]));
          console.log(this.books);
        });
        console.log('BOOKS', this.books);
      } else console.log(user);
      // console.log(user  );
      // return user.orders;
    });
    // console.log('Frankenstien' in this.orders, this.orders);
  }
}
