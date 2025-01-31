
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseurl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) {}

  // Add Employee
  addEmployee(employee: Employee): Observable<string> {
    return this.http.post<string>(`${this.baseurl}/save`, employee);
  }

  // Get All Employees
  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseurl}/getAll`);
  }

  // Get Employee By ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseurl}/${id}`);
  }

  // Update Employee
  editEmployee(id: number, employee: Employee): Observable<string> {
    return this.http.put<string>(`${this.baseurl}/${id}`, employee);
  }

  // Delete Employee
  deleteEmployee(id: number): Observable<string> {
    return this.http.delete<string>(`${this.baseurl}/${id}`);
  }
}
