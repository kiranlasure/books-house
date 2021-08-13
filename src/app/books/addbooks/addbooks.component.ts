import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Books } from 'src/app/shared/header/models/books.model';
import { AppState } from 'src/app/store/app.state';
import { addbooks } from '../state/books.actions';


@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss']
})
export class AddbooksComponent implements OnInit {

  booksForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.booksForm = new FormGroup({
      title: new FormControl(null,
        [Validators.required ]),

      description: new FormControl(null,[Validators.required]),
      isbn: new FormControl(null,
        [Validators.required ]),
      price: new FormControl(null,
          [Validators.required ]),
    })
  }

  onAddbooks(){
    if(!this.booksForm.valid){
      return;
    }
    const book : Books ={
      id:'',
      title: this.booksForm.value.title,
      description: this.booksForm.value.description,
      isbn: this.booksForm.value.isbn,
      price: this.booksForm.value.price
    };

   this.store.dispatch(addbooks({book}))
  }
}
