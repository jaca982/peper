import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
import { CardModel, CardResponseModel } from './models/dto/cards';
import { Observable } from 'rxjs';
import { CardViewModel } from './models/view/card.view.model';
import { convertStringToNumber } from '@app/core/utils/string-to-number';

const routes = {
  getStarshipsPage(id: number) {
    return `starships/?page=${id}`;
  }
};

@Injectable({
  providedIn: 'root'
})
export class GameTableService {
  constructor(private apiService: ApiService) {}

  getCard(id: number): Observable<CardResponseModel> {
    return this.apiService.get(routes.getStarshipsPage(id));
  }

  selectRandomCards(cardsArr: CardResponseModel): CardViewModel[] {
    const count = cardsArr.results ? cardsArr.results.length : 0;
    if (count !== 0) {
      const IDarr = [];
      IDarr.push(Math.floor(Math.random() * count));
      IDarr.push(Math.floor(Math.random() * count));
      const result: CardViewModel[] = [];
      IDarr.forEach(id => {
        result.push(this.mapCardToViewModel(cardsArr.results[id]));
      });
      return result;
    }
  }

  mapCardToViewModel(card: CardModel): CardViewModel {
    if (card) {
      return {
        name: card.name,
        length: convertStringToNumber(card.length),
        crew: convertStringToNumber(card.crew),
        cargo: convertStringToNumber(card.cargo_capacity),
        cost: convertStringToNumber(card.cost_in_credits),
        passengers: convertStringToNumber(card.passengers)
      };
    }
  }
}
