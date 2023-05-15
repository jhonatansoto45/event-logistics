import { Component, Input, OnInit } from '@angular/core';
import { ItemAttributeEvent } from 'src/app/interfaces/shared.interface';

@Component({
  selector: 'app-event-attribute',
  templateUrl: './event-attribute.component.html',
  styleUrls: ['./event-attribute.component.scss'],
})
export class EventAttributeComponent {
  @Input() attributes: ItemAttributeEvent[] = [
    {
      image: 'sofa',
      title: 'Dedicated workspace',
      description: "A private room with wifi that's well-suited for working.",
    },
    {
      image: 'beer',
      title: 'Self check-in',
      description: 'Check yourself in with the keypad.',
    },
    {
      image: 'calendar-check',
      title: 'Free cancellation before Jul 25',
      description: 'A private room with wifi that’s well-suited for working.',
    },
  ];

  constructor() {}
}
