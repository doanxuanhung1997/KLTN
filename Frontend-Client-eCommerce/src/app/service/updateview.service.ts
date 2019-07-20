import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UpdateviewService {
  subject=new Subject();
  constructor() { }

  setUpdateView(msg){
    this.subject.next(msg);
  }
  getUpdateView(){
    return this.subject.asObservable();
  }
}
