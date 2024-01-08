function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"background-primary\">\n  <ion-buttons class=\"back-btn\" slot=\"end\">\n    <ion-back-button text=\"\" icon=\"close\"></ion-back-button>\n  </ion-buttons>\n  <app-profileheader></app-profileheader>\n</ion-header>\n\n\n<ion-content>\n  <ion-list class=\"list-item\">\n    <ion-item routerLink=\"/tabs/profile/userform\">\n      <ion-icon class=\"color-gray\" name=\"settings\"></ion-icon>\n      <ion-label>Account settings</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/tabs/orderhistory\">\n      <ion-icon class=\"color-gray\" name=\"home\" slot=\"start\"></ion-icon>\n      <ion-label>Transaction History</ion-label>\n    </ion-item>\n    <ion-item routerLink=\"/tabs/profile/notificationsetting\">\n      <ion-icon class=\"color-gray\" name=\"notifications-off\"></ion-icon>\n      <ion-label>Notification preference</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon class=\"color-gray\" name=\"home\" slot=\"start\"></ion-icon>\n      <ion-label>Support</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon class=\"color-gray\" name=\"chatbubbles\"></ion-icon>\n      <ion-label>Feedback</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon class=\"color-gray\" name=\"document\"></ion-icon>\n      <ion-label>Legal</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon class=\"color-gray\" name=\"share\"></ion-icon>\n      <ion-label>Share</ion-label>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-icon class=\"color-gray\" name=\"log-out\"></ion-icon>\n      <ion-label>Logout</ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/tabs/profile/profile-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppTabsProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/tabs/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }, {
      path: 'userform',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | userform-userform-module */
        "userform-userform-module").then(__webpack_require__.bind(null,
        /*! ./userform/userform.module */
        "./src/app/tabs/profile/userform/userform.module.ts")).then(function (m) {
          return m.UserformPageModule;
        });
      }
    }, {
      path: 'notificationsetting',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | notificationsetting-notificationsetting-module */
        "notificationsetting-notificationsetting-module").then(__webpack_require__.bind(null,
        /*! ./notificationsetting/notificationsetting.module */
        "./src/app/tabs/profile/notificationsetting/notificationsetting.module.ts")).then(function (m) {
          return m.NotificationsettingPageModule;
        });
      }
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile.module.ts":
  /*!************************************************!*\
    !*** ./src/app/tabs/profile/profile.module.ts ***!
    \************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppTabsProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/tabs/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/tabs/profile/profile.page.ts");
    /* harmony import */


    var src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/components/customcomponent.module */
    "./src/app/common/components/customcomponent.module.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile.page.scss":
  /*!************************************************!*\
    !*** ./src/app/tabs/profile/profile.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --border-color: #ffffff;\n}\nion-item ion-icon {\n  margin: 0 15px 0 10px;\n}\nion-item ion-label {\n  font-size: 1.2em;\n}\n.list-item {\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9wcm9maWxlL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFx0YWJzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQUE7QUNBRjtBRENFO0VBRUUscUJBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7QUNESjtBRElBO0VBQ0UsZUFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvdGFicy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICBpb24taWNvbiB7XG4gICAgLy8gZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAwIDE1cHggMCAxMHB4O1xuICAgIC8vY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG4ubGlzdC1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuIiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZmZmZjtcbn1cbmlvbi1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwIDE1cHggMCAxMHB4O1xufVxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/profile/profile.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/tabs/profile/profile.page.ts ***!
    \**********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppTabsProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/apilayer/APIs/userapi.service */
    "./src/app/common/apilayer/APIs/userapi.service.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(localStorage, navctrl, userService) {
        _classCallCheck(this, ProfilePage);

        this.localStorage = localStorage;
        this.navctrl = navctrl;
        this.userService = userService;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          this.userService.userLogout().subscribe(function (res) {
            _this.localStorage.clearStorage().then(function () {
              return _this.navctrl.navigateForward('login');
            });
          });
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStroageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/tabs/profile/profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStroageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_4__["UserapiService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map