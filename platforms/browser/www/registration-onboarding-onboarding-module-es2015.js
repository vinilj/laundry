(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-onboarding-onboarding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/onboarding/onboarding.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/onboarding/onboarding.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-slides #mySlider>\n    <ion-slide>\n      <img src=\"../../../assets/imgs/coins.png\" alt=\"\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/imgs/rocket.png\" alt=\"\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../../assets/imgs/storedrop.png\" alt=\"\">\n    </ion-slide>\n  </ion-slides>\n\n  <ion-button class=\"transperent-btn btn-next\" (click)=\"swipeNext()\">Next -></ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/registration/onboarding/onboarding-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/registration/onboarding/onboarding-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: OnboardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageRoutingModule", function() { return OnboardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/registration/onboarding/onboarding.page.ts");




const routes = [
    {
        path: '',
        component: _onboarding_page__WEBPACK_IMPORTED_MODULE_3__["OnboardingPage"]
    }
];
let OnboardingPageRoutingModule = class OnboardingPageRoutingModule {
};
OnboardingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OnboardingPageRoutingModule);



/***/ }),

/***/ "./src/app/registration/onboarding/onboarding.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/registration/onboarding/onboarding.module.ts ***!
  \**************************************************************/
/*! exports provided: OnboardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPageModule", function() { return OnboardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onboarding-routing.module */ "./src/app/registration/onboarding/onboarding-routing.module.ts");
/* harmony import */ var _onboarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboarding.page */ "./src/app/registration/onboarding/onboarding.page.ts");







let OnboardingPageModule = class OnboardingPageModule {
};
OnboardingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["OnboardingPageRoutingModule"]
        ],
        declarations: [_onboarding_page__WEBPACK_IMPORTED_MODULE_6__["OnboardingPage"]],
    })
], OnboardingPageModule);



/***/ }),

/***/ "./src/app/registration/onboarding/onboarding.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/registration/onboarding/onboarding.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  height: -webkit-fill-available;\n  background: url('onboarding-4.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-slides img {\n  position: absolute;\n  top: 10%;\n}\nh1 {\n  color: #ffffff;\n}\n.btn-next {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 11;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL29uYm9hcmRpbmcvRDpcXFByb2plY3RzXFxsYXVuZHJ5XFxhcHAvc3JjXFxhcHBcXHJlZ2lzdHJhdGlvblxcb25ib2FyZGluZ1xcb25ib2FyZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNIRjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDRko7QURLQTtFQUNFLGNBQUE7QUNGRjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9vbmJvYXJkaW5nL29uYm9hcmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQge1xuLy8gICAtLWJhY2tncm91bmQ6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9vbmJvYXJkaW5nLTQucG5nJyk7XG4vLyAgIC8vIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvb25ib2FyZGluZy00LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gIH1cbn1cbmgxIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDExO1xufVxuIiwiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvb25ib2FyZGluZy00LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmlvbi1zbGlkZXMgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbn1cblxuaDEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/registration/onboarding/onboarding.page.ts":
/*!************************************************************!*\
  !*** ./src/app/registration/onboarding/onboarding.page.ts ***!
  \************************************************************/
/*! exports provided: OnboardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingPage", function() { return OnboardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/localstorage/local-stroage.service */ "./src/app/common/service/localstorage/local-stroage.service.ts");





let OnboardingPage = class OnboardingPage {
    constructor(navctrl, statusBar, localStorage) {
        this.navctrl = navctrl;
        this.statusBar = statusBar;
        this.localStorage = localStorage;
        localStorage.setStorageKey('viewedTutorial', true);
    }
    ngOnInit() {
    }
    swipeNext() {
        this.slides.isEnd().then((istrue) => {
            console.log(istrue);
            if (istrue) {
                console.log('finish');
                this.navctrl.navigateForward('login');
            }
            else {
                this.slides.slideNext();
            }
        });
    }
};
OnboardingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStroageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], OnboardingPage.prototype, "slides", void 0);
OnboardingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-onboarding',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./onboarding.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/onboarding/onboarding.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./onboarding.page.scss */ "./src/app/registration/onboarding/onboarding.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], src_app_common_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStroageService"]])
], OnboardingPage);



/***/ })

}]);
//# sourceMappingURL=registration-onboarding-onboarding-module-es2015.js.map