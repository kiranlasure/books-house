import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { map, mergeMap, tap} from 'rxjs/operators';
import { RegisterUserService } from "src/app/services/register-user.service";
import { addUser, addUserSuccess } from "./newuser.actions";

@Injectable()
export class NewUserEffects{

    constructor(private action$:Actions, private userService: RegisterUserService,private toastr: ToastrService,
        private router: Router){
    }
    
    addUser$ = createEffect(()=>{
      return  this.action$.pipe(ofType(addUser), 
        mergeMap(action=>{
            return this.userService.addUser(action.user).pipe(
                map(data=>{
                    const user = {...action.user, id: data.name};
                    return addUserSuccess({user});
                })
            )
        }))
    })

    BookRedirect1$ = createEffect(
        () => {
          return this.action$.pipe(
            ofType(...[addUserSuccess],),
            tap((action) => {
              this.toastr.success("User added successfully");
              this.router.navigate(['/login']);
            })
          );
        },
        { dispatch: false }
      );

    
}