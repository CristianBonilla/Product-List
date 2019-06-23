import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'pl-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('toggle', { static: false })
  private readonly toggleElementRef: ElementRef<HTMLElement>;

  toggleElement: HTMLElement;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    const { nativeElement } = this.toggleElementRef;
    this.toggleElement = nativeElement;
  }
}
