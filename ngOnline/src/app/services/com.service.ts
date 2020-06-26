import { Injectable } from '@angular/core';
import { DBMOBPARTS } from '../database/db';

@Injectable({
  providedIn: 'root',
})
export class ComService {
  getMobParts() {
    return DBMOBPARTS;
  }

  constructor() {}
}
