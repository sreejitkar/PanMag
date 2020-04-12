import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotbookPage } from './slotbook.page';

const routes: Routes = [
  {
    path: '',
    component: SlotbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotbookPageRoutingModule {}
