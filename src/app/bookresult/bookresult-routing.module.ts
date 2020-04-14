import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookresultPage } from './bookresult.page';

const routes: Routes = [
  {
    path: '',
    component: BookresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookresultPageRoutingModule {}
