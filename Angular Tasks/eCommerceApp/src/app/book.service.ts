import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  // books: Book[] = [
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'Mary Shelly',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'The Alchemist',
  //     description: 'Description',
  //     price: 200,
  //     author: 'Paulo Coelho',
  //     img: 'http://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s192x300.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  //   {
  //     title: 'Frankenstein',
  //     description: 'Description',
  //     price: 155,
  //     author: 'abc',
  //     img: 'https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg',
  //   },
  // ];
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
