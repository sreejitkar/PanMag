import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlotcheckPageRoutingModule } from './slotcheck-routing.module';
import { SlotcheckPage } from './slotcheck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotcheckPageRoutingModule,
  ],
  declarations: [SlotcheckPage],
  bootstrap:[SlotcheckPage]
})
export class SlotcheckPageModule {}
