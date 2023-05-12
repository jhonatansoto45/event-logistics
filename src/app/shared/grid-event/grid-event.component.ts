import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  AttributeInputFilter,
  ColumnsPrimeNg,
} from '../../interfaces/shared.interface';

@Component({
  selector: 'app-grid-event',
  templateUrl: './grid-event.component.html',
  styleUrls: ['./grid-event.component.scss'],
})
export class GridEventComponent{
  @Input() key: string = 'id';
  @Input() columns: ColumnsPrimeNg[] = [];
  @Input() data: any[] = [];
  /* ATRIBUTOS */
  @Input() paginator: boolean = false;
  @Input() rows: number = 10;
  @Input() filterInput: boolean = false;
  @Input() atrrInputFilter: AttributeInputFilter[] = [];
  @Input() selections: boolean = false;

  @Output() changeChecks: EventEmitter<any> = new EventEmitter<any>();

  selectedRows: any[] = [];


  onChangeCheck(): void {
    this.changeChecks.emit(this.selectedRows);
  }
}
