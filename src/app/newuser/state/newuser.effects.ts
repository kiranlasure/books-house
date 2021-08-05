import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap} from 'rxjs/operators';
import { RegisterUserService } from "src/app/services/register-user.service";
import { addUser, addUserSuccess } from "./newuser.actions";

@Injectable()
export class NewUserEffects{

    constructor(private action$:Actions, private userService: RegisterUserService){
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

   

    
}