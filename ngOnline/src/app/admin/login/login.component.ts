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
    // var sup = this.authService.checkUserNameAndPassword(uname, pass);
    if (output) {
      this.router.navigate(['/dashboard']);
      alert('in auth service, if');
    } else if (output) {
      this.router.navigate(['/payment']);
      alert('in else if ');
      console.log('in else if');
    } else {
      this.msg = 'Invalid Username or Password';
    }
  }

  // superLogin(uname: string, pass: string) {
  //   var output = this.authService.superLogin(uname, pass);
  //   if (output) {
  //     this.router.navigate(['/payment']);
  //   } else {
  //     this.msg = 'Invalid Username or Password';
  //   }
  // }
}
