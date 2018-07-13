import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Producto} from './Producto'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productosUrl = 'http://localhost:1337/productos';


  constructor(private http: HttpClient) { }

  getProductos (): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl).pipe(
      catchError(this.handleError('getProductos', []))
    );  
  }

  getProducto(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(
      catchError(this.handleError<Producto>(`getHero id=${id}`))
    );
  }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result  
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
       /*  this.log(`${operation} failed: ${error.message}`); */
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
