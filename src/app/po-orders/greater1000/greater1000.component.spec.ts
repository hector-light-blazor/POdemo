import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Greater1000Component } from './greater1000.component';

describe('Greater1000Component', () => {
  let component: Greater1000Component;
  let fixture: ComponentFixture<Greater1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Greater1000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Greater1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
