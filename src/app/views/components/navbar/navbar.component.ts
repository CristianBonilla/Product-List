import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .input-group > .form-control {
        height: auto;
      }
    `
  ]
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
