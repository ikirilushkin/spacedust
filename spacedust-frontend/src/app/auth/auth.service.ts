import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from '../user/user.model';
import { Credentials } from '../user/credentials.model';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN: string = 'token';
  constructor(public http: HttpClient, private router: Router) {}

  public isAuthenticated(): boolean {
    const expiresAt = localStorage.getItem('expiresAt');
    if (!expiresAt) {
      return false;
    }
    return new Date().getTime() < parseInt(expiresAt, 10);
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
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    this.router.navigate(['login']);
  }

  public isAdmin(): boolean {
    const userInfo = this.getUserInfo();
    if (!userInfo) {
      return false;
    }
    return userInfo.role === 'admin';
  }

  public userHasRole(expectedRole: string): boolean {
    const userInfo = this.getUserInfo();
    return expectedRole === userInfo.role;
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN);
  }

  private setUserInfo(userInfo: any): void {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  public getUserInfo(): any {
    localStorage.getItem('userInfo');
  }

  private setExpiresAt(expiresAt: number) {
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt * 1000));
  }

  public setUser(token: string, userInfo: any, expiresAt: number): void {
    this.setToken(token);
    this.setUserInfo(userInfo);
    this.setExpiresAt(expiresAt);
  }
}
