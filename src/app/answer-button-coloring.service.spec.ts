import { TestBed } from '@angular/core/testing';

import { AnswerButtonColoringService } from './answer-button-coloring.service';

describe('AnswerButtonColoringService', () => {
  let service: AnswerButtonColoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerButtonColoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
