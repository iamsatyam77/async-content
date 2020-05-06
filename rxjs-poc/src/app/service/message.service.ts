import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessageService {
  public messageOfSubject = new Subject<string>();
  public messageOfBehaviorSubject = new BehaviorSubject<string>(
      'Demo');  // Empty string represents the initial value or default
  // value of behavioural Object

  public messageOfReplaySubject = new ReplaySubject<string>(
      2);  // 2 represent the number of values this object can store.

  public messageAsObservable = this.messageOfSubject.asObservable();

  constructor() {}
  setMessage(value: string) {
    this.messageOfSubject.next(
        value);  // it is publishing this value to all the subscribers that have
    // already subscribed to this message
    this.messageOfBehaviorSubject.next(value);
    this.messageOfReplaySubject.next(value);
  }
}
