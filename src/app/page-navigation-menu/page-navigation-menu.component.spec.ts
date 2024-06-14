import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavigationMenuComponent } from './page-navigation-menu.component';

describe('PageNavigationMenuComponent', () => {
  let component: PageNavigationMenuComponent;
  let fixture: ComponentFixture<PageNavigationMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNavigationMenuComponent]
    });
    fixture = TestBed.createComponent(PageNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
