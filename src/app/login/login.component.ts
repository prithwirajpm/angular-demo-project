import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=""
  password:string=""
  constructor(private loginRouter:Router,private ds:DataService){}
  login(){
    if(this.email && this.password){
      this.ds.email = this.email
      this.ds.pswd = this.password
      this.loginRouter.navigateByUrl('dashboard')
    }else{
      alert("plese Fill the Form")
    }
   
  }
}

