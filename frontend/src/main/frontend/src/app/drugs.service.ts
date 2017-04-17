import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Drug } from './drug';

@Injectable()
export class DrugsService {

  private drugsUrl = '/api/drugs';

  constructor(private http: Http) { }

  getDrugs(): Promise<Drug[]> {
    return this.http.get(this.drugsUrl)
               .toPromise()
               .then(response => {
                  console.log('got response!:' + response.json());
                  return response.json() as Drug[]
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
