import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/Shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

Employee: any[]=[];

  constructor(private service:EmployeeService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAllEmployee().subscribe(
    (data)=>{

    this.Employee=data;
      this.route.navigate(["/list"]);
    }
   
    )
   
  }
  delete(id: number) {
   this.service.deleteEmployee(id).subscribe(
    ()=>{
      alert("emploeyee deleted succesfully")
      this.route.navigate(['/list'])
    }
   )
    }

}
