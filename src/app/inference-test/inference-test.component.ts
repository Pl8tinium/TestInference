import { Component } from '@angular/core';
import { ChatService } from '../chat-service';

@Component({
  selector: 'app-chat',
  templateUrl: './inference-test.component.html',
  styleUrls: ['./inference-test.component.scss']
})
export class ChatComponent {
  userInput: string = '';
  chatHistory: Array<{ role: string, content: string }> = [];
  isSending: boolean = false;

  constructor(private chatService: ChatService) { }

  sendMessage(): void {
    this.isSending = true;
    this.chatService.sendMessage(this.userInput).then(() => {
      this.chatHistory = this.chatService.getHistory();
      this.userInput = '';
    })
    .catch((reason) => {
      console.log(reason);
      alert('Something went wrong. Please try again. Server might be offline');
    }).finally(() => {
      this.isSending = false;
    });
  }
}
