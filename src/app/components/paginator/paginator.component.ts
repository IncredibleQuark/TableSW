import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'sl-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

  @Input() totalCount: number;
  @Input() activePage: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  pages: Array<number>;

  constructor() {
    this.pages = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes.totalCount.currentValue > 0) {
        this.pages = new Array(Math.ceil(changes.totalCount.currentValue / 10) || 0);
      }
    }
  }

  changePage(page) {
    if (page !== this.activePage) {
      this.activePage = page;
      this.pageChanged.emit(this.activePage);
    }
  }

  isActive(page) {
    return page === this.activePage;
  }

  isFirst() {
    return this.activePage === 1;
  }

  isLast() {
    return this.activePage === this.pages.length;
  }

}
