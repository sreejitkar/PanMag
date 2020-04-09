import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarterPage } from './starter.page';

const routes: Routes = [
  {
    path: '',
    component: StarterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterPageRoutingModule {}
