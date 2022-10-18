import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;

  constructor(
    public readonly authService: AuthService
  ) { }

  ngOnInit(): void {

    this.authService.email = "anton@mal.com";
    this.authService.password = "123";

    this.email = this.authService.email;
    this.password = this.authService.password;
  }

  iniFunction(event: any) {
    this.password = event;
  }

  iniFunctionEmail(event: any) {
    this.email = event;
  }
  clear() {
    this.authService.clearLogin();
  }

}
