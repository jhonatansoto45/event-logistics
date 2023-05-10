import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from './primeng/primeng.module';

import { ImagePipe } from './pipe/image.pipe';
import { PopupTemplateComponent } from './popup-template/popup-template.component';
import { GridEventComponent } from './grid-event/grid-event.component';

@NgModule({
  declarations: [ImagePipe, PopupTemplateComponent, GridEventComponent],
  imports: [CommonModule, PrimengModule],
  exports: [ImagePipe, PopupTemplateComponent, GridEventComponent],
})
export class SharedModule {}
