import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;
  constructor(public messageService: MessageService) {

  }

  ngOnInit() {
    this.subscription = this.messageService.messageOfSubject.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }

  getMessageOfSubject() {
    this.messageService.messageOfSubject.subscribe((message) => {
      console.log('Message is:', message);
    });
  }

  getMessageOfBehaviorSubject() {
    this.messageService.messageOfBehaviorSubject.subscribe((message) => {
      console.log('Message is:', message);
    });
  }

  getMessageOfReplaySubject() {
    this.messageService.messageOfReplaySubject.subscribe((message) => {
      console.log('Message is:', message);
    });
  }

  getMessageOfObservable() {
    this.messageService.messageAsObservable.subscribe((message) => {
      console.log('Observable', message);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
