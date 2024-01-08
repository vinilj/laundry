function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/wallet/wallet.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/wallet/wallet.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-card class=\"wallet-card\">\n      <ion-row>\n        <ion-col>\n          <img src=\"../../assets/imgs/walletP.png\" alt=\"\">\n          <h3> Coin balance\n            <span style=\"float: right;\">{{totalWalletBalance}}</span>\n          </h3>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n\n\n    <h3 class=\"wallet-heading\">Wallet History</h3>\n    <div *ngFor=\"let item of wallet\">\n      <ion-card [ngClass]=\"{'wallet-history-card': true, 'gray-color': item.transactionType=='credit'}\">\n        <h5 class=\"ion-no-margin\">{{item.outletName}}\n          <span\n            [ngClass]=\"{'ion-float-right': true, 'success-color':item.transactionType=='credit','danger-color':item.transactionType!='credit'}\"\n            class=\" \">{{item.coins}} INR</span>\n        </h5>\n        <h6 class=\"ion-no-margin thin-font color-gray\">{{item.createdDate | dateTime}}</h6>\n        <h6 class=\"ion-no-margin thin-font\" *ngIf=\"item.outletName !='Online Recharge'\">Wash ID-640909{{item.id}}</h6>\n      </ion-card>\n    </div>\n\n\n    <!-- <ion-card class=\"wallet-history-card gray-color\">\n      <h5 class=\"ion-no-margin\">Outlet-Marathahalli<span class=\"ion-float-right success-color\">-236 INR</span></h5>\n      <h6 class=\"ion-no-margin thin-font color-gray\">06 April 20 06:40 PM</h6>\n      <h6 class=\"ion-no-margin thin-font\">Wash ID-64090909</h6>\n    </ion-card>\n\n\n    <ion-card class=\"wallet-history-card\">\n      <h5 class=\"ion-no-margin\">Outlet-Marathahalli<span class=\"ion-float-right danger-color\">-236 INR</span></h5>\n      <h6 class=\"ion-no-margin thin-font color-gray\">06 April 20 06:40 PM</h6>\n      <h6 class=\"ion-no-margin thin-font\">Wash ID-64090909</h6>\n    </ion-card>\n\n    <ion-card class=\"wallet-history-card gray-color\">\n      <h5 class=\"ion-no-margin\">Outlet-Marathahalli<span class=\"ion-float-right success-color\">-236 INR</span></h5>\n      <h6 class=\"ion-no-margin thin-font color-gray\">06 April 20 06:40 PM</h6>\n      <h6 class=\"ion-no-margin thin-font\">Wash ID-64090909</h6>\n    </ion-card>\n\n    <ion-card class=\"wallet-history-card\">\n      <h5 class=\"ion-no-margin\">Outlet-Marathahalli<span class=\"ion-float-right danger-color\">-236 INR</span></h5>\n      <h6 class=\"ion-no-margin thin-font color-gray\">06 April 20 06:40 PM</h6>\n      <h6 class=\"ion-no-margin thin-font\">Wash ID-64090909</h6>\n    </ion-card>\n\n    <ion-card class=\"wallet-history-card gray-color\">\n      <h5 class=\"ion-no-margin\">Outlet-Marathahalli<span class=\"ion-float-right success-color\">-236 INR</span></h5>\n      <h6 class=\"ion-no-margin thin-font color-gray\">06 April 20 06:40 PM</h6>\n      <h6 class=\"ion-no-margin thin-font\">Wash ID-64090909</h6>\n    </ion-card>\n\n    <ion-card class=\"wallet-history-card\">\n      <h5 class=\"ion-no-margin\">Outlet-Marathahalli<span class=\"ion-float-right danger-color\">-236 INR</span></h5>\n      <h6 class=\"ion-no-margin thin-font color-gray\">06 April 20 06:40 PM</h6>\n      <h6 class=\"ion-no-margin thin-font\">Wash ID-64090909</h6>\n    </ion-card>\n\n    <ion-card class=\"wallet-history-card gray-color\">\n      <h5 class=\"ion-no-margin\">Outlet-Marathahalli<span class=\"ion-float-right success-color\">-236 INR</span></h5>\n      <h6 class=\"ion-no-margin thin-font color-gray\">06 April 20 06:40 PM</h6>\n      <h6 class=\"ion-no-margin thin-font\">Wash ID-64090909</h6>\n    </ion-card> -->\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/wallet/wallet.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/wallet/wallet.module.ts ***!
    \**********************************************/

  /*! exports provided: WalletPageModule */

  /***/
  function srcAppTabsWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
      return WalletPageModule;
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


    var _wallet_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wallet.page */
    "./src/app/tabs/wallet/wallet.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/service/pipe/pipes.module */
    "./src/app/common/service/pipe/pipes.module.ts");

    var WalletPageModule = function WalletPageModule() {
      _classCallCheck(this, WalletPageModule);
    };

    WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_5__["WalletPage"]
      }])],
      declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_5__["WalletPage"]]
    })], WalletPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/wallet/wallet.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/tabs/wallet/wallet.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  font-size: 16px !important;\n}\n\n.wallet-heading {\n  margin: 3em 0 2em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy93YWxsZXQvRDpcXFByb2plY3RzXFxsYXVuZHJ5XFxhcHAvc3JjXFxhcHBcXHRhYnNcXHdhbGxldFxcd2FsbGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvdGFicy93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4ud2FsbGV0LWhlYWRpbmcge1xuICBtYXJnaW46IDNlbSAwIDJlbSAwO1xufVxuIiwiaDMge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLndhbGxldC1oZWFkaW5nIHtcbiAgbWFyZ2luOiAzZW0gMCAyZW0gMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/wallet/wallet.page.ts":
  /*!********************************************!*\
    !*** ./src/app/tabs/wallet/wallet.page.ts ***!
    \********************************************/

  /*! exports provided: WalletPage */

  /***/
  function srcAppTabsWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
      return WalletPage;
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


    var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/apilayer/APIs/userapi.service */
    "./src/app/common/apilayer/APIs/userapi.service.ts");

    var WalletPage = /*#__PURE__*/function () {
      function WalletPage(userService) {
        _classCallCheck(this, WalletPage);

        this.userService = userService;
        this.wallet = [];
      }

      _createClass(WalletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.getUserWalletData()
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getUserWalletData();
        }
      }, {
        key: "getUserWalletData",
        value: function getUserWalletData() {
          var _this = this;

          this.userService.getUserIdFromStorage().then(function () {
            _this.totalWalletBalance = 0;

            _this.userService.getUserWallet().subscribe(function (res) {
              console.log(res, 'wallet');
              _this.totalWalletBalance += res[0].balance;
            });

            _this.userService.getWalletHistory().subscribe(function (res) {
              console.log(res, 'wallet');
              _this.wallet = res;
            });
          });
        }
      }]);

      return WalletPage;
    }();

    WalletPage.ctorParameters = function () {
      return [{
        type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]
      }];
    };

    WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wallet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/wallet/wallet.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wallet.page.scss */
      "./src/app/tabs/wallet/wallet.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]])], WalletPage);
    /***/
  }
}]);
//# sourceMappingURL=wallet-wallet-module-es5.js.map