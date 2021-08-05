import { createReducer, on } from "@ngrx/store";
import { addUserSuccess } from "./newuser.actions";
import { initialState } from "./newuser.state";

const _userReducer = createReducer(initialState, on(addUserSuccess, (state, action)=>{
    let book = {...action.user};
    
    return{
        ...state,
        books:[...state.user,book]
    }
}))


export function UserReducer(state:any, action:any){
    return _userReducer(state, action);
}