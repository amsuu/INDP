import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnScreenKeyboardComponent } from './on-screen-keyboard.component';

describe('OnScreenKeyboardComponent', () => {
  let component: OnScreenKeyboardComponent;
  let fixture: ComponentFixture<OnScreenKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnScreenKeyboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnScreenKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
