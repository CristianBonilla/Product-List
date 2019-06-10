import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { environment } from '@env/environment';
import { CreateInstance } from '@core/create-instance';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly httpHeaderOptions: HttpHeaders;
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = environment.urlApi;
    this.httpHeaderOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  public getProductsAll(): Observable<Product[]> {
    const products = this.http.get<Product[]>(this.url, {
      responseType: 'json',
      ...this.httpHeaderOptions
    }).pipe(
      map(p => this.productInstance(p)),
      catchError(this.handleError)
    );

    return products;
  }

  private productInstance(products: Product[]): Product[] {
    return products.map(p => CreateInstance.get(Product, p));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error: ', error.error.message);
    } else {
      console.error(
        `El estado backend devuelve: ${ error.status }`,
        `error: ${ error.error }`);
    }

    return throwError('Algo malo sucedio; Por favor, inténtelo de nuevo más tarde.');
  }
}
