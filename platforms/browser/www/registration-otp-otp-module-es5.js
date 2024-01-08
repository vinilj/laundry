function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-otp-otp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/otp/otp.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/otp/otp.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationOtpOtpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"input-position\">\n    <ion-row>\n      <ion-col>\n        <h2>OTP Verfication</h2>\n        <h5 class=\"color-gray thin-font ion-no-margin\">Enter the OTP sent to +91 {{phoneNumber}}</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"partitioned\">\n        <ion-input #otp1 required type=\"tel\" maxlength=\"1\" (keyup)=\"otpController($event,otp2,'otp')\">\n        </ion-input>\n        <ion-input #otp2 required type=\"tel\" maxlength=\"1\" (keyup)=\"otpController($event,otp3,otp1)\">\n        </ion-input>\n        <ion-input #otp3 required type=\"tel\" maxlength=\"1\" (keyup)=\"otpController($event,otp4,otp2)\">\n        </ion-input>\n        <ion-input #otp4 required type=\"tel\" maxlength=\"1\" (keyup)=\"otpController($event,'otp',otp3)\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-button expand=\"block\" color=\"primary\" (click)=\"submit()\">Submit</ion-button>\n    <h5 class=\"color-gray thin-font text-right\">Didn't get OTP ?\n      <strong class=\"primary-color\" (click)=\"resendOtp()\">Resend OTP</strong>\n      <ion-ripple-effect></ion-ripple-effect>\n    </h5>\n\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registration/otp/otp-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/otp/otp-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: OtpPageRoutingModule */

  /***/
  function srcAppRegistrationOtpOtpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function () {
      return OtpPageRoutingModule;
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


    var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./otp.page */
    "./src/app/registration/otp/otp.page.ts");

    var routes = [{
      path: '',
      component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }];

    var OtpPageRoutingModule = function OtpPageRoutingModule() {
      _classCallCheck(this, OtpPageRoutingModule);
    };

    OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OtpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registration/otp/otp.module.ts":
  /*!************************************************!*\
    !*** ./src/app/registration/otp/otp.module.ts ***!
    \************************************************/

  /*! exports provided: OtpPageModule */

  /***/
  function srcAppRegistrationOtpOtpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPageModule", function () {
      return OtpPageModule;
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


    var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./otp-routing.module */
    "./src/app/registration/otp/otp-routing.module.ts");
    /* harmony import */


    var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./otp.page */
    "./src/app/registration/otp/otp.page.ts");

    var OtpPageModule = function OtpPageModule() {
      _classCallCheck(this, OtpPageModule);
    };

    OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]],
      declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })], OtpPageModule);
    /***/
  },

  /***/
  "./src/app/registration/otp/otp.page.scss":
  /*!************************************************!*\
    !*** ./src/app/registration/otp/otp.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationOtpOtpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".partitioned ion-input {\n  display: inline-block;\n  width: 18%;\n  margin: 1em 3%;\n  border: 1px solid #787878;\n  box-sizing: border-box;\n  border-radius: 5px;\n  text-align: center;\n  padding-right: 8px !important;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL290cC9EOlxcUHJvamVjdHNcXGxhdW5kcnlcXGFwcC9zcmNcXGFwcFxccmVnaXN0cmF0aW9uXFxvdHBcXG90cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9vdHAvb3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL290cC9vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpdGlvbmVkIHtcbiAgaW9uLWlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBtYXJnaW46IDFlbSAzJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzg3ODc4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG4gIH1cbiBcbn1cbiIsIi5wYXJ0aXRpb25lZCBpb24taW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOCU7XG4gIG1hcmdpbjogMWVtIDMlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzg3ODc4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDEycHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/registration/otp/otp.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/registration/otp/otp.page.ts ***!
    \**********************************************/

  /*! exports provided: OtpPage */

  /***/
  function srcAppRegistrationOtpOtpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpPage", function () {
      return OtpPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/apilayer/APIs/userapi.service */
    "./src/app/common/apilayer/APIs/userapi.service.ts");
    /* harmony import */


    var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");
    /* harmony import */


    var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/service/toast/toast.service */
    "./src/app/common/service/toast/toast.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OtpPage = /*#__PURE__*/function () {
      function OtpPage(navctrl, toasterService, route, router, userService, localStorage) {
        var _this = this;

        _classCallCheck(this, OtpPage);

        this.navctrl = navctrl;
        this.toasterService = toasterService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.localStorage = localStorage;
        this.otp = '';
        this.route.queryParams.subscribe(function (params) {
          console.log(params);

          if (params && params.phoneNumber) {
            _this.phoneNumber = JSON.parse(params.phoneNumber);
          }
        });
      }

      _createClass(OtpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          console.log(this.otp);
          if (this.otp.length < 4) this.toasterService.toastFail('Please enter the otp');else this.userService.userLogin({
            mobile: String(this.phoneNumber),
            otp: parseInt(this.otp)
          }).subscribe(function (res) {
            if (res.userType == "found") {
              _this2.localStorage.setStorageKey('authToken', res['token']).then(function () {
                // if (jwt_decode(res['token'])['userType'] == 'user') {
                //   this.navctrl.navigateForward('storelist')
                //   console.log(jwt_decode(res['token'])['userType']);
                // } else
                _this2.navigateToLandingPage();
              });
            } else if (res.userType == "notfound") {
              var navigationExtras = {
                queryParams: {
                  phoneNumber: _this2.phoneNumber
                }
              };

              _this2.navctrl.navigateForward('userdetails', navigationExtras);
            } else if (res.userType == "storeoperator") {
              var _navigationExtras = {
                queryParams: {
                  phoneNumber: _this2.phoneNumber
                }
              };

              _this2.navctrl.navigateForward('storelist', _navigationExtras);
            }
          });
        }
      }, {
        key: "navigateToLandingPage",
        value: function navigateToLandingPage() {
          var _this3 = this;

          this.userService.getUserData().subscribe(function (res) {
            // this.user = res
            // console.log(res);
            _this3.userService.getUserDataById(res.id).subscribe(function (res) {
              _this3.user = res;

              _this3.localStorage.setStorageKey('user', res).then(function () {
                if (res.userType == "storeoperator") _this3.navctrl.navigateForward('/storelist');else _this3.navctrl.navigateForward('tabs/welcome');
              });
            });
          });
        }
      }, {
        key: "resendOtp",
        value: function resendOtp() {
          var _this4 = this;

          this.otp = "";
          this.userService.resendOTP({
            mobile: String(this.phoneNumber)
          }).subscribe(function (res) {
            console.log(res);

            _this4.toasterService.toastSuccess('Otp resent');
          });
        }
      }, {
        key: "otpController",
        value: function otpController(event, next, prev) {
          console.log(event.target.value.length, " next:", next, " prev:", prev, " otp:", this.otp.length);

          if (event.target.value.length < 1 && prev) {
            if (this.otp.length == 0) this.otp = "";else if (this.otp.length == 1) {
              this.otp = this.otp.substring(0, this.otp.length - 1);
            } else {
              prev.setFocus();
              this.otp = this.otp.substring(0, this.otp.length - 1);
            }
          } else if (next && event.target.value.length > 0 && this.otp.length < 4) {
            if (this.otp.length == 3) {
              this.otp = this.otp + event.target.value;
              next.setFocus();
            } else if (this.otp.length < 3) {
              this.otp = this.otp + event.target.value;
              next.setFocus();
            }
          } else {
            return 0;
          }
        }
      }]);

      return OtpPage;
    }();

    OtpPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"]
      }, {
        type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStroageService"]
      }];
    };

    OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-otp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./otp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/otp/otp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./otp.page.scss */
      "./src/app/registration/otp/otp.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"], src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStroageService"]])], OtpPage);
    /***/
  }
}]);
//# sourceMappingURL=registration-otp-otp-module-es5.js.map