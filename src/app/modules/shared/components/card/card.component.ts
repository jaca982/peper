import { Component, OnInit, Input } from '@angular/core';
import { CardViewModel } from '@app/modules/game/pages/game-table/models/view/card.view.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  cardData: CardViewModel;

  @Input()
  lose: CardViewModel;

  constructor() {}

  ngOnInit() {}
}
