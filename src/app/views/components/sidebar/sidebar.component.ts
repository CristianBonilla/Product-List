import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'pl-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sidebar', { static: false })
  private readonly sidebarElementRef: ElementRef<HTMLElement>;

  sidebarElement: HTMLElement;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const { nativeElement } = this.sidebarElementRef;
    this.sidebarElement = nativeElement;
  }
}
