(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/@ionic-native/qr-scanner/ngx/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ionic-native/qr-scanner/ngx/index.js ***!
  \************************************************************/
/*! exports provided: QRScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRScanner", function() { return QRScanner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QRScanner = /** @class */ (function (_super) {
    __extends(QRScanner, _super);
    function QRScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRScanner.prototype.prepare = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "prepare", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.scan = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "scan", { "callbackStyle": "node", "observable": true, "clearFunction": "cancelScan" }, arguments); };
    QRScanner.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "show", {}, arguments); };
    QRScanner.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "hide", {}, arguments); };
    QRScanner.prototype.enableLight = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "enableLight", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.destroy = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "destroy", {}, arguments); };
    QRScanner.prototype.disableLight = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "disableLight", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useFrontCamera = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "useFrontCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useBackCamera = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "useBackCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.useCamera = function (camera) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "useCamera", { "callbackStyle": "node" }, arguments); };
    QRScanner.prototype.pausePreview = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "pausePreview", {}, arguments); };
    QRScanner.prototype.resumePreview = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "resumePreview", {}, arguments); };
    QRScanner.prototype.getStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getStatus", {}, arguments); };
    QRScanner.prototype.openSettings = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "openSettings", { "sync": true }, arguments); };
    QRScanner.pluginName = "QRScanner";
    QRScanner.plugin = "cordova-plugin-qrscanner";
    QRScanner.pluginRef = "QRScanner";
    QRScanner.repo = "https://github.com/bitpay/cordova-plugin-qrscanner";
    QRScanner.platforms = ["Android", "Browser", "iOS", "Windows"];
    QRScanner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], QRScanner);
    return QRScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3FyLXNjYW5uZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFnSEgsNkJBQWlCOzs7O0lBUTlDLDJCQUFPO0lBYVAsd0JBQUk7SUFTSix3QkFBSTtJQVNKLHdCQUFJO0lBV0osK0JBQVc7SUFTWCwyQkFBTztJQVdQLGdDQUFZO0lBV1osa0NBQWM7SUFXZCxpQ0FBYTtJQVliLDZCQUFTLGFBQUMsTUFBYztJQVN4QixnQ0FBWTtJQVNaLGlDQUFhO0lBU2IsNkJBQVM7SUFVVCxnQ0FBWTs7Ozs7O0lBN0lELFNBQVM7UUFEckIsVUFBVSxFQUFFO09BQ0EsU0FBUztvQkFsSHRCO0VBa0grQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFFSU2Nhbm5lclN0YXR1cyB7XG4gIC8qKlxuICAgKiBPbiBpT1MgYW5kIEFuZHJvaWQgNi4wKywgY2FtZXJhIGFjY2VzcyBpcyBncmFudGVkIGF0IHJ1bnRpbWUgYnkgdGhlIHVzZXIgKGJ5IGNsaWNraW5nIFwiQWxsb3dcIiBhdCB0aGUgZGlhbG9nKS5cbiAgICogVGhlIGF1dGhvcml6ZWQgcHJvcGVydHkgaXMgYSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgb25seSB3aGVuIHRoZSB1c2VyIGhhcyBhbGxvd2VkIGNhbWVyYSBhY2Nlc3MgdG8geW91ciBhcHAgKEFWQXV0aG9yaXphdGlvblN0YXR1cy5BdXRob3JpemVkKS5cbiAgICogT24gcGxhdGZvcm1zIHdpdGggcGVybWlzc2lvbnMgZ3JhbnRlZCBhdCBpbnN0YWxsIChBbmRyb2lkIHByZS02LjAsIFdpbmRvd3MgUGhvbmUpIHRoaXMgcHJvcGVydHkgaXMgYWx3YXlzIHRydWUuXG4gICAqL1xuICBhdXRob3JpemVkOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgaWYgdGhlIHVzZXIgcGVybWFuZW50bHkgZGVuaWVkIGNhbWVyYSBhY2Nlc3MgdG8gdGhlIGFwcCAoQVZBdXRob3JpemF0aW9uU3RhdHVzLkRlbmllZCkuXG4gICAqIE9uY2UgZGVuaWVkLCBjYW1lcmEgYWNjZXNzIGNhbiBvbmx5IGJlIGdhaW5lZCBieSByZXF1ZXN0aW5nIHRoZSB1c2VyIGNoYW5nZSB0aGVpciBkZWNpc2lvbiAoY29uc2lkZXIgb2ZmZXJpbmcgYSBsaW5rIHRvIHRoZSBzZXR0aW5nIHZpYSBvcGVuU2V0dGluZ3MoKSkuXG4gICAqL1xuICBkZW5pZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiB0aGUgdXNlciBpcyB1bmFibGUgdG8gZ3JhbnQgcGVybWlzc2lvbnMgZHVlIHRvIHBhcmVudGFsIGNvbnRyb2xzLCBvcmdhbml6YXRpb24gc2VjdXJpdHkgY29uZmlndXJhdGlvbiBwcm9maWxlcywgb3Igc2ltaWxhciByZWFzb25zLlxuICAgKi9cbiAgcmVzdHJpY3RlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIGlmIFFSU2Nhbm5lciBpcyBwcmVwYXJlZCB0byBjYXB0dXJlIHZpZGVvIGFuZCByZW5kZXIgaXQgdG8gdGhlIHZpZXcuXG4gICAqL1xuICBwcmVwYXJlZDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIHdoZW4gdGhlIHByZXZpZXcgbGF5ZXIgaXMgdmlzaWJsZSAoYW5kIG9uIGFsbCBwbGF0Zm9ybXMgYnV0IGJyb3dzZXIsIHRoZSBuYXRpdmUgd2VidmlldyBiYWNrZ3JvdW5kIGlzIHRyYW5zcGFyZW50KS5cbiAgICovXG4gIHNob3dpbmc6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBpZiBRUlNjYW5uZXIgaXMgYWN0aXZlbHkgc2Nhbm5pbmcgZm9yIGEgUVIgY29kZS5cbiAgICovXG4gIHNjYW5uaW5nOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgaWYgUVJTY2FubmVyIGlzIGRpc3BsYXlpbmcgYSBsaXZlIHByZXZpZXcgZnJvbSB0aGUgZGV2aWNlJ3MgY2FtZXJhLiBTZXQgdG8gZmFsc2Ugd2hlbiB0aGUgcHJldmlldyBpcyBwYXVzZWQuXG4gICAqL1xuICBwcmV2aWV3aW5nOiBib29sZWFuO1xuICAvKipcbiAgICogQSBib29sZWFuIHZhbHVlIHdoaWNoIGlzIHRydWUgaWYgdGhlIGxpZ2h0IGlzIGVuYWJsZWQuXG4gICAqL1xuICBsaWdodEVuYWJsZWQ6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBIGJvb2xlYW4gdmFsdWUgd2hpY2ggaXMgdHJ1ZSBvbmx5IGlmIHRoZSB1c2Vycycgb3BlcmF0aW5nIHN5c3RlbSBpcyBhYmxlIHRvIFFSU2Nhbm5lci5vcGVuU2V0dGluZ3MoKS5cbiAgICovXG4gIGNhbk9wZW5TZXR0aW5nczogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIG9ubHkgaWYgdGhlIHVzZXJzJyBkZXZpY2UgY2FuIGVuYWJsZSBhIGxpZ2h0IGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGN1cnJlbnRDYW1lcmEuXG4gICAqL1xuICBjYW5FbmFibGVMaWdodDogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgYm9vbGVhbiB2YWx1ZSB3aGljaCBpcyB0cnVlIG9ubHkgaWYgdGhlIGN1cnJlbnQgZGV2aWNlIFwic2hvdWxkXCIgaGF2ZSBhIGZyb250IGNhbWVyYS5cbiAgICogVGhlIGNhbWVyYSBtYXkgc3RpbGwgbm90IGJlIGNhcHR1cmFibGUsIHdoaWNoIHdvdWxkIGVtaXQgZXJyb3IgY29kZSAzLCA0LCBvciA1IHdoZW4gdGhlIHN3aXRjaCBpcyBhdHRlbXB0ZWQuXG4gICAqIChPbiB0aGUgYnJvd3NlciBwbGF0Zm9ybSwgdGhpcyB2YWx1ZSBpcyBmYWxzZSB1bnRpbCB0aGUgcHJlcGFyZSBtZXRob2QgaXMgY2FsbGVkLilcbiAgICovXG4gIGNhbkNoYW5nZUNhbWVyYTogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnRDYW1lcmEuIDAgaXMgdGhlIGJhY2sgY2FtZXJhLCAxIGlzIHRoZSBmcm9udC5cbiAgICovXG4gIGN1cnJlbnRDYW1lcmE6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBRUiBTY2FubmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIEEgZmFzdCwgZW5lcmd5IGVmZmljaWVudCwgaGlnaGx5LWNvbmZpZ3VyYWJsZSBRUiBjb2RlIHNjYW5uZXIgZm9yIENvcmRvdmEgYXBwcy5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXFyc2Nhbm5lcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtRUiBTY2FubmVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYml0cGF5L2NvcmRvdmEtcGx1Z2luLXFyc2Nhbm5lcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBRUlNjYW5uZXIsIFFSU2Nhbm5lclN0YXR1cyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvcXItc2Nhbm5lci9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHFyU2Nhbm5lcjogUVJTY2FubmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBPcHRpb25hbGx5IHJlcXVlc3QgdGhlIHBlcm1pc3Npb24gZWFybHlcbiAqIHRoaXMucXJTY2FubmVyLnByZXBhcmUoKVxuICogICAudGhlbigoc3RhdHVzOiBRUlNjYW5uZXJTdGF0dXMpID0+IHtcbiAqICAgICAgaWYgKHN0YXR1cy5hdXRob3JpemVkKSB7XG4gKiAgICAgICAgLy8gY2FtZXJhIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcbiAqXG4gKlxuICogICAgICAgIC8vIHN0YXJ0IHNjYW5uaW5nXG4gKiAgICAgICAgbGV0IHNjYW5TdWIgPSB0aGlzLnFyU2Nhbm5lci5zY2FuKCkuc3Vic2NyaWJlKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAqICAgICAgICAgIGNvbnNvbGUubG9nKCdTY2FubmVkIHNvbWV0aGluZycsIHRleHQpO1xuICpcbiAqICAgICAgICAgIHRoaXMucXJTY2FubmVyLmhpZGUoKTsgLy8gaGlkZSBjYW1lcmEgcHJldmlld1xuICogICAgICAgICAgc2NhblN1Yi51bnN1YnNjcmliZSgpOyAvLyBzdG9wIHNjYW5uaW5nXG4gKiAgICAgICAgfSk7XG4gKlxuICogICAgICB9IGVsc2UgaWYgKHN0YXR1cy5kZW5pZWQpIHtcbiAqICAgICAgICAvLyBjYW1lcmEgcGVybWlzc2lvbiB3YXMgcGVybWFuZW50bHkgZGVuaWVkXG4gKiAgICAgICAgLy8geW91IG11c3QgdXNlIFFSU2Nhbm5lci5vcGVuU2V0dGluZ3MoKSBtZXRob2QgdG8gZ3VpZGUgdGhlIHVzZXIgdG8gdGhlIHNldHRpbmdzIHBhZ2VcbiAqICAgICAgICAvLyB0aGVuIHRoZXkgY2FuIGdyYW50IHRoZSBwZXJtaXNzaW9uIGZyb20gdGhlcmVcbiAqICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAvLyBwZXJtaXNzaW9uIHdhcyBkZW5pZWQsIGJ1dCBub3QgcGVybWFuZW50bHkuIFlvdSBjYW4gYXNrIGZvciBwZXJtaXNzaW9uIGFnYWluIGF0IGEgbGF0ZXIgdGltZS5cbiAqICAgICAgfVxuICogICB9KVxuICogICAuY2F0Y2goKGU6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGlzJywgZSkpO1xuICpcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBRUlNjYW5uZXJTdGF0dXNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdRUlNjYW5uZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXInLFxuICBwbHVnaW5SZWY6ICdRUlNjYW5uZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2JpdHBheS9jb3Jkb3ZhLXBsdWdpbi1xcnNjYW5uZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUVJTY2FubmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIHVzZSBRUiBzY2FubmVyLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIHByZXBhcmUoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCB0aGlzIG1ldGhvZCB0byBlbmFibGUgc2Nhbm5pbmcuIFlvdSBtdXN0IHRoZW4gY2FsbCB0aGUgYHNob3dgIG1ldGhvZCB0byBtYWtlIHRoZSBjYW1lcmEgcHJldmlldyB2aXNpYmxlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPHN0cmluZz59IHJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHRoZSBzY2FubmVkIHRleHQuIFVuc3Vic2NyaWJlIGZyb20gdGhlIG9ic2VydmFibGUgdG8gc3RvcCBzY2FubmluZy5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnY2FuY2VsU2NhbidcbiAgfSlcbiAgc2NhbigpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBuYXRpdmUgd2VidmlldyB0byBoYXZlIGEgdHJhbnNwYXJlbnQgYmFja2dyb3VuZCwgdGhlbiBzZXRzIHRoZSBiYWNrZ3JvdW5kIG9mIHRoZSA8Ym9keT4gYW5kIDxodG1sPiBET00gZWxlbWVudHMgdG8gdHJhbnNwYXJlbnQsIGFsbG93aW5nIHRoZSB3ZWJ2aWV3IHRvIHJlLXJlbmRlciB3aXRoIHRoZSB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIG5hdGl2ZSB3ZWJ2aWV3IHRvIGJlIG9wYXF1ZSB3aXRoIGEgd2hpdGUgYmFja2dyb3VuZCwgY292ZXJpbmcgdGhlIHZpZGVvIHByZXZpZXcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGhpZGUoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBkZXZpY2UncyBsaWdodCAoZm9yIHNjYW5uaW5nIGluIGxvdy1saWdodCBlbnZpcm9ubWVudHMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrU3R5bGU6ICdub2RlJ1xuICB9KVxuICBlbmFibGVMaWdodCgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IHRoZSBzY2FubmVyIGluc3RhbmNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZXN0cm95KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGRldmljZSdzIGxpZ2h0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnXG4gIH0pXG4gIGRpc2FibGVMaWdodCgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgZnJvbnQgY2FtZXJhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgdXNlRnJvbnRDYW1lcmEoKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIGJhY2sgY2FtZXJhXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgdXNlQmFja0NhbWVyYSgpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY2FtZXJhIHRvIGJlIHVzZWQuXG4gICAqIEBwYXJhbSBjYW1lcmEge251bWJlcn0gUHJvdmlkZSBgMGAgZm9yIGJhY2sgY2FtZXJhLCBhbmQgYDFgIGZvciBmcm9udCBjYW1lcmEuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZSdcbiAgfSlcbiAgdXNlQ2FtZXJhKGNhbWVyYTogbnVtYmVyKTogUHJvbWlzZTxRUlNjYW5uZXJTdGF0dXM+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUGF1c2VzIHRoZSB2aWRlbyBwcmV2aWV3IG9uIHRoZSBjdXJyZW50IGZyYW1lIGFuZCBwYXVzZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2VQcmV2aWV3KCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3Vtc2UgdGhlIHZpZGVvIHByZXZpZXcgYW5kIHJlc3VtZXMgc2Nhbm5pbmcuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzdW1lUHJldmlldygpOiBQcm9taXNlPFFSU2Nhbm5lclN0YXR1cz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHBlcm1pc3Npb24gc3RhdHVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UVJTY2FubmVyU3RhdHVzPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3RhdHVzKCk6IFByb21pc2U8UVJTY2FubmVyU3RhdHVzPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHNldHRpbmdzIHRvIGVkaXQgYXBwIHBlcm1pc3Npb25zLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgb3BlblNldHRpbmdzKCk6IHZvaWQge31cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js ***!
  \************************************************************************/
/*! exports provided: Vibration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vibration", function() { return Vibration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var Vibration = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Vibration, _super);
    function Vibration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibration.prototype.vibrate = function (time) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "vibrate", { "sync": true }, arguments); };
    Vibration.pluginName = "Vibration";
    Vibration.plugin = "cordova-plugin-vibration";
    Vibration.pluginRef = "navigator";
    Vibration.repo = "https://github.com/apache/cordova-plugin-vibration";
    Vibration.platforms = ["Android", "iOS", "Windows"];
Vibration.ɵfac = function Vibration_Factory(t) { return ɵVibration_BaseFactory(t || Vibration); };
Vibration.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Vibration, factory: function (t) { return Vibration.ɵfac(t); } });
var ɵVibration_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Vibration);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Vibration, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Vibration;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvdmlicmF0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtJQW9DK0IsNkJBQWlCOzs7O0lBUzlDLDJCQUFPLGFBQUMsSUFBdUI7Ozs7O3dEQUdnUztJQVpwVCxTQUFTLHdCQURyQixVQUFVLEVBQUUsUUFDQSxTQUFTOzs7OzswQkFBRTtvQkF0Q3hCO0VBc0MrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbi8qKlxuICogQG5hbWUgVmlicmF0aW9uXG4gKiBAZGVzY3JpcHRpb24gVmlicmF0ZXMgdGhlIGRldmljZVxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBWaWJyYXRpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL3ZpYnJhdGlvbi9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlicmF0aW9uOiBWaWJyYXRpb24pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIFZpYnJhdGUgdGhlIGRldmljZSBmb3IgYSBzZWNvbmRcbiAqIC8vIER1cmF0aW9uIGlzIGlnbm9yZWQgb24gaU9TLlxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZSgxMDAwKTtcbiAqXG4gKiAvLyBWaWJyYXRlIDIgc2Vjb25kc1xuICogLy8gUGF1c2UgZm9yIDEgc2Vjb25kXG4gKiAvLyBWaWJyYXRlIGZvciAyIHNlY29uZHNcbiAqIC8vIFBhdHRlcm5zIHdvcmsgb24gQW5kcm9pZCBhbmQgV2luZG93cyBvbmx5XG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKFsyMDAwLDEwMDAsMjAwMF0pO1xuICpcbiAqIC8vIFN0b3AgYW55IGN1cnJlbnQgdmlicmF0aW9ucyBpbW1lZGlhdGVseVxuICogLy8gV29ya3Mgb24gQW5kcm9pZCBhbmQgV2luZG93cyBvbmx5XG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVmlicmF0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdmlicmF0aW9uJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tdmlicmF0aW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWJyYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFZpYnJhdGVzIHRoZSBkZXZpY2UgZm9yIGdpdmVuIGFtb3VudCBvZiB0aW1lLlxuICAgKiBAcGFyYW0gdGltZSB7bnVtYmVyfG51bWJlcltdfSBNaWxsaXNlY29uZHMgdG8gdmlicmF0ZSB0aGUgZGV2aWNlLiBJZiBwYXNzZWQgYW4gYXJyYXkgb2YgbnVtYmVycywgaXQgd2lsbCBkZWZpbmUgYSB2aWJyYXRpb24gcGF0dGVybi4gUGFzcyAwIHRvIHN0b3AgYW55IHZpYnJhdGlvbiBpbW1lZGlhdGVseS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHZpYnJhdGUodGltZTogbnVtYmVyIHwgbnVtYmVyW10pIHsgfVxuXG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab3/tab3.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab3/tab3.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n\n  <ion-grid id=\"scanButtons\">\n    <!-- <ion-row>\n      <ion-col>\n\n        <div class=\"scan ion-activatable\" (click)=\"scan()\">\n          <h4>Self Operated</h4>\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div class=\"scan ion-activatable\" (click)=\"scanDrop()\">\n          <h4>Drop Off</h4>\n          <ion-ripple-effect></ion-ripple-effect>\n        </div>\n      </ion-col>\n    </ion-row> -->\n    <p style=\"font-size: 12px;\">*Scan QR to start the order</p>\n    <p text-center>or</p>\n    <p style=\"font-size: 12px;\">*Enter MachineId to start the order</p>\n    <ion-row>\n\n      <ion-col size='9'>\n        <ion-input type=\"number\" [(ngModel)]=\"machineId\" class=\"num-input\" placeholder=\"Machine-Id\">\n        </ion-input>\n      </ion-col>\n      <ion-col size='3' class=\"ion-no-padding\">\n        <ion-button expand=\"block\" color=\"primary\" (click)=\"proceedToManual()\">Go</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/tabs/tab3/tab3.module.ts":
/*!******************************************!*\
  !*** ./src/app/tabs/tab3/tab3.module.ts ***!
  \******************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tabs/tab3/tab3.page.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js");










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]],
        providers: [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_7__["QRScanner"], _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_8__["BLE"], _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_9__["Vibration"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tabs/tab3/tab3.page.scss":
/*!******************************************!*\
  !*** ./src/app/tabs/tab3/tab3.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scan {\n  background: #f4f4f4;\n  padding: 1.5em 0;\n  border-radius: 10px;\n}\n.scan h4 {\n  color: var(--ion-color-primary);\n  text-align: center;\n}\n.scanConatainer {\n  height: 10em;\n}\nion-content {\n  --background: transperent;\n}\nion-grid {\n  padding: 1em 0;\n  background: white;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWIzL0Q6XFxQcm9qZWN0c1xcbGF1bmRyeVxcYXBwL3NyY1xcYXBwXFx0YWJzXFx0YWIzXFx0YWIzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFicy90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSEY7QURIRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUNLSjtBRENBO0VBQ0UsWUFBQTtBQ0VGO0FEQUE7RUFDRSx5QkFBQTtBQ0dGO0FEREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NhbiB7XG4gIGg0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBwYWRkaW5nOiAxLjVlbSAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNjYW5Db25hdGFpbmVyIHtcbiAgaGVpZ2h0OiAxMGVtO1xufVxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGVyZW50O1xufVxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn1cbiIsIi5zY2FuIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgcGFkZGluZzogMS41ZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zY2FuIGg0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2NhbkNvbmF0YWluZXIge1xuICBoZWlnaHQ6IDEwZW07XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BlcmVudDtcbn1cblxuaW9uLWdyaWQge1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tabs/tab3/tab3.page.ts":
/*!****************************************!*\
  !*** ./src/app/tabs/tab3/tab3.page.ts ***!
  \****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
/* harmony import */ var src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/apilayer/APIs/orderapi.service */ "./src/app/common/apilayer/APIs/orderapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/toast/toast.service */ "./src/app/common/service/toast/toast.service.ts");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "./node_modules/@ionic-native/vibration/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/apilayer/APIs/userapi.service */ "./src/app/common/apilayer/APIs/userapi.service.ts");










let Tab3Page = class Tab3Page {
    constructor(qr, userService, alertController, vibration, ngZone, ble, toast, platform, navctrl, orderService, route) {
        this.qr = qr;
        this.userService = userService;
        this.alertController = alertController;
        this.vibration = vibration;
        this.ngZone = ngZone;
        this.ble = ble;
        this.toast = toast;
        this.platform = platform;
        this.navctrl = navctrl;
        this.orderService = orderService;
        this.route = route;
        this.currencyIcon = '₹';
        this.currency = 'INR';
        // // testKey
        // razor_key: string = 'rzp_test_rRvE0JzWWGkqh1';
        //Live Key
        this.razor_key = 'rzp_live_1FMhHw7pwKiV36';
        this.couponAmount = {
            coins: 0,
            coupon: ''
        };
        this.walletBalance = 0;
        this.paidAmount = 0;
        this.walletDeduction = 0;
        this.platform.backButton.subscribeWithPriority(0, () => {
            // document.getElementsByTagName('ion-content')[0].style.opacity = "1";
            document.getElementsByTagName('body')[0].style.opacity = '1';
        });
        this.userService.getUserData()
            .subscribe(res => { this.user = res; console.log(res); });
        this.route.queryParams
            .subscribe(params => {
            if (params.orderType == 'SO') {
                this.selectedType = "self operated";
                this.scan();
            }
            else if (params.orderType == 'DO') {
                this.selectedType = 'drop off';
                this.scanDrop();
            }
            else {
                this.showTaskSelection();
            }
        });
        this.userService.getUserIdFromStorage()
            .then(() => {
            this.userService.getUserWallet()
                .subscribe(res => {
                console.log(res, 'wallet');
                res.forEach(element => {
                    this.walletBalance += element.balance;
                });
            });
        });
    }
    ionViewWillLeave() {
        this.qr.destroy();
        this.qrScan.unsubscribe();
        document.getElementsByTagName('body')[0].style.opacity = '1';
    }
    showTaskSelection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please select the type of order ',
                buttons: [
                    {
                        text: 'Self Operated',
                        handler: (data) => {
                            this.selectedType = "self operated";
                            this.scan();
                        }
                    }, {
                        text: 'DropOff',
                        handler: (data) => {
                            this.selectedType = 'drop off';
                            this.scanDrop();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    proceedToManual() {
        console.log(this.machineId);
        this.orderService.getmachineById(this.machineId)
            .subscribe(res => {
            this.textFound = res;
            if (res.operationType == this.selectedType) {
                if (this.selectedType == 'drop off')
                    this.manualDrop(res);
                else if (this.selectedType == 'self operated') {
                    this.manualSelf(res);
                }
            }
            else
                this.toast.toastFail('The machine is not of type ' + this.selectedType);
        });
    }
    /**MAnual order creations starts */
    manualSelf(machine) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please Pay ₹' + machine.charges + ' to start the order',
                subHeader: 'You have ' + this.walletBalance + ' coins in your wallet',
                inputs: [
                    {
                        name: 'applyCoupon',
                        type: 'text',
                        placeholder: 'Apply Coupon Code'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }, {
                        text: 'Proceed',
                        handler: (data) => {
                            if (data.applyCoupon) {
                                this.orderService.getInstantCoupon({
                                    "coupon": data.applyCoupon,
                                    "franchiseId": machine.franchiseId
                                })
                                    .subscribe(res => {
                                    console.log(res, "cupons");
                                    this.couponAmount = res;
                                    if (machine.charges > (this.walletBalance + this.couponAmount.coins)) {
                                        this.walletDeduction = this.walletBalance;
                                        this.pay(machine.charges - this.walletBalance - this.couponAmount.coins);
                                    }
                                    else if (machine.charges <= this.couponAmount.coins) {
                                        // this.walletDeduction = machine.charges;
                                        this.paidAmount = 0;
                                        this.successCallback('paid');
                                    }
                                });
                            }
                            else if (this.walletBalance > machine.charges) {
                                this.walletDeduction = machine.charges;
                                this.paidAmount = 0;
                                this.successCallback('paid');
                            }
                            else {
                                this.walletDeduction = 0;
                                this.paidAmount = machine.charges;
                                this.pay(machine.charges);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    manualDrop(machine) {
        this.orderService.getUserIdFromStorage()
            .then(() => {
            this.orderService.createDropOrder({
                operationType: "drop off",
                franchiseId: machine.franchiseId,
                machineId: machine.id,
                weight: 0,
                amount: 0,
                walletDeductions: 0,
                promoDeductions: 0,
                promoCode: 0
            })
                .subscribe(res => {
                console.log(res);
                let navigationExtras = {
                    queryParams: {
                        // queryParams: textFound,
                        id: res.id
                    }
                };
                if (res.id)
                    this.navctrl.navigateForward('tabs/orderdetail', navigationExtras);
                else
                    this.navctrl.navigateForward('tabs/tab1');
            });
        });
    }
    /**manual order ends */
    scanDrop() {
        // this.toast.toastFail("Drop Off unavailable at the moment")
        if (this.qrActive) {
            this.qr.hide();
        }
        this.qr.prepare()
            .then((status) => {
            if (status.authorized) {
                this.qr.show();
                this.qrScan = this.qr.scan()
                    .subscribe((textFound) => {
                    let qrData = JSON.parse(textFound);
                    console.log('QRCODE MACHINE ADDRESS: ', qrData);
                    /**vibrattion upon qrcode scan */
                    this.vibration.vibrate(500);
                    //**connection after qr Code scan */
                    this.orderService.getUserIdFromStorage()
                        .then(() => {
                        this.orderService.createDropOrder({
                            operationType: "drop 0ff",
                            franchiseId: qrData.franchiseId,
                            machineId: qrData.machineId,
                            weight: 0, amount: 0
                        })
                            .subscribe(res => {
                            console.log(res);
                            let navigationExtras = {
                                queryParams: {
                                    // queryParams: textFound,
                                    id: res.id
                                }
                            };
                            if (res.id)
                                this.navctrl.navigateForward('tabs/orderdetail', navigationExtras);
                            else
                                this.navctrl.navigateForward('tabs/tab1');
                        });
                    });
                    this.qr.hide();
                    document.getElementsByTagName('body')[0].style.opacity = "1";
                }, (err) => {
                    document.getElementsByTagName('body')[0].style.opacity = "1";
                });
            }
            else if (status.denied) {
                window.alert('status denied');
                this.qr.openSettings();
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch((e) => console.log('Error is', e));
    }
    scan() {
        this.devices = [];
        this.ble.scan([], 5).subscribe(device => this.onDeviceDiscovered(device));
        if (this.qrActive) {
            this.qr.hide();
        }
        /**Qr Json sample */
        // {"type": "SO", "fId": 1, "mId": 1, "address": "24:6F:28:A0:A9:DA","amount":100}
        this.qr.prepare()
            .then((status) => {
            if (status.authorized) {
                this.qr.show();
                this.qrScan = this.qr.scan()
                    .subscribe((textFound) => {
                    console.log('QRCODE MACHINE ADDRESS: ', JSON.parse(textFound), textFound);
                    /**vibrattion upon qrcode scan */
                    this.vibration.vibrate(500);
                    //**connection after qr Code scan */
                    this.textFound = JSON.parse(textFound);
                    this.manualSelf(this.textFound);
                    // this.connect(textFound)
                    this.qr.hide();
                    document.getElementsByTagName('body')[0].style.opacity = "1";
                }, (err) => {
                    document.getElementsByTagName('body')[0].style.opacity = "1";
                });
            }
            else if (status.denied) {
                window.alert('status denied');
                this.qr.openSettings();
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch((e) => console.log('Error is', e));
    }
    onDeviceDiscovered(device) {
        console.log('Discovered ' + JSON.stringify(device, null, 2));
        this.ngZone.run(() => {
            if (device.name == 'MyESP32')
                this.devices.push(device);
        });
    }
    /**Bluetooth Feature starts to connect the device */
    connect(device) {
        let str = 'a';
        var buf = new ArrayBuffer(str.length); // 2 bytes for each char
        var bufView = new Uint8Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        console.log("Self Operated");
        this.ble.connect(device.btAddress)
            .subscribe(res => {
            /**Writing into the bluetooth Device */
            /**changed to address->btAddress */
            this.ble.write(device.btAddress, res.characteristics[res.characteristics.length - 1].service, res.characteristics[res.characteristics.length - 1].characteristic, buf)
                .then(data => {
                console.log(data);
                /**Creates an order  */
                this.orderService.getUserIdFromStorage()
                    .then((data) => {
                    console.log(data, "creating order");
                    this.orderService.createOrder({
                        operationType: "Self Operated",
                        franchiseId: device.franchiseId,
                        machineId: device.id,
                        paymentStatus: "paid",
                        weight: 0,
                        amount: device.charges,
                        walletDeductions: this.walletDeduction,
                        promoDeductions: this.couponAmount.coins,
                        promoCode: this.couponAmount.coupon
                    })
                        .subscribe(res => {
                        console.log(res);
                        let navigationExtras = {
                            queryParams: { id: res.id }
                        };
                        if (navigationExtras.queryParams.id)
                            this.navctrl.navigateForward('tabs/orderdetail', navigationExtras);
                    });
                });
                this.navctrl.navigateForward('tabs/tab1');
                this.ble.disconnect(device);
            });
        }, err => {
            this.toast.toastFail('Unable to connect Please try another device');
            console.log('Unable to connect', err);
        });
    }
    pay(amount) {
        this.paidAmount = amount;
        this.qr.hide();
        let user = {
            email: this.user.email,
            contact: this.user.mobile,
            name: this.user.name,
            amount: amount
        };
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: this.currency,
            key: this.razor_key,
            amount: user.amount * 100,
            name: 'Coin Laundry',
            prefill: {
                email: user.email,
                contact: user.contact,
                name: user.name
            },
            theme: {
                color: '#642E58'
                // color: '#00000'
            },
            modal: {
                ondismiss: function () {
                    alert('dismissed');
                }
            }
        };
        RazorpayCheckout.open(options, (val) => this.successCallback(val), (err) => this.cancelCallback(err));
    }
    successCallback(payment_id) {
        this.connect(this.textFound);
        this.toast.toastSuccess('Payment Successful');
    }
    ;
    cancelCallback(error) {
        this.toast.toastFail('Payment Failed');
        // alert(error.description + ' (Error ' + error.code + ')');
    }
    ;
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"] },
    { type: src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_9__["UserapiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_8__["Vibration"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__["BLE"] },
    { type: src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_4__["OrderapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tab3/tab3.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tabs/tab3/tab3.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"], src_app_common_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_9__["UserapiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_8__["Vibration"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_7__["BLE"],
        src_app_common_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_common_apilayer_APIs_orderapi_service__WEBPACK_IMPORTED_MODULE_4__["OrderapiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map