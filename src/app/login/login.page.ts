import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpHandlerService } from '../http-handler.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public emailInput :string;
  public passwordInput:string;
  public errmess:string=null;

  constructor(
    private httpHandler: HttpHandlerService,
    private menu: MenuController,
    private router: Router,
    private storage : Storage,
  ) { }

    ngOnInit() {}
    public menuOpen() {
      this.menu.open('custom');
  }

  public loginauth(email:string,password:string)
  {
    this.httpHandler
      .post({email:email,pass:password},'/login/')
      .subscribe(response=>{
        console.log(response);
        this.errmess=response.toString();
        if (this.errmess=="LOGIN SUCCESS")
        {
          this.router.navigate(['/','updates']);
        }
        }); 
  }
}
