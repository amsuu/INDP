import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNavigationCompactComponent } from './learn-navigation-compact.component';

describe('LearnNavigationCompactComponent', () => {
  let component: LearnNavigationCompactComponent;
  let fixture: ComponentFixture<LearnNavigationCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnNavigationCompactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnNavigationCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
