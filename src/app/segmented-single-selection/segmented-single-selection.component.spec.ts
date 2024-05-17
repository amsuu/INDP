import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedSingleSelectionComponent } from './segmented-single-selection.component';

describe('SegmentedSingleSelectionComponent', () => {
  let component: SegmentedSingleSelectionComponent;
  let fixture: ComponentFixture<SegmentedSingleSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentedSingleSelectionComponent]
    });
    fixture = TestBed.createComponent(SegmentedSingleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
