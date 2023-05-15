import { NgModule } from '@angular/core';

import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  exports: [DividerModule, TableModule, TimelineModule],
})
export class PrimengModule {}
