import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getExoplanets(): Observable<any> {
    const token: string = this.authService.getToken();
    const headers: HttpHeaders = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.get('/api/exoplanets', {headers});
  }

  public getExoplanet(id: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});
    return this.http.get(`/api/exoplanets/${id}`, {headers});
  }
}
