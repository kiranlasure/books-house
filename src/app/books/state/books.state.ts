import { Books } from "src/app/shared/header/models/books.model";

export interface BooksState {
    books : Books[];
}


export const initialState: BooksState = {
    books: [],
}