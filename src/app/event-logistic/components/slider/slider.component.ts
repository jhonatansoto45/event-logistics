import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() paramEvent!: CardItem

  constructor() { }

  ngOnInit(): void {
  }

}
