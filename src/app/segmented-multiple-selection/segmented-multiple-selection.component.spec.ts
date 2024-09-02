import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedMultipleSelectionComponent } from './segmented-multiple-selection.component';

describe('SegmentedMultipleSelectionComponent', () => {
  let component: SegmentedMultipleSelectionComponent;
  let fixture: ComponentFixture<SegmentedMultipleSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentedMultipleSelectionComponent]
    });
    fixture = TestBed.createComponent(SegmentedMultipleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
