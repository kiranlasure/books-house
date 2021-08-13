import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DialogConfig } from 'src/app/dialog-module/dialog/dialog-config';
import { DialogRef } from 'src/app/dialog-module/dialog/dialog-ref';

import { Books } from 'src/app/shared/header/models/books.model';
import { AppState } from 'src/app/store/app.state';
import { updateBook } from '../state/books.actions';
import { getBookById } from '../state/books.selector';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit,OnDestroy {

  book: Books;
  booksForm: FormGroup;
  bookSubscription: Subscription;
  show: boolean = true;
  BooksData: any;
  constructor(private route:  ActivatedRoute, private store:Store<AppState>,
    private router: Router,public config: DialogConfig, public dialog: DialogRef) { }

  ngOnInit(): void { 
    this.BooksData = this.config.data;
    this.route.paramMap.subscribe((parames)=>{
      const id = parames.get('id');
     this.bookSubscription = this.store.select(getBookById, { id } ).subscribe((data)=>{
        this.book = data;
        this.createForm();
      })
    })   
  }


  createForm(){
    this.booksForm = new FormGroup({
      title: new FormControl(this.BooksData.title,
        [Validators.required ]),

      description: new FormControl(this.BooksData.description,[Validators.required]),
      isbn: new FormControl(this.BooksData.isbn,
        [Validators.required ]),
      price: new FormControl(this.BooksData.price,
          [Validators.required ]),
    })
  }


  
  onSubmit(){
    console.log("in");
    if(!this.booksForm.valid){
      return;
    }
    const title = this.booksForm.value.title;
    const description = this.booksForm.value.description;
    const isbn = this.booksForm.value.isbn;
    const price = this.booksForm.value.price
    const book: Books={
      id: this.BooksData.id,
      title,
      description,
      isbn,
      price
    }

    this.store.dispatch(updateBook({book}));
    this.dialog.close();
  }
  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }


  onclose(){
    this.dialog.close();
  }
}
