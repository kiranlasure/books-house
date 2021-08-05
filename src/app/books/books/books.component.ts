import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Books } from 'src/app/shared/header/models/books.model';
import { AppState } from 'src/app/store/app.state';
import { deleteBook, loadBooks} from '../state/books.actions';
import { getBooks } from '../state/books.selector';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  edit: boolean = false;
  Books: Observable<Books[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.Books = this.store.select(getBooks);
    this.store.dispatch(loadBooks());
  }

  editBook(){
    this.edit = true;
  }
  onDeleteBook(id: any){
    if(confirm('Are you sure you want to delete')){
      this.store.dispatch(deleteBook({ id }));
      console.log("delete the post ");
    }
  }
}
