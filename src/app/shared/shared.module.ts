import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng/primeng.module';

import { ImagePipe } from './pipe/image.pipe';
import { GridEventComponent } from './grid-event/grid-event.component';

@NgModule({
  declarations: [ImagePipe, GridEventComponent],
  imports: [CommonModule, PrimengModule],
  exports: [ImagePipe, GridEventComponent],
})
export class SharedModule {}
