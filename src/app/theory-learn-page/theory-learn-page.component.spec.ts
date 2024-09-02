import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryLearnPageComponent } from './theory-learn-page.component';

describe('TheoryLearnPageComponent', () => {
  let component: TheoryLearnPageComponent;
  let fixture: ComponentFixture<TheoryLearnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheoryLearnPageComponent]
    });
    fixture = TestBed.createComponent(TheoryLearnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
