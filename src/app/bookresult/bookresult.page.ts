import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-bookresult',
  templateUrl: './bookresult.page.html',
  styleUrls: ['./bookresult.page.scss'],
})
export class BookresultPage implements OnInit {
  public data;


  constructor(
    private menu: MenuController,
    public dataservice:DataserviceService
  ) { 
    this.data=dataservice.getOption();
  }

  ngOnInit() {
  }
  public menuOpen() {
    this.menu.open('custom');
  }
}
