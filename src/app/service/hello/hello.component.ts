import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>
      hello works!
    </p>
  `,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
