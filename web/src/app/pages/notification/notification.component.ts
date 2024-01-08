import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { CommunicationService } from 'src/app/common/apilayer/APIs/communication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  
  notificationSMS = new FormGroup({
    status: new FormControl(false),
    body: new FormControl(''),
  });

  notificationEmail = new FormGroup({
    status: new FormControl(false),
    emailBody: new FormControl(''),
    emailSubject: new FormControl('')
  });
  pushNotification = new FormGroup({
    status: new FormControl(false),
    head: new FormControl(''),
    pushbody: new FormControl('')
  });

  resp: any;
  pushresp: any;


  constructor(private CommunicationService: CommunicationService, private toast: ToastrService) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
  }


  sendNotificationSMS(){
    if(this.notificationSMS.value.body =="" || this.notificationSMS.value.status===false){
      this.toast.error('Fill data/Select Option', '', {});
    }else{ 
    if(this.notificationSMS.value.status==="true"){
      this.notificationSMS.value.status = true;
    }else{
    delete this.notificationSMS.value.status;
    }
    this.CommunicationService.sendSMS(this.notificationSMS.value)
    .subscribe(res => {
      this.toast.success('SMS Sent', '', {});
      this.notificationSMS.reset()
    })
  }
  }

  sendNotificationEmail(){
    if(this.notificationEmail.value.emailSubject=="" || this.notificationEmail.value.emailBody=="" || !this.notificationEmail.value.status){
      this.toast.error('Fill All Fields', '', {});
    }
    else{
      if(this.notificationEmail.value.status==="true"){
        this.notificationEmail.value.status = true;
      }else{
      delete this.notificationEmail.value.status;
      }
      this.CommunicationService.sendEmail(this.notificationEmail.value)
      .subscribe(res => {
        this.toast.success('Email Sent', '', {});
        this.notificationEmail.reset()
      })
    }
  }


  
  sendpushNotification(){
    if(this.pushNotification.value.head=="" && this.pushNotification.value.pushbody=="" || this.pushNotification.value.status===false){
      this.toast.error('Fill All Fields', '', {});
    }
    else{
      if(this.pushNotification.value.status==="true"){
        this.pushNotification.value.status = true;
      }else{
        delete this.pushNotification.value.status;
      }
      this.CommunicationService.sendPushActiveUsers(this.pushNotification.value)
        .subscribe(res => {
          this.toast.success('Push Notification Sent', '', {});
          this.pushNotification.reset()
        })
    }
  }
}
