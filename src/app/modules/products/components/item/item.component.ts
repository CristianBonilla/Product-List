import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '@modules/products/models/product-item.model';
import { Product } from '@modules/products/models/product.model';

@Component({
  selector: 'pl-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input()
  public item: ProductItem;

  get isProductItem() {
    return this.item instanceof ProductItem;
  }

  get isProduct() {
    return this.item.product instanceof Product;
  }

  constructor() { }

  ngOnInit() { }
}
