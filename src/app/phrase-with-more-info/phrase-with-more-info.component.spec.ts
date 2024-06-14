import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseWithMoreInfoComponent } from './phrase-with-more-info.component';

describe('PhraseWithMoreInfoComponent', () => {
  let component: PhraseWithMoreInfoComponent;
  let fixture: ComponentFixture<PhraseWithMoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhraseWithMoreInfoComponent]
    });
    fixture = TestBed.createComponent(PhraseWithMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
