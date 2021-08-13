import { createReducer, on } from "@ngrx/store"
import {   addBooksSuccess, deleteBook,  deleteBookSucces,  loadBookSuccess,  updateBook, updateBookSuccess } from "./books.actions"
import { initialState } from "./books.state"

const _booksReducer = createReducer(initialState, on(addBooksSuccess, (state, action)=>{
    let book = {...action.book};
    
    return{
        ...state,
        books:[...state.books,book]
    }
}),
on(updateBookSuccess, (state,action)=>{
    const updatedbook = state.books.map((book)=>{
        return action.book.id === book.id ? action.book: book;
    })
    return{
        ...state,
        books: updatedbook
    }
}),
on(deleteBookSucces, (state,{id})=>{
    const  updatedbook = state.books.filter((book)=>{
        // return book.id!==id
    })
    return{
        ...state,   
        books: updatedbook
    }
}),
on(loadBookSuccess, (state, action)=>{
    return{
        ...state,
        books: action.books
    }
})
)

export function booksReducer( state: any, action:any){
    return _booksReducer(state, action)
}