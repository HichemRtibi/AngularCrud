import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Departement} from '../../models/departement';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {Employees} from '../../models/employees';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  colorTheme = 'theme-green';
  photoPreview: boolean = false;

  bsConfig: Partial<BsDatepickerConfig>;

  employee: Employees =
    {
      id: null,
      name: null,
      gender: null,
      email: null,
      phoneNumber: null,
      contactPreference: null,
      dateOfBirth: null,
      department: null,
      isActive: null,
      photoPath: null,
    };


  departments: Departement[] =
    [{'id': 1, 'name': 'HR'},
      {'id': 2, 'name': 'IT'},
      {'id': 3, 'name': 'payroll'},
      {'id': 4, 'name': 'Admin'}];

  constructor() {
    this.bsConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', showWeekNumbers: false
      , minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }

  togglePreviewPhoto() {
    this.photoPreview = !this.photoPreview;
  }

  saveEmployee(employee:Employees): void {
    console.log(employee);

  }
}
