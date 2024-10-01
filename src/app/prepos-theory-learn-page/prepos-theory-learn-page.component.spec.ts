import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreposTheoryLearnPageComponent } from './prepos-theory-learn-page.component';

describe('PreposTheoryLearnPageComponent', () => {
  let component: PreposTheoryLearnPageComponent;
  let fixture: ComponentFixture<PreposTheoryLearnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreposTheoryLearnPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreposTheoryLearnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
