import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { SidebarComponent } from './views/components/sidebar/sidebar.component';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
