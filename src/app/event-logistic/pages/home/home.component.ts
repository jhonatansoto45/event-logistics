import { Component, OnInit } from '@angular/core';
import { CardItem } from 'src/app/interfaces/event-logistic.interface';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cardItem: CardItem = {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1515169067868-5387ec356754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Hotel Grand Palace - Almuerzo',
    location: 'Calle 45 # 48-35',
    date: new Date().toLocaleDateString(),
    invited: 150,
  };
  date: Date = new Date();
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}

  get nextEvent() {
    return this.homeService.cardEvent;
  }
}
