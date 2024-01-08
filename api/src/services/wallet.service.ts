import config from '../datasources/mysql.datasource.config.json';
import { sendPushNotification } from './sns.service';

var mysql = require('mysql');
var con = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

export function walletAmount(userId: any, deductionAmount: any, totalAmount: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    const walletData = con.query("SELECT * FROM `Wallet` WHERE userId='" + userId + "'", function (err: any, result: any, fields: any) {
        if (err) throw err;
    })
}

export function addWalletUser(UserData: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    con.query("INSERT INTO `Wallet` (balance, userId)VALUES ('0','" + UserData.id + "')", function (err: any, result: any, fields: any) {
        if (err) throw err;
    })
}

export function updateWallet(userId: any, coins: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    currentBalance(userId, coins);
    function currentBalance(userId: any, balance: any) {
        con.query("SELECT balance FROM `Wallet` WHERE userId='" + userId + "'", function (err: any, result: any, fields: any) {
            if (err) throw err;
            const updatedBalance = balance + result[0].balance;
            updateBalance(userId, updatedBalance);
            return result[0].balance
        })
    }
    function updateBalance(userId: any, updatedBalance: any) {
        con.query("UPDATE `Wallet` SET balance ='" + updatedBalance + "' WHERE userId='" + userId + "'", function (err: any, result: any, fields: any) {
            if (err) throw err;
        })
        if (updatedBalance > 0) {
            con.query("INSERT INTO `WalletHistory` (outletName, orderId, coins, transactionType, userId) VALUES ('Online Recharge','','" + coins + "','credit','" + userId + "')", function (err: any, result: any, fields: any) {
                if (err) throw err;
            })
        }
    }
}

export function updateRechargeTable(user: any, couponNumber: number | undefined) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    con.query("UPDATE `RechargeWallet` SET status = 1, usedDate = CURRENT_TIMESTAMP, userId = '" + user.id + "', mobile = '" + user.mobile + "' where id ='" + couponNumber + "'", function (err: any, result: any, fields: any) {
        if (err) throw err;
    })
}

var deduction: boolean;
export async function walletDeduction(userId: any, coins: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    currentBalance(userId, coins);
    function currentBalance(userId: any, deductionBalance: any) {
        con.query("SELECT balance FROM `Wallet` WHERE userId='" + userId + "'", function (err: any, result: any, fields: any) {
            if (err) throw err;
            deduction = result[0].balance >= deductionBalance
            if (deduction) {
                const updatedBalance = result[0].balance - deductionBalance;
                updateWalletBalance(userId, updatedBalance);
            }
        })
    }
    function updateWalletBalance(userId: number, updatedBalance: number) {
        con.query("UPDATE `Wallet` SET balance=" + updatedBalance + " WHERE userId=" + userId, function (err: any, result: any, fields: any) {
            if (err) throw err;
        })
    }
}

export function RewardWallet(userId: any, order: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }
    let rewardAmount = order.rewardAmount;
    currentBalance(userId, rewardAmount);
    function currentBalance(userId: any, rewardAmount: any) {
        con.query("SELECT balance FROM `Wallet` WHERE userId='" + userId + "'", function (err: any, result: any, fields: any) {
            if (err) throw err;
            const updatedBalance = rewardAmount + result[0].balance;
            updateWalletBalance(userId, updatedBalance, rewardAmount);
        })
    }
    function updateWalletBalance(userId: any, updatedBalance: any, rewardAmount: any) {

        con.query("UPDATE `Wallet` SET balance ='" + updatedBalance + "' WHERE userId='" + userId + "'", function (err: any, result: any, fields: any) {
            if (err) throw err;
            let rewardData = {};
            pushNotification(userId);
        })
        function pushNotification(id: number) {
            con.query("SELECT * FROM `User` WHERE id='" + id + "'", function (err: any, result: any, fields: any) {
                if (err) throw err;
                let userPushData = result[0];
                let pushData = {
                    token: [userPushData.deviceToken],
                    body: 'Rewards of ' + rewardAmount + ' coins for order id ' + order.id + ' added to your wallet \n Thanks for using Coin Laundromat',
                    head: 'Order Rewards'
                }
                if (rewardAmount > 0) {
                    sendPushNotification(pushData)
                }
            })
        }
        con.query("UPDATE `Order` SET rewardAmount ='" + rewardAmount + "' WHERE id='" + order.id + "'", function (err: any, result: any, fields: any) {
            if (err) throw err;
        })
    }
}


export function walletDeductionHistory(order: any) {
    if (!con._connectCalled) {
        con.connect(function (err: any) {
            if (err) throw err;
        })
    }

    con.query("SELECT * FROM `Franchise` WHERE id='" + order.franchiseId + "'", function (err: any, result: any, fields: any) {
        if (err) throw err;
        let franchiseData = result[0];
        updateHistory(franchiseData.name, order);
        return result[0]
    })

    function updateHistory(franchiseName: any, order: any) {
        if (order.walletDeductions > 0) {
            con.query("INSERT INTO `WalletHistory` (outletName, orderId, coins, transactionType, userId) VALUES ('" + franchiseName + "','" + order.id + "','" + order.walletDeductions + "','Debit','" + order.userId + "')", function (err: any, result: any, fields: any) {
                if (err) throw err;
            })
        }
        if (order.rewardAmount > 0) {
            con.query("INSERT INTO `WalletHistory` (outletName, orderId, coins, transactionType, userId) VALUES ('" + franchiseName + "','" + order.id + "','" + order.rewardAmount + "','credit','" + order.userId + "')", function (err: any, result: any, fields: any) {
                if (err) throw err;
            })
        }
    }
}



