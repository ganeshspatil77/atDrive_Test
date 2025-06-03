import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  private api = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  get(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  create(data: Product): Observable<Product> {
    return this.http.post<Product>(this.api, data);
  }

  update(id: string, data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

   getRates(base: string) {
    return this.http.get(`http://localhost:3000/api/currency/${base}`);
  }
}
