import { Component, Input, ViewContainerRef } from '@angular/core';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.scss'],
})
export class CardEventComponent {
  @Input() cardItem!: CardItem;

  liked: boolean = false;

  constructor(private vcf: ViewContainerRef) {}

  get iconLike() {
    return this.liked ? 'heart-filled' : 'heart';
  }

  detailEvent(cardItem: CardItem): void {
    if (this.vcf) this.vcf.clear();

    const component = this.vcf.createComponent(SliderComponent);
    component.instance.paramEvent = cardItem;

    const sub0 = component.instance.closeSlider
      .asObservable()
      .subscribe((_) => {
        sub0.unsubscribe();
        component.destroy();
      });
  }
}
