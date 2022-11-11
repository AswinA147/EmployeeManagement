import { Component, OnInit } from '@angular/core';
import { IEmployeeDetails } from '../employeetype';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  template: ` <mat-grid-list cols="3" rowHeight="2:1">
    <div *ngFor="let items of list">
      <mat-grid-tile (click)="show(items.EmployeeId)">
        Employee Name : {{ items.EmployeeName }} <br />
        Employee Phn : {{ items.PhoneNumber }} <br />
        Team : {{ items.teamNumber }}
      </mat-grid-tile>
    </div>
  </mat-grid-list>`,
  styleUrls: ['./employeelist.component.css'],
})
export class EmployeelistComponent implements OnInit {
  user: IEmployeeDetails  = {
    EmployeeId: 0,
    EmployeeName: '',
    teamNumber: 0,
    Password: '',
    Address: '',
    PhoneNumber: 0,
  };;
  list: IEmployeeDetails[] = [];

  constructor(private employee: EmpServiceService, public router: Router) {}

  ngOnInit(): void {
    this.user = this.employee.getUser();
    if (this.user == null) {
      alert('LOGIN Required');
      this.router.navigate(['login']);
    } else this.get();
  }

  get() {
    this.list = this.employee.getEmployeelist();
    console.log(this.list);
    this.list.forEach((element) => {
      element.teamNumber = this.employee.getTeam(Number(element.teamNumber));
    });
  }

  show(id: number) {
    this.router.navigate(['/employees', id], {
      queryParams: { id },
    });
  }
}
