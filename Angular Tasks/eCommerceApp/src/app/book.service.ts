import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  bookUrl = 'http://localhost:3000/books';

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.bookUrl);
  }

  getBook(title: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.bookUrl + '?title=' + title);
  }
}

export interface Book {
  title: string;
  description: string;
  price: number;
  img: string;
  author: string;
}
