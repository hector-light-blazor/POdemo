import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoOrdersComponent } from './po-orders.component';

describe('PoOrdersComponent', () => {
  let component: PoOrdersComponent;
  let fixture: ComponentFixture<PoOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
