import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  messages: string[] = [];

  constructor() { 

  }
  add(message: string){
    this.messages.push(message + "at" + new Date() )
  }
  clear(){
    this.messages = [];
  }
  
}