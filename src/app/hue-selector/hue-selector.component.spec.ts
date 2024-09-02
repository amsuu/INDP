import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HueSelectorComponent } from './hue-selector.component';

describe('HueSelectorComponent', () => {
  let component: HueSelectorComponent;
  let fixture: ComponentFixture<HueSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HueSelectorComponent]
    });
    fixture = TestBed.createComponent(HueSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
