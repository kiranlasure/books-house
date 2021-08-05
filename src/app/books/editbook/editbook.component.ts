import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
  constructor(private route:  ActivatedRoute, private store:Store<AppState>,
    private router: Router) { }

  ngOnInit(): void { 
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
      title: new FormControl(this.book.title,
        [Validators.required ]),
      description: new FormControl(this.book.description,[Validators.required])
    })
  }

  onSubmit(){
    console.log("in");
    if(!this.booksForm.valid){
      return;
    }
    const title = this.booksForm.value.title;
    const description = this.booksForm.value.description;

    const book: Books={
      id: this.book.id,
      title,
      description
    }

    this.store.dispatch(updateBook({book}))
  }
  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }

}
