import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  @ViewChild('popup') popup!: ElementRef;

  activeFavorite: boolean = false;
  private openPopup: Subscription = new Subscription();

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
