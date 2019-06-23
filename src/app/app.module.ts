import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from '@module/products/products.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from '@view/navbar/navbar.component';
import { SidebarComponent } from '@view/sidebar/sidebar.component';
import { SidebarWrapperComponent } from '@view/sidebar/wrapper/wrapper.component';

import { WINDOW_PROVIDERS } from '@core/window.provider';
import { EVENT_END_PROVIDER } from '@core/event-end';

import { ScrollbarDirective } from '@shared/directives/scrollbar/scrollbar.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as iconPack from '@core/fortawesome-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarWrapperComponent,
    ScrollbarDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FontAwesomeModule
  ],
  providers: [
    WINDOW_PROVIDERS,
    EVENT_END_PROVIDER
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor() {
    library.add(iconPack);
  }
}
