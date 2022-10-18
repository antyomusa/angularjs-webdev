import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string = "";
  password: string = ""

  constructor() { }

  clearLogin() {
    this.email = "";
    this.password = "";
  }
}
