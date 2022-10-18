import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'app/services/auth/login.service';
import { ProfileService } from 'app/services/profile/profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  // displayName: any;
  // displayEmail: any;
  // displayBirthdate: any;
  // displayAddress: any;

  // formGroupSimple = new FormGroup({
  //   name: new FormControl(""),
  //   birthdate: new FormControl(""),
  //   address: new FormControl(""),
  //   email: new FormControl("", [Validators.required, Validators.email])
  // });

  message = "";

  formGroupSimple = new FormGroup({
    username: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    birthdate: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
  });

  constructor(
    private readonly loginService: LoginService,
    private readonly profileService: ProfileService,
  ) {

    // this.formGroupSimple.controls["name"].setValue("");
    // this.formGroupSimple.controls["email"].setValue("");
    // this.formGroupSimple.controls["birthdate"].setValue("");
    // this.formGroupSimple.controls["address"].setValue("");

    // this.displayName = this.formGroupSimple.controls["name"].value;
    // this.displayEmail = this.formGroupSimple.controls["email"].value;
    // this.displayBirthdate = this.formGroupSimple.controls["birthdate"].value;
    // this.displayAddress = this.formGroupSimple.controls["address"].value;

  }

  ngOnInit(): void {
  }

  submitLogin() {

    if (this.formGroupSimple.valid) {
      this.loginService.postLogin(this.formGroupSimple.value).subscribe(
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

  inputProfile() {

    if (this.formGroupSimple.valid) {
      this.profileService.updateProfile(this.formGroupSimple.value).subscribe(
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

  inputProfil() {

    if (this.formGroupSimple.valid) {
      this.profileService.getProfile(this.formGroupSimple.value).subscribe(
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

  // submitButtonClick() {
  //   this.displayName = this.formGroupSimple.controls["name"].value;
  //   this.displayEmail = this.formGroupSimple.controls["email"].value;
  //   this.displayBirthdate = this.formGroupSimple.controls["birthdate"].value;
  //   this.displayAddress = this.formGroupSimple.controls["address"].value;
  // }

  // checkValidation() {

  //   alert(this.formGroupSimple.controls["email"].valid);

  // }
}
