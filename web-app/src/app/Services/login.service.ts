import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatus = 0; 
  constructor() { }

  setLoginStatus(status: number) {
    this.loginStatus = status;
  }
}
