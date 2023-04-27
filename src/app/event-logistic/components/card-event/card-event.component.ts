import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent implements OnInit {
  @Input() cardItem!: CardItem;

  liked: boolean = false

  constructor() {}

  get iconLike(){
    return this.liked ? 'heart-filled': 'heart'
  }

  ngOnInit(): void {}
}
