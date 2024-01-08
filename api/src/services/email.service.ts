var mail = require('mail');
var nodemailer = require('nodemailer');
import config from '../datasources/mysql.datasource.config.json';
import { HttpErrors } from '@loopback/rest';
import { EMAIL_CONFIG } from '../keys';

var mysql = require('mysql');
var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

// const EmailCredentials: any = EMAIL_CONFIG;

export function sendMail(data: any) {
  if (!con._connectCalled) {
    con.connect(function (err: any) {
      if (err) throw err;
    })
  }
  var emailData: any = {};
  switch (data.body) {
    case 'orderCreation': {
      emailData.subject = 'Order created succcessfull';
      emailData.body = `<html lang="en" dir="ltr">
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
                  <td style="width:50%"><b>Invoice No : `+ data.invoice + `</b> </td>
                  <td style="width:50%"><b>Date : `+ data.date + `</b></td>
                </tr>
                <tr style="height: 30px;">
                  <td><b>Order No : 640909`+ data.id + `</b> </td>
                  <td></td>
                </tr>
                <tr style="height: 30px;">
                  <td><p style="margin-bottom: 0px;"><b>Seller Details :</b></p> <p style="line-height: 1.6em; margin-top: 7px;">Coin Laundry Equipment & Services (P) Ltd. <br/>NO.38/2,, MARATHAHALLI POST <br/> ASHWATH NAGAR, CHINNAPPANAHALLI, BENGALURU 560037</p></td>
                  <td><p style="margin-bottom: 0px;"><b>Customer Details :</b></p><p style="line-height: 1.6em; margin-top: 7px;">`+ data.user.name + `<br> ` + data.user.phone + ` <br/> ` + data.user.email + `</p></td>
                </tr>
              </table>
              <hr>
              <h2>Order Details</h2>
              <table style="width:100%">
                <tr style="height: 30px;">
                  <td style="width:50%"><b>Sub Total</b> </td>
                  <td style="width:50%; text-align: right;">`+ data.amount + `</td>
                </tr>
                <tr style="height: 30px;">
                  <td style="width:50%"><b>Promocode(</b> <span>`+ data.promoCode + `</span><b>)</b></td></td>
                  <td style="width:50%; text-align: right;">-`+ data.promoDeductions + `</td>
                </tr>
                <tr style="height: 30px;">
                  <td style="width:50%"><b>Wallet Deductions</b></td></td>
                  <td style="width:50%; text-align: right;">-`+ data.walletDeductions + `</td>
                </tr>
                <tr style="height: 30px;">
                  <td style="width:50%"><b>Taxable Amount</b></td></td>
                  <td style="width:50%; text-align: right;">`+ data.taxableAmount + `</td>
                </tr>
                <tr style="height: 30px;">
                  <td style="width:50%"><b>CGST + SGST(`+ data.gst + `%)</b></td></td>
                  <td style="width:50%; text-align: right;">`+ data.taxAmount + `</td>
                </tr>
                <tr style="height: 30px;">
                  <td style="width:50%"><b>Total Payable</b></td></td>
                  <td style="width:50%; text-align: right;"><b style="border-top: 1px solid #000; padding: 0 0 0 3em; font-size: 140%;">`+ data.transactionAmount + `</b></td>
                </tr>
              </table>
              <hr>
              <div>
                <p style="margin: 0; padding:0; line-height:0.8em; text-transform:capitalize; font-size: 80%;">Coin Laundry Equipment & Services (P) Ltd., NO.38/2,, MARATHAHALLI POST ASHWATHNAGAR, CHINNAPPANAHALLI BENGALURU 560037</p>
                <p style="margin: 0.5em 0; padding:0; line-height:0.8em; font-size: 80%">info@coinlaundryindia.com</p>
              </div>
            </div>
          </body>
        </html>`
      break;
    }
    case 'orderdelivery': {
      emailData.subject = 'Order has been delivered';
      emailData.body = '<p>Dear customer, </p>\
       <p>Your Order No:'+ data.order.id + ' has been delivered, please provide your feedback for this order.</p>\
       <p style="margin-top:2em">We hope to see you again soon!</p>\
       <p>Coin Laundromat</p>';
      break;
    }
    case 'recharge': {
      emailData.subject = 'Your Rechatge Successfull';
      emailData.body = '<p>Dear customer, </p>\
       <p>Your recharge of '+ data.coins + ' coins is successful.</p>\
       <p style="margin-top:2em">We hope to see you again soon!</p>\
       <p>Coin Laundromat</p>';
      break;
    }
    case 'dropofforderdelivery': {
      emailData.subject = 'Order has been Compleated';
      emailData.body = '<p>Dear customer, </p>\
      <p>Your Order No:'+ data.id + ' has been delivered, please provide your feedback for this order.</p>\
      <p style="margin-top:2em">We hope to see you again soon!</p>\
      <p>Coin Laundromat</p>';
      break;
    }
    case 'dropofforderstatus': {
      emailData.subject = 'Order Status';
      emailData.body = '<p>Dear customer, </p>\
      <p>Your Order No:'+ data.id + ' has been received.</p>\
      <p>Order Details</p>\
      <p>Order amount : '+ data.amount + '</p>\
      <p>Order Weight: '+ data.weight + '</p>\
      <p style="margin-top:2em">For further information check in mobile application</p>\
      <p style="margin-top:2em">Thanks</p>\
      <p>Coin Laundromat</p>';
      break;
    }
    case 'dropoffpayment': {
      emailData.subject = 'payment has succcessfull';
      emailData.body = `<html lang="en" dir="ltr">
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
              <td style="width:50%"><b>Invoice No : `+ data.invoice + `</b> </td>
              <td style="width:50%"><b>Date : `+ data.date + `</b></td>
            </tr>
            <tr style="height: 30px;">
              <td><b>Order No : 640909`+ data.id + `</b> </td>
              <td></td>
            </tr>
            <tr style="height: 30px;">
              <td><p style="margin-bottom: 0px;"><b>Seller Details :</b></p> <p style="line-height: 1.6em; margin-top: 7px;">Coin Laundry Equipment & Services (P) Ltd. <br/>NO.38/2,, MARATHAHALLI POST <br/> ASHWATH NAGAR, CHINNAPPANAHALLI, BENGALURU 560037</p></td>
              <td><p style="margin-bottom: 0px;"><b>Customer Details :</b></p><p style="line-height: 1.6em; margin-top: 7px;">`+ data.user.name + `<br> ` + data.user.phone + ` <br/> ` + data.user.email + `</p></td>
            </tr>
          </table>
          <hr>
          <h2>Order Details</h2>
          <table style="width:100%">
            <tr style="height: 30px;">
              <td style="width:50%"><b>Sub Total</b> </td>
              <td style="width:50%; text-align: right;">`+ data.amount + `</td>
            </tr>
            <tr style="height: 30px;">
              <td style="width:50%"><b>Promocode(</b> <span>`+ data.promoCode + `</span><b>)</b></td></td>
              <td style="width:50%; text-align: right;">-`+ data.promoDeductions + `</td>
            </tr>
            <tr style="height: 30px;">
              <td style="width:50%"><b>Wallet Deductions</b></td></td>
              <td style="width:50%; text-align: right;">-`+ data.walletDeductions + `</td>
            </tr>
            <tr style="height: 30px;">
              <td style="width:50%"><b>Taxable Amount</b></td></td>
              <td style="width:50%; text-align: right;">`+ data.taxableAmount + `</td>
            </tr>
            <tr style="height: 30px;">
              <td style="width:50%"><b>CGST + SGST(`+ data.gst + `%)</b></td></td>
              <td style="width:50%; text-align: right;">`+ data.taxAmount + `</td>
            </tr>
            <tr style="height: 30px;">
              <td style="width:50%"><b>Total Payable</b></td></td>
              <td style="width:50%; text-align: right;"><b style="border-top: 1px solid #000; padding: 0 0 0 3em; font-size: 140%;">`+ data.transactionAmount + `</b></td>
            </tr>
          </table>
          <hr>
          <div>
            <p style="margin: 0; padding:0; line-height:0.8em; text-transform:capitalize; font-size: 80%;">Coin Laundry Equipment & Services (P) Ltd., NO.38/2,, MARATHAHALLI POST ASHWATHNAGAR, CHINNAPPANAHALLI BENGALURU 560037</p>
            <p style="margin: 0.5em 0; padding:0; line-height:0.8em; font-size: 80%">info@coinlaundryindia.com</p>
          </div>
        </div>
      </body>
    </html>`
      break;
    }
  }
  if (data.body == 'orderdelivery') {
    con.query("SELECT * FROM `User` WHERE id='" + data.id + "'", function (err: any, result: any, fields: any) {
      if (result[0].email) {
        sendEmail(result[0].email);
      }
    })
  }
  else {
    con.query("SELECT * FROM `User` WHERE id='" + data.userId + "'", function (err: any, result: any, fields: any) {
      if (result[0].email) {
        sendEmail(result[0].email);
      }
    })
  }
  function sendEmail(userEmail: any) {
    var transporter = nodemailer.createTransport(EMAIL_CONFIG);
    var mailOptions = {
      from: EMAIL_CONFIG.auth.user,
      to: userEmail,
      subject: emailData.subject,
      html: emailData.body,
    };
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      console.log(error)
    });
  }
}

export function notificationEmail(data: any) {
  var transporter = nodemailer.createTransport(EMAIL_CONFIG);
  var mailOptions = {
    from: EMAIL_CONFIG.auth.user,
    to: data.email,
    subject: data.subject,
    html: data.body,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    console.log(error)
  });
}
