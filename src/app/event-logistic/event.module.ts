import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';

import { EventRoutingModule } from './event-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CrearEventoComponent } from './pages/crear-evento/crear-evento.component';
import { VerEventoComponent } from './pages/ver-evento/ver-evento.component';
import { IndexComponent } from './index/index.component';
import { CardEventComponent } from './components/card-event/card-event.component';
import { SharedModule } from '../shared/shared.module';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PopupUserComponent } from './components/popup-user/popup-user.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CrearEventoComponent,
    VerEventoComponent,
    IndexComponent,
    CardEventComponent,
    FavoritesComponent,
    PopupUserComponent,
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    EventRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventModule {}
