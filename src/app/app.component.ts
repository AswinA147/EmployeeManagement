import { Component } from '@angular/core';
import { EmpServiceService } from './EmployeeManagement/emp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeemanagement';
  public loggedIn:boolean=false;
  constructor(private emp:EmpServiceService){
    
  }
  ngOnInit(){
    this.emp.isLoggedIn.subscribe((value)=>{
      this.loggedIn = value;
      
    })
  }
  back(){
    this.loggedIn = false;
    localStorage.removeItem("User");
  }
}
