import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdescriptionComponent } from './pdescription.component';

describe('PdescriptionComponent', () => {
  let component: PdescriptionComponent;
  let fixture: ComponentFixture<PdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
