import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotcheckPage } from './slotcheck.page';

describe('SlotcheckPage', () => {
  let component: SlotcheckPage;
  let fixture: ComponentFixture<SlotcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
