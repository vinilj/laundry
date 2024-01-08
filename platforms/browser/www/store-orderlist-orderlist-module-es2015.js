(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-orderlist-orderlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/orderlist/orderlist.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/orderlist/orderlist.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"background-primary\">\n  <ion-grid>\n    <ion-row *ngIf=\"backupOrders\">\n      <ion-col>\n        <h4 class=\"color-white  wallet-heading\">{{backupOrders.name}}</h4>\n        <p class=\"color-white thin-font \">{{backupOrders.email}}</p>\n        <p class=\"color-white thin-font \">{{backupOrders.address}}</p>\n      </ion-col>\n    </ion-row>\n    <h3 class=\"color-white thin-font wallet-heading\">Infographics\n      <ion-button color=\"secondary\" (click)=\"logout()\"  class=\"logout-btn\" >Logout</ion-button>\n    </h3>\n\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"no-shadow\" color=\"secondary\">Self operated <h4>{{selfOperatedCount}}</h4>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"no-shadow\" color=\"secondary\">Dropoff <h4>{{dropOrders.length}}</h4>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <h4>Order list</h4>\n\n    <ion-searchbar mode=\"ios\" showCancelButton=\"focus\" [(ngModel)]=\"searchTerm\" (ionChange)=\"searchUser($event)\">\n    </ion-searchbar>\n\n    <div *ngIf=\"dropOrders.length\">\n      <ion-card class=\"no-shadow\" *ngFor=\"let order of dropOrders;let i=index\">\n        <ion-row>\n          <ion-col size=\"5\" (click)=\"goDetail(order.id)\">\n            <h4 class=\"ion-no-margin\"> {{order.user.firstName}}</h4>\n            <h5 class=\"ion-no-margin thin-font\">Wash ID-6409090{{order.id}}</h5>\n            <h5 class=\"ion-no-margin thin-font\">{{order.startTime | dateTime}}</h5>\n          </ion-col>\n\n\n          <ion-col size=\"3\">\n            <ion-input type=\"number\" [(ngModel)]=\"dropOrders[i].weight\" class=\"num-input\" placeholder=\"0:00 Kg\"\n              maxlength=\"10\">\n            </ion-input>\n          </ion-col>\n\n          <ion-col size=\"3\">\n            <ion-input type=\"number\" [(ngModel)]=\"dropOrders[i].amount\" class=\"num-input\" placeholder=\"INR 250\"\n              maxlength=\"10\">\n            </ion-input>\n          </ion-col>\n\n          <ion-col class=\"ion-no-padding \" size=\"1\">\n            <ion-button color=\"primary\" class=\"micro-btn\" (click)=\"updateOrder(order)\">Go</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/store/orderlist/orderlist-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/store/orderlist/orderlist-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderlistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistPageRoutingModule", function() { return OrderlistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orderlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderlist.page */ "./src/app/store/orderlist/orderlist.page.ts");




const routes = [
    {
        path: '',
        component: _orderlist_page__WEBPACK_IMPORTED_MODULE_3__["OrderlistPage"]
    }
];
let OrderlistPageRoutingModule = class OrderlistPageRoutingModule {
};
OrderlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderlistPageRoutingModule);



/***/ }),

/***/ "./src/app/store/orderlist/orderlist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/orderlist/orderlist.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistPageModule", function() { return OrderlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _orderlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderlist-routing.module */ "./src/app/store/orderlist/orderlist-routing.module.ts");
/* harmony import */ var _orderlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderlist.page */ "./src/app/store/orderlist/orderlist.page.ts");
/* harmony import */ var src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/service/pipe/pipes.module */ "./src/app/common/service/pipe/pipes.module.ts");
/* harmony import */ var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/service/localstorage/local-stroage.service */ "./src/app/common/service/localstorage/local-stroage.service.ts");









let OrderlistPageModule = class OrderlistPageModule {
};
OrderlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderlistPageRoutingModule"],
            src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        providers: [src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStroageService"]],
        declarations: [_orderlist_page__WEBPACK_IMPORTED_MODULE_6__["OrderlistPage"]]
    })
], OrderlistPageModule);



/***/ }),

/***/ "./src/app/store/orderlist/orderlist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/store/orderlist/orderlist.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".micro-btn {\n  --padding-start:2px;\n  --padding-end:2px;\n}\n\n.logout-btn {\n  height: 1.6em;\n  font-size: 16px;\n  line-height: 1.1em;\n  --padding-start: 6px;\n  --padding-end:6px;\n  position: relative;\n  left: 35%;\n  right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvb3JkZXJsaXN0L0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFxzdG9yZVxcb3JkZXJsaXN0XFxvcmRlcmxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9zdG9yZS9vcmRlcmxpc3Qvb3JkZXJsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvb3JkZXJsaXN0L29yZGVybGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWljcm8tYnRue1xuICAgIC0tcGFkZGluZy1zdGFydDoycHg7XG4gICAgLS1wYWRkaW5nLWVuZDoycHg7XG59XG4ubG9nb3V0LWJ0bntcbiAgICBoZWlnaHQ6IDEuNmVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDo2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDM1JTtcbiAgICByaWdodDogYXV0bztcbn1cbiIsIi5taWNyby1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6MnB4O1xuICAtLXBhZGRpbmctZW5kOjJweDtcbn1cblxuLmxvZ291dC1idG4ge1xuICBoZWlnaHQ6IDEuNmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gIC0tcGFkZGluZy1lbmQ6NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDM1JTtcbiAgcmlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/store/orderlist/orderlist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/store/orderlist/orderlist.page.ts ***!
  \***************************************************/
/*! exports provided: OrderlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistPage", function() { return OrderlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/apilayer/APIs/orderapi.service */ "./src/app/common/apilayer/APIs/orderapi.service.ts");
/* harmony import */ var _common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/service/toast/toast.service */ "./src/app/common/service/toast/toast.service.ts");
/* harmony import */ var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/apilayer/APIs/userapi.service */ "./src/app/common/apilayer/APIs/userapi.service.ts");
/* harmony import */ var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/localstorage/local-stroage.service */ "./src/app/common/service/localstorage/local-stroage.service.ts");







let OrderlistPage = class OrderlistPage {
    constructor(navctrl, localStorage, toast, userService, orderService) {
        this.navctrl = navctrl;
        this.localStorage = localStorage;
        this.toast = toast;
        this.userService = userService;
        this.orderService = orderService;
        this.dropOrders = [];
        this.selfOperatedCount = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userService.getUserData()
            .subscribe(res => {
            this.userService.getUserDataById(res.id)
                .subscribe(res => {
                this.user = res;
                // this.storageService.setStorageKey('user', res)
                //   .then(() => {
                //     console.log(res);
                this.getAllOrders(res.franchiseId);
                // })
            });
        });
    }
    getAllOrders(franchiseId) {
        this.orderService.getDropOrder(franchiseId)
            .subscribe(res => {
            this.backupOrders = res[0];
            this.dropOrders = res[0].orders.filter(a => a.opertationType == 'drop off');
            this.selfOperatedCount = res[0].orders.length - this.dropOrders.length;
            this.dropOrders = this.dropOrders.filter(a => a.orderStatus != 'delivered');
            this.backupOrders.orders = this.dropOrders.filter(a => a.orderStatus != 'delivered');
        });
    }
    goDetail(id) {
        let navigationExtras = {
            queryParams: {
                id: id
            }
        };
        this.navctrl.navigateForward('storeorderdetail', navigationExtras);
    }
    updateOrder(order) {
        let payload = {
            id: order.id,
            weight: order.weight,
            amount: order.amount
        };
        this.orderService.updateOrder(payload)
            .subscribe(res => {
            console.log(res);
            this.toast.toastSuccess('Order updated');
        });
    }
    searchUser(event) {
        this.dropOrders = this.backupOrders.orders;
        console.log(event.target.value, this.searchTerm);
        this.dropOrders = this.dropOrders.filter(a => a.user.firstName.trim().toLowerCase().includes(this.searchTerm) || a.user.mobile.includes(this.searchTerm));
    }
    logout() {
        this.userService.userLogout()
            .subscribe(res => {
            this.localStorage.clearStorage()
                .then(() => this.navctrl.navigateForward('login'));
        });
    }
};
OrderlistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStroageService"] },
    { type: _common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_5__["UserapiService"] },
    { type: src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_3__["OrderapiService"] }
];
OrderlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderlist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/orderlist/orderlist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderlist.page.scss */ "./src/app/store/orderlist/orderlist.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStroageService"], _common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_5__["UserapiService"], src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_3__["OrderapiService"]])
], OrderlistPage);



/***/ })

}]);
//# sourceMappingURL=store-orderlist-orderlist-module-es2015.js.map