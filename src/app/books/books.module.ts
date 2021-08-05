import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditbookComponent } from './editbook/editbook.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './state/books.effects';




const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children:[
      {
        path:'edit/:id',
        component:EditbookComponent
      }
    ]
  },
  {
    path: 'book',
    component: BooksComponent,
  },
  {
    path:'addbooks',
    component:AddbooksComponent
  }
];

@NgModule({
  declarations: [
    BooksComponent,
    AddbooksComponent,
    EditbookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('books',booksReducer),
    // EffectsModule.forFeature([booksEffects]),
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forRoot([BooksEffects])
  ],
  
})
export class BooksModule { }


