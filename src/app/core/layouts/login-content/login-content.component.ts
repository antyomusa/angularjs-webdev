import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss']
})
export class LoginContentComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    this.router.navigate(["home"]);
  }

}
