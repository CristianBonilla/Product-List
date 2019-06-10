import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';
import { Pagination } from '../models/pagination.model';

@Pipe({
  name: 'productGrouping'
})
export class ProductGroupingPipe implements PipeTransform {
  transform(value: Product[], { start, end }: Pagination): Product[][] {
    if (value === null) {
      return [];
    }
    const products = value.slice(start, end);
    const group: Product[][] = [];
    let count = 0;
    while (count < products.length) {
      if (count % 4 === 0) {
        group.push([]);
      }
      group[group.length - 1].push(products[count++]);
    }

    return group;
  }
}
