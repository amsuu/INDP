import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1pageComponent } from './level-1-page.component';

describe('Level1pageComponent', () => {
  let component: Level1pageComponent;
  let fixture: ComponentFixture<Level1pageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Level1pageComponent]
    });
    fixture = TestBed.createComponent(Level1pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
