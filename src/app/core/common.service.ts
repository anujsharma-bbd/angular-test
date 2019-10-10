import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  messager = new Subject<string>();
  constructor() { }

  sendMessage(message: string) {
    this.messager.next(message);
  }
  getMessage() {
    return this.messager.asObservable();
  }
}
