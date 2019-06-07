import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ProductsComponent } from './pages/products/products.component';

@NgModule({
  declarations: [ListComponent, ProductsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
