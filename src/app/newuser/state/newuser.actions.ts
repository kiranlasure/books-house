import { createAction, props } from "@ngrx/store";
import { UserRegister } from "src/app/shared/header/models/register.model";


export const ADD_USER_ACTION = '[ user page ] add user';
export const ADD_USER_SUCCESS = '[book page] add user success';

export const addUser = createAction(ADD_USER_ACTION, props<{ user: UserRegister}>());
export const addUserSuccess = createAction(ADD_USER_SUCCESS, props<{ user: UserRegister}>());
