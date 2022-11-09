import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatGridListModule } from "@angular/material/grid-list";
import { AuthService } from "./auth-service.service";
import { EmployeeDetailsGaurdService } from "./employee-details-gaurd.service";
import { EmployeeInfoComponent } from "./employee-info/employee-info.component";
import { EmployeelistComponent } from "./employeelist/employeelist.component";
import { EmployeeRoutingModule } from "./emplyee-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations: [
        EmployeeInfoComponent,
        EmployeelistComponent,
        LoginComponent,
        
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers:[EmployeeDetailsGaurdService,AuthService],
    bootstrap: [],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Employee{

}