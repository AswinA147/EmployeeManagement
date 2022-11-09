import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { EmpServiceService } from '../emp-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm = new FormGroup({});
 formFields:any[] = [];

  constructor(private emp: EmpServiceService,private httpClient: HttpClient, private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>("/assets/FormData.json").subscribe((formFields : any)=>{
      for (const formField of formFields){
        this.loginForm.addControl(formField.name,new FormControl('',this.getValidator(formField)));
      }
      this.formFields = formFields;
    })
  }
  getValidator(formField: any): ValidatorFn[] | null {
    let validationArray: ValidatorFn[] = [];
    for(let validationtype of formField.validation){
      if(validationtype == "required")
        validationArray.push(Validators.required);
     
    }
    return validationArray;
  } 

  onSubmit(){
      var id = this.loginForm.get('username')?.value;
      var pass = this.loginForm.get('password')?.value;

      
      
      if(this.emp.ValidateEmployee(id,pass)) {
        
         this.router.navigate(['/employee/employeelist',id],{queryParams:{id}})

      }
      else 
      console.log("Invalid Id or Password");
        
  }

}
