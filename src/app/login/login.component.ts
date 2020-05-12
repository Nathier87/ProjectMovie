import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  constructor( private readonly loginservice: LoginService) { }

  public get loggedIn(): boolean{
    return this.loginservice.loggedIn;
  }
  public login(): void{
    this.loginservice.login();
  }
  public logout(): void{
    this.loginservice.logout();
  }



}
