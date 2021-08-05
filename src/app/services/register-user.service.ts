import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../shared/header/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  addUser(user: UserRegister): Observable<{ name: string}>{
    return this.http.post<{name : string}>(`http://localhost:3000/register`,user)
  }
}
