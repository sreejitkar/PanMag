import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotbookPageRoutingModule } from './slotbook-routing.module';

import { SlotbookPage } from './slotbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotbookPageRoutingModule
  ],
  declarations: [SlotbookPage]
})
export class SlotbookPageModule {}
