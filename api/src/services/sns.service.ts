var request = require('request');
export function sendPushNotification(dataObject:any){
var options = {
  'method': 'POST',
  'url': 'https://onesignal.com/api/v1/notifications?app_id=40e26755-ae6a-459c-889b-34b4f2592db3',
  'headers': {
    'Content-Type': 'application/json',
    'Cookie': '__cfduid=d9674a4748d11bf223a8a2de1db228ed71589192865'
  },
  body: JSON.stringify({"include_player_ids":dataObject.token,
            "contents":{"en":dataObject.body},
            "headings":{"en":dataObject.head}
        })

};
request(options, function (error:any, response:any) { 
  if (error) throw new Error(error);
});
}