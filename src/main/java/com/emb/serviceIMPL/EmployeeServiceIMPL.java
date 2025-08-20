package com.emb.serviceIMPL;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.emb.controller.EmployeeController;
import com.emb.dao.EmployeeDao;
import com.emb.entity.Employee;

@Service
public class EmployeeServiceIMPL  implements EmployeeController{
   
	 @Autowired
	EmployeeDao dao;
	 
	@Override
	public ResponseEntity<String> addEmployee(Employee emp) {
		try {
			dao.save(emp);	
			return new ResponseEntity("Employee saved succefully",HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity("failed to save",HttpStatus.BAD_REQUEST);
	}

	@Override
	public ResponseEntity<List<Employee>> employeeList() {
		try {
			 List<Employee> list = dao.findAll();
			return new ResponseEntity(list,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
	}

	@Override
	public ResponseEntity<Employee> getEmployeeById(int id) {
		try {
			Employee employee = dao.findById(id).get();
			
			return new ResponseEntity(employee,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity(null,HttpStatus.BAD_REQUEST);
	}

	@Override
	public ResponseEntity<String> updateEmployee(int id ,Employee emp) {
		try {
			Employee employee = dao.findById(id).get();
			   employee.setEmployeeName(emp.getEmployeeName());
			   employee.setEmail(emp.getEmail());
			   employee.setSalary(emp.getSalary());
			   employee.setPosition(emp.getPosition());
			   employee.setCompany(emp.getCompany());
			 dao.save(employee);
			
			return new ResponseEntity("upadated",HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity("failed to upadate",HttpStatus.BAD_REQUEST);
	}

	@Override
	public ResponseEntity<String> deleteEmployee(int id) {
		
		try { 
			 Employee employee = dao.findById(id).get();
			 
			 dao.delete(employee);
			
			return new ResponseEntity("deleted succesfully",HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity("failed to delete",HttpStatus.BAD_REQUEST);
	}

}
