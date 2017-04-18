import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUserById(id: number): Observable<any> {
    return this.http.get(BASE_URL + '/users/' + id)
      .map(res => res.json());
  }
}
