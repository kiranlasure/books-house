import { createAction, props } from "@ngrx/store";
import { Books } from "src/app/shared/header/models/books.model";

export const ADD_Book_ACTION = '[ book page ] add book';
export const ADD_BOOKS_SUCCESS = '[book page] add book success';
export const UPDATE_BOOK_ACTION = '[ book page] update book';
export const UPDATE_BOOK_SUCCESS = '[ book page] update book success';
export const DELETE_BOOK_ACTION = '[ book page] delete book';
export const DELETE_BOOK_SUCCESS = '[ book page] delete book success';
export const LOAD_BOOK = '[ book page ] load book';
export const LOAD_BOOK_SUCCESS = '[ book page ] load books success';

export const addbooks = createAction(ADD_Book_ACTION, props<{ book: Books}>());
export const updateBook = createAction(UPDATE_BOOK_ACTION,
    props<{ book: Books}>());
export const updateBookSuccess = createAction(UPDATE_BOOK_SUCCESS,  props<{ book: Books}>());

export const deleteBook = createAction(DELETE_BOOK_ACTION, props<{ id: string}>()); 
export const deleteBookSucces = createAction(DELETE_BOOK_SUCCESS, props<{ id: string}>())
export const loadBooks = createAction(LOAD_BOOK);
export const loadBookSuccess = createAction(LOAD_BOOK_SUCCESS, props<{ books: Books[]}>());
export const addBooksSuccess = createAction(ADD_BOOKS_SUCCESS, props<{ book: Books}>());