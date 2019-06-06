import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private readonly body: HTMLElement = document.body;

  constructor() { }

  ngOnInit() {
    this.body.classList.add('sidebar-mini');
  }
}
