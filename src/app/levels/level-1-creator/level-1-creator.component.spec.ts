import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1CreatorComponent } from './level-1-creator.component';

describe('Level1CreatorComponent', () => {
  let component: Level1CreatorComponent;
  let fixture: ComponentFixture<Level1CreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Level1CreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level1CreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
