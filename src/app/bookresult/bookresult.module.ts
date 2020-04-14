import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookresultPageRoutingModule } from './bookresult-routing.module';

import { BookresultPage } from './bookresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookresultPageRoutingModule
  ],
  declarations: [BookresultPage]
})
export class BookresultPageModule {}
