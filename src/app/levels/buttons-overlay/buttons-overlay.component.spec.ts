import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsOverlayComponent } from './buttons-overlay.component';

describe('ButtonsOverlayComponent', () => {
  let component: ButtonsOverlayComponent;
  let fixture: ComponentFixture<ButtonsOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
