import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addbooks, addBooksSuccess, deleteBook, deleteBookSucces, loadBooks, loadBookSuccess, updateBook, updateBookSuccess } from "src/app/books/state/books.actions";
import { BooksService } from "src/app/services/books.service";
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable()
export class BooksEffects{

    constructor(private action$:Actions, private booksService: BooksService){
    }

    loadBooks$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loadBooks),
            mergeMap((action)=>{
                return this.booksService.getBooks().pipe(
                    map((books)=>{
                        return loadBookSuccess({books});
                    })
                )
            })
        )
    })

    addBooks$ = createEffect(()=>{
      return  this.action$.pipe(ofType(addbooks), 
        mergeMap(action=>{
            return this.booksService.addBooks(action.book).pipe(
                map(data=>{
                    const book = {...action.book, id: data.name};
                    return addBooksSuccess({book});
                })
            )
        }))
    })

    updateBook$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(updateBook),
            switchMap((action)=>{
                return this.booksService.updatePost(action.book).pipe(
                    map((data)=>{
                        return updateBookSuccess({ book: action.book})
                    })
                )
            })
        )
    })

    deletePost$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(deleteBook),
            switchMap((action)=>{
                return this.booksService.deleteBook(action.id).pipe(
                    map((data)=>{
                        return deleteBookSucces({ id: action.id});
                    })
                )
            })
        )
    })
}