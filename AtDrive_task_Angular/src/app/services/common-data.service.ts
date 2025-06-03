import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  public selectedProduct: Product | null = null;

  constructor() { }
}
