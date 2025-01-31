package com.emb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.emb.entity.Employee;

@SpringBootApplication
public class EmployeeManagementBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementBackendApplication.class, args);
		System.out.println("application started");
		
		
	}
	
	

}
