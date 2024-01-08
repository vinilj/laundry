function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userform-userform-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/userform/userform.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/userform/userform.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsProfileUserformUserformPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"background-primary\">\n  <ion-buttons class=\"back-btn\" slot=\"end\">\n    <ion-back-button text=\"\" icon=\"close\"></ion-back-button>\n  </ion-buttons>\n  <app-profileheader></app-profileheader>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"user\">\n    <ion-item>\n      <ion-label class=\"label-color\" position=\"floating\">First name</ion-label>\n      <ion-input [(ngModel)]=\"user.firstName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label-color\" position=\"floating\">Last name</ion-label>\n      <ion-input [(ngModel)]=\"user.lastName\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label-color\" position=\"floating\">Mobile Number</ion-label>\n      <ion-input [(ngModel)]=\"user.mobile\" type=\"tel\" maxLength=\"10\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label-color\" position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"user.email\" type=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"label-color\" position=\"floating\">Date of Birth</ion-label>\n      <ion-input [(ngModel)]=\"user.dob\" type=\"date\"></ion-input>\n    </ion-item>\n    <ion-radio-group class=\"input-transperent-border\" [(ngModel)]=\"user.stayIn\">\n      <h5 class=\"label-color thin-font\">\n        Living type\n      </h5>\n      <ion-row>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <ion-item>\n            <ion-label>Home</ion-label>\n            <ion-radio slot=\"start\" value=\"Home\" (click)=\"updateStay('Home')\"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-no-padding text-center\">\n          <ion-item>\n            <ion-label>Paying Guest</ion-label>\n            <ion-radio slot=\"start\" value=\"Paying Guest\" (click)=\"updateStay('Paying Guest')\"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-no-padding\">\n          <ion-item>\n            <ion-label>Hostel</ion-label>\n            <ion-radio slot=\"start\" value=\"Hostel\" (click)=\"updateStay('Hostel')\"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n    <ion-button color=\"primary\" expand=\"block\" (click)=\"updateUserData()\">Submit</ion-button>\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/profile/userform/userform-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/tabs/profile/userform/userform-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: UserformPageRoutingModule */

  /***/
  function srcAppTabsProfileUserformUserformRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserformPageRoutingModule", function () {
      return UserformPageRoutingModule;
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


    var _userform_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userform.page */
    "./src/app/tabs/profile/userform/userform.page.ts");

    var routes = [{
      path: '',
      component: _userform_page__WEBPACK_IMPORTED_MODULE_3__["UserformPage"]
    }];

    var UserformPageRoutingModule = function UserformPageRoutingModule() {
      _classCallCheck(this, UserformPageRoutingModule);
    };

    UserformPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserformPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/userform/userform.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/tabs/profile/userform/userform.module.ts ***!
    \**********************************************************/

  /*! exports provided: UserformPageModule */

  /***/
  function srcAppTabsProfileUserformUserformModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserformPageModule", function () {
      return UserformPageModule;
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


    var _userform_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./userform-routing.module */
    "./src/app/tabs/profile/userform/userform-routing.module.ts");
    /* harmony import */


    var _userform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userform.page */
    "./src/app/tabs/profile/userform/userform.page.ts");
    /* harmony import */


    var src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/components/customcomponent.module */
    "./src/app/common/components/customcomponent.module.ts");

    var UserformPageModule = function UserformPageModule() {
      _classCallCheck(this, UserformPageModule);
    };

    UserformPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _userform_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserformPageRoutingModule"], src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentModule"]],
      declarations: [_userform_page__WEBPACK_IMPORTED_MODULE_6__["UserformPage"]]
    })], UserformPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/userform/userform.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/tabs/profile/userform/userform.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsProfileUserformUserformPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-radio-group {\n  --ion-safe-area-left: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-radio-group ion-radio {\n  margin-right: 0.2em;\n  margin-left: 1px;\n}\nion-item {\n  --ion-safe-area-left: 0;\n  --padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9wcm9maWxlL3VzZXJmb3JtL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFx0YWJzXFxwcm9maWxlXFx1c2VyZm9ybVxcdXNlcmZvcm0ucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3Byb2ZpbGUvdXNlcmZvcm0vdXNlcmZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREdBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wcm9maWxlL3VzZXJmb3JtL3VzZXJmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yYWRpby1ncm91cCB7XG4gIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG5cbiAgaW9uLXJhZGlvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuIiwiaW9uLXJhZGlvLWdyb3VwIHtcbiAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbmlvbi1yYWRpby1ncm91cCBpb24tcmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDAuMmVtO1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tabs/profile/userform/userform.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/tabs/profile/userform/userform.page.ts ***!
    \********************************************************/

  /*! exports provided: UserformPage */

  /***/
  function srcAppTabsProfileUserformUserformPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserformPage", function () {
      return UserformPage;
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


    var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");
    /* harmony import */


    var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/apilayer/APIs/userapi.service */
    "./src/app/common/apilayer/APIs/userapi.service.ts");
    /* harmony import */


    var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/service/toast/toast.service */
    "./src/app/common/service/toast/toast.service.ts");

    var UserformPage = /*#__PURE__*/function () {
      function UserformPage(localStorage, toast, userService) {
        var _this = this;

        _classCallCheck(this, UserformPage);

        this.localStorage = localStorage;
        this.toast = toast;
        this.userService = userService;
        this.user = {
          firstName: '',
          lastName: '',
          dob: '',
          mobile: '',
          email: '',
          stayIn: '',
          home: false,
          pg: false,
          hostel: false
        };
        localStorage.getStoredKey('user').then(function (user) {
          _this.userService.getUserDataById(user.id).subscribe(function (res) {
            console.log(res);
            _this.user = res;
          });
        });
      }

      _createClass(UserformPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateUserData",
        value: function updateUserData() {
          var _this2 = this;

          var data = {
            "id": this.user.id,
            "firstName": this.user.firstName,
            "lastName": this.user.lastName,
            "email": this.user.email,
            // "password": 'password@123',
            "mobile": this.user.mobile,
            "stayIn": this.user.stayIn,
            "permissions": this.user.permissions,
            "dob": this.user.dob
          };
          console.log(this.user.stayIn, data);
          this.userService.updateUser(data).subscribe(function (res) {
            _this2.toast.toastSuccess('Profile updated');

            _this2.localStorage.setStorageKey('user', res);
          });
        }
      }, {
        key: "updateStay",
        value: function updateStay(stay) {
          this.user.stayIn = stay;
        }
      }]);

      return UserformPage;
    }();

    UserformPage.ctorParameters = function () {
      return [{
        type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStroageService"]
      }, {
        type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"]
      }];
    };

    UserformPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userform',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userform.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/userform/userform.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./userform.page.scss */
      "./src/app/tabs/profile/userform/userform.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStroageService"], src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"]])], UserformPage);
    /***/
  }
}]);
//# sourceMappingURL=userform-userform-module-es5.js.map