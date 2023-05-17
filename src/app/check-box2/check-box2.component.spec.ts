import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBox2Component } from './check-box2.component';

describe('CheckBox2Component', () => {
  let component: CheckBox2Component;
  let fixture: ComponentFixture<CheckBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
