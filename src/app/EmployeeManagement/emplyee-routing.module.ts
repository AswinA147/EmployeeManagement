import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EmployeeInfoComponent } from "./employee-info/employee-info.component";
import { EmployeelistComponent } from "./employeelist/employeelist.component";
import { EmployeeDetailsGaurdService } from "./employee-details-gaurd.service";
import { AuthService } from "./auth-service.service";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        
        
    },
    {
        path: 'employees',
        component: EmployeelistComponent,

        
    },
    {
        path:'employees/:id',
        component:EmployeeInfoComponent,
        canActivate: [AuthService,EmployeeDetailsGaurdService]    
    }
        
    
    
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class EmployeeRoutingModule { 

    
  }