import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductsService {

  private productsUrl = '/api/products';

  constructor(private http: Http) { }

  getProducts(sourceName: string): Promise<Product[]> {
    if (!sourceName) {
      return null;
    }
    return this.http.get(this.productsUrl + '?sourceName=' + sourceName)
               .toPromise()
               .then(response => {
                  console.log('got response!:' + response.json());
                  return response.json() as Product[]
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
