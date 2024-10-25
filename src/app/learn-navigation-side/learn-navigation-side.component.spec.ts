import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNavigationSideComponent } from './learn-navigation-side.component';

describe('LearnNavigationSideComponent', () => {
  let component: LearnNavigationSideComponent;
  let fixture: ComponentFixture<LearnNavigationSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnNavigationSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnNavigationSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
