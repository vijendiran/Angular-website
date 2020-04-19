import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1,"name":"vijay","age":25},
      {"id":2,"name":"andrew","age":25},
      {"id":3,"name":"ram","age":25},
      {"id":4,"name":"dinesh","age":25},
      {"id":1,"name":"aravindh","age":25}
    ];
  }
}
