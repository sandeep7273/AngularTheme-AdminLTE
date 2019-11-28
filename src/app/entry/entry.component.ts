import { Component, OnInit } from '@angular/core';
import { Employee } from '../user.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  EmployeeModel : Employee = new Employee();
    constructor( private service : DataService, private router: Router) { }
  
    ngOnInit() {
      document.body.className ="skin-blue sidebar-mini";
    }
    addEmployee() {
      // this.formService.addUser(this.UserModel);
      this.service.addRecord(this.EmployeeModel)
      this.EmployeeModel = new Employee();
      this.router.navigate(['/user'])
      
    }
   
  
}
