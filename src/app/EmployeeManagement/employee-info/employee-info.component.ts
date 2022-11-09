import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';
import { Employeetype } from '../employeetype';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css'],
})
export class EmployeeInfoComponent implements OnInit {
  private id: number = 0;
  EmployeeDetails: Employeetype[] = [];
  singleEmployeeDetails: Employeetype | undefined;
  show: boolean = false;
  empDetails = localStorage.getItem("list");
  userDetails =  JSON.parse(this.empDetails || '{}');
   EmployeeName:string | undefined;
   PhoneNumber:number | undefined;
  Address:string| undefined;
   EmployeeId:number| undefined;
   teamName:string| undefined;

  constructor(private emp: EmpServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.EmployeeDetails = this.emp.getEmployeelist();
    this.route.queryParams.subscribe((params) => {
      this.id = Number(params['id']);
    });
    console.log(this.EmployeeDetails)
    this.EmployeeDetails.forEach((employee) => {
      if (employee.EmployeeId == this.id) {
        this.singleEmployeeDetails = employee;
      }
    });
    this.show = true;
    console.log(this.singleEmployeeDetails);
    this.EmployeeName = this.singleEmployeeDetails?.EmployeeName;
    this.EmployeeId = this.singleEmployeeDetails?.EmployeeId;
    this.Address = this.singleEmployeeDetails?.Address;
    this.PhoneNumber = this.singleEmployeeDetails?.PhoneNumber;
    this.teamName = this.emp.getTeam(this.singleEmployeeDetails?.teamNumber);
      
  }
}
