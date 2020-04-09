import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpHandlerService } from '../http-handler.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public emailInput :string;
  public fnameInput:string;
  public lnameInput:string;
  public passInput:string;
  public sexInput:string;
  public phnoInput:string;
  public errmess:string=null;
  private responseHandler;
  

  constructor(
    private menu: MenuController,
    private router: Router,
    private httpHandler: HttpHandlerService,
    private storage:Storage,


  ) { }

    ngOnInit() {}
    public menuOpen() {
      this.menu.open('custom');
  }

  public registerAuth(email:string,password:string,fname:string,lname:string,phno:string,sex:string)
  {
    this.responseHandler=this.httpHandler
    .post({email:email,pass:password,fname:fname,lname:lname,phno:phno,sex:sex},'/register/')
    .subscribe(response=>{
      console.log(response);
      this.errmess=response.toString();
      if(this.errmess="REGISTRATION SUCCESS")
      {
        this.storage.clear();
        this.storage.set('curuser',fname);
        this.router.navigate(['/','updates']);
        
      }
    });

  }
}