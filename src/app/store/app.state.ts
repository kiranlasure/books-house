import { booksReducer } from "../books/state/books.reducer";
import { BooksState } from "../books/state/books.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { UserReducer } from "../newuser/state/newuser.reducer";

export interface AppState{
    counter: CounterState;
    books: BooksState
}


export const appReducer = {
    counter: counterReducer,
    books: booksReducer,
    user: UserReducer
}