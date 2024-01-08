(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <!-- <ion-icon name=\"flash\"></ion-icon> -->\n      <!-- <ion-label>Tab One</ion-label> -->\n      <img src=\"../../assets/imgs/home.png\" alt=\"\">\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <!-- <ion-icon name=\"apps\"></ion-icon> -->\n      <!-- <ion-label>Tab Two</ion-label> -->\n      <img src=\"../../assets/imgs/gift.png\" alt=\"\">\n    </ion-tab-button>\n\n    <ion-tab-button class=\"scan-img\" tab=\"tab3\">\n      <!-- <ion-icon name=\"send\"></ion-icon> -->\n      <!-- <ion-label>Tab Three</ion-label> -->\n      <img src=\"../../assets/imgs/scan.png\" alt=\"\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"wallet\">\n      <!-- <ion-icon name=\"send\"></ion-icon> -->\n      <!-- <ion-label>Tab Three</ion-label> -->\n      <img src=\"../../assets/imgs/wallet.png\" alt=\"\">\n    </ion-tab-button>\n    <ion-tab-button tab=\"orderhistory\">\n      <!-- <ion-icon name=\"send\"></ion-icon> -->\n      <!-- <ion-label>Tab Three</ion-label> -->\n      <img src=\"../../assets/imgs/document.png\" alt=\"\">\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'orderdetail',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | orderdetail-orderdetail-module */[__webpack_require__.e("common"), __webpack_require__.e("orderdetail-orderdetail-module")]).then(__webpack_require__.bind(null, /*! ./orderdetail/orderdetail.module */ "./src/app/tabs/orderdetail/orderdetail.module.ts")).then(m => m.OrderdetailPageModule)
                    }
                ]
            },
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ./tab1/tab1.module */ "./src/app/tabs/tab1/tab1.module.ts")).then(m => m.Tab1PageModule)
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ./tab2/tab2.module */ "./src/app/tabs/tab2/tab2.module.ts")).then(m => m.Tab2PageModule)
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("default~registration-login-login-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ./tab3/tab3.module */ "./src/app/tabs/tab3/tab3.module.ts")).then(m => m.Tab3PageModule)
                    }
                ]
            }, {
                path: 'orderhistory',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | orderhistory-orderhistory-module */[__webpack_require__.e("common"), __webpack_require__.e("orderhistory-orderhistory-module")]).then(__webpack_require__.bind(null, /*! ./orderhistory/orderhistory.module */ "./src/app/tabs/orderhistory/orderhistory.module.ts")).then(m => m.OrderhistoryPageModule)
                    }
                ]
            }, {
                path: 'wallet',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | wallet-wallet-module */ "wallet-wallet-module").then(__webpack_require__.bind(null, /*! ./wallet/wallet.module */ "./src/app/tabs/wallet/wallet.module.ts")).then(m => m.WalletPageModule)
                    }
                ]
            },
            // {
            //   path: 'welcome',
            //   children: [
            //     {
            //       path: '',
            //       loadChildren: () =>import('./welcome/welcome.module').then(m => m.WelcomePageModule)
            //     }
            //   ]
            // },
            {
                path: '',
                redirectTo: '/tabs/welcome',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() | welcome-welcome-module */ "welcome-welcome-module").then(__webpack_require__.bind(null, /*! ./welcome/welcome.module */ "./src/app/tabs/welcome/welcome.module.ts")).then(m => m.WelcomePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/tabs/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button img {\n  text-align: center;\n  width: auto;\n  height: 2.5em;\n}\n\n.scan-img {\n  --padding-start: 5px;\n  --padding-end: 5px;\n}\n\n.scan-img img {\n  height: 4.5em;\n  text-align: center;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcUHJvamVjdHNcXGxhdW5kcnlcXGFwcC9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FEQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYnV0dG9uIHtcbiAgaW1nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgfVxufVxuLnNjYW4taW1nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDQuNWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cbn1cbiIsImlvbi10YWItYnV0dG9uIGltZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMi41ZW07XG59XG5cbi5zY2FuLWltZyB7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAtLXBhZGRpbmctZW5kOiA1cHg7XG59XG4uc2Nhbi1pbWcgaW1nIHtcbiAgaGVpZ2h0OiA0LjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




let TabsPage = class TabsPage {
    constructor(navctrl, statusbar) {
        this.navctrl = navctrl;
        this.statusbar = statusbar;
        statusbar.backgroundColorByHexString('#642e58');
        statusbar.styleLightContent();
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map