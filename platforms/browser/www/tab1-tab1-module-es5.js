function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab1/tab1.page.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab1/tab1.page.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar routerLink=\"/tabs/profile\">\n\n    <img class=\"profile-box\" src=\"../../../assets/imgs/profile.png\" alt=\"\">\n    <h3 class=\"name\" *ngIf=\"user\">Hello, {{user.name}}</h3>\n    <!-- <h3 class=\"name\" *ngIf=\"user\">Hello, Aditya</h3> -->\n\n    <p>Welcome to washby</p>\n\n    <!-- <ion-button class=\"transperent-btn icon-button\" slot=\"end\">\n      <ion-icon class=\"primary-color\" name=\"notifications-outline\"></ion-icon>\n    </ion-button> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-grid>\n\n    <!-- Wallet Card -->\n    <ion-card class=\"wallet-card\" routerLink=\"/tabs/wallet\">\n      <ion-row>\n        <ion-col>\n          <img src=\"../../assets/imgs/walletP.png\" alt=\"\">\n          <h3> Coin balance\n            <span style=\"float: right;\">{{totalWalletBalance}}</span>\n          </h3>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <!-- Walllet card end -->\n    <!-- Promotional Banners -->\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide>\n        <ion-card class=\"promotional-card\">\n          <img src=\"../../../assets/imgs/banner (1).png\" alt=\"\">\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"promotional-card\">\n          <img src=\"../../../assets/imgs/banner (2).png\" alt=\"\">\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"promotional-card\">\n          <img src=\"../../../assets/imgs/banner (3).png\" alt=\"\">\n        </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n    <!-- Promotional Banners ends -->\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"task-cards\" (click)=\"goToTaskCreation('SO')\">\n          <h3>Self Operated</h3>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card class=\"task-cards\" (click)=\"goToTaskCreation('DO')\">\n          <h3>DropOff</h3>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Self Operated Card -->\n    <div *ngFor=\"let orders of allActiveOrders; let i = index\">\n      <ion-card class=\"selfoperated-card\" *ngIf=\"orders.orderStatus != 'completed'\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"thin-font color-gray ion-no-margin\">You choose\n              <strong style=\"color: #000;\">Self Operated\n              </strong>\n            </h5>\n            <h5 class=\"thin-font color-gray ion-no-margin\">Estimated time for completing wash</h5>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"icon-row\">\n          <ion-col size=\"4\" class=\"text-center\">\n            <ion-icon name=\"stopwatch\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"8\">\n            <app-countdowntimer [data]=\"orders\"></app-countdowntimer>\n\n            <h6 class=\"thin-font color-gray ion-no-margin\" class=\"text-center\">Time remaining to complete wash</h6>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"btn-row\">\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"goToOrder(orders.id)\">\n            Payment Status</ion-button>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"goToOrder(orders.id)\">\n            Order Status</ion-button>\n        </ion-row>\n      </ion-card>\n      <!-- Self Operated Card end -->\n\n      <!-- Feedback card -->\n      <ion-card class=\"feedback-card\" *ngIf=\"orders.orderStatus == 'completed' && orders.feedback ==''\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"thin-font color-gray ion-no-margin\">Feedback</h5>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size='12' class=\"stars\">\n            <ion-icon [ngClass]=\"{'active': feedback > 0}\" (click)=\"addFeedback(1)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedback > 1}\" (click)=\"addFeedback(2)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedback > 2}\" (click)=\"addFeedback(3)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedback > 3}\" (click)=\"addFeedback(4)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedback > 4}\" (click)=\"addFeedback(5)\" name=\"star\"></ion-icon>\n          </ion-col>\n          <ion-input type=\"text\" class=\"comment-input\" placeholder=\"Comments\"></ion-input>\n        </ion-row>\n        <ion-row class=\"btn-row\">\n          <ion-button expand=\"full\" color=\"primary\" *ngIf=\"user\">{{user.name}}</ion-button>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"submit(i)\">Submit</ion-button>\n        </ion-row>\n      </ion-card>\n      <!-- Feedback card end -->\n    </div>\n\n\n\n\n\n\n\n\n\n    <!-- Drop Off Card -->\n    <div *ngFor=\" let drop of dropOrders; let i = index\">\n      <ion-card class=\"dropoff-card\" *ngIf=\"drop.orderStatus != 'delivered' || drop.paymentStatus !='paid' \">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"thin-font color-gray ion-no-margin\">You choose\n              <strong style=\"color: #000;\">Drop Off</strong>\n            </h5>\n            <h5 class=\"thin-font color-gray ion-no-margin\">Track your wash</h5>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col class=\"status-bar\">\n            <app-dropprogress [data]=\"drop.orderStatus\"></app-dropprogress>\n\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"btn-row\">\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"goToOrder(drop.id)\">Payment Status</ion-button>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"goToOrder(drop.id)\">Order Status</ion-button>\n        </ion-row>\n      </ion-card>\n\n      <!-- Feedback card -->\n      <ion-card class=\"feedback-card\" *ngIf=\"drop.orderStatus == 'delivered' && drop.feedback=='' && drop.paymentStatus =='paid'\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <h5 class=\"thin-font color-gray ion-no-margin\">Feedback</h5>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size='12' class=\"stars\">\n            <ion-icon [ngClass]=\"{'active': feedbackDrop > 0}\" (click)=\"addFeedbackDrop(1,i)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedbackDrop > 1}\" (click)=\"addFeedbackDrop(2,i)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedbackDrop > 2}\" (click)=\"addFeedbackDrop(3,i)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedbackDrop > 3}\" (click)=\"addFeedbackDrop(4,i)\" name=\"star\"></ion-icon>\n            <ion-icon [ngClass]=\"{'active': feedbackDrop > 4}\" (click)=\"addFeedbackDrop(5,i)\" name=\"star\"></ion-icon>\n          </ion-col>\n          <ion-input type=\"text\" class=\"comment-input\" placeholder=\"Comments\"></ion-input>\n        </ion-row>\n        <ion-row class=\"btn-row\">\n          <ion-button expand=\"full\" color=\"primary\" *ngIf=\"user\">{{user.name}}</ion-button>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"submitDrop(i)\">Submit</ion-button>\n        </ion-row>\n      </ion-card>\n      <!-- Feedback card end -->\n\n    </div>\n\n    <!-- Drop off card end -->\n\n\n\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/tabs/tab1/tab1.module.ts":
  /*!******************************************!*\
    !*** ./src/app/tabs/tab1/tab1.module.ts ***!
    \******************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppTabsTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/tabs/tab1/tab1.page.ts");
    /* harmony import */


    var src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/common/service/pipe/pipes.module */
    "./src/app/common/service/pipe/pipes.module.ts");
    /* harmony import */


    var src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/common/components/customcomponent.module */
    "./src/app/common/components/customcomponent.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], src_app_common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_app_common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_8__["CustomComponentModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"].forRoot({
        hardwareBackButton: false
      }), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
      }])],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]],
      providers: []
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tab1/tab1.page.scss":
  /*!******************************************!*\
    !*** ./src/app/tabs/tab1/tab1.page.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nh3 {\n  font-size: 16px !important;\n}\n\nion-content {\n  --background: #f4f4f4;\n}\n\nion-toolbar {\n  --background: #f4f4f4;\n}\n\nion-toolbar .profile-box {\n  max-height: 4em;\n}\n\nion-toolbar h4 {\n  margin: 1.4em 0 0 0;\n}\n\nion-toolbar ion-icon {\n  font-size: 2em;\n}\n\n.icon-button {\n  font-size: 1em;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.promotional-card {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  border-radius: 10px;\n}\n\n.promotional-card img {\n  width: 100%;\n}\n\n.selfoperated-card {\n  --background: #ffffff;\n  box-shadow: 0px 1px 4px rgba(142, 142, 142, 0.1);\n}\n\n.selfoperated-card ion-icon {\n  font-size: 5em;\n  color: var(--ion-color-primary);\n}\n\n.selfoperated-card .icon-row {\n  padding-top: 1em;\n}\n\n.selfoperated-card h1 {\n  font-size: 2.2em;\n  margin: 10px 0 0 0;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.selfoperated-card .btn-row {\n  margin: 0 -10px;\n  background: var(--ion-color-primary);\n}\n\n.selfoperated-card .btn-row ion-button {\n  --background: none;\n  width: 48%;\n  --box-shadow: none;\n}\n\n.dropoff-card {\n  --background: #ffffff;\n  box-shadow: 0px 1px 4px rgba(142, 142, 142, 0.1);\n}\n\n.dropoff-card ion-icon {\n  font-size: 6em;\n  color: var(--ion-color-primary);\n}\n\n.dropoff-card h1 {\n  font-size: 3.1em;\n  margin: 10px 0 0 0;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.dropoff-card .btn-row {\n  margin: 0 -10px;\n  background: var(--ion-color-primary);\n}\n\n.dropoff-card .btn-row ion-button {\n  --background: none;\n  width: 48%;\n  --box-shadow: none;\n}\n\n.dropoff-card .stars {\n  text-align: center;\n  font-size: 4em;\n}\n\n.dropoff-card .stars ion-icons {\n  font-size: 4em;\n}\n\n.dropoff-card .stars .active {\n  color: var(--ion-color-primary);\n  transition: 0.5s;\n}\n\n.feedback-card {\n  --background: #ffffff;\n  box-shadow: 0px 1px 4px rgba(142, 142, 142, 0.1);\n}\n\n.feedback-card ion-icon {\n  font-size: 3.5em;\n  margin: 0 0.2em;\n}\n\n.feedback-card h1 {\n  font-size: 3.1em;\n  margin: 10px 0 0 0;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.feedback-card .btn-row {\n  margin: 0 -10px;\n  background: var(--ion-color-primary);\n}\n\n.feedback-card .btn-row ion-button {\n  --background: none;\n  width: 48%;\n  --box-shadow: none;\n}\n\n.feedback-card .stars {\n  text-align: center;\n  padding: 1 0.5em 0;\n}\n\n.feedback-card .stars ion-icons {\n  font-size: 1.2em;\n}\n\n.feedback-card .stars .active {\n  color: var(--ion-color-primary);\n}\n\n.feedback-card .comment-input {\n  border-bottom: 1px solid #642e58;\n  box-sizing: border-box;\n  margin: 0 1em 1em 1em;\n}\n\n.status-bar {\n  padding: 2em 0;\n  margin-top: 2em;\n}\n\n.status-bar div {\n  display: inline;\n  font-size: 9px;\n  margin: 3% 5px;\n  text-align: center;\n}\n\n.bullet > span {\n  background: var(--ion-color-primary);\n  margin: auto;\n  border-radius: 50%;\n  width: 1em;\n}\n\n.progress {\n  padding-left: 3em;\n  list-style-type: none !important;\n}\n\n.bullet {\n  position: relative;\n  padding-bottom: 1em;\n  display: inline;\n}\n\n.bullet-final {\n  position: relative;\n  padding-bottom: 1em;\n  display: inline;\n}\n\n.bullet-final:after {\n  content: \"\";\n  position: absolute;\n  left: 40%;\n  bottom: 3.5em;\n  border: 8px solid #2b9f02;\n  border-radius: 50%;\n  display: inline;\n}\n\n.bullet:after {\n  content: \"\";\n  position: absolute;\n  left: 40%;\n  bottom: 3.5em;\n  border: 8px solid #2b9f02;\n  border-radius: 50%;\n  display: inline;\n}\n\n.bullet:before {\n  content: \"\";\n  position: absolute;\n  left: 40%;\n  width: 9em;\n  bottom: 4.2em;\n  border-top: 3px dashed #2b9f02;\n  display: inline;\n}\n\n.round-btn-bordered {\n  border: 1px solid #2b9f02;\n  text-align: center;\n  border-radius: 10px;\n  padding: 4px 12px;\n  font-size: 0.8em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.name {\n  font-size: 16px;\n  margin-top: 1.7em;\n}\n\n.task-cards {\n  --background: #ffffff;\n  padding: 1em 0;\n  margin: 0.5em 0 0 0;\n}\n\n.task-cards h3 {\n  text-align: center;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWIxL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFx0YWJzXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsMEJBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxxQkFBQTtBQ0lGOztBREhFO0VBQ0UsZUFBQTtBQ0tKOztBREhFO0VBQ0UsbUJBQUE7QUNLSjs7QURIRTtFQUNFLGNBQUE7QUNLSjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0FDS0Y7O0FERkE7RUFJRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRFJFO0VBQ0UsV0FBQTtBQ1VKOztBRE1BO0VBQ0UscUJBQUE7RUFFQSxnREFBQTtBQ0pGOztBREtFO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0FDSEo7O0FES0U7RUFDRSxnQkFBQTtBQ0hKOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNISjs7QURLRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtBQ0hKOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGTjs7QURNQTtFQUNFLHFCQUFBO0VBRUEsZ0RBQUE7QUNKRjs7QURLRTtFQUNFLGNBQUE7RUFDQSwrQkFBQTtBQ0hKOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNISjs7QURLRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtBQ0hKOztBRElJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGTjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBREtJO0VBQ0UsY0FBQTtBQ0hOOztBREtJO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQ0hOOztBRFFBO0VBQ0UscUJBQUE7RUFFQSxnREFBQTtBQ05GOztBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDTEo7O0FET0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0xKOztBRE9FO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FDTEo7O0FETUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0pOOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRE1JO0VBQ0UsZ0JBQUE7QUNKTjs7QURNSTtFQUNFLCtCQUFBO0FDSk47O0FET0U7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNMSjs7QURXQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDUkY7O0FEU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFVBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FDUEY7O0FEU0E7RUFDRSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsZUFBQTtBQ1BGOztBRFNBO0VBQ0Usa0JBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7QUNQRjs7QURTQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNORjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0xGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0pGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FES0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgLnByb2ZpbGUtYm94IHtcbiAgICBtYXgtaGVpZ2h0OiA0ZW07XG4gIH1cbiAgaDQge1xuICAgIG1hcmdpbjogMS40ZW0gMCAwIDA7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5cbi5pY29uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5wcm9tb3Rpb25hbC1jYXJkIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyBkaXNwbGF5OiBncmlkO1xuICAvLyBoZWlnaHQ6IDExZW07XG5cbiAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8vIGg1IHtcbiAgLy8gICBtYXJnaW46IGF1dG87XG4gIC8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIC8vIH1cbn1cblxuLnNlbGZvcGVyYXRlZC1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAvLyBwYWRkaW5nOiAwIDAuN2VtO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMSk7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDVlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIC5pY29uLXJvdyB7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgLmJ0bi1yb3cge1xuICAgIG1hcmdpbjogMCAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB3aWR0aDogNDglO1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxufVxuLmRyb3BvZmYtY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLy8gcGFkZGluZzogMCAwLjdlbTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjEpO1xuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA2ZW07XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1zaXplOiAzLjFlbTtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgLmJ0bi1yb3cge1xuICAgIG1hcmdpbjogMCAtMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB3aWR0aDogNDglO1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5zdGFycyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGlvbi1pY29ucyB7XG4gICAgICBmb250LXNpemU6IDRlbTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB9XG4gIH1cbn1cblxuLmZlZWRiYWNrLWNhcmQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC8vIHBhZGRpbmc6IDAgMC43ZW07XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IHJnYmEoMTQyLCAxNDIsIDE0MiwgMC4xKTtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMy41ZW07XG4gICAgbWFyZ2luOiAwIDAuMmVtO1xuICB9XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMuMWVtO1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAuYnRuLXJvdyB7XG4gICAgbWFyZ2luOiAwIC0xMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5zdGFycyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEgMC41ZW0gMDtcbiAgICBpb24taWNvbnMge1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxuICAuY29tbWVudC1pbnB1dCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NDJlNTg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDAgMWVtIDFlbSAxZW07XG4gIH1cbn1cblxuLy8gUHJvZ3Jlc3MgYmFyIGNzc1xuXG4uc3RhdHVzLWJhciB7XG4gIHBhZGRpbmc6IDJlbSAwO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbjogMyUgNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmJ1bGxldCA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMWVtO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYnVsbGV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uYnVsbGV0LWZpbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uYnVsbGV0LWZpbmFsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIGJvdHRvbTogMy41ZW07XG4gIGJvcmRlcjogOHB4IHNvbGlkICMyYjlmMDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmJ1bGxldDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICBib3R0b206IDMuNWVtO1xuICBib3JkZXI6IDhweCBzb2xpZCAjMmI5ZjAyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmJ1bGxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwJTtcbiAgd2lkdGg6IDllbTtcbiAgYm90dG9tOiA0LjJlbTtcbiAgYm9yZGVyLXRvcDogM3B4IGRhc2hlZCAjMmI5ZjAyO1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ucm91bmQtYnRuLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJiOWYwMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEuN2VtO1xufVxuLnRhc2stY2FyZHN7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMWVtIDA7XG4gIG1hcmdpbjogMC41ZW0gMCAwIDA7XG4gIGgze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn0iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn1cbmlvbi10b29sYmFyIC5wcm9maWxlLWJveCB7XG4gIG1heC1oZWlnaHQ6IDRlbTtcbn1cbmlvbi10b29sYmFyIGg0IHtcbiAgbWFyZ2luOiAxLjRlbSAwIDAgMDtcbn1cbmlvbi10b29sYmFyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5pY29uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnByb21vdGlvbmFsLWNhcmQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnByb21vdGlvbmFsLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxmb3BlcmF0ZWQtY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggcmdiYSgxNDIsIDE0MiwgMTQyLCAwLjEpO1xufVxuLnNlbGZvcGVyYXRlZC1jYXJkIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1ZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uc2VsZm9wZXJhdGVkLWNhcmQgLmljb24tcm93IHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cbi5zZWxmb3BlcmF0ZWQtY2FyZCBoMSB7XG4gIGZvbnQtc2l6ZTogMi4yZW07XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnNlbGZvcGVyYXRlZC1jYXJkIC5idG4tcm93IHtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uc2VsZm9wZXJhdGVkLWNhcmQgLmJ0bi1yb3cgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDQ4JTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uZHJvcG9mZi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMSk7XG59XG4uZHJvcG9mZi1jYXJkIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2ZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZHJvcG9mZi1jYXJkIGgxIHtcbiAgZm9udC1zaXplOiAzLjFlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZHJvcG9mZi1jYXJkIC5idG4tcm93IHtcbiAgbWFyZ2luOiAwIC0xMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZHJvcG9mZi1jYXJkIC5idG4tcm93IGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIHdpZHRoOiA0OCU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5kcm9wb2ZmLWNhcmQgLnN0YXJzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDRlbTtcbn1cbi5kcm9wb2ZmLWNhcmQgLnN0YXJzIGlvbi1pY29ucyB7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuLmRyb3BvZmYtY2FyZCAuc3RhcnMgLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5mZWVkYmFjay1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDRweCByZ2JhKDE0MiwgMTQyLCAxNDIsIDAuMSk7XG59XG4uZmVlZGJhY2stY2FyZCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIG1hcmdpbjogMCAwLjJlbTtcbn1cbi5mZWVkYmFjay1jYXJkIGgxIHtcbiAgZm9udC1zaXplOiAzLjFlbTtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZmVlZGJhY2stY2FyZCAuYnRuLXJvdyB7XG4gIG1hcmdpbjogMCAtMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmZlZWRiYWNrLWNhcmQgLmJ0bi1yb3cgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDQ4JTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmZlZWRiYWNrLWNhcmQgLnN0YXJzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxIDAuNWVtIDA7XG59XG4uZmVlZGJhY2stY2FyZCAuc3RhcnMgaW9uLWljb25zIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5mZWVkYmFjay1jYXJkIC5zdGFycyAuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5mZWVkYmFjay1jYXJkIC5jb21tZW50LWlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NDJlNTg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMCAxZW0gMWVtIDFlbTtcbn1cblxuLnN0YXR1cy1iYXIge1xuICBwYWRkaW5nOiAyZW0gMDtcbiAgbWFyZ2luLXRvcDogMmVtO1xufVxuLnN0YXR1cy1iYXIgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luOiAzJSA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1bGxldCA+IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMWVtO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5idWxsZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmJ1bGxldC1maW5hbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uYnVsbGV0LWZpbmFsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIGJvdHRvbTogMy41ZW07XG4gIGJvcmRlcjogOHB4IHNvbGlkICMyYjlmMDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uYnVsbGV0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIGJvdHRvbTogMy41ZW07XG4gIGJvcmRlcjogOHB4IHNvbGlkICMyYjlmMDI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uYnVsbGV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDAlO1xuICB3aWR0aDogOWVtO1xuICBib3R0b206IDQuMmVtO1xuICBib3JkZXItdG9wOiAzcHggZGFzaGVkICMyYjlmMDI7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnJvdW5kLWJ0bi1ib3JkZXJlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYjlmMDI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEuN2VtO1xufVxuXG4udGFzay1jYXJkcyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMWVtIDA7XG4gIG1hcmdpbjogMC41ZW0gMCAwIDA7XG59XG4udGFzay1jYXJkcyBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tab1/tab1.page.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/tab1/tab1.page.ts ***!
    \****************************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppTabsTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common/apilayer/APIs/orderapi.service */
    "./src/app/common/apilayer/APIs/orderapi.service.ts");
    /* harmony import */


    var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");
    /* harmony import */


    var src_app_common_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/service/payment/payment.service */
    "./src/app/common/service/payment/payment.service.ts");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(platform, toast, localStorage, userService, razorPay, navctrl, orderService) {
        var _this = this;

        _classCallCheck(this, Tab1Page);

        this.platform = platform;
        this.toast = toast;
        this.localStorage = localStorage;
        this.userService = userService;
        this.razorPay = razorPay;
        this.navctrl = navctrl;
        this.orderService = orderService;
        this.allActiveOrders = [];
        this.dropOrders = [];
        this.totalWalletBalance = 0;
        this.feedback = 0;
        this.feedbackDrop = 0;
        this.slideOpts = {
          initialSlide: 1,
          speed: 400,
          autoplay: true,
          pager: false,
          loop: true
        };
        userService.getUserData().subscribe(function (res) {
          _this.user = res;
        }); // this.getAllOrders()
        // this.getUserWalletData()
      }

      _createClass(Tab1Page, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getAllOrders();
          this.getUserWalletData();
        }
      }, {
        key: "goToTaskCreation",
        value: function goToTaskCreation(orderType) {
          var navigationExtras = {
            queryParams: {
              orderType: orderType
            }
          };
          this.navctrl.navigateForward('tabs/tab3', navigationExtras);
        }
      }, {
        key: "getUserWalletData",
        value: function getUserWalletData() {
          var _this2 = this;

          this.userService.getUserIdFromStorage().then(function () {
            _this2.totalWalletBalance = 0;

            _this2.userService.getUserWallet().subscribe(function (res) {
              console.log(res, 'wallet');
              _this2.totalWalletBalance += res[0].balance;
            });
          });
        }
      }, {
        key: "getAllOrders",
        value: function getAllOrders() {
          var _this3 = this;

          this.orderService.getUserIdFromStorage().then(function () {
            _this3.orderService.getAllOrders().subscribe(function (res) {
              console.log(res);
              _this3.dropOrders = res.filter(function (a) {
                return a.opertationType == 'drop off';
              });
              _this3.allActiveOrders = res.filter(function (a) {
                return a.opertationType != 'drop off';
              });
              console.log(_this3.dropOrders, 'Drop Order');
            }); // this.orderService.getDropOrder()
            //   .subscribe(res => {
            //     this.dropOrders = res
            //   })

          });
        }
      }, {
        key: "goToOrder",
        value: function goToOrder(id) {
          var navigationExtras = {
            queryParams: {
              id: id
            }
          };
          this.navctrl.navigateForward('tabs/orderdetail', navigationExtras);
        }
      }, {
        key: "presentToast",
        value: function presentToast(err) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toast.create({
                      message: 'err',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this4 = this;

          console.log('Begin async operation');
          setTimeout(function () {
            _this4.getAllOrders();

            _this4.getUserWalletData();

            event.target.complete();
          }, 1000);
        }
      }, {
        key: "addFeedback",
        value: function addFeedback(star, id) {
          this.feedback = star + '';
        }
      }, {
        key: "addFeedbackDrop",
        value: function addFeedbackDrop(star, index) {
          this.feedbackDrop = star + '';
        }
      }, {
        key: "submitDrop",
        value: function submitDrop(index) {
          var _this5 = this;

          var payload = {
            id: this.dropOrders[index].id,
            feedback: this.feedbackDrop
          };
          this.orderService.updateOrder(payload).subscribe(function (res) {
            _this5.getAllOrders();
          });
        }
      }, {
        key: "submit",
        value: function submit(index) {
          var _this6 = this;

          var payload = {
            id: this.allActiveOrders[index].id,
            feedback: this.feedback
          };
          this.orderService.updateOrder(payload).subscribe(function (res) {
            _this6.getAllOrders();
          });
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"]
      }, {
        type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"]
      }, {
        type: src_app_common_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_4__["OrderapiService"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/tabs/tab1/tab1.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_3__["UserapiService"], src_app_common_service_payment_payment_service__WEBPACK_IMPORTED_MODULE_6__["PaymentService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_4__["OrderapiService"]])], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map