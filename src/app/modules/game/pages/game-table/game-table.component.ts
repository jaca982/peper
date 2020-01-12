import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { GameTableService } from './game-table.service';
import { CardViewModel } from './models/view/card.view.model';
import { map, tap } from 'rxjs/operators';
import { CardResponseModel } from './models/dto/cards';
import { GameSettingsService } from '@app/core/services/game-settings.service';
import { DropdownOptionModel } from '@app/modules/shared/components/dropdown/models/dropdown-option';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTableComponent implements OnInit {
  constructor(
    private router: Router,
    private gameService: GameTableService,
    private cdr: ChangeDetectorRef,
    private settingsService: GameSettingsService
  ) {}

  card1: CardViewModel;
  card2: CardViewModel;

  card1Lose = false;
  card2Lose = false;

  playerOneCounter = 0;
  playerTwoCounter = 0;
  roundCounter = 0;

  playerTwoLabel = 'Computer';
  battleAttribute: DropdownOptionModel;

  ngOnInit() {
    this.setSettings();
  }

  setSettings() {
    const settings = this.settingsService.getGameSettings();
    if (settings) {
      if (settings.players === 1) {
        this.playerTwoLabel = 'Player Two';
      }
      this.battleAttribute = settings.attribute;
    }
    this.startRound();
  }

  startRound() {
    this.roundCounter = this.roundCounter + 1;
    this.card1Lose = false;
    this.card2Lose = false;
    this.loadCard();
  }

  loadCard(): any {
    const randomPage = Math.floor(Math.random() * 4) + 1;
    this.gameService
      .getCard(randomPage)
      .pipe(
        map((response: CardResponseModel) => {
          return this.gameService.selectRandomCards(response);
        }),
        tap(data => this.setCards(data))
      )
      .subscribe();
  }

  setCards(cards: CardViewModel[]) {
    if (cards) {
      this.card1 = cards[0];
      this.card2 = cards[1];
      this.cdr.detectChanges();
      this.cardsBattle(cards);
    }
  }

  cardsBattle(cards: CardViewModel[]) {
    if (cards) {
      let playerOne = cards[0];
      let playerTwo = cards[1];
      Object.keys(cards[0]).forEach(key => {
        if (key === this.battleAttribute.value) {
          playerOne = playerOne[key];
        }
      });
      Object.keys(cards[1]).forEach(key => {
        if (key === this.battleAttribute.value) {
          playerTwo = playerTwo[key];
        }
      });
      if (playerOne > playerTwo) {
        this.card2Lose = true;
        this.playerOneCounter = this.playerOneCounter + 1;
      } else if (playerTwo > playerOne) {
        this.card1Lose = true;
        this.playerTwoCounter = this.playerTwoCounter + 1;
      }
      this.cdr.detectChanges();
    }
  }

  navigateToHome() {
    this.router.navigate(['']);
  }
}
