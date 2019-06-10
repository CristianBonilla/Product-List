import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { WINDOW } from '@core/window.provider';

@Component({
  selector: 'pl-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, AfterViewInit {
  private readonly body: HTMLElement;
  private sidebarWrapperScrollbar: PerfectScrollbar;

  @ViewChild('sidebarWrapper', { static: false })
  public sidebarWrapperRef: ElementRef<HTMLElement>;

  constructor(@Inject(WINDOW) private window: Window) {
    const { document } = this.window;
    this.body = document.body;
  }

  ngOnInit() {
    this.body.classList.add('sidebar-mini');
  }

  ngAfterViewInit() {
    const { nativeElement } = this.sidebarWrapperRef;
    this.sidebarWrapperScrollbar = new PerfectScrollbar(nativeElement, {
      wheelSpeed: 1,
      suppressScrollX: true
    });
    this.update(nativeElement);
  }

  private update(sidebarWrapper: HTMLElement) {
    const getAllCollapses = sidebarWrapper.querySelectorAll('.collapse');
    const collapses = Array.from(getAllCollapses);
    collapses.forEach(c => {
      const $this = $(c);
      $this.on('show.bs.collapse', () => {
        collapses.filter(s => s.classList.contains('show'))
          .forEach(h => $(h).collapse('hide'));
      });
      let interval: NodeJS.Timer;
      $this.on('show.bs.collapse hide.bs.collapse', () => {
        interval = setInterval(() =>
        this.sidebarWrapperScrollbar.update(), 10);
      }).on('shown.bs.collapse hidden.bs.collapse', () =>
        clearInterval(interval));
    });

    // Se expande para mostrar la única funcionalidad activada [Tienda]
    const store = $(collapses[1]);
    store.collapse('show');
  }
}
