import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEmployeeDetails } from './employeetype';
@Injectable({
  providedIn: 'root'

  
})

export class EmpServiceService {

  teamName: string[] = [
    "Engineering",
    "Implementation",
    "Product",
    "Support",
     "TOPS",
    "ITSupport",
    "HR",
    "Admin"]
   
   getTeam(teamId: number):string{      
       return(this.teamName[Number(teamId)-1]);
   }
 
  

 private listofemployee : IEmployeeDetails[] =[
    {EmployeeName: "AAAA",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:111,teamNumber:1},
    {EmployeeName: "BBBB",PhoneNumber: 7894561320,Address:"abc",Password:"abc231",EmployeeId:112,teamNumber:2},
    {EmployeeName: "CCCC",PhoneNumber: 7894561320,Address:"abc",Password:"xdx231",EmployeeId:113,teamNumber:3},
    {EmployeeName: "DDDD",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:114,teamNumber:4},
    {EmployeeName: "EEEE",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:115,teamNumber:5},
    {EmployeeName: "FFFF",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:116,teamNumber:6},
    {EmployeeName: "GGGG",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:117,teamNumber:7},
    {EmployeeName: "HHHH",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:118,teamNumber:8},
    {EmployeeName: "IIII",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:119,teamNumber:1},
    {EmployeeName: "JJJJ",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:120,teamNumber:2},
    {EmployeeName: "KKKK",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:121,teamNumber:3},
    {EmployeeName: "LLLL",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:122,teamNumber:4},
    {EmployeeName: "MMMM",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:123,teamNumber:5},
    {EmployeeName: "NNNN",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:124,teamNumber:6},
    {EmployeeName: "OOOO",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:125,teamNumber:7},
    {EmployeeName: "PPPP",PhoneNumber: 7894561320,Address:"abc",Password:"xyz231",EmployeeId:126,teamNumber:8},
  ]
  
  
  private _loginSubject$ = new BehaviorSubject(false);
  public isLoggedIn = this._loginSubject$.asObservable();
 

  constructor() {
    localStorage.setItem("list",JSON.stringify(this.listofemployee))
  }

  getUser(){
    return JSON.parse(localStorage.getItem('User')||'{}')
  }

  getEmployeelist(){
      var listofemp = localStorage.getItem("list");
      return JSON.parse(listofemp || '{}');
  }

  ValidateEmployee(id:any,pass:any): boolean{
    let flag=0;    
    
    this.listofemployee.forEach(element => {
      if(id==element.EmployeeId && pass==element.Password) {
        flag++; 
        localStorage.setItem("User",JSON.stringify(element))
      }
    });
    if(flag==0){
      this._loginSubject$.next(false);
      return false;
    }
    else{
      this._loginSubject$.next(true)
      return true; 
    }    
  }
  logAuth(){
    var user = JSON.parse(localStorage.getItem("User") || '{}')
    if(user !=null){
        return true;
    }
    else  
    return false;    
  }
}
