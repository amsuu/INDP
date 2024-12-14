import { TestBed } from '@angular/core/testing';

import { LearnStructureService } from './learn-structure.service';

describe('LearnStructureService', () => {
  let service: LearnStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
