import { Injectable } from '@angular/core';
// import { DBMOBPARTS } from '../database/db';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComService {
  constructor(private http: Http) {}
  getMobParts() {
    // return DBMOBPARTS; ---data from db
    return this.http
      .get('./../../assets/API/mobParts.json')
      .pipe(map((res) => res.json().apiData));
  }
}
