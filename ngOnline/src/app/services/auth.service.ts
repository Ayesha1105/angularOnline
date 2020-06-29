import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  checkUserNameAndPassword(uname: string, pass: string) {
    if (uname == 'admin' && pass == 'admin') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }
}
