import { NgModule } from '@angular/core';

import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';


@NgModule({
  exports: [DividerModule,TableModule],
})
export class PrimengModule {}
