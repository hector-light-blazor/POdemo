import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Under1000Component } from './under1000.component';

describe('Under1000Component', () => {
  let component: Under1000Component;
  let fixture: ComponentFixture<Under1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Under1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Under1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
