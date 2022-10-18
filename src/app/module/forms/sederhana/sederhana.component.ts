import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sederhana',
  templateUrl: './sederhana.component.html',
  styleUrls: ['./sederhana.component.scss']
})
export class SederhanaComponent implements OnInit {

  displayName: any;
  displayNickname: any;
  displayEmail: any;
  displayJob: any;
  displayBalance: any;

  formGroupSederhana = new FormGroup({
    name: new FormControl(""),
    nickname: new FormControl(""),
    job: new FormControl(""),
    balance: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email])
  });

  constructor() {

    this.formGroupSederhana.controls["name"].setValue("");
    this.formGroupSederhana.controls["nickname"].setValue("");
    this.formGroupSederhana.controls["email"].setValue("");
    this.formGroupSederhana.controls["job"].setValue("");
    this.formGroupSederhana.controls["balance"].setValue("");

    this.displayName = this.formGroupSederhana.controls["name"].value;
    this.displayNickname = this.formGroupSederhana.controls["nickname"].value;
    this.displayEmail = this.formGroupSederhana.controls["email"].value;
    this.displayName = this.formGroupSederhana.controls["job"].value;
    this.displayName = this.formGroupSederhana.controls["balance"].value;

  }

  ngOnInit(): void {
  }

  submitButtonClick() {
    this.displayName = this.formGroupSederhana.controls["name"].value;
    this.displayNickname = this.formGroupSederhana.controls["nickname"].value;
    this.displayEmail = this.formGroupSederhana.controls["email"].value;
    this.displayJob = this.formGroupSederhana.controls["job"].value;
    this.displayBalance = this.formGroupSederhana.controls["balance"].value;
  }

  checkValidation() {

    alert(this.formGroupSederhana.controls["email"].valid);

  }

}
