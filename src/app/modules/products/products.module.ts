import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ListComponent } from './components/list/list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ItemComponent } from './components/item/item.component';
import { SliderComponent } from './components/slider/slider.component';
import { PaginationComponent } from './components/pagination/pagination.component';

import { SharingDataService } from './services/sharing-data.service';

import { ProductGroupingPipe } from './pipes/product-grouping.pipe';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight,
  faCartPlus,
  faAngleDoubleLeft,
  faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    ListComponent,
    MenuComponent,
    ItemComponent,
    SliderComponent,
    PaginationComponent,
    ProductGroupingPipe
  ],
  providers: [
    SharingDataService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    MenuComponent,
    SliderComponent
  ]
})
export class ProductsModule {
  constructor() {
    library.add(
      faAngleRight,
      faCartPlus,
      faAngleDoubleLeft,
      faAngleDoubleRight);
  }
}
