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

  updatePost(book: Books){
    
    // const bookData = {
    //   [book.id]: { title: book.title, description: book.description },
    // };
    return this.http.patch(`http://localhost:3000/books`,book)
  }

  deleteBook(id : string){
    return this.http.delete(`http://localhost:3000/books/${id}.json`)
  }
}
