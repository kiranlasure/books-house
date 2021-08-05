import { UserRegister } from "src/app/shared/header/models/register.model";


export interface UserState {
    user : UserRegister[];
}


export const initialState: UserState = {
    user: [],
}