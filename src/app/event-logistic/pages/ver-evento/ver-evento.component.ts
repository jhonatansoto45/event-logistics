import { Component, OnInit } from '@angular/core';
import { VerEventoService } from '../../services/ver-evento.service';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.scss'],
})
export class VerEventoComponent implements OnInit {
  placeholder: string = 'ETHArauca Workshop: Dominando la sintaxis de Solidity';

  events: CardItem[] = [];
  cloneEvents: CardItem[] = [];

  constructor(private verService: VerEventoService) {}

  ngOnInit(): void {
    this.events = this.verService.events;
    this.cloneEvents = JSON.parse(JSON.stringify(this.listEvent));
  }

  get listEvent() {
    return this.verService.events;
  }

  filterEvent(busqueda: string): void {
    if (busqueda === '') {
      this.events = this.listEvent;
      return;
    }

    this.events = this.cloneEvents.filter((event) =>
      event.name.toLowerCase().includes(busqueda.trim().toLowerCase())
    );
  }
}
