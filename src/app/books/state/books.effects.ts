import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addbooks, addBooksSuccess, deleteBook, deleteBookSucces, loadBooks, loadBookSuccess, updateBook, updateBookSuccess } from "src/app/books/state/books.actions";
import { BooksService } from "src/app/services/books.service";
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { Books } from "src/app/shared/header/models/books.model";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class BooksEffects{

    constructor(private action$:Actions, private booksService: BooksService,private toastr: ToastrService,
        private router: Router){
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
                return this.booksService.updateBook(action.book).pipe(
                    map((data)=>{
                        const updatedBook: Update<Books> = {
                            id: action.book.id,
                            changes:{
                                ...action.book
                            }
                        }
                        return updateBookSuccess({ book: action.book})
                    })
                )
            })
        )
    })

   
    deleteBook$ = createEffect(()=>{
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

    BookRedirect$ = createEffect(
        () => {
          return this.action$.pipe(
            ofType(...[deleteBookSucces]),
            tap((action) => {
              this.router.navigate(['/']);
              this.toastr.success("Deleted successfully");
            })
          );
        },
        { dispatch: false }
      );
    
      BookRedirect1$ = createEffect(
        () => {
          return this.action$.pipe(
            ofType(...[addBooksSuccess],),
            tap((action) => {
              this.toastr.success("Book added successfully");
              this.router.navigate(['/books']);
            })
          );
        },
        { dispatch: false }
      );

      BookRedirect2$ = createEffect(
        () => {
          return this.action$.pipe(
            ofType(...[updateBookSuccess],),
            tap((action) => {
              this.toastr.success("Success");
              this.router.navigate(['/books']);
            })
          );
        },
        { dispatch: false }
      );
}