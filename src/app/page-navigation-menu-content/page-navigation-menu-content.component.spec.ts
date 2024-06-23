import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavigationMenuContentComponent } from './page-navigation-menu-content.component';

describe('PageNavigationMenuContentComponent', () => {
  let component: PageNavigationMenuContentComponent;
  let fixture: ComponentFixture<PageNavigationMenuContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNavigationMenuContentComponent]
    });
    fixture = TestBed.createComponent(PageNavigationMenuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
