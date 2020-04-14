import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookresultPage } from './bookresult.page';

describe('BookresultPage', () => {
  let component: BookresultPage;
  let fixture: ComponentFixture<BookresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
