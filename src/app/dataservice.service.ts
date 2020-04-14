import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private data = {};  
  
  setOption(option, value) {  
    debugger;  
    this.data[option] = value;  
  }  
  
  getOption() {  
    return this.data;  
  }  
}
