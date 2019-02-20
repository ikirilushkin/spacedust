import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../user/user.model';
import {Credentials} from '../user/credentials.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN: string = 'token';
  constructor(public http: HttpClient, private router: Router) {}

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

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
    localStorage.setItem('isAuthenticated', `${false}`);
    this.router.navigate(['login']);
  }

  public setToken(token: string): void {
    localStorage.setItem('isAuthenticated', `${true}`);
    localStorage.setItem(this.TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }
}
