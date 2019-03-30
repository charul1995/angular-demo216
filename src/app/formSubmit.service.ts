import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class FromService {
  data: any = {};
  constructor(private http: HttpClient,
              private auth: AuthService,
              private myRoute: Router) {}

  login (data: any){
    let param = new HttpParams();
    param = param.set('data', JSON.stringify([{"email":data.email,"password":data.password}]));
    param = param.set('method', 'login'); 
    return this.http.post("https://angular.cppatidar.com/angular/webservice/webservice.php",param);
  }

  register (data: any){
    let param = new HttpParams();
    param = param.set('data', JSON.stringify([{"username":data.username,"email":data.email,"password":data.password}]));
    param = param.set('method', 'registration'); 
    return this.http.post("https://angular.cppatidar.com/angular/webservice/webservice.php",param);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {     
  } 

}  