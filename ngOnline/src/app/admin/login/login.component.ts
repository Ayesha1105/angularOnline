import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  msg;
  ngOnInit(): void {}

  check(uname: string, pass: string) {
    var output = this.authService.checkUserNameAndPassword(uname, pass);
    if (output == true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.msg = 'Invalid Username or Password';
    }
  }
}
