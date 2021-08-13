import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Books } from '../shared/header/models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]>{
    return this.http.get<Books[]>(`http://localhost:3000/books`)
    .pipe(map((data)=>{
      const books: Books[] = [];
     for(let key in data){
       books.push({...data[key], id: key})
     }
      return books;
    }));
  }

  addBooks(book : Books): Observable<{ name: string}>{
    return this.http.post<{name : string}>(`http://localhost:3000/books`,book)
  }

  updateBook(book: Books):  Observable<{name:string}>{
    const bookData = {
      [book.id] : {
          id: book.id,
          name: book.isbn, 
          description: book.description, 
          price: book.price
      }
  }
    return this.http.patch<{name:string}>(`http://localhost:3000/books/${book.id}`,bookData);
  }

  deleteBook(id : string){
    return this.http.delete<{name:string}>(`http://localhost:3000/books/${id}`);
  }

}
