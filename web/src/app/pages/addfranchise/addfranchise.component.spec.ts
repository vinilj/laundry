import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfranchiseComponent } from './addfranchise.component';

describe('AddfranchiseComponent', () => {
  let component: AddfranchiseComponent;
  let fixture: ComponentFixture<AddfranchiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfranchiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
