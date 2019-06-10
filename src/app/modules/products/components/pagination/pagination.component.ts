import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@modules/products/models/product.model';
import { Observable } from 'rxjs';
import { Pagination } from '@modules/products/models/pagination.model';

@Component({
  selector: 'pl-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input()
  set productsTotal(total: number) {
    this.count = total;
  }

  @Output()
  public paginate: EventEmitter<Pagination>;

  private pagesToShow = 3;
  private count = 0;
  public products$: Observable<Product[]>;
  public page = 1;
  public perPage = 12;

  get quantity() {
    return Math.ceil(this.count / this.perPage);
  }

  get getPages() {
    const pages: number[] = [];
    const currentPage = this.page < 1 ? 1 : this.page > this.quantity ?
      this.quantity : this.page;
    pages.push(currentPage);
    let count = 0;
    while (count < this.pagesToShow - 1) {
      if (pages.length < this.pagesToShow) {
        if (this.min(pages) > 1) {
          pages.push(this.min(pages) - 1);
        }
        if (this.max(pages) < this.quantity) {
          pages.push(this.max(pages) + 1);
        }
      }
      count++;
    }
    pages.sort((a, b) => a - b);

    return pages;
  }

  constructor() {
    this.paginate = new EventEmitter();
  }

  ngOnInit() {
    this.pagesUpdate();
  }

  onPage(page: number) {
    if (this.page !== page) {
      this.page = page;
      this.pagesUpdate();
    }
  }

  onPrev() {
    if (this.page > 1) {
      this.page--;
      this.pagesUpdate();
    }
  }

  onNext() {
    if (this.page <= this.quantity) {
      this.page++;
      this.pagesUpdate();
    }
  }

  pagesUpdate() {
    const count = this.page;
    const start = (count - 1) * this.perPage;
    const end = count * this.perPage;
    this.paginate.emit({
      start,
      end,
      max: this.perPage
    });
  }

  private min(pages: number[]): number {
    return Math.min(...pages);
  }

  private max(pages: number[]): number {
    return Math.max(...pages);
  }
}
