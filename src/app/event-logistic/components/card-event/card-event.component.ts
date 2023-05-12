import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent implements OnInit {
  @Input() cardItem!: CardItem;

  liked: boolean = false;

  constructor(private vcf: ViewContainerRef) {}

  ngOnInit(): void {}

  get iconLike() {
    return this.liked ? 'heart-filled' : 'heart';
  }

  detailEvent(cardItem: CardItem): void {
    if (this.vcf) this.vcf.clear();

    const component = this.vcf.createComponent(SliderComponent);
    component.instance.paramEvent = cardItem;
  }
}
