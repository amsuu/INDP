import { TestBed } from '@angular/core/testing';

import { DesaturationServiceService } from './desaturation-service.service';

describe('DesaturationServiceService', () => {
  let service: DesaturationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesaturationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
