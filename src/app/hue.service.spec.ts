import { TestBed } from '@angular/core/testing';

import { HueService } from './hue.service';

describe('HueService', () => {
  let service: HueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
