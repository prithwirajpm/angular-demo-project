import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  email:string=""
  password:string=""
  userDetails:any = [
    {uname:'max',age:34},
    {uname:'mihir',age:31},
    {uname:'manual',age:28},
    {uname:'mahira',age:29}
  ]
  constructor(private ds:DataService){
    this.email = this.ds.email
    this.password = this.ds.pswd
  }

}
