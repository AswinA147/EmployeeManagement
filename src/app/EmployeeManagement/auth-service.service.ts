import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { EmpServiceService } from './emp-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private route:Router,private emp:EmpServiceService) { }
 
  
  canActivate() {
    var user = this.emp.getUser();
    
    if(JSON.stringify(user) == '{}'){
      this.route.navigate(["employee/login"]);
      return false;
    }    
    else{
      
      return true;    
    }
  }
}
