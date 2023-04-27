import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventRoutingModule } from './event-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CrearEventoComponent } from './pages/crear-evento/crear-evento.component';
import { VerEventoComponent } from './pages/ver-evento/ver-evento.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CrearEventoComponent,
    VerEventoComponent,
    IndexComponent,
  ],
  imports: [CommonModule, EventRoutingModule, RouterModule],
})
export class EventModule {}
