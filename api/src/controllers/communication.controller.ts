import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  FilterExcludingWhere,
} from '@loopback/repository';
import { comunicationSMS } from '../services/sms.service'
import { authenticate } from '@loopback/authentication';
import { post, requestBody, RestBindings, param } from '@loopback/rest';
import { PermissionKeys } from '../authorization/permission-keys';
import { communicationSMSRequestBody, communicationEmailRequestBody, invoiceEmailRequestBody, PushALLRequestBody, communicationPushRequestBody, userOfferRequestBody } from './specs/user.controller.spec';
import { notificationEmail } from '../services/email.service'
import { sendPushNotification } from '../services/sns.service';
import { Gst } from '../models';
import { OrderRepository, FranchiseRepository, UserRepository, GstRepository } from '../repositories';

export class CommunicationController {
  numbers: string = '';
  playerId: string[] = [];

  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @repository(OrderRepository)
    public orderRepository: OrderRepository,
    @repository(FranchiseRepository)
    public franchiseRepository: FranchiseRepository,
    @repository(GstRepository)
    public gstRepository: GstRepository,
  ) { }

  @post('/comSMS', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async userSMS(@requestBody(communicationSMSRequestBody)
  userData: smsData) {
    const User = await this.userRepository.find({
      where: {
        status: userData.status,
        smsSubsciption: true,
        userType: 'user'
      },
    });
    User.forEach(element => {
      this.numbers = element.mobile + ', ' + this.numbers;
    });
    comunicationSMS(this.numbers, userData.body)
    return Promise.resolve({ code: 200, message: "send successfully" });
  }


  @post('/pushNotification/all', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async pushAll(@requestBody(PushALLRequestBody)
  data: pushAllData) {
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'https://onesignal.com/api/v1/notifications?included_segments=Active Users&app_id=40e26755-ae6a-459c-889b-34b4f2592db3\n',
      'headers': {
        'Authorization': '	Basic YWM0OGMzNjAtNmE3OC00MzBlLThiNDktMjY2NWI5MjY2YTAx',
        'Content-Type': 'application/json',
        'Cookie': '__cfduid=d9674a4748d11bf223a8a2de1db228ed71589192865'
      },
      body: JSON.stringify({ "contents": { "en": data.pushbody }, "headings": { "en": data.head } })
    };
    request(options, function (error: any, response: any) {
      if (error) throw new Error(error);
    });
    return Promise.resolve({ code: 200, message: "send successfully" });
  }

  @post('/userOffers', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async getOffers(@requestBody(userOfferRequestBody)
  data: userOffer) {
    const orders = await this.orderRepository.find({
      where: {
        userId: data.id
      },
      include: [
        {
          relation: 'franchise',
          scope: {
            include: [{ relation: 'instaCoupons' }],
          }
        },
      ],
    });
    let lastOrder = orders.pop();
    return lastOrder;
  }


  @post('/pushNotification', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async push(@requestBody(communicationPushRequestBody)
  data: pushActiveData) {
    const User = await this.userRepository.find({
      where: {
        pushSubsciption: true,
        status: data.status,
        userType: 'user'
      },
    });
    User.forEach(element => {
      if (element.deviceToken) {
        this.playerId.push(element.deviceToken!)
      }
    });
    let dataObject: any = {
      token: this.playerId,
      head: data.head,
      body: data.pushbody
    }
    sendPushNotification(dataObject)
    return Promise.resolve({ code: 200, message: "send successfully", user: User });
  }


  @post('/comEmail', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async userEmail(@requestBody(communicationEmailRequestBody)
  data: emailData) {
    const User = await this.userRepository.find({
      where: {
        status: data.status,
        emailSubsciption: true,
        userType: 'user'
      },
    });
    User.forEach(element => {
      let sendData = {
        email: element.email,
        subject: data.emailSubject,
        body: data.emailBody
      }
      notificationEmail(sendData);
    });
    return Promise.resolve({ code: 200, message: "send successfully" });
  }

  @post('/sendInvoice', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async sendInvoice(@requestBody(invoiceEmailRequestBody)
  data: orderData) {
    const order = await this.orderRepository.find({
      where: {
        id: data.orderId,
      },
      include: [
        {
          relation: 'user',
        },
        { relation: 'franchise' }
      ],
    });
    order.forEach(async element => {
      let d = new Date();
      element.date = d.getDate() + '/' + Number(d.getMonth() + 1) + '/' + d.getFullYear();
      if (element.promoCode == null) {
        element.promoCode = '';
      }
      if (element.promoDeductions == null || element.promoDeductions == 0) {
        element.promoDeductions = 0;
      }
      let originalPrice = Number(element.transactionAmount);
      let gst = element.gst = (await this.getGst(1)).gstValue;
      let taxableAmount: number = element.taxableAmount = Number((100 * originalPrice / (100 + gst)).toFixed(2))
      element.taxAmount = (originalPrice - taxableAmount).toFixed(2);
      const emailBody = `<html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
      <style media="screen">
        *{
          font-family: 'Roboto', sans-serif;
        }

      </style>
    </head>
    <body style="width:100%; font-family: 'Roboto', sans-serif;">
      <div class="emailbody" style="width:70%; margin: 1em auto; border: 5px solid #ededed; font-family: 'Roboto', sans-serif; padding: 1em;">
        <div style="text-align:center; background-color: #642E58; padding:1.3em; color: #fff; margin:1em 0 2em 0">
        <h1 style="font-family: 'Roboto', sans-serif;">Invoice for your order with coin laundromat</h1>
        </div>
        <h2>Retail Invoice</h2>
        <table style="width:100%">
          <tr style="height: 30px;">
            <td style="width:50%"><b>Invoice No : `+ element.invoice + `</b> </td>
            <td style="width:50%"><b>Date : `+ element.date + `</b></td>
          </tr>
          <tr style="height: 30px;">
            <td><b>Order No : 640909`+ element.id + `</b> </td>
            <td></td>
          </tr>
          <tr style="height: 30px;">
            <td><p style="margin-bottom: 0px;"><b>Seller Details :</b></p> <p style="line-height: 1.6em; margin-top: 7px;">Coin Laundry Equipment & Services (P) Ltd. <br/>NO.38/2,, MARATHAHALLI POST <br/> ASHWATH NAGAR, CHINNAPPANAHALLI, BENGALURU 560037</p></td>
            <td><p style="margin-bottom: 0px;"><b>Customer Details :</b></p><p style="line-height: 1.6em; margin-top: 7px;">`+ element.user.firstName + ` ` + element.user.lastName + `<br> ` + element.user.mobile + ` <br/> ` + element.user.email + `</p></td>
          </tr>
        </table>
        <hr>
        <h2>Order Details</h2>
        <table style="width:100%">
          <tr style="height: 30px;">
            <td style="width:50%"><b>Sub Total</b> </td>
            <td style="width:50%; text-align: right;">`+ element.amount + `</td>
          </tr>
          <tr style="height: 30px;">
            <td style="width:50%"><b>Promocode(</b> <span>`+ element.promoCode + `</span><b>)</b></td></td>
            <td style="width:50%; text-align: right;">-`+ element.promoDeductions + `</td>
          </tr>
          <tr style="height: 30px;">
            <td style="width:50%"><b>Wallet Deductions</b></td></td>
            <td style="width:50%; text-align: right;">-`+ element.walletDeductions + `</td>
          </tr>
          <tr style="height: 30px;">
            <td style="width:50%"><b>Taxable Amount</b></td></td>
            <td style="width:50%; text-align: right;">`+ element.taxableAmount + `</td>
          </tr>
          <tr style="height: 30px;">
            <td style="width:50%"><b>CGST + SGST(`+ element.gst + `%)</b></td></td>
            <td style="width:50%; text-align: right;">`+ element.taxAmount + `</td>
          </tr>
          <tr style="height: 30px;">
            <td style="width:50%"><b>Total Payable</b></td></td>
            <td style="width:50%; text-align: right;"><b style="border-top: 1px solid #000; padding: 0 0 0 3em; font-size: 140%;">`+ element.transactionAmount + `</b></td>
          </tr>
        </table>
        <hr>
        <div>
          <p style="margin: 0; padding:0;text-transform:capitalize; font-size: 80%;">Coin Laundry Equipment & Services (P) Ltd., NO.38/2,, MARATHAHALLI POST ASHWATHNAGAR, CHINNAPPANAHALLI BENGALURU 560037</p>
          <p style="margin: 0.5em 0; padding:0; font-size: 80%">info@coinlaundryindia.com</p>
        </div>
      </div>
    </body>
  </html>`
      let sendData = {
        email: element.user.email,
        subject: "Invoice for Order id  640909" + element.id + " with Coin Laundry",
        body: emailBody
      }
      notificationEmail(sendData);
    });
    return Promise.resolve({ code: 200, message: "send successfully" });
  }

  async getGst(
    @param.path.number('id') id: number,
    @param.filter(Gst, { exclude: 'where' }) filter?: FilterExcludingWhere<Gst>
  ): Promise<Gst> {
    return this.gstRepository.findById(id, filter);
  }

  @post('/sendOrderStatus', {
    responses: {
      '200': {
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  async sendStatus(@requestBody(invoiceEmailRequestBody)
  data: orderData) {
    const order = await this.orderRepository.find({
      where: {
        id: data.orderId,
      },
      include: [
        {
          relation: 'user',
        },
        { relation: 'franchise' }
      ],
    });
    order.forEach(element => {
      const emailBody = `<p>Dear customer, </p>\
    <p>Your Order No:`+ element.id + ` has been received.</p>\
    <p>Order Details</p>\
    <p>Order amount : `+ element.amount + `</p>\
    <p>Order Weight: `+ element.weight + `</p>\
    <p style="margin-top:2em">For further information check in mobile application</p>\
    <p style="margin-top:2em">Thanks</p>\
    <p>Coin Laundromat</p>'`
      let sendData = {
        email: element.user.email,
        subject: "Order Status mail",
        body: emailBody
      }
      notificationEmail(sendData);
    });
    return Promise.resolve({ code: 200, message: "send successfully" });
  }

}

export interface smsData {
  body: string,
  status: boolean
}

export interface emailData {
  emailSubject: string
  emailBody: string
  status: boolean
}

export interface orderData {
  orderId: string
}

export interface pushAllData {
  head: string,
  pushbody: string,
}

export interface pushActiveData {
  head: string,
  pushbody: string,
  status: boolean,
}

export interface userOffer {
  id: string
}
