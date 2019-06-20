// import PerfectScrollbar from 'perfect-scrollbar';

// export class UiDesign {
//   private transparent = true;
//   private sidebarMiniActive = false;
//   private isWindows = false;
//   private isiPad = false;
//   private readonly document: Document;
//   private readonly clearTimeout: (handler: number) => void;
//   private readonly setTimeout: (handler: TimerHandler, wait: number) => number;
//   private readonly clearInterval: (handler: number) => void;
//   private readonly setInterval: (handler: TimerHandler, wait: number) => number;
//   private readonly dispatchEvent: (event: Event) => boolean;
//   private mainPanelScrollbar: {
//     element: HTMLElement,
//     scrollbarInstance: PerfectScrollbar
//   };

//   constructor(private window: Window) {
//     const { navigator, document, clearTimeout, setTimeout, clearInterval, setInterval,
//       dispatchEvent } = this.window;
//     this.isWindows = navigator.platform.indexOf('Win') > -1;
//     this.isiPad = navigator.userAgent.match(/iPad/i) != null;
//     this.document = document;
//     this.clearTimeout = clearTimeout;
//     this.setTimeout = setTimeout;
//     this.clearInterval = clearInterval;
//     this.setInterval = setInterval;
//     this.dispatchEvent = dispatchEvent;
//     this.perfectScrollbarEnabled(document.documentElement);
//   }

//   ready() {
//     const bodyElement = this.document.body;
//     if (bodyElement.classList.contains('sidebar-mini')) {
//       this.sidebarMiniActive = true;
//     }
//     if (this.isWindows) {
//       this.perfectScrollbarModalEvent();
//     }
//     const $document = $(this.document);
//     const $navbarColorScroll = $('.navbar[color-on-scroll]');
//     const scrollDistance = parseInt($navbarColorScroll.attr('color-on-scroll'), 10) || 500;
//     this.navbarMenuColor($document, scrollDistance);
//     const $window = $(this.window);
//     $window.on('resize', () => {
//       const $fullScreenMap = $('.full-screen-map');
//       const $bdDocs = $('.bd-docs');
//       if (!($fullScreenMap.length && $bdDocs.length)) {
//         const $navbar = $('.navbar');
//         const isExpanded = $navbar.find('[data-toggle="collapse"]').attr('aria-expanded');
//       }
//     });

//     this.minimizeSidebar();
//   }

//   private minimizeSidebar() {
//     const bodyElement = this.document.body;
//     const $minimizeSidebar = $('#minimizeSidebar');
//     $minimizeSidebar.on('click', () => {
//       if (this.sidebarMiniActive) {
//         bodyElement.classList.remove('sidebar-mini');
//       } else {
//         bodyElement.classList.add('sidebar-mini');
//       }
//       this.sidebarMiniActive = !this.sidebarMiniActive;
//       const simulateWindowResize = this.setInterval(() => {
//         this.dispatchEvent(new Event('resize'));
//       }, 180);
//       this.setTimeout(() => {
//         this.clearInterval(simulateWindowResize);
//       }, 1000);
//     });
//   }

//   private navbarMenuColor($document: JQuery<Document>, scrollDistance: number) {
//     const $fullScreenMap = $('.full-screen-map');
//     const $bdDocs = $('.bd-docs');
//     if (!($fullScreenMap.length && $bdDocs.length)) {
//       const $collapse = $('.collapse');
//       const $navbar = $collapse.closest('.navbar');
//       $collapse.on('show.bs.collapse', () => {
//         $navbar.removeClass('navbar-transparent').addClass('bg-white');
//       }).on('hide.bs.collapse', () => {
//         if ($document.scrollTop() <= scrollDistance) {
//           $navbar.addClass('navbar-transparent').removeClass('bg-white');
//         }
//       });
//     }
//   }

//   private perfectScrollbarModalEvent() {
//     const $modals = $('.modal');
//     $modals.on('show.bs.modal', () => {
//       this.mainPanelScrollbar.scrollbarInstance.destroy();
//     }).on('hidden.bs.modal', () => {
//       const { element } = this.mainPanelScrollbar;
//       this.mainPanelScrollbar.scrollbarInstance = this.perfectScrollbarInstance(element);
//     });
//   }

//   private perfectScrollbarEnabled(htmlElement: HTMLElement) {
//     if (this.isWindows) {
//       htmlElement.classList.add('perfect-scrollbar-on');
//       const bodyElement = this.document.body;
//       const mainPanelElement = bodyElement.querySelector('.main-panel') as HTMLElement;
//       this.mainPanelScrollbar = {
//         element: mainPanelElement,
//         scrollbarInstance: this.perfectScrollbarInstance(mainPanelElement)
//       };
//     } else {
//       htmlElement.classList.add('perfect-scrollbar-off');
//     }
//   }

//   private perfectScrollbarInstance(
//     element: HTMLElement,
//     options?: PerfectScrollbar.Options): PerfectScrollbar {
//     const instance = new PerfectScrollbar(element, options);

//     return instance;
//   }

//   private callFunction(handler: (...args: any[]) => void, wait: number, immediate: boolean) {
//     let timeout: number;
//     return (...args: any[]) => {
//       this.clearTimeout(timeout);
//       timeout = this.setTimeout(() => {
//         timeout = null;
//         if (!immediate) {
//           handler.apply(this, args);
//         }
//       }, wait);
//       if (immediate && !timeout) {
//         handler.apply(this, args);
//       }
//     };
//   }
// }
