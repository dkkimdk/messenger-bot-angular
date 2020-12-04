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
  currentMessage: Message = new Message('', new Date(), true, '0');
  currentTime: string;

  ngOnInit(): void {
    this.currentTime = this.dateToHourMin(new Date());
    const instructionalMessage = 'You can remind yourself with a message in X hours';
    this.botMessages.push(new Message(instructionalMessage, new Date(), false));
    const welcomeMessage = 'I want the following message sent to me';
    this.botMessages.push(new Message(welcomeMessage, new Date(), true));

  }

  dateToHourMin(date: Date): string {
    let hour;
    let mins;
    let amPm;

    if (date.getHours() === 0){
      hour = 12;
      amPm = 'am';
    } else if (date.getHours() < 12) {
      hour = date.getHours();
      amPm = 'am';
    } else {
      hour = date.getHours();
      amPm = 'pm';
    }
    mins = date.getMinutes();
    return '' + hour + ':' +  mins + ' ' + amPm;

  }

  dateToTimestampString(date: Date): string {
    // TO DO: more user firendly way to format date object
    return date.toDateString();
  }

  sendMessage(): void{
    this.currentMessage.date = new Date();
    if ( this.currentMessage.phoneNumber.length !== 11 || this.currentMessage.phoneNumber.charAt(0) !== '1' ) {
      this.botMessages.push(
        new Message(
          'You put in an invalid phone number. There needs to be a country code, followed by your number (i.e 18189399028)',
           new Date(), false));
    } else {
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
  }

  showError(): void {
    this.botMessages.push(new Message('Sorry, there was an error', new Date(), false));
  }
}
