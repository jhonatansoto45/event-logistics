import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { CardEventComponent } from './card-event/card-event.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MenuComponent } from './menu/menu.component';
import { PopupUserComponent } from './popup-user/popup-user.component';

@NgModule({
  declarations: [
    CardEventComponent,
    FavoritesComponent,
    MenuComponent,
    PopupUserComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule],
  exports: [
    CardEventComponent,
    FavoritesComponent,
    MenuComponent,
    PopupUserComponent,
  ],
})
export class ComponentsModule {}
