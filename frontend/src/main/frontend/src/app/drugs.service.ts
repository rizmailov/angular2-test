import { Injectable } from '@angular/core';
import { DRUGS } from './mock-drugs'
import { Drug } from './drug'

@Injectable()
export class DrugsService {

  constructor() { }

  getDrugs(): Promise<Drug[]> {
    return Promise.resolve(DRUGS);
  }

}
