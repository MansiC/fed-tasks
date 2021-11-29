import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  userurl = 'http://localhost:3000/users/';
  carturl = 'http://localhost:3000/cart/';

  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(this.userurl + userId);
  }

  putUser(userId: number, data: User) {
    return this.httpClient.put(this.userurl + userId, data);
  }

  addtoCart(book: string, userId: number) {
    return this.httpClient
      .get<Cart>(this.carturl + userId)
      .subscribe((data) => {
        console.log(data, data.id);
        if (data.items) data.items.push(book);
        // push new book to current array
        else data.items = [book];

        //update the server -- PUT request
        this.httpClient
          .put(this.carturl + userId, data)
          .subscribe((res) => console.log(res, 'added'));
      });
  }
  clearCart(userId: number) {
    let newcart = {
      id: userId,
      cart: [],
    };
    return this.httpClient.put(this.carturl + userId, newcart);
  }

  getCart(userId: number) {
    return this.httpClient.get<Cart>(this.carturl + userId);
  }

  updateQuantity(userId: number, newItem: Cart) {
    return this.httpClient.put(this.carturl + userId, newItem);
  }
}

export interface User {
  id: number;
  name: string;
  orders: Order[];
  cart: string[];
}
export interface Order {
  bookname: string;
  orderDate: Date;
  status: string;
}

export interface Cart {
  id: number;
  items: string[];
}
