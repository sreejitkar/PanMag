import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotcheckPage } from './slotcheck.page';

const routes: Routes = [
  {
    path: '',
    component: SlotcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotcheckPageRoutingModule {}
