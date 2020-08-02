import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import {AwsSDKServiceService} from './../../../../shared/services/aws-sdkservice.service';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  constructor(private awSDKService: AwsSDKServiceService) { }
  botMessages: Message[] = [];
  currentMessage: Message = new Message('', new Date(), true);

  ngOnInit(): void {
    const instructionalMessage = 'You can remind yourself with a message in X hours';
    this.botMessages.push(new Message(instructionalMessage, new Date(), false));
    const welcomeMessage = 'I want the following message sent to me';
    this.botMessages.push(new Message(welcomeMessage, new Date(), true));

  }

  dateToTimestampString(date: Date): string {
    // TO DO: more user firendly way to format date object
    return date.toDateString();
  }

  sendMessage(): void{
    this.currentMessage.date = new Date();
    // To Do: get rid of hard coded environmenet specific configs
    this.awSDKService.sendMessage(this.currentMessage).subscribe(
      res => {
        this.botMessages.push(this.currentMessage);
        this.botMessages.push(new Message('Thanks! I got your request, I will text you in time!', new Date(), false));
      },
      error => {
        this.showError();
        throwError(error);
      }
     );
  }

  showError(): void {
    this.botMessages.push(new Message('Sorry, there was an error', new Date(), false));
  }
}
