import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { CardEventComponent } from './card-event/card-event.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MenuComponent } from './menu/menu.component';
import { PopupUserComponent } from './popup-user/popup-user.component';
import { SliderComponent } from './slider/slider.component';
import { PrimengModule } from '../../shared/primeng/primeng.module';

@NgModule({
  declarations: [
    CardEventComponent,
    FavoritesComponent,
    MenuComponent,
    PopupUserComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    PrimengModule,
  ],
  exports: [
    CardEventComponent,
    FavoritesComponent,
    MenuComponent,
    PopupUserComponent,
    SliderComponent,
  ],
})
export class ComponentsModule {}
