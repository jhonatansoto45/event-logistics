import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EventRoutingModule } from './event-routing.module';
import { PrimengModule } from '../shared/primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { CrearEventoComponent } from './pages/crear-evento/crear-evento.component';
import { VerEventoComponent } from './pages/ver-evento/ver-evento.component';
import { IndexComponent } from './index/index.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    CrearEventoComponent,
    VerEventoComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    EventRoutingModule,
    PrimengModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventModule {}
