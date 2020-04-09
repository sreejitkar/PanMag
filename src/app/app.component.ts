import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public fname:string=null;
    public storage:Storage;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        private router: Router,
        
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.fname=this.storage.get('curuser');
            this.menu.enable(true, 'custom');
        });
    }
    public menuToggle(choice: 0 | 1 | 2 ) {
        if (choice === 1) {
            this.router.navigate(['/updates']);
            this.menu.close('custom');
        } else if (choice === 2) {
            this.router.navigate(['/chat-bot']);
            this.menu.close('custom');
        } else {
            this.menu.close('custom');
        }
    }
}