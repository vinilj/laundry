import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ToastService } from 'src/app/common/service/toast/toast.service';
import { UserapiService } from 'src/app/common/apilayer/APIs/userapi.service';
import { NavigationExtras } from '@angular/router';
import { stringify } from 'querystring';
import { BLE } from '@ionic-native/ble/ngx';
import { LocalStroageService } from 'src/app/common/service/localstorage/local-stroage.service';
// import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  phoneNumber: number

  countryCode: string = '+91'

  checkedPrivacy: boolean = false;
  devices: any[] = [];
  statusMessage: any;

  constructor(
    // private bluetoothSerial: BluetoothSerial,
    private ble: BLE,
    private ngZone: NgZone,
    private navctrl: NavController,
    private userService: UserapiService,
    private toasterService: ToastService,
    private localStorage: LocalStroageService
    ) { 
      localStorage.getStoredKey('viewedTutorial')
      .then(data=>{
        if(data=== null){
          this.navctrl.navigateRoot('onboarding')
        }
      })
    }

  ngOnInit() {
  }

  generateOTP() {

    if (this.phoneNumber > 999999999 && this.checkedPrivacy)
      this.userService.userSignup({ mobile: String(this.phoneNumber) })
        .subscribe(res => {
          let navigationExtras: NavigationExtras = {
            queryParams: {
              phoneNumber: this.phoneNumber
            }
          };
          this.navctrl.navigateForward('otp', navigationExtras)
        })
    else if (!this.checkedPrivacy)
      this.toasterService.toastFail('Please check the terms & conditions')

    else
      this.toasterService.toastFail('Please enter a valid phone number')


  }




  /**Bluetooth Feature starts */

  scan() {
    this.devices = [];  
    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
    );
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      if (device.name == 'MyESP32')
        this.devices.push(device);
    });

  }

  /**Bluetooth Feature starts to connect the device */

  connect(device) {
    let str = 'a'
    var buf = new ArrayBuffer(str.length); // 2 bytes for each char
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    } this.ble.connect(device.id)
      .subscribe(data => {
        this.ble.write(device.id, data.characteristics[data.characteristics.length - 1].service,
          data.characteristics[data.characteristics.length - 1].characteristic, buf)
          .then(data => {
            console.log(data)
            this.ble.disconnect(device.id)
          })
      })
  }
  /** Blue tooth code ends*/


  showPrivacy(){
    window.open('https://api.coinlaundryindia.com/files/privacy-policy.pdf','_system')
  }

  showLegal(){
    window.open(' https://api.coinlaundryindia.com/files/legal-information-disclaimer.pdf','_system')
  }


}
