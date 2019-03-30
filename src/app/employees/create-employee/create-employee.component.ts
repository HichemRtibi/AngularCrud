import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Departement} from '../../models/departement';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  departements: Departement[] =
    [{'id': 1, 'name': 'HR'},
      {'id': 2, 'name': 'IT'},
      {'id': 3, 'name': 'payroll'},
      {'id': 4, 'name': 'Admin'}];

  constructor() {
  }

  ngOnInit() {
  }

  saveEmployee(em: NgForm): void {
    console.log(em.value);

  }
}
