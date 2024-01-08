(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderdetail-orderdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/orderdetail/orderdetail.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/orderdetail/orderdetail.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n    <h1>Promising Quality</h1>\n    <h5 class=\"ion-no-margin\">10 years Industry trust</h5>\n\n\n    <ion-card style=\"margin-top: 11em;\" *ngIf=\"orderDetail\">\n      <ion-row>\n        <ion-col size=\"12\">\n\n          <h4 class=\"card-heading ion-no-margin\"><span class=\"thin-font\">Wash type:\n            </span>{{orderDetail.opertationType}}</h4>\n          <h4 class=\"ion-no-margin\">Order ID: 64090909{{orderDetail.id}}</h4>\n          <h4 class=\"thin-font ion-no-margin\">Marathahalli outlet</h4>\n          <h4 class=\"thin-font ion-no-margin\" style=\"margin-bottom: 1em;\">{{orderDetail.startTime | dateTime}}</h4>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"btn-row-gray\">\n        <ion-button expand=\"full\">Estimated time</ion-button>\n        <ion-button expand=\"full\">30 Minutes</ion-button>\n      </ion-row>\n    </ion-card>\n\n\n    <ion-card class=\"\" *ngIf=\"orderDetail\">\n      <ion-row>\n        <ion-col size=\"12\">\n\n          <h4 style=\"margin-bottom: 1em;\"><span class=\"thin-font \">Amount to be paid: </span>\n            <span class=\"ion-float-right\">\n              {{orderDetail.amount}} INR\n            </span> </h4>\n\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"btn-row\">\n        <ion-button expand=\"full\" color=\"primary\"></ion-button>\n        <ion-button expand=\"full\" color=\"primary\" [disabled]=\"orderDetail.opertationType == 'drop off' && orderDetail.orderStatus==''\" *ngIf=\"orderDetail.paymentStatus == 'due'\"\n          (click)='pay()'>Pay\n        </ion-button>\n        <ion-button expand=\"full\" color=\"primary\" *ngIf=\"orderDetail.paymentStatus == 'paid'\">Paid</ion-button>\n      </ion-row>\n    </ion-card>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/orderdetail/orderdetail.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs/orderdetail/orderdetail.module.ts ***!
  \********************************************************/
/*! exports provided: OrderdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailPageModule", function() { return OrderdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _orderdetail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderdetail.page */ "./src/app/tabs/orderdetail/orderdetail.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/service/pipe/pipes.module */ "./src/app/common/service/pipe/pipes.module.ts");








let OrderdetailPageModule = class OrderdetailPageModule {
};
OrderdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: '', component: _orderdetail_page__WEBPACK_IMPORTED_MODULE_5__["OrderdetailPage"] }])
        ],
        declarations: [_orderdetail_page__WEBPACK_IMPORTED_MODULE_5__["OrderdetailPage"]]
    })
], OrderdetailPageModule);



/***/ }),

/***/ "./src/app/tabs/orderdetail/orderdetail.page.scss":
/*!********************************************************!*\
  !*** ./src/app/tabs/orderdetail/orderdetail.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-row {\n  margin: 0 -10px;\n  background: var(--ion-color-primary);\n}\n.btn-row ion-button {\n  --background: none;\n  width: 48%;\n  --box-shadow: none;\n}\n.btn-row-gray {\n  margin: 0 -10px;\n  background: #e5e5e5;\n}\n.btn-row-gray ion-button {\n  --background: none;\n  width: 48%;\n  --box-shadow: none;\n  color: black;\n}\nh1 {\n  font-weight: 900;\n  font-size: 4em;\n  color: #e5e5e5;\n}\nh5 {\n  margin: 0;\n}\n.thin-font {\n  font-weight: 500;\n}\n.card-heading {\n  margin: 1em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9vcmRlcmRldGFpbC9EOlxcUHJvamVjdHNcXGxhdW5kcnlcXGFwcC9zcmNcXGFwcFxcdGFic1xcb3JkZXJkZXRhaWxcXG9yZGVyZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9vcmRlcmRldGFpbC9vcmRlcmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7QUNDRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRUo7QURBQTtFQUNFLFNBQUE7QUNHRjtBRERBO0VBQ0UsZ0JBQUE7QUNJRjtBREZBO0VBQ0ksYUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvdGFicy9vcmRlcmRldGFpbC9vcmRlcmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXJvdyB7XG4gIG1hcmdpbjogMCAtMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBpb24tYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn1cbi5idG4tcm93LWdyYXkge1xuICBtYXJnaW46IDAgLTEwcHg7XG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgIHdpZHRoOiA0OCU7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgY29sb3I6ICNlNWU1ZTU7XG59XG5oNSB7XG4gIG1hcmdpbjogMDtcbn1cbi50aGluLWZvbnQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNhcmQtaGVhZGluZ3tcbiAgICBtYXJnaW46IDFlbSAwO1xufSIsIi5idG4tcm93IHtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uYnRuLXJvdyBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICB3aWR0aDogNDglO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tcm93LWdyYXkge1xuICBtYXJnaW46IDAgLTEwcHg7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG59XG4uYnRuLXJvdy1ncmF5IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiA0OCU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5oMSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjb2xvcjogI2U1ZTVlNTtcbn1cblxuaDUge1xuICBtYXJnaW46IDA7XG59XG5cbi50aGluLWZvbnQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2FyZC1oZWFkaW5nIHtcbiAgbWFyZ2luOiAxZW0gMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/orderdetail/orderdetail.page.ts":
/*!******************************************************!*\
  !*** ./src/app/tabs/orderdetail/orderdetail.page.ts ***!
  \******************************************************/
/*! exports provided: OrderdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailPage", function() { return OrderdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/apilayer/APIs/orderapi.service */ "./src/app/common/apilayer/APIs/orderapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/payment/payment.service */ "./src/app/common/service/payment/payment.service.ts");
/* harmony import */ var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/service/toast/toast.service */ "./src/app/common/service/toast/toast.service.ts");
/* harmony import */ var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/apilayer/APIs/userapi.service */ "./src/app/common/apilayer/APIs/userapi.service.ts");







let OrderdetailPage = class OrderdetailPage {
    constructor(orderService, route, userService, router, paymentService, toast) {
        this.orderService = orderService;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.paymentService = paymentService;
        this.toast = toast;
        this.currencyIcon = '₹';
        this.currency = 'INR';
        this.paymentAmount = 1600;
        // // testKey
        // razor_key: string = 'rzp_test_rRvE0JzWWGkqh1';
        //Live Key
        this.razor_key = 'rzp_live_1FMhHw7pwKiV36';
    }
    doRefresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
        }, 1000);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.id) {
                this.orderId = JSON.parse(params.id);
                this.getOrderDetails();
            }
            this.userService.getUserData()
                .subscribe(res => { this.user = res; console.log(res); });
        });
    }
    getOrderDetails() {
        console.log(this.orderId);
        if (this.orderId)
            this.orderService.getOrderById(this.orderId)
                .subscribe(res => {
                console.log(res);
                this.orderDetail = res;
            });
    }
    pay() {
        let user = {
            email: this.user.email,
            contact: this.user.mobile,
            name: this.user.name,
            amount: this.orderDetail.amount
        };
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: this.currency,
            key: this.razor_key,
            amount: user.amount * 100,
            name: 'Coin Laundry',
            prefill: {
                email: user.email,
                contact: user.contact,
                name: user.name
            },
            theme: {
                color: '#642E58'
                // color: '#00000'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        RazorpayCheckout.open(options, (val) => this.successCallback(val), (err) => this.cancelCallback(err));
    }
    successCallback(payment_id) {
        console.log('payment_id: ' + payment_id);
        // alert('payment_id: ' + payment_id);
        let payload = {
            id: this.orderId,
            paymentStatus: 'paid'
        };
        this.orderService.updateOrder(payload)
            .subscribe(res => console.log(res));
        this.toast.toastSuccess('Payment Successful');
    }
    ;
    cancelCallback(error) {
        this.toast.toastFail('Payment Failed');
        // alert(error.description + ' (Error ' + error.code + ')');
    }
    ;
};
OrderdetailPage.ctorParameters = () => [
    { type: src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_6__["UserapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_common_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"] },
    { type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
OrderdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/orderdetail/orderdetail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderdetail.page.scss */ "./src/app/tabs/orderdetail/orderdetail.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_6__["UserapiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_common_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_4__["PaymentService"], src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], OrderdetailPage);



/***/ })

}]);
//# sourceMappingURL=orderdetail-orderdetail-module-es2015.js.map