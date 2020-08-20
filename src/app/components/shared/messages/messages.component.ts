import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { MessageConfig } from './messages.utils';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  messages: MessageConfig[];

  constructor(private messagesService: MessagesService) {
    this.messagesService.messages$.subscribe(
      (messages: MessageConfig[]) => (this.messages = messages)
    );
  }

  closeMe(index: number): void {
    this.messagesService.removeMessage(index)
  }

  ngOnInit(): void {}
}
