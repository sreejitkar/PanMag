import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpHandlerService } from '../http-handler.service';

@Component({
    selector: 'app-chat-bot',
    templateUrl: './chat-bot.page.html',
    styleUrls: ['./chat-bot.page.scss'],
})
export class ChatBotPage implements OnInit {
    public textInput: string;
    private responseHnadler;
    public history = [];
    constructor(
        private httpHandler: HttpHandlerService,
        private menu: MenuController
    ) {}
    ngOnInit() {}
    public menuOpen() {
        this.menu.open('custom');
    }
    public sendMessage(message: string) {
        this.history.push({
            text: message,
            left: false,
        });
        this.responseHnadler = this.httpHandler
            .post({ question: message }, '/chatBot/')
            .subscribe(response => {
                this.history.push({
                    text: response.toString(),
                    left: true,
                });
                console.log('data fetched', response);
                this.responseHnadler.unsubscribe();
                this.textInput = null;
                window.scrollTo(
                    0,
                    document.querySelector('.messages').scrollHeight
                );
            });
    }
}
