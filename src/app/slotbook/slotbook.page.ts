import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import { MenuController } from '@ionic/angular';
import { HttpHandlerService } from '../http-handler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slotbook',
  templateUrl: './slotbook.page.html',
  styleUrls: ['./slotbook.page.scss'],
})
export class SlotbookPage implements OnInit {
public data;
public phno_input:string;
public selected_slot:string;
public rec_slot_id:string;
slot_list:string[];
public arg_day=new Date().getDate();
public arg_month=new Date().getMonth();
public arg_year=new Date().getFullYear();
private responseHandler;
  constructor(
    private menu: MenuController,
    private httpHandler: HttpHandlerService,
    private router: Router,
    public dataservice:DataserviceService) {
    debugger;
    this.data=dataservice.getOption();
   }

  ngOnInit() {
    this.responseHandler=this.httpHandler
    .post({shop_id:this.data.passed_shopid,year:this.arg_year,month:this.arg_month,day:this.arg_day},'/slotCheck/')
    .subscribe(response=>{
      this.slot_list=response as string[];
      console.log('date fetched',response);
      this.responseHandler.unsubscribe();
    })
  }
  public menuOpen() {
    this.menu.open('custom');
  }

  public confirmBook(sel_slot:string,phno:string)
  {
    this.httpHandler
    .post({shop_id:this.data.passed_shopid,
      slot_time:sel_slot,
      user_id:this.data.logged_email_id.toString(),
      phno:phno},'/confirmSlot/')
    .subscribe(response=>{
      this.rec_slot_id=response.toString();
      console.log('slot id fetched', response);
      this.dataservice.setOption('booked_slot_id',this.rec_slot_id);
    })
    this.router.navigate(['/','bookresult']);
  }
}
