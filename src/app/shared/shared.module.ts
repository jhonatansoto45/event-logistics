import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng/primeng.module';

import { ImagePipe } from './pipe/image.pipe';
import { GridEventComponent } from './grid-event/grid-event.component';
import { EventAttributeComponent } from './event-attribute/event-attribute.component';

@NgModule({
  declarations: [ImagePipe, GridEventComponent, EventAttributeComponent],
  imports: [CommonModule, PrimengModule],
  exports: [ImagePipe, GridEventComponent, EventAttributeComponent],
})
export class SharedModule {}
