import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {



uname=""
psw=""
errorMsg=""

  constructor(private auth: AuthService, private router: Router){

  }

login(){
  if(this.uname.trim().length==0){
    this.errorMsg="Username is required"
  }
  else if(this.psw.trim().length==0){
    this.errorMsg="Password is required"
  }
  else{
    this.errorMsg=""
    let res = this.auth.login(this.uname,this.psw)
    if(res==200){
      this.router.navigate(['home'])
    }
    if(res==403){
      this.errorMsg="Incorrect Username or Password"
    }
  }
}
}
