import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '@modules/products/services/product.service';
import { SharingDataService } from '@modules/products/services/sharing-data.service';
import { Product } from '@modules/products/models/product.model';
import { Observable } from 'rxjs';
import { CreateInstance } from '@core/create-instance';
import { ProductItem } from '@modules/products/models/product-item.model';
import { Pagination } from '@modules/products/models/pagination.model';

@Component({
  selector: 'pl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  public products$: Observable<Product[]>;
  public pagination: Pagination;

  get randomStar() {
    return Math.floor(Math.random() * (6 - 1)) + 1;
  }

  constructor(
    productService: ProductService,
    private shraingService: SharingDataService<Product[]>) {
    this.shraingService.updateObservable(
      productService.getProductsAll());
    this.products$ = this.shraingService.dataSource$;
  }

  ngOnInit() { }

  public productItemInstance(product: Product) {
    return CreateInstance.get(ProductItem, {
      product,
      stars: this.randomStar
    });
  }

  public paginate(page: Pagination) {
    this.pagination = page;
  }

  ngOnDestroy() { }
}
