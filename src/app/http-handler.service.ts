import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpHandlerService {
    private apiUrl = 'http://127.0.0.1:8000';
    // private apiUrl = 'http://127.0.0.1:8000';
    constructor(public http: HttpClient) {}
    public headers: {} = {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    };
    public getUrl() {
        return 'http://127.0.0.1:8000';
    }
    public post(params: object, url: string) {
        return this.http.post(this.apiUrl + url, params, this.headers);
    }
    public covidUpdates(params: object) {
        return this.post(params, '/update/');
    }
    public fakeNewsCheck(params: object) {
        return this.post(params, '/chatBot/');
    }
}
