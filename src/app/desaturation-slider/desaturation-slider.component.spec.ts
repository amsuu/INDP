import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaturationSliderComponent } from './desaturation-slider.component';

describe('DesaturationSliderComponent', () => {
  let component: DesaturationSliderComponent;
  let fixture: ComponentFixture<DesaturationSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesaturationSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesaturationSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
