import { Injectable } from '@angular/core';
import { GameConfigModel } from '../models/game-config';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {
  gameSettings: GameConfigModel = {
    players: 0,
    attribute: { label: 'Crew', value: 'crew' }
  };

  constructor() {}

  setGameSettings(settings: GameConfigModel) {
    if (settings) {
      if (settings.players) {
        this.gameSettings.players = settings.players;
      }
      if (settings.attribute) {
        this.gameSettings.attribute = settings.attribute;
      }
    }
  }

  public getGameSettings(): GameConfigModel {
    return this.gameSettings;
  }
}
