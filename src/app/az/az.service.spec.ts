import { TestBed } from '@angular/core/testing';

import { AzService } from './az.service';

describe('AzService', () => {
  let service: AzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
