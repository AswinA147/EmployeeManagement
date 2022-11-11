import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { EmpServiceService } from '../emp-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IFormDetails } from '../iform-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup({});
  public formFields: IFormDetails[] = [];

  constructor(
    private emp: EmpServiceService,
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<IFormDetails[]>('/assets/FormData.json')
      .subscribe((formFields: IFormDetails[]) => {
        for (const formField of formFields) {
          this.loginForm.addControl(
            formField.name,
            new FormControl('', this.getValidator(formField))
          );
        }
        this.formFields = formFields;
      });
  }
  getValidator(formField: IFormDetails): ValidatorFn[] | null {
    let validationArray: ValidatorFn[] = [];
    for (let validationtype of formField.validation) {
      if (validationtype == 'required')
        validationArray.push(Validators.required);
    }
    return validationArray;
  }

  onSubmit() {
    var id = this.loginForm.get('username')?.value;
    var pass = this.loginForm.get('password')?.value ;

    if (this.emp.ValidateEmployee(Number(id), String(pass))) {
      this.router.navigate(['/employees', id], {
        queryParams: { id },
      });
    } else console.log('Invalid Id or Password');
  }
}
