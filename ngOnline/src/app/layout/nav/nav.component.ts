import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent implements OnInit {
  isLogin() {
    if (localStorage.getItem('username') != null) return true;
    return false;
  }
  logout() {
    localStorage.removeItem('username');
  }
  constructor() {}

  ngOnInit(): void {}
}
