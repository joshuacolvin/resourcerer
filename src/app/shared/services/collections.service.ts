import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000/collections/';

@Injectable()
export class CollectionsService {

  constructor(private http: Http) { }

  getCollections(): Observable<Array<any>> {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  getCollectionById(id: number): Observable<any> {
    return this.http.get(BASE_URL + '/' + id)
      .map(res => res.json());
  }
}
