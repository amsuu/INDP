import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideProgressBarComponent } from './side-progress-bar.component';

describe('SideProgressBarComponent', () => {
  let component: SideProgressBarComponent;
  let fixture: ComponentFixture<SideProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
