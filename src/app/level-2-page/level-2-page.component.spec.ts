import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2PageComponent } from './level-2-page.component';

describe('Level2PageComponent', () => {
  let component: Level2PageComponent;
  let fixture: ComponentFixture<Level2PageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [Level2PageComponent]
});
    fixture = TestBed.createComponent(Level2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
