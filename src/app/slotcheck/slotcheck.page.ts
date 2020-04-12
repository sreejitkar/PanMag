import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpHandlerService } from '../http-handler.service';



@Component({
  selector: 'app-slotcheck',
  templateUrl: './slotcheck.page.html',
  styleUrls: ['./slotcheck.page.scss'],
})
export class SlotcheckPage implements OnInit {
  private responseHandler;
  shoplist: string[];
  constructor(
    private menu: MenuController,
    private httpHandler: HttpHandlerService,
  ) { }

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
  public moveToBook(id:number)
  {
    this.httpHandler
      .post({shopid:})
  }
}
