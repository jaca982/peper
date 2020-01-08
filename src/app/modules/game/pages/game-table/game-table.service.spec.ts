import { TestBed } from '@angular/core/testing';

import { GameTableService } from './game-table.service';

describe('GameTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameTableService = TestBed.get(GameTableService);
    expect(service).toBeTruthy();
  });
});
