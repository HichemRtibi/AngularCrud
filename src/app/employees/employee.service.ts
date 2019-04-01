import {Injectable} from '@angular/core';
import {Employees} from '../models/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployee: Employees[] = [

    {
      'id': 2,
      'name': 'Mary',
      'gender': 'Female',
      'email': 'Mary@yahoo.fr',
      'contactPreference': 'Phone',
      'phoneNumber': '2345978640',
      'dateOfBirth': new Date(),
      'department': '2',
      'isActive': true,
      'photoPath': 'assets/images/mary.png'
    },
    {
      'id': 3,
      'name': 'John',
      'gender': 'Male',
      'email': 'john@yahoo.fr',
      'contactPreference': 'Phone',
      'phoneNumber': '5432978640',
      'dateOfBirth': new Date(),
      'department': '3',
      'isActive': false,
      'photoPath': 'assets/images/john.png'
    },
    {
      'id': 4,
      'name': 'David',
      'gender': 'Female',
      'email': 'David@gmail.com',
      'contactPreference': 'Phone',
      'phoneNumber': '34345',

      'dateOfBirth': new Date(),
      'department': '3',
      'isActive': true,
      'photoPath': 'assets/images/john.png'
    }
  ];

  constructor() {
  }

  getEmployees(){
    return this.listEmployee;

  }
}
