
var request = require('request');
import config from '../datasources/mysql.datasource.config.json';
var mysql = require('mysql');
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

export function SendSMS(userData: any) {
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'http://www.businesssms.co.in/SMS.aspx?Id=info@coinlaundromate.com&Pwd=CFT^vgy7@123&TemplateID=1007983007339375444&PhNo=' + userData.mobile + '&text=Thanks for choosing Coin Laundromat, Your OTP is ' + userData.otp + '&SenderID=COINLA&DlrUrl=',
        'headers': {
        }
    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
    });
}


// communication SMS generation

export function comunicationSMS(numbers: string, body: string) {
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'http://www.businesssms.co.in/SMS.aspx?Id=info@coinlaundromate.com&Pwd=CFT^vgy7@123&PhNo=' + numbers + '&text=' + body + '&SenderID=COINLA&DlrUrl=',
        'headers': {
        }
    };
    request(options, function (error: string | undefined, response: { body: any; }) {
        if (error) throw new Error(error);
    });
}

// export function orderStatusSMS(numbers:string, body:string) {
//     var request = require('request');
//     var options = {
//     'method': 'GET',
//     'url': 'http://www.businesssms.co.in/SMS.aspx?Id=info@coinlaundromate.com&Pwd=CFT^vgy7@123&PhNo='+numbers+'&text='+body+'&SenderID=COINLA&DlrUrl=',
//     'headers': {
//     }
//     };
//     request(options, function (error: string | undefined, response: { body: any; }) {
//     if (error) throw new Error(error);
//     });
// }

export function orderStatusSMS(data: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }

    switch (data.body) {
        case 'orderCreation': {
            data.message = 'Dear Customer, Your Order ' + data.id + ' has been successfully booked. Thanks for Choosing Coin Laundromat';
	    data.airtel  = '1007195786870929264';
            break;
        }
        case 'orderdelivery': {
            data.message = 'Dear Customer, Your Order ' + data.order.id + ' has been delivered, please provide your feedback for this order .Thanks for Choosing Coin Laundromat';
	    data.airtel = '1007118264154105586';
            break;
        }
        case 'recharge': {
            data.message = 'Dear Customer, your recharge successfull!  ' + data.coins + ' coins added to your wallet. Thanks for using Choosing Laundromat';
	    data.airtel = '1007361075113312040';
            break;
        }
        case 'dropofforderstatus': {
            data.message = 'Dear Customer, Your Order ' + data.id + ' has been ' + data.orderStatus + '. Thanks for Choosing Coin Laundromat';
	    data.airtel = '1007497845571359193';
            break;
        }
        case 'dropofforderdelivery': {
            data.message = 'Dear Customer, Your Order ' + data.id + ' has been delivered, please provide your feedback for this order .Thanks for Choosing Coin Laundromat';
	    data.airtel = '1007118264154105586';
            break;
        }
        case 'dropoffpayment': {
            data.message = 'Dear Customer, payment of INR ' + (data.amount - data.promoDeductions) + ' has been received towards your Order id ' + data.id + '. Thanks for using Coin Laundromat';
	    data.airtel = '1007812551861243181';
            break;
        }
    }

    if (data.body == 'orderdelivery') {
        con.query("SELECT * FROM `User` WHERE id='" + data.id + "'", function (err: any, result: any, fields: any) {
            if (result[0].mobile) {
                sms(result[0].mobile);
            }
        })
    }
    else {
        con.query("SELECT * FROM `User` WHERE id='" + data.userId + "'", function (err: any, result: any, fields: any) {
            if (result[0].mobile) {
                sms(result[0].mobile);
            }
        })
    }
    function sms(mobile: any) {
        var request = require('request');
        var options = {
            'method': 'GET',
	    'url': 'http://www.businesssms.co.in/SMS.aspx?Id=info@coinlaundromate.com&Pwd=CFT^vgy7@123&PhNo=' + mobile +'&TemplateID='+data.airtel+'&text=' + data.message + '&SenderID=COINLA&DlrUrl=',
            'headers': {
            }
        };
        request(options, function (error: string | undefined, response: { body: any; }) {
            if (error) throw new Error(error);
        });
    }
}
