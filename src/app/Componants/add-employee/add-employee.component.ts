import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/Shared/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empform= this.fb.group({
    employeeName:['',Validators.required],
    email:['',Validators.required],
    salary:['',Validators.required],
    position:['',Validators.required],
    company:['',Validators.required],

  });


  constructor(private fb:FormBuilder,private service:EmployeeService,private route:Router) { }

  ngOnInit(): void {
  }
  saveEmployee() {
    this.service.addEmployee(this.empform.value).subscribe(
      ()=>this.route.navigate(["/list"])
    )
    
    }

}
