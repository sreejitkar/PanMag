import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpHandlerService } from '../http-handler.service';
import {DataserviceService} from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slotcheck',
  templateUrl: './slotcheck.page.html',
  styleUrls: ['./slotcheck.page.scss'],
})
export class SlotcheckPage implements OnInit {
  private responseHandler;
  shoplist: string[];
  given_shop_id:number;
  public data :Array<any>;
  constructor(
    private menu: MenuController,
    private httpHandler: HttpHandlerService,
    private router: Router,
    public dataservice:DataserviceService
  ) { 
  }

  ngOnInit() {
    this.responseHandler=this.httpHandler
      .post({},'/shopList/')
      .subscribe(response=>{
        this.shoplist=response as string[];
        console.log('data fetched',response);
        this.responseHandler.unsubscribe();
      })
  }
  public menuOpen() {
    this.menu.open('custom');
  }

  public moveToBook(id:number,name:string,address:string,category:string){
    this.dataservice.setOption('passed_shopid',id);
    this.dataservice.setOption('passed_shopname',name);
    this.dataservice.setOption('passed_shopadd',address);
    this.dataservice.setOption('passed_shopcat',category);
    this.router.navigate(['/','slotbook']);
  }
}
