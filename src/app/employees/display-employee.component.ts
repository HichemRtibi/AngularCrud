import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employees} from '../models/employees';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input()
  employee:Employees;

  @Output()
  notify:EventEmitter<string>=new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }
  handleClick(){
    this.notify.emit(this.employee.name);

  }

}
