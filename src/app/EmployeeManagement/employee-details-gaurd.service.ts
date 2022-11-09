import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmpServiceService } from './emp-service.service';
import { Employeetype } from './employeetype';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGaurdService implements CanActivate {
  
  constructor(private _employeeService: EmpServiceService,private _router:Router) { }
  
  currentUser: Employeetype| undefined;
  id:any;
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  this.currentUser = this._employeeService.getUser();
  this.id = route.paramMap.get('id');
  if(this.currentUser?.teamNumber == 7||this.currentUser?.teamNumber == 8 || this.currentUser?.EmployeeId==this.id){
      return true;
  }
  else{
    this._router.navigate(["/employee/employeelist"]);
    alert('Access Denied');
    return false;
  }


}}

