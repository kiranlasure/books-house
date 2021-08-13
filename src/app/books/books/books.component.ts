import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog-module/dialog/dialog.service';
import { Books } from 'src/app/shared/header/models/books.model';
import { AppState } from 'src/app/store/app.state';
import { EditbookComponent } from '../editbook/editbook.component';
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
  p: any;
  loggedIn: boolean = false;
  user: boolean = false;
  constructor(private store: Store<AppState>,public dialog: DialogService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.Books = this.store.select(getBooks);
    this.store.dispatch(loadBooks());
    if(localStorage.getItem('loggedIn')){
      this.loggedIn = true;
    }else{
      this.user = true;
    }
    
  }

  
  onDeleteBook(id : string){
    if(confirm('Are you sure you want to delete')){
      this.store.dispatch(deleteBook({ id }));
      this.Books = this.store.select(getBooks);
    this.store.dispatch(loadBooks());
      console.log("delete the post ");
    }
  }

  openUpdateDialog(book: any){
    const ref = this.dialog.open(EditbookComponent, {
      data: book
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);      
    });
  }

  addtoCart(){
    this.toastr.success('Added Successfully...View more Books');
  }
  // ngOnDestroy(){
  //   localStorage.clear();
  // }

}
