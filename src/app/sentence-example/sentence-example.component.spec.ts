import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceExampleComponent } from './sentence-example.component';

describe('SentenceExampleComponent', () => {
  let component: SentenceExampleComponent;
  let fixture: ComponentFixture<SentenceExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentenceExampleComponent]
    });
    fixture = TestBed.createComponent(SentenceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
