import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPageTemplateComponent } from './page-template.component';

describe('LearnPageTemplateComponent', () => {
  let component: LearnPageTemplateComponent;
  let fixture: ComponentFixture<LearnPageTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnPageTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnPageTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
