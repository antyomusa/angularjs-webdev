import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroupLogin = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  constructor(
    private readonly loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  submitLogin() {
    if (this.formGroupLogin.valid) {
      this.loginService.postLogin(this.formGroupLogin.value).subscribe(
        (response) => {
          alert(JSON.stringify(response));
        },
        (error) => {
          alert(JSON.stringify(error));
        }
      )
    } else {
      alert('form not valid');
    }
  }

}
