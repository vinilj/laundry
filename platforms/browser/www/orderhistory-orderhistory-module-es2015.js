(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderhistory-orderhistory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/orderhistory/orderhistory.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/orderhistory/orderhistory.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n\n  <ion-grid>\n    <h3 class=\"order-history-heading\">\n      Order History\n    </h3>\n\n    <ion-card class=\"order-history-card gray-color\" *ngFor=\"let orders of allOrders\">\n      <h5 class=\"ion-no-margin\">Marathahalli- outlet</h5> <span\n        class=\"ion-float-right success-color\">{{orders.orderStatus}}</span>\n      <p class=\"ion-no-margin\">{{orders.startTime | dateTime}}</p>\n      <h6 class=\"ion-no-margin\">Wash ID-6409090{{orders.id}}</h6>\n      <h5 class=\"ion-no-margin\" *ngIf=\"orders.opertationType\">Wash type: {{orders.opertationType}}</h5>\n    </ion-card>\n    <!-- <ion-card class=\"order-history-card gray-color\">\n      <h5 class=\"ion-no-margin\">Marathahalli- outlet</h5> <span class=\"ion-float-right success-color\">completed</span>\n      <p class=\"ion-no-margin\">06 April 20 06:40 PM</p>\n      <h6 class=\"ion-no-margin\">Wash ID-64090909</h6>\n      <h5 class=\"ion-no-margin\">Wash type: Drop off</h5>\n    </ion-card> -->\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/orderhistory/orderhistory-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/tabs/orderhistory/orderhistory-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: OrderhistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageRoutingModule", function() { return OrderhistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderhistory.page */ "./src/app/tabs/orderhistory/orderhistory.page.ts");




const routes = [
    {
        path: '',
        component: _orderhistory_page__WEBPACK_IMPORTED_MODULE_3__["OrderhistoryPage"]
    }
];
let OrderhistoryPageRoutingModule = class OrderhistoryPageRoutingModule {
};
OrderhistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderhistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/orderhistory/orderhistory.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/tabs/orderhistory/orderhistory.module.ts ***!
  \**********************************************************/
/*! exports provided: OrderhistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageModule", function() { return OrderhistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderhistory-routing.module */ "./src/app/tabs/orderhistory/orderhistory-routing.module.ts");
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderhistory.page */ "./src/app/tabs/orderhistory/orderhistory.page.ts");
/* harmony import */ var src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/service/pipe/pipes.module */ "./src/app/common/service/pipe/pipes.module.ts");








let OrderhistoryPageModule = class OrderhistoryPageModule {
};
OrderhistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderhistoryPageRoutingModule"]
        ],
        declarations: [_orderhistory_page__WEBPACK_IMPORTED_MODULE_6__["OrderhistoryPage"]]
    })
], OrderhistoryPageModule);



/***/ }),

/***/ "./src/app/tabs/orderhistory/orderhistory.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/tabs/orderhistory/orderhistory.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-history-card {\n  padding: 10px 2em;\n  box-shadow: none;\n  margin-left: -1em;\n  margin-right: -1em;\n}\n\nh3 {\n  font-size: 16px !important;\n}\n\n.order-history-heading {\n  margin: 3em 0 2em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9vcmRlcmhpc3RvcnkvRDpcXFByb2plY3RzXFxsYXVuZHJ5XFxhcHAvc3JjXFxhcHBcXHRhYnNcXG9yZGVyaGlzdG9yeVxcb3JkZXJoaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9vcmRlcmhpc3Rvcnkvb3JkZXJoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQkFBQTtBQ0VGOztBREFBO0VBQ0UsbUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvb3JkZXJoaXN0b3J5L29yZGVyaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItaGlzdG9yeS1jYXJkIHtcbiAgcGFkZGluZzogMTBweCAyZW07XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICBtYXJnaW4tcmlnaHQ6IC0xZW07XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLm9yZGVyLWhpc3RvcnktaGVhZGluZyB7XG4gIG1hcmdpbjogM2VtIDAgMmVtIDA7XG59XG4iLCIub3JkZXItaGlzdG9yeS1jYXJkIHtcbiAgcGFkZGluZzogMTBweCAyZW07XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICBtYXJnaW4tcmlnaHQ6IC0xZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlci1oaXN0b3J5LWhlYWRpbmcge1xuICBtYXJnaW46IDNlbSAwIDJlbSAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/orderhistory/orderhistory.page.ts":
/*!********************************************************!*\
  !*** ./src/app/tabs/orderhistory/orderhistory.page.ts ***!
  \********************************************************/
/*! exports provided: OrderhistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPage", function() { return OrderhistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/apilayer/APIs/orderapi.service */ "./src/app/common/apilayer/APIs/orderapi.service.ts");



let OrderhistoryPage = class OrderhistoryPage {
    constructor(orderService) {
        this.orderService = orderService;
        this.allOrders = [];
    }
    ngOnInit() {
        // this.getAllOrders()
    }
    ionViewWillEnter() {
        this.getAllOrders();
    }
    getAllOrders() {
        this.orderService.getUserIdFromStorage()
            .then(() => {
            this.orderService.getAllOrders()
                .subscribe(res => {
                console.log(res);
                this.allOrders = res.reverse();
            });
        });
    }
};
OrderhistoryPage.ctorParameters = () => [
    { type: src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"] }
];
OrderhistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderhistory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderhistory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/orderhistory/orderhistory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderhistory.page.scss */ "./src/app/tabs/orderhistory/orderhistory.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_2__["OrderapiService"]])
], OrderhistoryPage);



/***/ })

}]);
//# sourceMappingURL=orderhistory-orderhistory-module-es2015.js.map