import { Component, Input } from '@angular/core';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {

  @Input() paramEvent!: CardItem

  constructor() { }


}
