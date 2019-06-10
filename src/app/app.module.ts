import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsModule } from './modules/products/products.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { LogoComponent } from './views/components/sidebar/logo/logo.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClipboardList,
  faUserSecret,
  faUserCog,
  faAlignCenter,
  faAlignJustify,
  faBoxOpen,
  faStore,
  faMapMarkedAlt,
  faBlog,
  faShoppingCart,
  faSearch,
  faEllipsisH,
  faHome,
  faPhoneAlt,
  faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faUser,
  faStar,
  faHeart,
  faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

import { WINDOW_PROVIDERS } from '@core/window.provider';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FontAwesomeModule
  ],
  providers: [
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(
      faClipboardList,
      faUser,
      faUserSecret,
      faUserCog,
      faAlignCenter,
      faAlignJustify,
      faBoxOpen,
      faStore,
      faStar,
      faMapMarkedAlt,
      faBlog,
      faShoppingCart,
      faSearch,
      faHeart,
      faEllipsisH,
      faHome,
      faPhoneAlt,
      faQuestionCircle,
      faHandHoldingHeart
    );
  }
}
