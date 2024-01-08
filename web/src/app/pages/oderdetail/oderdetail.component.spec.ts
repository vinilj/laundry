import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OderdetailComponent } from './oderdetail.component';

describe('OderdetailComponent', () => {
  let component: OderdetailComponent;
  let fixture: ComponentFixture<OderdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OderdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
