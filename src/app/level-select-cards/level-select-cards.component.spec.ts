import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSelectCardsComponent } from './level-select-cards.component';

describe('LevelSelectCardsComponent', () => {
  let component: LevelSelectCardsComponent;
  let fixture: ComponentFixture<LevelSelectCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelSelectCardsComponent]
    });
    fixture = TestBed.createComponent(LevelSelectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
