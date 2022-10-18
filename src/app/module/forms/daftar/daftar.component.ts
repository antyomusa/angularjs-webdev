import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'app/services/auth/login.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit {

  message = "";

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
        // next
        (response) => {
          alert("success");
          alert(JSON.stringify(response));
        },
        (error) => {

          this.message = error.error.message;

        }
      );
    } else {
      alert('Form Not Valid');
    }

  }

}
