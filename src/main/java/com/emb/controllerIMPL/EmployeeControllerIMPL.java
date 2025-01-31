

package com.emb.controllerIMPL;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.emb.controller.EmployeeController;
import com.emb.entity.Employee;
import com.emb.serviceIMPL.EmployeeServiceIMPL;

@RestController
@CrossOrigin(origins = "http://localhost:4200") 
@RequestMapping("/employee")
public class EmployeeControllerIMPL implements EmployeeController {
    
    @Autowired
    private EmployeeServiceIMPL service;

    // Save Employee
    @PostMapping("/save") 
    @Override
    public ResponseEntity<String> addEmployee(@RequestBody Employee emp) {
        return service.addEmployee(emp);
    }

    // Get All Employees
    @GetMapping("/getAll")
    @Override
    public ResponseEntity<List<Employee>> employeeList() {
        return service.employeeList();
    }

    // Get Employee By ID (Use @PathVariable instead of @RequestParam)
    @GetMapping("/{id}")
    @Override
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        return service.getEmployeeById(id);
    }

    // Update Employee (Use @PathVariable instead of @RequestParam)
    @PutMapping("/{id}")
    @Override
    public ResponseEntity<String> updateEmployee(@PathVariable int id, @RequestBody Employee emp) {
        return service.updateEmployee(id, emp);
    }

    // Delete Employee (Use @PathVariable instead of @RequestParam)
    @DeleteMapping("/{id}")
    @Override
    public ResponseEntity<String> deleteEmployee(@PathVariable int id) {
        return service.deleteEmployee(id);
    }

}
