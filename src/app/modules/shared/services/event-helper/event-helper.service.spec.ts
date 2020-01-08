import { TestBed } from '@angular/core/testing';

import { EventHelperService } from './event-helper.service';

describe('EventHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventHelperService = TestBed.get(EventHelperService);
    expect(service).toBeTruthy();
  });
});
