import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  AttributeInputFilter,
  ColumnsPrimeNg,
} from '../../interfaces/shared.interface';

@Component({
  selector: 'app-grid-event',
  templateUrl: './grid-event.component.html',
  styleUrls: ['./grid-event.component.scss'],
})
export class GridEventComponent implements OnInit {
  @Input() key: string = 'id';
  @Input() columns: ColumnsPrimeNg[] = [];
  @Input() data: any[] = [];
  /* ATRIBUTOS */
  @Input() paginator: boolean = false;
  @Input() rows: number = 10;
  @Input() filterInput: boolean = false;
  @Input() atrrInputFilter: AttributeInputFilter[] = [];
  @Input() selections: boolean = false;

  @Output() onChangeChecks: EventEmitter<any> = new EventEmitter<any>();

  selectedRows: any[] = [];

  ngOnInit(): void {
    // this.selectedRows = [];
  }

  onChangeCheck(): void {
    this.onChangeChecks.emit(this.selectedRows);
  }
}
