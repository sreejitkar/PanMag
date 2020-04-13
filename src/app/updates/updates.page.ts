import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../http-handler.service';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-updates',
    templateUrl: './updates.page.html',
    styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage implements OnInit {
    private responseHnadler;
    public update:object;
    constructor(
        private httpHandler: HttpHandlerService,
        private menu: MenuController
    ) {}
    ngOnInit() {
        this.responseHnadler = this.httpHandler
            .post({}, '/update/')
            .subscribe(response => {
                this.update = response;
                console.log('data fetched', this.update);
                this.responseHnadler.unsubscribe();
            });
    }
    public menuOpen() {
        this.menu.open('custom');
    }
}
