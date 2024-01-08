(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/welcome/welcome.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/welcome/welcome.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n\n    <p class=\"name\" *ngIf=\"user\">Hey {{user.name}}</p>\n    <h1 class=\"welcome\">Welcome to, <br> Wash <span class=\"company-name\">by coin laundrymat</span></h1>\n    <h5 class=\"thin-font color-white ion-no-margin\">\n      Unlocking new deals every day, choose the best deal\n      you have today\n    </h5>\n\n    <div class=\"margin-top-welcome\">\n      <ion-item class=\"input-transperent-border\">\n        <ion-label>Kudos this is your second wash get 40%</ion-label>\n        <ion-radio slot=\"start\" value=\"biff\" disabled=\"true\" checked></ion-radio>\n      </ion-item>\n      <ion-item class=\"input-transperent-border\">\n        <ion-label>You have {{totalWalletBalance}} coins in your wallet use them\n          at the time fo billing</ion-label>\n        <ion-radio slot=\"start\" value=\"biff\" disabled=\"true\" checked></ion-radio>\n      </ion-item>\n      <ion-item class=\"input-transperent-border\">\n        <ion-label>Get 30 coins on minimum billing of 300\n          rupees</ion-label>\n        <ion-radio slot=\"start\" value=\"biff\" disabled=\"true\" checked></ion-radio>\n      </ion-item>\n    </div>\n\n\n  </ion-grid>\n  <ion-button class=\"white-btn\" expand=\"block\" (click)=\"submit()\">Start</ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/welcome/welcome-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs/welcome/welcome-routing.module.ts ***!
  \********************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/tabs/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/welcome/welcome.module.ts":
/*!************************************************!*\
  !*** ./src/app/tabs/welcome/welcome.module.ts ***!
  \************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/tabs/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/tabs/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/tabs/welcome/welcome.page.scss":
/*!************************************************!*\
  !*** ./src/app/tabs/welcome/welcome.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-primary);\n  --color: #ffffff;\n}\n\nion-item {\n  --background: var(--ion-color-primary);\n  color: #ffffff;\n}\n\nion-item ion-label {\n  white-space: inherit;\n  text-overflow: unset;\n  padding-left: 1em;\n  font-size: 14px;\n  opacity: 1 !important;\n}\n\nion-item ion-radio {\n  --color: #ffffff;\n  --color-checked: #ffffff;\n  margin: 0;\n  opacity: 1 !important;\n}\n\n.white-btn {\n  color: #642e58;\n  font-weight: 800;\n  --background: white;\n  margin: 0 1em;\n  position: absolute;\n  bottom: 10%;\n  width: -webkit-fill-available;\n  border-radius: 5px;\n}\n\n.name {\n  font-weight: bold;\n  margin-top: 4em;\n  color: #ffffff;\n}\n\n.welcome {\n  font-weight: bolder;\n  font-size: 40px;\n  line-height: 49px;\n  color: #ffffff;\n}\n\n.company-name {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px;\n  color: #ffffff;\n}\n\np {\n  color: #ffffff;\n}\n\n.margin-top-welcome {\n  margin: 25% -1em 0 -1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy93ZWxjb21lL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFx0YWJzXFx3ZWxjb21lXFx3ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usc0NBQUE7RUFDQSxjQUFBO0FDRUY7O0FEREU7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNHSjs7QURERTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFFQSxTQUFBO0VBQ0EscUJBQUE7QUNFSjs7QURDQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0FDS0Y7O0FESEE7RUFDRSx1QkFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvdGFicy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBpb24tbGFiZWwge1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLXJhZGlvIHtcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICAvLyBtYXJnaW46IDAgMCAxLjVlbSAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi53aGl0ZS1idG4ge1xuICBjb2xvcjogIzY0MmU1ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDRlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDlweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY29tcGFueS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxucCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm1hcmdpbi10b3Atd2VsY29tZSB7XG4gIG1hcmdpbjogMjUlIC0xZW0gMCAtMWVtO1xufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZS1idG4ge1xuICBjb2xvcjogIzY0MmU1ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNGVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLndlbGNvbWUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxucCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubWFyZ2luLXRvcC13ZWxjb21lIHtcbiAgbWFyZ2luOiAyNSUgLTFlbSAwIC0xZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/tabs/welcome/welcome.page.ts":
/*!**********************************************!*\
  !*** ./src/app/tabs/welcome/welcome.page.ts ***!
  \**********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/apilayer/APIs/userapi.service */ "./src/app/common/apilayer/APIs/userapi.service.ts");
/* harmony import */ var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/service/localstorage/local-stroage.service */ "./src/app/common/service/localstorage/local-stroage.service.ts");






let WelcomePage = class WelcomePage {
    constructor(navctrl, localStorage, statusbar, userService) {
        this.navctrl = navctrl;
        this.localStorage = localStorage;
        this.statusbar = statusbar;
        this.userService = userService;
        this.totalWalletBalance = 0;
        statusbar.backgroundColorByHexString('#642e58');
        statusbar.styleLightContent();
        userService.getUserData()
            .subscribe(res => {
            // this.user = res
            // console.log(res);
            userService.getUserDataById(res.id)
                .subscribe(res => {
                this.user = res;
                if (res.userType == "storeoperator")
                    this.navctrl.navigateForward('/storelist');
            });
            // localStorage.setStorageKey('user', res)
        });
    }
    ngOnInit() {
        this.getUserWalletData();
    }
    getUserWalletData() {
        this.userService.getUserIdFromStorage()
            .then(() => {
            this.totalWalletBalance = 0;
            this.userService.getUserWallet()
                .subscribe(res => {
                console.log(res, 'wallet');
                this.totalWalletBalance += res[0].balance;
            });
        });
    }
    submit() {
        this.navctrl.navigateForward('/tabs/tab1');
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"] }
];
WelcomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/welcome/welcome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.page.scss */ "./src/app/tabs/welcome/welcome.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map