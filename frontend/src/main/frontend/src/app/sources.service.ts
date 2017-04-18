import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Source} from './source';

@Injectable()
export class SourcesService {

  private productsUrl = '/api/sources';

  constructor(private http: Http) {
  }

  getSources(): Promise<Source[]> {
    return this.http.get(this.productsUrl)
      .toPromise()
      .then(response => {
        return response.json() as Source[]
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
