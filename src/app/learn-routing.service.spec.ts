import { TestBed } from '@angular/core/testing';

import { LearnRoutingService } from './learn-routing.service';

describe('LearnRoutingService', () => {
  let service: LearnRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
