import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2CreatorComponent } from './level-2-creator.component';

describe('Level2CreatorComponent', () => {
  let component: Level2CreatorComponent;
  let fixture: ComponentFixture<Level2CreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Level2CreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2CreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
