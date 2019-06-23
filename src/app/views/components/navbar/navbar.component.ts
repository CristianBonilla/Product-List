import { Component, OnInit, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { WINDOW } from '@core/window.provider';
import { EVENT_END, EventEnd, TransitionEvent } from '@core/event-end';

@Component({
  selector: 'pl-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, AfterViewInit {
  private readonly document: Document;
  private readonly html: HTMLElement;
  private readonly body: HTMLElement;
  private readonly setTimeout: (handler: TimerHandler, wait: number) => void;
  private readonly transitionEnd: TransitionEvent;
  private navbarMenuVisible = false;

  @ViewChild('toggle', { static: false })
  private readonly toggleElementRef: ElementRef<HTMLElement>;

  constructor(
    @Inject(WINDOW) { document, setTimeout }: Window,
    @Inject(EVENT_END) { transitionEnd }: EventEnd) {
    this.document = document;
    this.html = document.documentElement;
    this.body = document.body;
    this.setTimeout = setTimeout;
    this.transitionEnd = transitionEnd;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    const { nativeElement } = this.toggleElementRef;
    nativeElement.addEventListener('click', () => {
      if (this.navbarMenuVisible) {
        this.removeBodyClickElement(nativeElement);
      } else {
        this.setTimeout(() => {
          nativeElement.classList.add('toggled');
        }, 580);
        const bodyClickElement = this.document.createElement('div');
        bodyClickElement.id = 'bodyClick';
        this.body.append(bodyClickElement);
        const bodyClick = this.getBodyClickElement();
        bodyClick.addEventListener('click', () => {
          this.removeBodyClickElement(nativeElement);
        }, false);
      }
      this.html.classList.add('nav-open');
      this.navbarMenuVisible = true;
    }, false);
  }

  private removeBodyClickElement(toggleElement: HTMLElement) {
    this.html.classList.remove('nav-open');
    this.navbarMenuVisible = false;
    this.setTimeout(() => {
      toggleElement.classList.remove('toggled');
      const bodyClickElement = this.getBodyClickElement();
      if (bodyClickElement) {
        bodyClickElement.remove();
      }
    }, 550);
  }

  private getBodyClickElement(): Element {
    return this.body.querySelector('#bodyClick');
  }
}
