package com.emb.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.emb.entity.Employee;

public interface EmployeeService {
	
	public ResponseEntity<String>  addEmployee(Employee emp);
	public ResponseEntity<List<Employee>> employeeList();
	public ResponseEntity<Employee> getEmployeeById(int id);
	public ResponseEntity<String>  updateEmployee(int id ,Employee emp);
	public ResponseEntity<String> deleteEmployee(int id);

}
