function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-userdetails-userdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/userdetails/userdetails.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/userdetails/userdetails.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationUserdetailsUserdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid class=\"input-position\">\n    <ion-row>\n      <ion-col>\n        <h2>Help us in addressing you</h2>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <form [formGroup]=\"user\" style=\"width: 100%;\">\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" class=\"num-input\" formControlName=\"firstName\" placeholder=\"First name\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-input type=\"text\" class=\"num-input\" formControlName=\"lastName\" placeholder=\"Last name\"></ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-input type=\"email\" class=\"num-input\" formControlName=\"email\" placeholder=\"Email\">\n          </ion-input>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-input type=\"date\" class=\"num-input\" formControlName=\"dob\" placeholder=\"Date of Birth\"></ion-input>\n        </ion-col>\n      </form>\n\n    </ion-row>\n    <h5 class=\"ion-float-left\" style=\"margin: 20px 8px 20px 6px;\">Note* </h5>\n    <h5 class=\"color-gray thin-font \">we use this information just to address you and to share\n      information about offers.</h5>\n\n\n  </ion-grid>\n  <ion-button expand=\"full\" color=\"primary\" class=\"user-btn\" (click)=\"submit()\">Submit</ion-button>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/registration/userdetails/userdetails-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/registration/userdetails/userdetails-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: UserdetailsPageRoutingModule */

  /***/
  function srcAppRegistrationUserdetailsUserdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsPageRoutingModule", function () {
      return UserdetailsPageRoutingModule;
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


    var _userdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userdetails.page */
    "./src/app/registration/userdetails/userdetails.page.ts");

    var routes = [{
      path: '',
      component: _userdetails_page__WEBPACK_IMPORTED_MODULE_3__["UserdetailsPage"]
    }];

    var UserdetailsPageRoutingModule = function UserdetailsPageRoutingModule() {
      _classCallCheck(this, UserdetailsPageRoutingModule);
    };

    UserdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/registration/userdetails/userdetails.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/registration/userdetails/userdetails.module.ts ***!
    \****************************************************************/

  /*! exports provided: UserdetailsPageModule */

  /***/
  function srcAppRegistrationUserdetailsUserdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsPageModule", function () {
      return UserdetailsPageModule;
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


    var _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./userdetails-routing.module */
    "./src/app/registration/userdetails/userdetails-routing.module.ts");
    /* harmony import */


    var _userdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userdetails.page */
    "./src/app/registration/userdetails/userdetails.page.ts");

    var UserdetailsPageModule = function UserdetailsPageModule() {
      _classCallCheck(this, UserdetailsPageModule);
    };

    UserdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _userdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserdetailsPageRoutingModule"]],
      declarations: [_userdetails_page__WEBPACK_IMPORTED_MODULE_6__["UserdetailsPage"]]
    })], UserdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/registration/userdetails/userdetails.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/registration/userdetails/userdetails.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationUserdetailsUserdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-btn {\n  margin: 0 -3px 0 -3px;\n  position: absolute;\n  width: -webkit-fill-available;\n  bottom: 0;\n}\n\n.input-position {\n  bottom: 11%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3VzZXJkZXRhaWxzL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFxyZWdpc3RyYXRpb25cXHVzZXJkZXRhaWxzXFx1c2VyZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi91c2VyZGV0YWlscy91c2VyZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXRpb24vdXNlcmRldGFpbHMvdXNlcmRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItYnRue1xuICAgIG1hcmdpbjogMCAtM3B4IDAgLTNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgYm90dG9tOiAwO1xufVxuLmlucHV0LXBvc2l0aW9ue1xuICAgIGJvdHRvbTogMTElO1xufSIsIi51c2VyLWJ0biB7XG4gIG1hcmdpbjogMCAtM3B4IDAgLTNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYm90dG9tOiAwO1xufVxuXG4uaW5wdXQtcG9zaXRpb24ge1xuICBib3R0b206IDExJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/registration/userdetails/userdetails.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/registration/userdetails/userdetails.page.ts ***!
    \**************************************************************/

  /*! exports provided: UserdetailsPage */

  /***/
  function srcAppRegistrationUserdetailsUserdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsPage", function () {
      return UserdetailsPage;
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


    var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/service/toast/toast.service */
    "./src/app/common/service/toast/toast.service.ts");
    /* harmony import */


    var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/apilayer/APIs/userapi.service */
    "./src/app/common/apilayer/APIs/userapi.service.ts");
    /* harmony import */


    var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UserdetailsPage = /*#__PURE__*/function () {
      // "firstName": "string",
      // "lastName": "string",
      // "email": "string",
      // "password": "password@123",
      // "mobile": "string",
      // "stayIn": "home",
      // "userType": "user",
      function UserdetailsPage(navctrl, toasterService, route, localStorage, userService) {
        var _this = this;

        _classCallCheck(this, UserdetailsPage);

        this.navctrl = navctrl;
        this.toasterService = toasterService;
        this.route = route;
        this.localStorage = localStorage;
        this.userService = userService; // user: any = {
        //   firstName: '',
        //   lastName: '',
        //   email: '',
        //   dob: ''
        // }

        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]),
          dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])
        });
        this.route.queryParams.subscribe(function (params) {
          console.log(params);

          if (params && params.phoneNumber) {
            _this.phoneNumber = JSON.parse(params.phoneNumber);
          }
        });
      }

      _createClass(UserdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          if (this.user.valid) this.userService.createUserData({
            firstName: this.user.value.firstName,
            lastName: this.user.value.lastName,
            email: this.user.value.email,
            password: "2a$10$6KyP2v0bOtxW0tBKgTjNsuJtDA",
            mobile: String(this.phoneNumber),
            stayIn: "home",
            userType: "user",
            dob: this.user.value.dob
          }).subscribe(function (res) {
            _this2.localStorage.setStorageKey('authToken', res['token']).then(function () {
              return _this2.navctrl.navigateForward('tabs/welcome');
            });
          });else if (this.user.get('firstName').invalid) this.toasterService.toastFail('Please enter a valid first name');else if (this.user.get('lastName').invalid) this.toasterService.toastFail('Please enter a valid last name');else if (this.user.get('email').invalid) this.toasterService.toastFail('Please enter a valid email');else if (this.user.get('dob').invalid) this.toasterService.toastFail('Please enter a valid date of birth');
        }
      }]);

      return UserdetailsPage;
    }();

    UserdetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"]
      }, {
        type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"]
      }];
    };

    UserdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userdetails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/userdetails/userdetails.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./userdetails.page.scss */
      "./src/app/registration/userdetails/userdetails.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"]])], UserdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=registration-userdetails-userdetails-module-es5.js.map