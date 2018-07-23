import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import {Producto} from './Producto'
import {Producto1} from './Producto1'
import { Tienda } from './Tienda';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
     
    );
   
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
