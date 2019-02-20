import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  public getExoplanets(): Observable<any> {
    return this.http.get('/api/exoplanets');
  }

  public getExoplanet(id: string): Observable<any> {
    return this.http.get(`/api/exoplanets/${id}`);
  }
}
