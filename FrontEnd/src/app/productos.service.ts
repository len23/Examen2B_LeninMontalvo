import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import {Producto} from './Producto'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  private productosUrl = 'http://localhost:1337/productos';

  constructor(private http: HttpClient) { }

   //Comunicación entre componentre mediante servicio
  // Observable string sources
  private productoConfirmadoFuente = new Subject<Producto>();
  private productoEliminadoFuente = new Subject<Producto>();

 
  // Observable string streams
  productoConfirmado$ = this.productoConfirmadoFuente.asObservable();
  productoEliminado$ = this.productoEliminadoFuente.asObservable();

  confirmProducto(producto: Producto) {
    this.productoConfirmadoFuente.next(producto);
  }

  deletedProducto(producto: Producto) {
    this.productoEliminadoFuente.next(producto);
  }

  getProductos (): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl).pipe(
      catchError(this.handleError('getProductos', []))
    );  
  }

  getProducto(id: number): Observable<Producto> {
    const url = `${this.productosUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(
      catchError(this.handleError<Producto>(`getProducto id=${id}`))
    );
  }

  updateProducto (producto: Producto): Observable<any>{
    this.confirmProducto(producto);
    producto.tiendaIdFK=producto.tiendaIdFK.id;
    const url = `${this.productosUrl}/${producto.id}`;
    return this.http.put(url, producto, httpOptions).pipe(
      tap(_ => console.log(`updated producto id=${producto.id}`)),
      catchError(this.handleError<any>('updateProdcuto'),)
    );
   
  }

  updateBorradoProducto (producto: Producto): Observable<any>{
    this.deletedProducto(producto);
    producto.tiendaIdFK=producto.tiendaIdFK.id;
    const url = `${this.productosUrl}/${producto.id}`;
    return this.http.put(url, producto, httpOptions).pipe(
      tap(_ => console.log(`producto eliminado id=${producto.id}`)),
      catchError(this.handleError<any>('updateProdcuto'),)
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
         console.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }


 
}

