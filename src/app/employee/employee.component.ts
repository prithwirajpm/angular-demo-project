import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empName:string = "Max Miller"
  empImageUrl:string = "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"

  empDesg:string = ""
  empSalary:string=""


  userAdd = ()=>{
    alert("Add Button Clicked!!!")
  }

  getEmpName(event:any){
    console.log(event.target.value)
    this.empName = event.target.value
  }

  userSubmit(userDetails:any){
    console.log(userDetails);
    if(userDetails.value){
      alert(`${userDetails.value} added`)
    }
    else{
      alert("Fill the form")
    }
  }

  empSubmit(){
    if(!this.empDesg || !this.empName || !this.empSalary){
      alert("Please fille the form completely")
    }else{
      alert(`------------Employee Details-----------------
      Employee Name: ${this.empName}
      Employee Desgnation : ${this.empDesg}
      Employee Salary : ${this.empSalary}`)
    }
  }

}
