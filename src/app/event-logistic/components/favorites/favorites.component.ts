import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  @ViewChild('popup') popup!: ElementRef;

  activeFavorite: boolean = false;
  private openPopup: Subscription = new Subscription();

listCard: CardItem[] = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      name: 'Hotel Grand Palace - Almuerzo',
      location: 'Calle 45 # 48-35',
      date: new Date().toLocaleDateString(),
      invited: 150,
    },
  ];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.openPopup = this.homeService.openFavorites$.subscribe((active) => {
      if (active) setTimeout(() => this.addClassPopup());

      this.activeFavorite = active;
    });
  }

  ngOnDestroy(): void {
    this.openPopup.unsubscribe();
  }

  addClassPopup(): void {
    const element = this.popup.nativeElement as HTMLElement;
    element.classList.add('favorite__popup--visible');
  }

  closePopup(): void {
    this.homeService.openFavorites$.next(false);
  }
}
