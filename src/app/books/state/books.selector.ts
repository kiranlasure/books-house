import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BooksState } from "./books.state";

export const BOOK_STATE_NAME = 'books';
const getBooksState = createFeatureSelector<BooksState>('books');

export const getBooks = createSelector(getBooksState, (state)=>{
    return state.books;
});

export const getBookById = createSelector(getBooksState, (state , props)=>{
   return state.books.find( (book)=> book.id === props.id );
})