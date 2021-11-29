import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookService } from '../book.service';
import { Cart, OrdersService } from '../orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private orderService: OrdersService,
    private router: Router,
    private activatedRoute: ActivatedRoute // private datePipe: DatePipe
  ) {}

  cart: string[] = [];
  items!: Map<string, number>;
  booknames: string[] = [];
  books: Book[] = [];
  qty: number[] = [];
  total: number = 0;
  totalPrice: number = 0;
  isCart: boolean = false;

  ngOnInit(): void {
    console.log('Cart init');

    if (this.router.url.includes('/cart/')) this.isCart = true;
    this.orderService.getCart(0).subscribe((data) => {
      if (data.items != undefined) {
        this.mapBookwithQuantity(data);
        console.log(data);
        this.booknames.forEach((book, index) => {
          this.bookService.getBook(book).subscribe((res) => {
            this.books.push(res[0]);
            this.totalPrice += res[0].price * this.qty[index];
            console.log(this.totalPrice);
          });
        });
      }
    });
  }

  mapBookwithQuantity(data: Cart) {
    this.items = data.items.reduce(
      (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
      new Map()
    );
    // console.log(this.items, '----items');
    this.booknames = [...this.items.keys()];
    this.qty = [...this.items.values()];
    this.total = data.items.length;
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

  finalcheckout() {
    // this.orderService.getUser(0)

    this.orderService.getUser(0).subscribe((data) => {
      console.log(data.orders);
      for (let i = 0, j = 0; i < this.total; i++) {
        let quantity = this.qty[j];

        while (quantity >= 1) {
          let newOrder = {
            bookname: this.booknames[j],
            orderDate: new Date(), //.toLocaleDateString(undefined, {
            //   year: 'numeric',
            //   month: 'long',
            //   day: 'numeric',
            // }), //,'mediumDate'),
            status: 'Not Delivered',
          };
          quantity--;
          data.orders.push(newOrder);
        }
        j++;
      }
      console.log('final checkout', data.orders);
      this.orderService.putUser(0, data).subscribe((user) => {
        console.log(user, 'added');
        this.resetCart();
        this.orderService
          .clearCart(0)
          .subscribe((cart) => console.log(cart, 'cleared'));
      });
    });
  }

  resetCart() {
    this.books = [];
    this.cart = [];
    this.items.clear();
    this.booknames = [];
    this.books = [];
    this.qty = [];
    this.total = 0;
    this.totalPrice = 0;
    this.isCart = false;
  }

  updateQuantity(index: number, sign: string) {
    // console.log('quantity :', this.qty[index]);
    if (sign == '+') this.qty[index]++;
    else if (sign == '-') this.qty[index]--;
    // console.log('quantity :', this.qty[index]);

    this.orderService.getCart(0).subscribe((data) => {
      console.log(data.items);
      if (sign == '+') data.items.push(this.booknames[index]);
      else {
        let ind = data.items.findIndex((item) => item == this.booknames[index]);
        data.items.splice(ind, 1);
        console.log(data.items, ind);
      }

      this.orderService
        .updateQuantity(0, data)
        .subscribe((data) => console.log('updated qty', data));
    });
  }
}
