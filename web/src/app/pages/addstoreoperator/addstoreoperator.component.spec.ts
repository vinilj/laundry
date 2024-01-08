import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstoreoperatorComponent } from './addstoreoperator.component';

describe('AddstoreoperatorComponent', () => {
  let component: AddstoreoperatorComponent;
  let fixture: ComponentFixture<AddstoreoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstoreoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstoreoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
