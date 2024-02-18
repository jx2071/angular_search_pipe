import {Component} from '@angular/core';
import {User} from "./type/user.type";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dept: 'Finance',
      salary: 5000,
      doj: new Date('2015-12-11'),
    },
    {
      firstName: 'Amy',
      lastName: 'Watson',
      dept: 'HR',
      salary: 8000,
      doj: new Date('2013-07-23'),
    },
    {
      firstName: 'Shrishti',
      lastName: 'Sharma',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2019-10-20'),
    }
    ,
    {
      firstName: 'Alex',
      lastName: 'White',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2019-10-20'),
    }
    ,
    {
      firstName: 'Blue',
      lastName: 'Orange',
      dept: 'IT',
      salary: 10000,
      doj: new Date('2019-10-20'),
    }
    ,
    {
      firstName: 'Brown',
      lastName: 'Purple',
      dept: 'Fiance',
      salary: 10000,
      doj: new Date('2019-10-20'),
    }
    ,
    {
      firstName: 'MMM',
      lastName: 'SDW',
      dept: 'HR',
      salary: 10000,
      doj: new Date('2019-10-20'),
    }
  ];

  searchName:string="";

  handleValueChange(value:string){
    this.searchName = value;
  }

}


