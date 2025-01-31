import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Componants/add-employee/add-employee.component';
import { EmployeeListComponent } from './Componants/employee-list/employee-list.component';
import { EditEmployeeComponent } from './Componants/edit-employee/edit-employee.component';

const routes: Routes = [{
  path:"add",component:AddEmployeeComponent
},
{
  path:"list",component:EmployeeListComponent
},
{
  path:"edit/:id",component:EditEmployeeComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
