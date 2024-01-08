import config from '../datasources/mysql.datasource.config.json';
import { HttpErrors } from '@loopback/rest';

var mysql = require('mysql');
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});


export function importExcelData(data:any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    data.forEach((element: any) => {
        con.query("INSERT INTO `RechargeWallet` (couponCode, coins, status) values ('"+element[0]+"','"+element[1]+"',0)", function (err: any, result: any, fields: any) {
        if (err){
            throw new HttpErrors.NotAcceptable('Failed');
        };
    })
    });
    
}

// con.query("INSERT INTO `Wallet` (balance, userId)VALUES ('0','" + UserData.id + "')", function (err: any, result: any, fields: any) {
