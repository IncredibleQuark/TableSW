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

  pages: number;

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes.totalCount.currentValue > 0) {
        this.pages = Math.ceil(changes.totalCount.currentValue / 10) || 0;
        console.warn(this.pages + ' pages');
      }
      console.warn(changes);
    }
  }

  changePage() {
    this.activePage = 2;
    this.pageChanged.emit(this.activePage);
  }

}
