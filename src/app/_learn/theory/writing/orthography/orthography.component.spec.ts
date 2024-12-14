import { ComponentFixture, TestBed } from '@angular/core/testing';

import { _Component } from './orthography.component';

describe('_Component', () => {
  let component: _Component;
  let fixture: ComponentFixture<_Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [_Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
