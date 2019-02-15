import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty, Observable } from 'rxjs';
import { NewUser } from '../user/user.model';
import {Credentials} from '../user/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http: HttpClient) {}

  public signup(user: NewUser): Observable<any> {
    // console.log(user);
    // return empty();
    return this.http.post(`/api/users`, { ...user });
  }

  public login(credentials: Credentials): Observable<any> {
    return this.http.post('/api/authenticate', { ...credentials });
  }

  public logout(): Observable<any> {
    return this.http.post('/api/logout', {});
  }
}
