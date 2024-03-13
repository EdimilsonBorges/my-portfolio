import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollViewService {

  classMenu: BehaviorSubject<string> = new BehaviorSubject<string>("inicio");
  percentBar: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }
}
