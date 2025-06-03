import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseExplainationComponent } from './phrase-explaination.component';

describe('PhraseExplainationComponent', () => {
  let component: PhraseExplainationComponent;
  let fixture: ComponentFixture<PhraseExplainationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PhraseExplainationComponent]
});
    fixture = TestBed.createComponent(PhraseExplainationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
