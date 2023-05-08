import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePipe } from './pipe/image.pipe';
import { PopupTemplateComponent } from './popup-template/popup-template.component';


@NgModule({
  declarations: [ImagePipe, PopupTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [ImagePipe, PopupTemplateComponent]
})
export class SharedModule { }
