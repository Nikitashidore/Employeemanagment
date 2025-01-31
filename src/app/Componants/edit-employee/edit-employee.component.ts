import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/Shared/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  empid:number=0;
  empform= this.fb.group({
    employeeName:['',Validators.required],
    email:['',Validators.required],
    salary:['',Validators.required],
    position:['',Validators.required],
    company:['',Validators.required],

  });


  constructor(private service:EmployeeService,private fb:FormBuilder,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.empid=Number( this.activeroute.snapshot.paramMap.get('id'));
    
    this.service.getEmployeeById(this.empid).subscribe(
      (employee)=>{
        if(employee){
          this.empform.setValue({
            employeeName:employee.employeeName,
            email:employee.email,
            salary:employee.salary,
            position:employee.position,
            company:employee.company

          });
        }
      });

  }
  // updateEmployee() {
  //   if (this.empform.value) {
  //     const updatedEmployee = {
  //       id: this.empid,
  //       employeeName: this.empform.value.employeeName,
  //       email: this.empform.value.email,
  //       salary: this.empform.value.salary,
  //       position: this.empform.value.position,
  //       company: this.empform.value.company
  //     };
  
  //     this.service.editEmployee(this.empid, this.empform.value).subscribe(
  //       ()=>this.route.navigate(["/list"])
  //     );
  //   }
 // }
 updateEmployee(){
  this.activeroute.paramMap.subscribe((param)=>{
         const id= Number(param.get('id'));
         const data=this.empform.value
         alert(data)
         this.service.editEmployee(id,data).subscribe((ids)=>{
         
          alert("Data Was Updated succssefully!!")
        
           this.route.navigateByUrl('/list')
         })
    })
  }
}

