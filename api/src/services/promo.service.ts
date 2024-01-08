import config from '../datasources/mysql.datasource.config.json';

var mysql = require('mysql');
const cron = require('node-cron')
var orderData: any;
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});
var offerData: any;

con.connect(function (err: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    cron.schedule('*/60 * * * *', async () => {  
        if (err) throw err;
        con.query("SELECT * FROM `InstaCoupons` where status = '1'", function (err: any, result: any, fields: any) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++) {
                offerData = result[i];
                let dateTime = new Date(result[i].toDate);
                let expTime = dateTime.getTime()+120000;//15768099000
                var currDate = new Date(),
                    CurrentDate = currDate.getTime();
                if (expTime <= CurrentDate) {
                    dataupdate(JSON.parse(JSON.stringify(offerData)));
                }               
            }
        });

        function dataupdate(data: any) {
            con.query("delete from `InstaCoupons` where id ='" + data.id + "'", function (err: any, result: any, fields: any) {
                if (err) throw err;
            })
        }

    });
})