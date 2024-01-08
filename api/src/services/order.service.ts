import config from '../datasources/mysql.datasource.config.json';
import { sendPushNotification } from './sns.service';
import { sendMail } from './email.service';
import { orderStatusSMS } from './sms.service';

var mysql = require('mysql');
const cron = require('node-cron')
var orderData: any;
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

var CurrentDate;

con.connect(function (err: any) {
    cron.schedule('* * * * *', async () => {
        console.log('Entered into corn every 5 Mins')
        let currentTimeStamp = Date.now();
        let diffTimeStamo = currentTimeStamp - (5 * 60000);
        console.log(currentTimeStamp)
        console.log(diffTimeStamo)
        // con.query("SELECT * FROM `Order` WHERE orderTimestamp BETWEEN " + diffTimeStamo + " AND " + currentTimeStamp, function (err: any, result: any, fields: any) {
        con.query("SELECT * FROM `Order` WHERE orderTimestamp <= " + diffTimeStamo + " AND orderStatus='ongoing' AND opertationType='self operated' AND btTrigger = 0  AND settlement = 0 limit 10 offset 0", function (err: any, result: any, fields: any) {
            if (err) throw err;
            console.log('orders data')
            console.log(result)
            settleWallet(result)
        });
        function settleWallet(data: any) {
            for (let i = 0; i < data.length; i++) {
                let element = data[i];
                // }
                // data.forEach((element: any) => {
                console.log('-------------------------------------------------------------------------')
                console.log("Each Order Data")
                console.log(element)

                con.query("Update `Order` SET paymentStatus='refunded', orderStatus='Cancelled', settlement = 1 WHERE orderStatus='ongoing' AND id='" + element.id + "'", function (err: any, result: any, fields: any) {
                    if (err) throw err;
                    console.log('update data')
                    console.log(result)

                    con.query("Select * from `Wallet` WHERE userId='" + element.userId + "'", function (err: any, result: any, fields: any) {
                        console.log('get wallet data')
                        result = JSON.parse(JSON.stringify(result))
                        console.log(result)
                        console.log(typeof (result[0].balance), result[0].balance)

                        let refundAmount = element.walletDeductions + element.transactionAmount - element.rewardAmount;
                        let updateBalance = result[0].balance + refundAmount
                        console.log(typeof (element.walletDeductions), element.walletDeductions)
                        console.log(typeof (element.transactionAmount), element.transactionAmount)
                        console.log(typeof (updateBalance), updateBalance)
                        con.query("UPDATE `Wallet` SET balance =" + updateBalance + " WHERE  userId=" + element.userId, function (err: any, result: any, fields: any) {
                            if (err) throw err;
                            console.log("updated Wallet")
                            console.log(result)
                        })
                        con.query("INSERT INTO `WalletHistory` (outletName, orderId, coins, userId, transactionType) VALUES ('REFUND', " + element.id + "," + refundAmount + "," + element.userId + ", 'credit')", function (err: any, result: any, fields: any) {
                            if (err) throw err;
                            console.log("updated wallet history")
                            console.log(result)
                        })
                    })
                })

                console.log('-------------------------------------------------------------------------')

            }
        }
        console.log('Corn CLosed');

    });
    cron.schedule('* * * * *', async () => {
        if (err) throw err;
        var restHeader = con.query("SELECT * FROM `Order` WHERE orderStatus='ongoing' AND opertationType='self operated'", function (err: any, result: any, fields: any) {
            if (err) throw err;

            for (let i = 0; i < result.length; i++) {
                orderData = result[i];
                let dateTime = new Date(result[i].endTime);
                let dateTimeConverted = dateTime.getTime();
                var currDate = new Date(),
                    CurrentDate = currDate.getTime();
                if (dateTimeConverted <= CurrentDate) {
                    dataupdate(JSON.parse(JSON.stringify(orderData)));
                }
            }
        });
        function dataupdate(data: any) {
            con.query("Update `Order` SET orderStatus='completed' WHERE orderStatus='ongoing' AND id='" + data.id + "'", function (err: any, result: any, fields: any) {
                if (err) throw err;
                userData(data.userId, data)
            })
        }

        function userData(id: number, data: any) {
            con.query("select * from `User` WHERE id='" + id + "'", function (err: any, result: any, fields: any) {
                if (err) throw err;
                let pushData = {
                    token: [result[0].deviceToken],
                    body: "Dear customer, Your wash is compleated",
                    head: 'Order Status'
                }
                sendPushNotification(pushData);
                result[0].order = data;
                result[0].body = "orderdelivery";
                sendMail(result[0]);
                orderStatusSMS(result[0]);
            })
        }
    });
})

export function updateuserData(userId: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    var d = new Date().getTime() + 19800000;
    var curDate = new Date(d).toISOString().slice(0, 19).replace('T', ' ');
    const walletData = con.query("Update `User` SET lastActivityDate='" + curDate + "', status=1 WHERE id='" + userId + "'", function (err: any, result: any, fields: any) {
        if (err) throw err;

    })
}



