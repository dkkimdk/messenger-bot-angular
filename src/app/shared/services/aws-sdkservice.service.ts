import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Message} from '../../features/home/components/messenger/message';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AwsSDKServiceService {

  constructor( private http: HttpClient) {}



  sendMessage(message: Message): Observable<any> {

    const apiUrl = '/api/start';
    if ( message.phoneNumber || message.utterance) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Accept: '*'
      })
    };

    const body = JSON.stringify({
      input : {
        message: message.utterance,
        phoneNumber: message.phoneNumber,
      }
    });

    return this.http.post<any>(apiUrl, body, httpOptions);
  }
  }

}
