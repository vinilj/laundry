function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-orderdetail-orderdetail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/store/orderdetail/orderdetail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/orderdetail/orderdetail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStoreOrderdetailOrderdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <h4>Order list</h4>\n    <ion-card *ngIf=\"order && order.orders.length\" class=\"no-shadow ion-no-margin\">\n      <h4>{{order.orders[0].user.firstName}} {{order.orders[0].user.lastName}}</h4>\n      <p class=\"ion-no-margin\">+91 {{order.orders[0].user.mobile}}</p>\n      <p *ngIf=\"order.orders[0].user.email\" class=\"ion-no-margin\">{{order.orders[0].user.email}}</p>\n    </ion-card>\n    <ion-card *ngIf=\"order && order.orders.length\" class=\"no-shadow ion-no-margin\">\n      <h4>Wash ID-6409090{{order.orders[0].id}}</h4>\n      <p class=\"ion-no-margin\">{{order.orders[0].startTime | dateTime}}</p>\n      <p class=\"ion-no-margin\">Weight- {{order.orders[0].weight}}Kg Price: ₹{{order.orders[0].amount}}</p>\n      <p class=\"ion-no-margin\">{{order.address}} outlet</p>\n      <p class=\"ion-no-margin\">Payment :{{order.orders[0].paymentStatus}} </p>\n    </ion-card>\n\n    <h4>Order Status :  <span  *ngIf=\"order && order.orders.length\">{{order.orders[0].orderStatus}}</span></h4>\n    <ion-card class=\"button-card\">\n      <ion-button class=\"primary-border\" (click)=\"updateOrderStatus('order received')\">Order Received</ion-button>\n      <ion-button class=\"primary-border\" (click)=\"updateOrderStatus('wash completed')\">Wash completed</ion-button>\n      <ion-button class=\"primary-border\" (click)=\"updateOrderStatus('wash intiated')\">Wash Intiated</ion-button>\n      <ion-button class=\"primary-border\" (click)=\"updateOrderStatus('packed')\">Packed to deliver</ion-button>\n      <ion-button class=\"primary-border\" (click)=\"updateOrderStatus('inpogress')\">In Progress</ion-button>\n      <ion-button class=\"primary-border\" (click)=\"updateOrderStatus('delivered')\">Deliver</ion-button>\n    </ion-card>\n\n    <ion-card class=\"button-action-card\">\n      <!-- <ion-button class=\"primary-border\">Payment Pending</ion-button>\n      <ion-button class=\"primary-border\">Order status</ion-button> -->\n      <ion-button color=\"primary\" class=\"primary-border\">Call</ion-button>\n      <ion-button color=\"primary\" class=\"primary-border\">Email</ion-button>\n      <ion-button class=\"primary-border\">Send Invoice</ion-button>\n      <ion-button class=\"primary-border\">Send survey Form</ion-button>\n    </ion-card>\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/store/orderdetail/orderdetail-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/store/orderdetail/orderdetail-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: OrderdetailPageRoutingModule */

  /***/
  function srcAppStoreOrderdetailOrderdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderdetailPageRoutingModule", function () {
      return OrderdetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _orderdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orderdetail.page */
    "./src/app/store/orderdetail/orderdetail.page.ts");

    var routes = [{
      path: '',
      component: _orderdetail_page__WEBPACK_IMPORTED_MODULE_3__["OrderdetailPage"]
    }];

    var OrderdetailPageRoutingModule = function OrderdetailPageRoutingModule() {
      _classCallCheck(this, OrderdetailPageRoutingModule);
    };

    OrderdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderdetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/store/orderdetail/orderdetail.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/store/orderdetail/orderdetail.module.ts ***!
    \*********************************************************/

  /*! exports provided: OrderdetailPageModule */

  /***/
  function srcAppStoreOrderdetailOrderdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderdetailPageModule", function () {
      return OrderdetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _orderdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orderdetail-routing.module */
    "./src/app/store/orderdetail/orderdetail-routing.module.ts");
    /* harmony import */


    var _orderdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orderdetail.page */
    "./src/app/store/orderdetail/orderdetail.page.ts");
    /* harmony import */


    var src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/service/pipe/pipes.module */
    "./src/app/common/service/pipe/pipes.module.ts");

    var OrderdetailPageModule = function OrderdetailPageModule() {
      _classCallCheck(this, OrderdetailPageModule);
    };

    OrderdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _orderdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderdetailPageRoutingModule"], src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_orderdetail_page__WEBPACK_IMPORTED_MODULE_6__["OrderdetailPage"]]
    })], OrderdetailPageModule);
    /***/
  },

  /***/
  "./src/app/store/orderdetail/orderdetail.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/store/orderdetail/orderdetail.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStoreOrderdetailOrderdetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  padding-top: 0;\n}\n\n.primary-border {\n  width: 48%;\n  --background: white;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  --border-color: var(--ion-color-primary);\n  --border-style: solid;\n  --border-width: 1px;\n  border-radius: 5px;\n}\n\n.button-card {\n  padding: 3em 2px 2em 2px;\n  text-align: center;\n  border: 1px solid #c4c4c4;\n}\n\n.button-action-card {\n  background: #f7f7f7;\n  box-shadow: 0px 1px 1px rgba(225, 225, 225, 0.25);\n  padding: 1em 1.2em;\n  text-align: center;\n  margin: 0 -1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvb3JkZXJkZXRhaWwvRDpcXFByb2plY3RzXFxsYXVuZHJ5XFxhcHAvc3JjXFxhcHBcXHN0b3JlXFxvcmRlcmRldGFpbFxcb3JkZXJkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9zdG9yZS9vcmRlcmRldGFpbC9vcmRlcmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9vcmRlcmRldGFpbC9vcmRlcmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnByaW1hcnktYm9yZGVyIHtcbiAgd2lkdGg6IDQ4JTtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYnV0dG9uLWNhcmQge1xuICBwYWRkaW5nOiAzZW0gMnB4IDJlbSAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbn1cbi5idXR0b24tYWN0aW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuMjUpO1xuICBwYWRkaW5nOiAxZW0gMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIC0xZW07XG59XG4iLCJpb24tY2FyZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ucHJpbWFyeS1ib3JkZXIge1xuICB3aWR0aDogNDglO1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbi1jYXJkIHtcbiAgcGFkZGluZzogM2VtIDJweCAyZW0gMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG5cbi5idXR0b24tYWN0aW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuMjUpO1xuICBwYWRkaW5nOiAxZW0gMS4yZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIC0xZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/store/orderdetail/orderdetail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/store/orderdetail/orderdetail.page.ts ***!
    \*******************************************************/

  /*! exports provided: OrderdetailPage */

  /***/
  function srcAppStoreOrderdetailOrderdetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderdetailPage", function () {
      return OrderdetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/apilayer/APIs/orderapi.service */
    "./src/app/common/apilayer/APIs/orderapi.service.ts");
    /* harmony import */


    var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/service/toast/toast.service */
    "./src/app/common/service/toast/toast.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");

    var OrderdetailPage = /*#__PURE__*/function () {
      function OrderdetailPage(route, alertCtrl, orderService, toast) {
        _classCallCheck(this, OrderdetailPage);

        this.route = route;
        this.alertCtrl = alertCtrl;
        this.orderService = orderService;
        this.toast = toast;
      }

      _createClass(OrderdetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            console.log(params);

            if (params && params.id) {
              _this.orderId = JSON.parse(params.id);

              _this.getOrderDetails();
            }
          });
        }
      }, {
        key: "getOrderDetails",
        value: function getOrderDetails() {
          var _this2 = this;

          this.orderService.getUserIdFromStorage().then(function () {
            _this2.orderService.getDropOrderById(_this2.orderId).subscribe(function (res) {
              _this2.order = res[0];
              console.log(res);
            });
          });
        }
      }, {
        key: "updateOrderStatus",
        value: function updateOrderStatus(orderStatus) {
          var _this3 = this;

          var payload = {
            id: this.orderId,
            orderStatus: orderStatus
          }; // if(orderStatus == 'delivered' && this.order.orders[0].paymentStatus=='paid'){

          this.orderService.updateOrder(payload).subscribe(function (res) {
            console.log(res);
            _this3.order.orders[0].orderStatus = orderStatus;

            _this3.toast.toastSuccess('Status upadted to ' + orderStatus);
          }); // }
          // else{
          //  this.toast.toastFail('Payment status is pending !!')
          // }
        }
      }]);

      return OrderdetailPage;
    }();

    OrderdetailPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_3__["OrderapiService"]
      }, {
        type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }];
    };

    OrderdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orderdetail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./orderdetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/store/orderdetail/orderdetail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./orderdetail.page.scss */
      "./src/app/store/orderdetail/orderdetail.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_3__["OrderapiService"], src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])], OrderdetailPage);
    /***/
  }
}]);
//# sourceMappingURL=store-orderdetail-orderdetail-module-es5.js.map