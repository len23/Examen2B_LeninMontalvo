import { Injectable } from '@angular/core';   
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Tienda} from './Tienda'


@Injectable({
  providedIn: 'root'
})
export class TiendasService {

  private tiendasUrl = 'http://localhost:1337/tiendas';

  constructor(private http: HttpClient) { }

  getTiendas (): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.tiendasUrl).pipe(
      catchError(this.handleError('getTiendas', []))
    );  
  }

  getTienda(id: number): Observable<Tienda> {
    const url = `${this.tiendasUrl}/${id}`;
    return this.http.get<Tienda>(url).pipe(
      catchError(this.handleError<Tienda>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
searchTiendas(term: string): Observable<Tienda[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Tienda[]>(`${this.tiendasUrl}/?nombres=${term}`).pipe(
    tap(_ => console.log(`found tiendas matching "${term}"`)),
    catchError(this.handleError<Tienda[]>('searchTiendas', []))
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
