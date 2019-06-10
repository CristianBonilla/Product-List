import { Component, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  private mainPanelScrollbar: PerfectScrollbar;

  @ViewChild('mainPanel', { static: false })
  public mainPanelRef: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const { nativeElement } = this.mainPanelRef;
    this.mainPanelScrollbar = new PerfectScrollbar(nativeElement, { wheelSpeed: 1 });
    this.mainPanelScrollbar.update();
  }
}
