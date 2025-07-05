import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclensorComponent } from './declensor.component';

describe('DeclensorComponent', () => {
  let component: DeclensorComponent;
  let fixture: ComponentFixture<DeclensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclensorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
