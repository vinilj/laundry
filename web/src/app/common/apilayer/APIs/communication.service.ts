import { Injectable } from '@angular/core';
import { HttpService } from '../http-header/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor(private httpService: HttpService) { }

  sendSMS(smsdata) {
    return this.httpService.post('comSMS', smsdata)
  }

  sendEmail(emailData) {
    return this.httpService.post('comEmail', emailData)
  }

  sendPushAll(data) {
    return this.httpService.post('pushNotification/all', data)
  }

  sendPushActiveUsers(data) {
    return this.httpService.post('pushNotification', data)
  }
}