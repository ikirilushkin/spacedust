import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../user/user.model';
import {Credentials} from '../user/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN: string = 'token';
  constructor(public http: HttpClient) {}

  public signup(user: NewUser): Observable<any> {
    // console.log(user);
    // return empty();
    return this.http.post(`/api/users`, { ...user });
  }

  public login(credentials: Credentials): Observable<any> {
    return this.http.post('/api/authenticate', { ...credentials });
  }

  public logout(): void {
    // return this.http.post('/api/logout', {});
    localStorage.removeItem(this.TOKEN);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }
}
