import { Injectable, NgZone } from '@angular/core';
import axios from 'axios';
import { EventSourcePolyfill } from 'ng-event-source';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://127.0.0.1:5000/v1/chat/completions';
  private history: Array<{ role: string, content: string }> = [];

  constructor(private http: HttpClient) {
  }

  getHistory(): Array<{ role: string, content: string }> {
    return this.history;
  }

  async sendMessage(userMessage: string): Promise<void> {
    this.history.push({ role: 'user', content: userMessage });
    const data = {
      mode: 'instruct', // pla: an also be chat, but for llama instruct is better i think
      messages: this.history
    };

    const response = await lastValueFrom(
      this.http.post<any>(this.url, data, { headers: { 'Content-Type': 'application/json' }})
    );
  
    const assistantMessage = response.choices[0].message.content;
    this.history.push({ role: 'assistant', content: assistantMessage });
    console.log(assistantMessage);
  }
}
