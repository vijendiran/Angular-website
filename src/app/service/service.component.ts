import { Component, OnInit,Input } from '@angular/core';
import{DataService} from '../data.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input('aliasName') myname = "vijendiran"; 

public employees=[];
  constructor(private _employeedetails: DataService) { }

  ngOnInit(): void {
    console.log('component Intialized');
    this.employees=this._employeedetails.getEmployees();
  }

}
