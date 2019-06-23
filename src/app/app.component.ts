import { Component, Inject, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WINDOW } from '@core/window.provider';
import { SidebarComponent } from '@view/sidebar/sidebar.component';
import { EVENT_END, EventEnd, TransitionEvent } from '@core/event-end';
import { NavbarComponent } from '@view/navbar/navbar.component';

@Component({
  selector: 'pl-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  private readonly document: Document;
  private readonly html: HTMLElement;
  private readonly body: HTMLElement;
  private readonly transitionEnd: TransitionEvent;

  @ViewChild(SidebarComponent, { static: false })
  private readonly sidebar: SidebarComponent;

  @ViewChild(NavbarComponent, { static: false })
  private readonly navbar: NavbarComponent;

  constructor(
    @Inject(WINDOW) { document }: Window,
    @Inject(EVENT_END) { transitionEnd }: EventEnd) {
    this.document = document;
    this.html = document.documentElement;
    this.body = document.body;
    this.transitionEnd = transitionEnd;
  }

  ngOnInit() {
    this.html.classList.add('scrollbar-on');
    this.body.classList.add('sidebar-mini');
  }

  ngAfterViewInit() {
    const { toggleElement } = this.navbar;
    const { sidebarElement } = this.sidebar;
    const toggleButtonElement = toggleElement.querySelector('button');
    toggleButtonElement.addEventListener('click', () => {
      this.html.classList.add('nav-open');
      sidebarElement.addEventListener(this.transitionEnd, () => {
        toggleElement.classList.add('toggled');
        const bodyClickElement = this.document.createElement('div');
        bodyClickElement.id = 'bodyClick';
        this.body.append(bodyClickElement);
        const getBodyClickElement = this.getBodyClickElement();
        getBodyClickElement.addEventListener('click', () => {
          this.html.classList.remove('nav-open');
          sidebarElement.addEventListener(this.transitionEnd, () => {
            toggleElement.classList.remove('toggled');
            if (getBodyClickElement) {
              getBodyClickElement.remove();
            }
          }, { once: true });
        }, { once: true });
      }, { once: true });
    }, false);
  }

  private getBodyClickElement(): Element {
    return this.body.querySelector('#bodyClick');
  }
}
