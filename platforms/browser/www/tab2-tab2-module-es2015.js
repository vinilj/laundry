(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab2/tab2.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab2/tab2.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"background-primary\">\n  <ion-grid>\n    <h4 class=\"color-white thin-font wallet-heading\">Rewared Coins\n      <span style=\"margin-left: 26px;\">\n       {{totalWalletBalance}}\n      </span>\n    </h4>\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"secondary\" expand=\"block\">Rewards</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"addCoupons()\">Recharge</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-card class=\" gray-color earned-card\">\n      <h4 style=\"color: #E86F00;\" class=\"thin-font\">You Have Earned {{totalWalletBalance}} coins</h4>\n      <h6 class=\"thin-font color-gray ion-no-margin\">*You can use coins at the time of payment</h6>\n\n    </ion-card>\n\n    <ul class=\"progress\">\n      <li *ngFor=\"let item of allOrders\">\n        <h5>{{item.franchise.name}}\n          <span class=\"ion-float-right\">{{item.amount}} INR</span>\n        </h5>\n        <h5 class=\"ion-no-margin thin-font\">{{item.startTime | dateTime}}</h5>\n        <h5 class=\"ion-no-margin thin-font\">Wash ID-640909{{item.id}}</h5>\n        <h5 class=\"thin-font round-btn-bordered\" *ngIf=\"item.rewardAmount\">Kudos {{item.rewardAmount}} coins added to wallet</h5>\n      </li>\n     \n    </ul>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/tab2/tab2.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/tab2/tab2.module.ts ***!
  \******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tabs/tab2/tab2.page.ts");
/* harmony import */ var _common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/service/pipe/pipes.module */ "./src/app/common/service/pipe/pipes.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tabs/tab2/tab2.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/tab2/tab2.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress {\n  padding-left: 3em;\n  list-style-type: none !important;\n}\n\nul.progress li {\n  position: relative;\n  margin-bottom: 0;\n  padding-bottom: 1em;\n}\n\nul.progress li:after {\n  content: \"\";\n  position: absolute;\n  left: -2.5em;\n  top: 0px;\n  border: 0.6em solid #2b9f02;\n  border-radius: 50%;\n}\n\nul.progress li:before {\n  content: \"\";\n  position: absolute;\n  left: -2em;\n  border-left: 2px dashed #2b9f02;\n  height: 120%;\n  width: 1px;\n}\n\n.round-btn-bordered {\n  border: 1px solid #2b9f02;\n  text-align: center;\n  border-radius: 15px;\n  padding: 4px 12px;\n  font-size: 0.8em;\n  margin: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.wallet-heading {\n  margin: 4em 0 1em 0;\n}\n\n.earned-card {\n  box-shadow: none;\n  padding: 1.5em 1em;\n}\n\n.earned-card h4 {\n  margin: 0;\n}\n\nion-button {\n  font-size: 14px;\n  margin-bottom: 1em;\n  height: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWIyL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFx0YWJzXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURKRTtFQUNFLFNBQUE7QUNNSjs7QURIQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcyB7XG4gIHBhZGRpbmctbGVmdDogM2VtO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmUgIWltcG9ydGFudDtcbn1cbnVsLnByb2dyZXNzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG51bC5wcm9ncmVzcyBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTIuNWVtO1xuICB0b3A6IDBweDtcbiAgYm9yZGVyOiAwLjZlbSBzb2xpZCAjMmI5ZjAyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbnVsLnByb2dyZXNzIGxpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTJlbTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBkYXNoZWQgIzJiOWYwMjtcbiAgaGVpZ2h0OiAxMjAlO1xuICB3aWR0aDogMXB4O1xufVxuLnJvdW5kLWJ0bi1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYjlmMDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLndhbGxldC1oZWFkaW5nIHtcbiAgbWFyZ2luOiA0ZW0gMCAxZW0gMDtcbn1cbi5lYXJuZWQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEuNWVtIDFlbTtcbiAgaDQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBoZWlnaHQ6IDRlbTtcbn1cbiIsIi5wcm9ncmVzcyB7XG4gIHBhZGRpbmctbGVmdDogM2VtO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxudWwucHJvZ3Jlc3MgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbnVsLnByb2dyZXNzIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMi41ZW07XG4gIHRvcDogMHB4O1xuICBib3JkZXI6IDAuNmVtIHNvbGlkICMyYjlmMDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxudWwucHJvZ3Jlc3MgbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMmVtO1xuICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCAjMmI5ZjAyO1xuICBoZWlnaHQ6IDEyMCU7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi5yb3VuZC1idG4tYm9yZGVyZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMmI5ZjAyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLndhbGxldC1oZWFkaW5nIHtcbiAgbWFyZ2luOiA0ZW0gMCAxZW0gMDtcbn1cblxuLmVhcm5lZC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMS41ZW0gMWVtO1xufVxuLmVhcm5lZC1jYXJkIGg0IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGhlaWdodDogNGVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tab2/tab2.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tab2/tab2.page.ts ***!
  \****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/apilayer/APIs/orderapi.service */ "./src/app/common/apilayer/APIs/orderapi.service.ts");
/* harmony import */ var _common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/apilayer/APIs/userapi.service */ "./src/app/common/apilayer/APIs/userapi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/service/toast/toast.service */ "./src/app/common/service/toast/toast.service.ts");






let Tab2Page = class Tab2Page {
    constructor(orderService, toast, alertController, userService) {
        this.orderService = orderService;
        this.toast = toast;
        this.alertController = alertController;
        this.userService = userService;
        this.allOrders = [];
        // this.getAllOrders();
        // this.addCoupons()
    }
    ionViewWillEnter() {
        this.getAllOrders();
    }
    addCoupons() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please enter  recharge coupon code',
                inputs: [
                    {
                        name: 'couponCode',
                        type: 'text',
                        placeholder: 'Apply Coupon Code'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }, {
                        text: 'Add Balance',
                        handler: (data) => {
                            console.log(data);
                            this.userService.addRechargeCoupon(data)
                                .subscribe(res => {
                                this.toast.toastSuccess('Coupon Applied !!');
                            }, err => {
                                this.toast.toastFail(err.message);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getAllOrders() {
        this.orderService.getUserIdFromStorage()
            .then(() => {
            this.totalWalletBalance = 0;
            this.orderService.getAllOrders()
                .subscribe(res => {
                console.log(res);
                this.allOrders = res;
                res.forEach(element => {
                    this.totalWalletBalance += element.rewardAmount;
                });
            });
        });
    }
    getUserWalletData() {
        this.userService.getUserIdFromStorage()
            .then(() => {
            this.userService.getUserWallet()
                .subscribe(res => {
                console.log(res, 'wallet');
            });
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"] },
    { type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"] }
];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tabs/tab2/tab2.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"], src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map