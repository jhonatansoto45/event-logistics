import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupComponent } from "./popup-template/popup.component";
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [PopupComponent],
  imports: [CommonModule, SharedModule],
})
export class PopupModule {}
