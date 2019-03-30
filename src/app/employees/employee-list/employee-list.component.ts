import { Component, OnInit } from '@angular/core';
import {Employees} from '../../models/employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employees[]=[
    {
      "id": 2,
      "name": "Mary",
      "gender": "Female",
      "email":"Mary@yahoo.fr",
      "contactPreference": "Phone",
      "phoneNumber": "2345978640",
      "dateOfBirth": "1979/11/20",
      "department": "2",
      "isActive": true,
      "photoPath": "assets/images/mary.png"
    },
    {
      "id": 3,
      "name": "John",
      "gender": "Male",
      "email":"john@yahoo.fr",
      "contactPreference": "Phone",
      "phoneNumber": "5432978640",
      "dateOfBirth": "1976/3/25",
      "department": "3",
      "isActive": false,
      "photoPath": "assets/images/john.png"
    },
    {
      "id": 4,
      "name": "David",
      "gender": "Female",
      "email":"David@gmail.com",
      "contactPreference": "Phone",
      "phoneNumber": "34345",

      "dateOfBirth": "2018-07-01T08:20:34.000Z",
      "department": "3",
      "isActive": true,
      "photoPath": "assets/images/john.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
