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
    } else if (uname == 'super' && pass == 'super') {
      localStorage.setItem('username', 'super');
      return true;
    } else {
      return false;
    }
  }

  // superLogin(uname: string, pass: string) {
  //   if (uname == 'super' && pass == 'super') {
  //     localStorage.setItem('username', 'super');
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
