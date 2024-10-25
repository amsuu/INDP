import { ComponentFixture, TestBed } from '@angular/core/testing';

import { _Component } from './meaning-of-cases.component';

describe('_Component', () => {
  let component: _Component;
  let fixture: ComponentFixture<_Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [_Component]
    });
    fixture = TestBed.createComponent(_Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
