import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { EmpServiceService } from './emp-service.service';
import { IEmployeeDetails } from './employeetype';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsGaurdService implements CanActivate {
  constructor(
    private _employeeService: EmpServiceService,
    private _router: Router
  ) {}

  currentUser: IEmployeeDetails = {
    EmployeeId: 0,
    EmployeeName: '',
    teamNumber: 0,
    Password: '',
    Address: '',
    PhoneNumber: 0,
  };
  id: number = 0;
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.currentUser = this._employeeService.getUser();
    this.id = Number(route.paramMap.get('id'));
    if (
      this.currentUser?.teamNumber == 7 ||
      this.currentUser?.teamNumber == 8 ||
      this.currentUser?.EmployeeId == this.id
    ) {
      return true;
    } else {
      this._router.navigate(['/employee/employeelist']);
      alert('Access Denied');
      return false;
    }
  }
}
