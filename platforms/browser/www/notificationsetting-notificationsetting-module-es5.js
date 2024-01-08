function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notificationsetting-notificationsetting-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/notificationsetting/notificationsetting.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/notificationsetting/notificationsetting.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsProfileNotificationsettingNotificationsettingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"background-primary\">\n  <ion-buttons class=\"back-btn\" slot=\"end\">\n    <ion-back-button text=\"\" icon=\"close\"></ion-back-button>\n  </ion-buttons>\n  <app-profileheader></app-profileheader>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-button class=\"transperent-btn tab-buttons\" [class.active]=\"activeTab=='push'\" color=\"secondary\"\n        (click)=\"tab('push')\">Push</ion-button>\n      <ion-button class=\"transperent-btn tab-buttons\" [class.active]=\"activeTab=='sms'\" color=\"secondary\"\n        (click)=\"tab('sms')\">SMS</ion-button>\n      <ion-button class=\"transperent-btn tab-buttons\" [class.active]=\"activeTab=='email'\" color=\"secondary\"\n        (click)=\"tab('email')\">Email</ion-button>\n    </ion-row>\n\n\n\n    <div [ngSwitch]=\"activeTab\">\n      <ion-col *ngSwitchCase=\"'push'\">\n        <ion-list class=\"input-transperent-border\">\n          <ion-item>\n            <ion-label>Offers Updates</ion-label>\n            <ion-toggle [(ngModel)]=\"pepperoni\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Price drop</ion-label>\n            <ion-toggle [(ngModel)]=\"sausage\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Wash Status/ Wash information</ion-label>\n            <ion-toggle [(ngModel)]=\"mushrooms\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Payment Pending/Remainder</ion-label>\n            <ion-toggle [(ngModel)]=\"payment\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col *ngSwitchCase=\"'sms'\">\n        <ion-list class=\"input-transperent-border\">\n          <ion-item>\n            <ion-label>Offers Updates</ion-label>\n            <ion-toggle [(ngModel)]=\"pepperoni\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Price drop</ion-label>\n            <ion-toggle [(ngModel)]=\"sausage\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Wash Status/ Wash information</ion-label>\n            <ion-toggle [(ngModel)]=\"mushrooms\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Payment Pending/Remainder</ion-label>\n            <ion-toggle [(ngModel)]=\"payment\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n      <ion-col *ngSwitchCase=\"'email'\">\n        <ion-list class=\"input-transperent-border\">\n          <ion-item>\n            <ion-label>Offers Updates</ion-label>\n            <ion-toggle [(ngModel)]=\"pepperoni\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Price drop</ion-label>\n            <ion-toggle [(ngModel)]=\"sausage\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Wash Status/ Wash information</ion-label>\n            <ion-toggle [(ngModel)]=\"mushrooms\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Payment Pending/Remainder</ion-label>\n            <ion-toggle [(ngModel)]=\"payment\" slot=\"end\" color=\"primary\"></ion-toggle>\n          </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </div>\n\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/profile/notificationsetting/notificationsetting-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/tabs/profile/notificationsetting/notificationsetting-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: NotificationsettingPageRoutingModule */

  /***/
  function srcAppTabsProfileNotificationsettingNotificationsettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsettingPageRoutingModule", function () {
      return NotificationsettingPageRoutingModule;
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


    var _notificationsetting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notificationsetting.page */
    "./src/app/tabs/profile/notificationsetting/notificationsetting.page.ts");

    var routes = [{
      path: '',
      component: _notificationsetting_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsettingPage"]
    }];

    var NotificationsettingPageRoutingModule = function NotificationsettingPageRoutingModule() {
      _classCallCheck(this, NotificationsettingPageRoutingModule);
    };

    NotificationsettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsettingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/notificationsetting/notificationsetting.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/tabs/profile/notificationsetting/notificationsetting.module.ts ***!
    \********************************************************************************/

  /*! exports provided: NotificationsettingPageModule */

  /***/
  function srcAppTabsProfileNotificationsettingNotificationsettingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsettingPageModule", function () {
      return NotificationsettingPageModule;
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


    var _notificationsetting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notificationsetting-routing.module */
    "./src/app/tabs/profile/notificationsetting/notificationsetting-routing.module.ts");
    /* harmony import */


    var _notificationsetting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notificationsetting.page */
    "./src/app/tabs/profile/notificationsetting/notificationsetting.page.ts");
    /* harmony import */


    var src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/components/customcomponent.module */
    "./src/app/common/components/customcomponent.module.ts");

    var NotificationsettingPageModule = function NotificationsettingPageModule() {
      _classCallCheck(this, NotificationsettingPageModule);
    };

    NotificationsettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notificationsetting_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsettingPageRoutingModule"], src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_7__["CustomComponentModule"]],
      declarations: [_notificationsetting_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsettingPage"]]
    })], NotificationsettingPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/profile/notificationsetting/notificationsetting.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/tabs/profile/notificationsetting/notificationsetting.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsProfileNotificationsettingNotificationsettingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".active {\n  border-bottom: 2px solid var(--ion-color-primary);\n  transition: 0.8s;\n}\n\n.tab-buttons {\n  width: 32%;\n}\n\n.toggle-checked {\n  --handle-background: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9wcm9maWxlL25vdGlmaWNhdGlvbnNldHRpbmcvRDpcXFByb2plY3RzXFxsYXVuZHJ5XFxhcHAvc3JjXFxhcHBcXHRhYnNcXHByb2ZpbGVcXG5vdGlmaWNhdGlvbnNldHRpbmdcXG5vdGlmaWNhdGlvbnNldHRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3Byb2ZpbGUvbm90aWZpY2F0aW9uc2V0dGluZy9ub3RpZmljYXRpb25zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC90YWJzL3Byb2ZpbGUvbm90aWZpY2F0aW9uc2V0dGluZy9ub3RpZmljYXRpb25zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiAwLjhzO1xufVxuLnRhYi1idXR0b25zIHtcbiAgd2lkdGg6IDMyJTtcbn1cbi50b2dnbGUtY2hlY2tlZHtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogZ3JheTtcbn0iLCIuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogMC44cztcbn1cblxuLnRhYi1idXR0b25zIHtcbiAgd2lkdGg6IDMyJTtcbn1cblxuLnRvZ2dsZS1jaGVja2VkIHtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogZ3JheTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/tabs/profile/notificationsetting/notificationsetting.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/tabs/profile/notificationsetting/notificationsetting.page.ts ***!
    \******************************************************************************/

  /*! exports provided: NotificationsettingPage */

  /***/
  function srcAppTabsProfileNotificationsettingNotificationsettingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsettingPage", function () {
      return NotificationsettingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotificationsettingPage = /*#__PURE__*/function () {
      function NotificationsettingPage() {
        _classCallCheck(this, NotificationsettingPage);

        this.activeTab = 'push';
      }

      _createClass(NotificationsettingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tab",
        value: function tab(event) {
          this.activeTab = event;
          console.log(this.activeTab);
        }
      }]);

      return NotificationsettingPage;
    }();

    NotificationsettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notificationsetting',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./notificationsetting.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/profile/notificationsetting/notificationsetting.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./notificationsetting.page.scss */
      "./src/app/tabs/profile/notificationsetting/notificationsetting.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NotificationsettingPage);
    /***/
  }
}]);
//# sourceMappingURL=notificationsetting-notificationsetting-module-es5.js.map