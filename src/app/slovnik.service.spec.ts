import { TestBed } from '@angular/core/testing';

import { SlovnikService } from './slovnik.service';

describe('SlovnikService', () => {
  let service: SlovnikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlovnikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
