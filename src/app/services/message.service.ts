import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []

  getMessages(): string[] {
    return this.messages
  }

  addMessage(message: string): void {
    this.messages.push(message)

    //setTimeout(() => {
      //this.messages.shift()
    //}, 5000)
  }

  deleteMessage(index: number) {
    this.messages.splice(index, 1)
  }
}
