import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserformPage } from './userform.page';

describe('UserformPage', () => {
  let component: UserformPage;
  let fixture: ComponentFixture<UserformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
