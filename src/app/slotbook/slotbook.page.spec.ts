import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotbookPage } from './slotbook.page';

describe('SlotbookPage', () => {
  let component: SlotbookPage;
  let fixture: ComponentFixture<SlotbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotbookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
