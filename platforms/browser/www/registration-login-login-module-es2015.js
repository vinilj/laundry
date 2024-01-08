(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/login/login.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/login/login.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid class=\"input-position\">\n    <ion-row>\n      <ion-col>\n        <h2>Enter your phone number</h2>\n        <h5 class=\"color-gray thin-font ion-no-margin\">We will send you 4 digit verfication code</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size='2'>\n        <ion-input class=\"num-input\" value=\"+91\"></ion-input>\n      </ion-col>\n      <ion-col size='10'>\n        <ion-input type=\"tel\" [(ngModel)]=\"phoneNumber\" class=\"num-input\" placeholder=\"9876543210\" maxlength=\"10\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"generateOTP()\">Generate OTP</ion-button>\n\n    <ion-item class=\"input-transperent-border\">\n      <ion-checkbox [(ngModel)]=\"checkedPrivacy\" class=\"terms-checkbox\"></ion-checkbox>\n      <h5 class=\"color-gray thin-font\">Signup with your accepting coin laundry terms & conditions, privacy policy and\n        product info.</h5>\n    </ion-item>\n    <!-- <ion-list> \n      <div ion-item *ngFor=\"let device of devices\">\n        <h2>{{ device.name || 'Unnamed' }}</h2>\n        <p>{{ device.id }}</p>\n        <p>RSSI: {{ device.rssi }}</p>\n        <ion-button  color=\"primary\" float-right (click)=\"connect(device)\">connect</ion-button>\n            </div>  \n     </ion-list>  -->\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/registration/login/login-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/registration/login/login-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/registration/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/registration/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/registration/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/registration/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/registration/login/login.page.ts");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        providers: [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__["BLE"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/registration/login/login.page.scss":
/*!****************************************************!*\
  !*** ./src/app/registration/login/login.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  margin: 1em 0;\n  letter-spacing: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL2xvZ2luL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFxyZWdpc3RyYXRpb25cXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXR7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xufSIsImlvbi1pbnB1dCB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/registration/login/login.page.ts":
/*!**************************************************!*\
  !*** ./src/app/registration/login/login.page.ts ***!
  \**************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/service/toast/toast.service */ "./src/app/common/service/toast/toast.service.ts");
/* harmony import */ var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/apilayer/APIs/userapi.service */ "./src/app/common/apilayer/APIs/userapi.service.ts");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");






// import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
let LoginPage = class LoginPage {
    constructor(
    // private bluetoothSerial: BluetoothSerial,
    ble, ngZone, navctrl, userService, toasterService) {
        this.ble = ble;
        this.ngZone = ngZone;
        this.navctrl = navctrl;
        this.userService = userService;
        this.toasterService = toasterService;
        this.countryCode = '+91';
        this.checkedPrivacy = true;
        this.devices = [];
    }
    ngOnInit() {
    }
    generateOTP() {
        if (this.phoneNumber > 999999999 && this.checkedPrivacy)
            this.userService.userSignup({ mobile: String(this.phoneNumber) })
                .subscribe(res => {
                let navigationExtras = {
                    queryParams: {
                        phoneNumber: this.phoneNumber
                    }
                };
                this.navctrl.navigateForward('otp', navigationExtras);
            });
        else if (!this.checkedPrivacy)
            this.toasterService.toastFail('Please check the terms & conditions');
        else
            this.toasterService.toastFail('Please enter a valid phone number');
    }
    /**Bluetooth Feature starts */
    scan() {
        this.devices = [];
        this.ble.scan([], 5).subscribe(device => this.onDeviceDiscovered(device));
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
        let str = 'a';
        var buf = new ArrayBuffer(str.length); // 2 bytes for each char
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        this.ble.connect(device.id)
            .subscribe(data => {
            this.ble.write(device.id, data.characteristics[data.characteristics.length - 1].service, data.characteristics[data.characteristics.length - 1].characteristic, buf)
                .then(data => {
                console.log(data);
                this.ble.disconnect(device.id);
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_5__["BLE"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"] },
    { type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/registration/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_5__["BLE"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"], src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=registration-login-login-module-es2015.js.map