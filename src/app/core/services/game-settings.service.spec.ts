import { TestBed, inject } from '@angular/core/testing';

import { GameSettingsService } from './game-settings.service';
import {} from '@angular/core';
import { GameConfigModel } from '../models/game-config';

describe('GameSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSettingsService = TestBed.get(GameSettingsService);
    expect(service).toBeTruthy();
  });

  it('should set and return game settings', inject([GameSettingsService], (service: GameSettingsService) => {
    const settings: GameConfigModel = { players: 1, attribute: { label: 'TestLabel', value: 'TestValue' } };
    service.setGameSettings(settings);
    const resultSettings = service.getGameSettings();
    expect(resultSettings).toEqual(settings);
  }));
});
