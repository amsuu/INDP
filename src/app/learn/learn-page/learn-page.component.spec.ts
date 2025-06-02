import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPageComponent } from './learn-page.component';

import { PageNavigationMenuComponent } from '../page-navigation-menu/page-navigation-menu.component';

describe('LearnPageComponent', () => {
  let component: LearnPageComponent;
  let fixture: ComponentFixture<LearnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [LearnPageComponent]
});
    fixture = TestBed.createComponent(LearnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
