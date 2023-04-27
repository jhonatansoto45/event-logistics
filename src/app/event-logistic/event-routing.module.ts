import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CrearEventoComponent } from './pages/crear-evento/crear-evento.component';
import { VerEventoComponent } from './pages/ver-evento/ver-evento.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'manage',
        component: IndexComponent,
        children: [
          {
            path: 'inicio',
            component: HomeComponent,
          },
          {
            path: 'crear',
            component: CrearEventoComponent,
          },
          {
            path: 'ver',
            component: VerEventoComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'manage',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
