import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name = "";
  age = 0;
  job = "";
  text: any;

  constructor(
    public readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {

    this.profileService.name = "Anton";
    this.profileService.age = 22;
    this.profileService.job = "Junior programmer"

    this.name = this.profileService.name;
    this.age = this.profileService.age;
    this.job = this.profileService.job;

  }

  iniFunction(event: any) {
    this.text = event;
  }

  clear() {
    this.profileService.clearProfile();
  }

  /*setToTextParent(text: string) {
    this.text = text;
  }*/

}
