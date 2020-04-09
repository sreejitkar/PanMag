import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StarterPage } from './starter.page';

describe('StarterPage', () => {
  let component: StarterPage;
  let fixture: ComponentFixture<StarterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StarterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
