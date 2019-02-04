import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {

  constructor(public http: HttpClient) { }

  public getExoplanets(): Observable<any> {
    return this.http.get('/api/exoplanets');
  }
}
