(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~registration-login-login-module~tab3-tab3-module"], {
  /***/
  "./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic-native/ble/__ivy_ngcc__/ngx/index.js ***!
    \******************************************************************/

  /*! exports provided: BLE */

  /***/
  function node_modulesIonicNativeBle__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BLE", function () {
      return BLE;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BLE =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BLE, _super);

      function BLE() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      BLE.prototype.scan = function (services, seconds) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "scan", {
          "observable": true
        }, arguments);
      };

      BLE.prototype.startScan = function (services) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startScan", {
          "observable": true,
          "clearFunction": "stopScan",
          "clearWithArgs": false
        }, arguments);
      };

      BLE.prototype.startScanWithOptions = function (services, options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startScanWithOptions", {
          "observable": true,
          "clearFunction": "stopScan",
          "clearWithArgs": false
        }, arguments);
      };

      BLE.prototype.stopScan = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stopScan", {}, arguments);
      };

      BLE.prototype.connect = function (deviceId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "connect", {
          "observable": true,
          "clearFunction": "disconnect",
          "clearWithArgs": true
        }, arguments);
      };

      BLE.prototype.autoConnect = function (deviceId, connectCallback, disconnectCallback) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "autoConnect", {
          "sync": true
        }, arguments);
      };

      BLE.prototype.requestMtu = function (deviceId, mtuSize) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestMtu", {}, arguments);
      };

      BLE.prototype.refreshDeviceCache = function (deviceId, timeoutMillis) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "refreshDeviceCache", {}, arguments);
      };

      BLE.prototype.disconnect = function (deviceId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disconnect", {}, arguments);
      };

      BLE.prototype.read = function (deviceId, serviceUUID, characteristicUUID) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "read", {}, arguments);
      };

      BLE.prototype.write = function (deviceId, serviceUUID, characteristicUUID, value) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "write", {}, arguments);
      };

      BLE.prototype.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "writeWithoutResponse", {}, arguments);
      };

      BLE.prototype.startNotification = function (deviceId, serviceUUID, characteristicUUID) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startNotification", {
          "observable": true,
          "clearFunction": "stopNotification",
          "clearWithArgs": true
        }, arguments);
      };

      BLE.prototype.stopNotification = function (deviceId, serviceUUID, characteristicUUID) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stopNotification", {}, arguments);
      };

      BLE.prototype.isConnected = function (deviceId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isConnected", {}, arguments);
      };

      BLE.prototype.isEnabled = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", {}, arguments);
      };

      BLE.prototype.startStateNotifications = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startStateNotifications", {
          "observable": true,
          "clearFunction": "stopStateNotifications",
          "clearWithArgs": false
        }, arguments);
      };

      BLE.prototype.stopStateNotifications = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "stopStateNotifications", {}, arguments);
      };

      BLE.prototype.showBluetoothSettings = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showBluetoothSettings", {}, arguments);
      };

      BLE.prototype.enable = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", {}, arguments);
      };

      BLE.prototype.readRSSI = function (deviceId) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "readRSSI", {}, arguments);
      };

      BLE.prototype.connectedPeripheralsWithServices = function (services) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "connectedPeripheralsWithServices", {}, arguments);
      };

      BLE.prototype.peripheralsWithIdentifiers = function (uuids) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "peripheralsWithIdentifiers", {}, arguments);
      };

      BLE.prototype.bondedDevices = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "bondedDevices", {}, arguments);
      };

      BLE.pluginName = "BLE";
      BLE.plugin = "cordova-plugin-ble-central";
      BLE.pluginRef = "ble";
      BLE.repo = "https://github.com/don/cordova-plugin-ble-central";
      BLE.platforms = ["Android", "iOS"];

      BLE.ɵfac = function BLE_Factory(t) {
        return ɵBLE_BaseFactory(t || BLE);
      };

      BLE.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BLE,
        factory: function factory(t) {
          return BLE.ɵfac(t);
        }
      });

      var ɵBLE_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BLE);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BLE, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return BLE;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmxlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBQ2xDO0lBc0x5Qix1QkFBaUI7Ozs7SUFpQnhDLGtCQUFJLGFBQUMsUUFBa0IsRUFBRSxPQUFlO0lBeUJ4Qyx1QkFBUyxhQUFDLFFBQWtCO0lBZTVCLGtDQUFvQixhQUNsQixRQUFrQixFQUNsQixPQUF1QjtJQW9CekIsc0JBQVE7SUF1QlIscUJBQU8sYUFBQyxRQUFnQjtJQWdDeEIseUJBQVcsYUFBQyxRQUFnQixFQUFFLGVBQW9CLEVBQUUsa0JBQXVCO0lBb0IzRSx3QkFBVSxhQUFDLFFBQWdCLEVBQUUsT0FBZTtJQXNCNUMsZ0NBQWtCLGFBQUMsUUFBZ0IsRUFBRSxhQUFxQjtJQWdCMUQsd0JBQVUsYUFBQyxRQUFnQjtJQWEzQixrQkFBSSxhQUNGLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLGtCQUEwQjtJQWtDNUIsbUJBQUssYUFDSCxRQUFnQixFQUNoQixXQUFtQixFQUNuQixrQkFBMEIsRUFDMUIsS0FBa0I7SUFlcEIsa0NBQW9CLGFBQ2xCLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLGtCQUEwQixFQUMxQixLQUFrQjtJQXlCcEIsK0JBQWlCLGFBQ2YsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsa0JBQTBCO0lBYzVCLDhCQUFnQixhQUNkLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLGtCQUEwQjtJQW1CNUIseUJBQVcsYUFBQyxRQUFnQjtJQVU1Qix1QkFBUztJQXFCVCxxQ0FBdUI7SUFVdkIsb0NBQXNCO0lBVXRCLG1DQUFxQjtJQVVyQixvQkFBTTtJQVlOLHNCQUFRLGFBQUMsUUFBZ0I7SUFhekIsOENBQWdDLGFBQUMsUUFBa0I7SUFZbkQsd0NBQTBCLGFBQUMsS0FBZTtJQVcxQywyQkFBYTs7Ozs7dUNBSXFPO0lBMWJ2TyxHQUFHLHdCQURmLFVBQVUsRUFBRSxRQUNBLEdBQUc7Ozs7OzBCQUFFO2NBekxsQjtFQXlMeUIsaUJBQWlCO1NBQTdCLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBCTEVTY2FuT3B0aW9ucyB7XG4gIC8qKiB0cnVlIGlmIGR1cGxpY2F0ZSBkZXZpY2VzIHNob3VsZCBiZSByZXBvcnRlZCwgZmFsc2UgKGRlZmF1bHQpIGlmIGRldmljZXMgc2hvdWxkIG9ubHkgYmUgcmVwb3J0ZWQgb25jZS4gICovXG4gIHJlcG9ydER1cGxpY2F0ZXM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIEJMRVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBlbmFibGVzIGNvbW11bmljYXRpb24gYmV0d2VlbiBhIHBob25lIGFuZCBCbHVldG9vdGggTG93IEVuZXJneSAoQkxFKSBwZXJpcGhlcmFscy5cbiAqXG4gKiBUaGUgcGx1Z2luIHByb3ZpZGVzIGEgc2ltcGxlIEphdmFTY3JpcHQgQVBJIGZvciBpT1MgYW5kIEFuZHJvaWQuXG4gKlxuICogLSBTY2FuIGZvciBwZXJpcGhlcmFsc1xuICogLSBDb25uZWN0IHRvIGEgcGVyaXBoZXJhbFxuICogLSBSZWFkIHRoZSB2YWx1ZSBvZiBhIGNoYXJhY3RlcmlzdGljXG4gKiAtIFdyaXRlIG5ldyB2YWx1ZSB0byBhIGNoYXJhY3RlcmlzdGljXG4gKiAtIEdldCBub3RpZmllZCB3aGVuIGNoYXJhY3RlcmlzdGljJ3MgdmFsdWUgY2hhbmdlc1xuICpcbiAqIEFkdmVydGlzaW5nIGluZm9ybWF0aW9uIGlzIHJldHVybmVkIHdoZW4gc2Nhbm5pbmcgZm9yIHBlcmlwaGVyYWxzLiBTZXJ2aWNlLCBjaGFyYWN0ZXJpc3RpYywgYW5kIHByb3BlcnR5IGluZm8gaXMgcmV0dXJuZWQgd2hlbiBjb25uZWN0aW5nIHRvIGEgcGVyaXBoZXJhbC4gQWxsIGFjY2VzcyBpcyB2aWEgc2VydmljZSBhbmQgY2hhcmFjdGVyaXN0aWMgVVVJRHMuIFRoZSBwbHVnaW4gbWFuYWdlcyBoYW5kbGVzIGludGVybmFsbHkuXG4gKlxuICogU2ltdWx0YW5lb3VzIGNvbm5lY3Rpb25zIHRvIG11bHRpcGxlIHBlcmlwaGVyYWxzIGFyZSBzdXBwb3J0ZWQuXG4gKlxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICpcbiAqIGltcG9ydCB7IEJMRSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmxlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibGU6IEJMRSkgeyB9XG4gKlxuICogYGBgXG4gKlxuICogIyMgUGVyaXBoZXJhbCBEYXRhXG4gKlxuICogUGVyaXBoZXJhbCBEYXRhIGlzIHBhc3NlZCB0byB0aGUgc3VjY2VzcyBjYWxsYmFjayB3aGVuIHNjYW5uaW5nIGFuZCBjb25uZWN0aW5nLiBMaW1pdGVkIGRhdGEgaXMgcGFzc2VkIHdoZW4gc2Nhbm5pbmcuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogICB7XG4gKiAgICAgICAnbmFtZSc6ICdCYXR0ZXJ5IERlbW8nLFxuICogICAgICAgJ2lkJzogJzIwOkZGOkQwOkZGOkQxOkMwJyxcbiAqICAgICAgICdhZHZlcnRpc2luZyc6IFsyLDEsNiwzLDMsMTUsMjQsOCw5LDY2LDk3LDExNiwxMTYsMTAxLDExNCwxMjFdLFxuICogICAgICAgJ3Jzc2knOiAtNTVcbiAqICAgfVxuICogYGBgXG4gKiBBZnRlciBjb25uZWN0aW5nLCB0aGUgcGVyaXBoZXJhbCBvYmplY3QgYWxzbyBpbmNsdWRlcyBzZXJ2aWNlLCBjaGFyYWN0ZXJpc3RpYyBhbmQgZGVzY3JpcHRvciBpbmZvcm1hdGlvbi5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIHtcbiAqICAgICAgICduYW1lJzogJ0JhdHRlcnkgRGVtbycsXG4gKiAgICAgICAnaWQnOiAnMjA6RkY6RDA6RkY6RDE6QzAnLFxuICogICAgICAgJ2FkdmVydGlzaW5nJzogWzIsMSw2LDMsMywxNSwyNCw4LDksNjYsOTcsMTE2LDExNiwxMDEsMTE0LDEyMV0sXG4gKiAgICAgICAncnNzaSc6IC01NSxcbiAqICAgICAgICdzZXJ2aWNlcyc6IFtcbiAqICAgICAgICAgICAnMTgwMCcsXG4gKiAgICAgICAgICAgJzE4MDEnLFxuICogICAgICAgICAgICcxODBmJ1xuICogICAgICAgXSxcbiAqICAgICAgICdjaGFyYWN0ZXJpc3RpY3MnOiBbXG4gKiAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAnc2VydmljZSc6ICcxODAwJyxcbiAqICAgICAgICAgICAgICAgJ2NoYXJhY3RlcmlzdGljJzogJzJhMDAnLFxuICogICAgICAgICAgICAgICAncHJvcGVydGllcyc6IFtcbiAqICAgICAgICAgICAgICAgICAgICdSZWFkJ1xuICogICAgICAgICAgICAgICBdXG4gKiAgICAgICAgICAgfSxcbiAqICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICdzZXJ2aWNlJzogJzE4MDAnLFxuICogICAgICAgICAgICAgICAnY2hhcmFjdGVyaXN0aWMnOiAnMmEwMScsXG4gKiAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzJzogW1xuICogICAgICAgICAgICAgICAgICAgJ1JlYWQnXG4gKiAgICAgICAgICAgICAgIF1cbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgJ3NlcnZpY2UnOiAnMTgwMScsXG4gKiAgICAgICAgICAgICAgICdjaGFyYWN0ZXJpc3RpYyc6ICcyYTA1JyxcbiAqICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMnOiBbXG4gKiAgICAgICAgICAgICAgICAgICAnUmVhZCdcbiAqICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAge1xuICogICAgICAgICAgICAgICAnc2VydmljZSc6ICcxODBmJyxcbiAqICAgICAgICAgICAgICAgJ2NoYXJhY3RlcmlzdGljJzogJzJhMTknLFxuICogICAgICAgICAgICAgICAncHJvcGVydGllcyc6IFtcbiAqICAgICAgICAgICAgICAgICAgICdSZWFkJ1xuICogICAgICAgICAgICAgICBdLFxuICogICAgICAgICAgICAgICAnZGVzY3JpcHRvcnMnOiBbXG4gKiAgICAgICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgJ3V1aWQnOiAnMjkwMSdcbiAqICAgICAgICAgICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgJ3V1aWQnOiAnMjkwNCdcbiAqICAgICAgICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgICAgXVxuICogICAgICAgICAgIH1cbiAqICAgICAgIF1cbiAqICAgfVxuICogYGBgXG4gKlxuICogIyMgQWR2ZXJ0aXNpbmcgRGF0YVxuICogQmx1ZXRvb3RoIGFkdmVydGlzaW5nIGRhdGEgaXMgcmV0dXJuZWQgaW4gd2hlbiBzY2FubmluZyBmb3IgZGV2aWNlcy4gVGhlIGZvcm1hdCB2YXJpZXMgZGVwZW5kaW5nIG9uIHlvdXIgcGxhdGZvcm0uIE9uIEFuZHJvaWQgYWR2ZXJ0aXNpbmcgZGF0YSB3aWxsIGJlIHRoZSByYXcgYWR2ZXJ0aXNpbmcgYnl0ZXMuIGlPUyBkb2VzIG5vdCBhbGxvdyBhY2Nlc3MgdG8gcmF3IGFkdmVydGlzaW5nIGRhdGEsIHNvIGEgZGljdGlvbmFyeSBvZiBkYXRhIGlzIHJldHVybmVkLlxuICpcbiAqIFRoZSBhZHZlcnRpc2luZyBpbmZvcm1hdGlvbiBmb3IgYm90aCBBbmRyb2lkIGFuZCBpT1MgYXBwZWFycyB0byBiZSBhIGNvbWJpbmF0aW9uIG9mIGFkdmVydGlzaW5nIGRhdGEgYW5kIHNjYW4gcmVzcG9uc2UgZGF0YS5cbiAqXG4gKiAjIyMgQW5kcm9pZFxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqICAge1xuICogICAgICAgJ25hbWUnOiAnZGVtbycsXG4gKiAgICAgICAnaWQnOiAnMDA6MUE6N0Q6REE6NzE6MTMnLFxuICogICAgICAgJ2FkdmVydGlzaW5nJzogQXJyYXlCdWZmZXIsXG4gKiAgICAgICdyc3NpJzogLTM3XG4gKiAgfVxuICogYGBgXG4gKlxuICogQ29udmVydCB0aGUgYWR2ZXJ0aXNpbmcgaW5mbyB0byBhIFVpbnQ4QXJyYXkgZm9yIHByb2Nlc3NpbmcuIGB2YXIgYWREYXRhID0gbmV3IFVpbnQ4QXJyYXkocGVyaXBoZXJhbC5hZHZlcnRpc2luZylgXG4gKlxuICogIyMjIGlPU1xuICpcbiAqIE5vdGUgdGhhdCBpT1MgdXNlcyB0aGUgc3RyaW5nIHZhbHVlIG9mIHRoZSBjb25zdGFudHMgZm9yIHRoZSBbQWR2ZXJ0aXNlbWVudCBEYXRhIFJldHJpZXZhbCBLZXlzXShodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vbGlicmFyeS9pb3MvZG9jdW1lbnRhdGlvbi9Db3JlQmx1ZXRvb3RoL1JlZmVyZW5jZS9DQkNlbnRyYWxNYW5hZ2VyRGVsZWdhdGVfUHJvdG9jb2wvaW5kZXguaHRtbCMvL2FwcGxlX3JlZi9kb2MvY29uc3RhbnRfZ3JvdXAvQWR2ZXJ0aXNlbWVudF9EYXRhX1JldHJpZXZhbF9LZXlzKS4gVGhpcyB3aWxsIGxpa2VseSBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAgIHtcbiAqICAgICAgICduYW1lJzogJ2RlbW8nLFxuICogICAgICAgJ2lkJzogJ0Q4NDc5QTRGLTc1MTctQkNEMy05MUI1LTMzMDJCMkY4MTgwMicsXG4gKiAgICAgICAnYWR2ZXJ0aXNpbmcnOiB7XG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFDaGFubmVsJzogMzcsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFTZXJ2aWNlRGF0YSc6IHtcbiAqICAgICAgICAgICAgICAgJ0ZFRDgnOiB7XG4gKiAgICAgICAgICAgICAgICAgICAnYnl0ZUxlbmd0aCc6IDcgLy8gZGF0YSBub3Qgc2hvd25cbiAqICAgICAgICAgICAgICAgfVxuICogICAgICAgICAgIH0sXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFMb2NhbE5hbWUnOiAnZGVtbycsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFTZXJ2aWNlVVVJRHMnOiBbJ0ZFRDgnXSxcbiAqICAgICAgICAgICAna0NCQWR2RGF0YU1hbnVmYWN0dXJlckRhdGEnOiB7XG4gKiAgICAgICAgICAgICAgICdieXRlTGVuZ3RoJzogNyAgLy8gZGF0YSBub3Qgc2hvd25cbiAqICAgICAgICAgICB9LFxuICogICAgICAgICAgICdrQ0JBZHZEYXRhVHhQb3dlckxldmVsJzogMzIsXG4gKiAgICAgICAgICAgJ2tDQkFkdkRhdGFJc0Nvbm5lY3RhYmxlJzogdHJ1ZVxuICogICAgICAgfSxcbiAqICAgICAgICdyc3NpJzogLTUzXG4gKiAgIH1cbiAqIGBgYFxuICpcbiAqICMjIFR5cGVkIEFycmF5c1xuICpcbiAqIFRoaXMgcGx1Z2luIHVzZXMgdHlwZWQgQXJyYXlzIG9yIEFycmF5QnVmZmVycyBmb3Igc2VuZGluZyBhbmQgcmVjZWl2aW5nIGRhdGEuXG4gKlxuICogVGhpcyBtZWFucyB0aGF0IHlvdSBuZWVkIGNvbnZlcnQgeW91ciBkYXRhIHRvIEFycmF5QnVmZmVycyBiZWZvcmUgc2VuZGluZyBhbmQgZnJvbSBBcnJheUJ1ZmZlcnMgd2hlbiByZWNlaXZpbmcuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogICAvLyBBU0NJSSBvbmx5XG4gKiAgIGZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyaW5nKSB7XG4gKiAgICAgIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KHN0cmluZy5sZW5ndGgpO1xuICogICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAqICAgICAgICAgIGFycmF5W2ldID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gKiAgICAgICB9XG4gKiAgICAgICByZXR1cm4gYXJyYXkuYnVmZmVyO1xuICogICB9XG4gKlxuICogICAvLyBBU0NJSSBvbmx5XG4gKiAgIGZ1bmN0aW9uIGJ5dGVzVG9TdHJpbmcoYnVmZmVyKSB7XG4gKiAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShidWZmZXIpKTtcbiAqICAgfVxuICogYGBgXG4gKiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCB0eXBlZCBhcnJheXMgaW4gdGhlc2UgYXJ0aWNsZXMgb24gW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9UeXBlZF9hcnJheXMpIGFuZCBbSFRNTDUgUm9ja3NdKGh0dHA6Ly93d3cuaHRtbDVyb2Nrcy5jb20vZW4vdHV0b3JpYWxzL3dlYmdsL3R5cGVkX2FycmF5cy8pLlxuICpcbiAqICMjIFVVSURzXG4gKlxuICogVVVJRHMgYXJlIGFsd2F5cyBzdHJpbmdzIGFuZCBub3QgbnVtYmVycy4gU29tZSAxNi1iaXQgVVVJRHMsIHN1Y2ggYXMgJzIyMjAnIGxvb2sgbGlrZSBpbnRlZ2VycywgYnV0IHRoZXkncmUgbm90LiAoVGhlIGludGVnZXIgMjIyMCBpcyAweDhBQyBpbiBoZXguKSBUaGlzIGlzbid0IGEgcHJvYmxlbSB3aXRoIDEyOCBiaXQgVVVJRHMgc2luY2UgdGhleSBsb29rIGxpa2Ugc3RyaW5ncyA4MmI5ZTZlMS01OTNhLTQ1NmYtYmU5Yi05MjE1MTYwZWJjYWMuIEFsbCAxNi1iaXQgVVVJRHMgc2hvdWxkIGFsc28gYmUgcGFzc2VkIHRvIG1ldGhvZHMgYXMgc3RyaW5ncy5cbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQkxFU2Nhbk9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCTEUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ibGUtY2VudHJhbCcsXG4gIHBsdWdpblJlZjogJ2JsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZG9uL2NvcmRvdmEtcGx1Z2luLWJsZS1jZW50cmFsJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQkxFIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2NhbiBhbmQgZGlzY292ZXIgQkxFIHBlcmlwaGVyYWxzIGZvciB0aGUgc3BlY2lmaWVkIGFtb3VudCBvZiB0aW1lLlxuICAgKlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqIEJMRS5zY2FuKFtdLCA1KS5zdWJzY3JpYmUoZGV2aWNlID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkZXZpY2UpKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzZXJ2aWNlcyAgTGlzdCBvZiBzZXJ2aWNlIFVVSURzIHRvIGRpc2NvdmVyLCBvciBgW11gIHRvIGZpbmQgYWxsIGRldmljZXNcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgIE51bWJlciBvZiBzZWNvbmRzIHRvIHJ1biBkaXNjb3ZlcnlcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgb2YgZWFjaCBwZXJpcGhlcmFsIHRoYXQgaXMgZGlzY292ZXJlZCBkdXJpbmcgdGhlIHNwZWNpZmllZCB0aW1lLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWVcbiAgfSlcbiAgc2NhbihzZXJ2aWNlczogc3RyaW5nW10sIHNlY29uZHM6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjYW4gYW5kIGRpc2NvdmVyIEJMRSBwZXJpcGhlcmFscyB1bnRpbCBgc3RvcFNjYW5gIGlzIGNhbGxlZC5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiBCTEUuc3RhcnRTY2FuKFtdKS5zdWJzY3JpYmUoZGV2aWNlID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkZXZpY2UpKTtcbiAgICogfSk7XG4gICAqXG4gICAqIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgKiAgIEJMRS5zdG9wU2NhbigpO1xuICAgKiB9LCA1MDAwKTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHNlcnZpY2VzICBMaXN0IG9mIHNlcnZpY2UgVVVJRHMgdG8gZGlzY292ZXIsIG9yIGBbXWAgdG8gZmluZCBhbGwgZGV2aWNlc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBvZiBlYWNoIHBlcmlwaGVyYWwgZGlzY292ZXJlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wU2NhbicsXG4gICAgY2xlYXJXaXRoQXJnczogZmFsc2VcbiAgfSlcbiAgc3RhcnRTY2FuKHNlcnZpY2VzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIGZvciBCTEUgZGV2aWNlcy4gVGhpcyBmdW5jdGlvbiBvcGVyYXRlcyBzaW1pbGFybHkgdG8gdGhlIGBzdGFydFNjYW5gIGZ1bmN0aW9uLCBidXQgYWxsb3dzIHlvdSB0byBzcGVjaWZ5IGV4dHJhIG9wdGlvbnMgKGxpa2UgYWxsb3dpbmcgZHVwbGljYXRlIGRldmljZSByZXBvcnRzKS5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gc2VydmljZXMgIExpc3Qgb2Ygc2VydmljZSBVVUlEcyB0byBkaXNjb3Zlciwgb3IgYFtdYCB0byBmaW5kIGFsbCBkZXZpY2VzXG4gICAqIEBwYXJhbSB7QkxFU2Nhbk9wdGlvbnN9IG9wdGlvbnMgT3B0aW9uc1xuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBvZiBlYWNoIHBlcmlwaGVyYWwgZGlzY292ZXJlZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wU2NhbicsXG4gICAgY2xlYXJXaXRoQXJnczogZmFsc2VcbiAgfSlcbiAgc3RhcnRTY2FuV2l0aE9wdGlvbnMoXG4gICAgc2VydmljZXM6IHN0cmluZ1tdLFxuICAgIG9wdGlvbnM6IEJMRVNjYW5PcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYSBzY2FuIHN0YXJ0ZWQgYnkgYHN0YXJ0U2NhbmAuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogQkxFLnN0YXJ0U2NhbihbXSkuc3Vic2NyaWJlKGRldmljZSA9PiB7XG4gICAqICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGV2aWNlKSk7XG4gICAqIH0pO1xuICAgKiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICogICBCTEUuc3RvcFNjYW4oKS50aGVuKCgpID0+IHsgY29uc29sZS5sb2coJ3NjYW4gc3RvcHBlZCcpOyB9KTtcbiAgICogfSwgNTAwMCk7XG4gICAqIGBgYFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGEgcGVyaXBoZXJhbC5cbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAgIEJMRS5jb25uZWN0KCcxMjozNDo1Njo3ODo5QTpCQycpLnN1YnNjcmliZShwZXJpcGhlcmFsRGF0YSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZyhwZXJpcGhlcmFsRGF0YSk7XG4gICAqICAgfSxcbiAgICogICBwZXJpcGhlcmFsRGF0YSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnZGlzY29ubmVjdGVkJyk7XG4gICAqICAgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIG9mIGNvbm5lY3QvZGlzY29ubmVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNjb25uZWN0JyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlXG4gIH0pXG4gIGNvbm5lY3QoZGV2aWNlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVzdGFibGlzaCBhbiBhdXRvbWF0aWMgY29ubmVjdGlvbiB0byBhIHBlcmlwaGVyYWwuIFRoZSBwaG9uZSB3aWxsIGF1dG9tYXRpY2FsbHkgY29ubmVjdCB0byB0aGUgQmx1ZXRvb3RoIHBlcmlwaGVyYWxcbiAgICogd2hlbmV2ZXIgaXQgaXMgaW4gcmFuZ2UuIFRoZSBhdXRvQ29ubmVjdCBmdW5jdGlvbiB1c2VzIGNhbGxiYWNrcyBpbnN0ZWFkIG9mIG9ic2VydmFibGVzIGJlY2F1c2UgY29ubmVjdCBhbmRcbiAgICogZGlzY29ubmVjdCBjYW4gZWFjaCBiZSBjYWxsZWQgbWFueSB0aW1lcyBhcyBhIGRldmljZXMgY29ubmVjdHMgYW5kIGRpc2Nvbm5lY3RzLlxuICAgKlxuICAgKiBPbiBBbmRyb2lkIHlvdSBjYW4gcGFzcyBhIE1BQyBhZGRyZXNzIGRpcmVjdGx5IHRvIGF1dG9Db25uZWN0LiBXaXRoIGlPUywgeW91IG5lZWQgdG8gZ2V0IGEgZGV2aWNlIGlkIGJ5IHNjYW5uaW5nLFxuICAgKiBjYWxsaW5nIGJsZS5wZXJpcGhlcmFsc1dpdGhJZGVudGlmaWVycywgb3IgY2FsbGluZyBibGUuY29ubmVjdGVkUGVyaXBoZXJhbHNXaXRoU2VydmljZXMuXG4gICAqXG4gICAqIEB1c2FnZVxuICAgKiBgYGBcbiAgICogIHNvbWVGdW5jdGlvbigpIHtcbiAgICogICAgdGhpcy5ibGUuYXV0b0Nvbm5lY3QoZGV2aWNlSWQsIG9uQ29ubmVjdGVkLmJpbmQodGhpcyksIG9uRGlzY29ubmVjdGVkLmJpbmQodGhpcykpO1xuICAgKiAgfVxuICAgKlxuICAgKiAgb25Db25uZWN0ZWQocGVyaXBoZXJhbCkge1xuICAgKiAgICBjb25zb2xlLmxvZyhgQ29ubmVjdGVkIHRvICR7cGVyaXBoZXJhbC5pZH1gKWxcbiAgICogIH1cbiAgICpcbiAgICogIG9uRGlzY29ubmVjdGVkKHBlcmlwaGVyYWwpIHtcbiAgICogICAgY29uc29sZS5sb2coYERpc2Nvbm5lY3RlZCBmcm9tICR7cGVyaXBoZXJhbC5pZH1gKWxcbiAgICogIH1cbiAgICpcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbm5lY3RDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCB3aXRoIHBlcmlwaGVyYWwgZGF0YSB3aGVuIHRoZSBkZXZpY2VzIGNvbm5lY3RzXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGRpc2Nvbm5lY3RDYWxsYmFjayAgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBwZXJpcGhlcmFsIGRhdGEgd2hlbiB0aGUgZGV2aWNlcyBkaXNjb25uZWN0c1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGF1dG9Db25uZWN0KGRldmljZUlkOiBzdHJpbmcsIGNvbm5lY3RDYWxsYmFjazogYW55LCBkaXNjb25uZWN0Q2FsbGJhY2s6IGFueSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IE1UVSBzaXplLlxuICAgKiBNYXkgYmUgdXNlZCB0byBmaXggdGhlIEVycm9yIDE0IFwiVW5saWtlbHlcIiBvbiB3cml0ZSByZXF1ZXN0cyB3aXRoIG1vcmUgdGhhbiAyMCBieXRlcy5cbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAgIEJMRS5yZXF1ZXN0TXR1KCcxMjozNDo1Njo3ODo5QTpCQycsIDUxMikudGhlbigoKSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnTVRVIFNpemUgQWNjZXB0ZWQnKTtcbiAgICogICB9LCBlcnJvciA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnTVRVIFNpemUgRmFpbGVkJyk7XG4gICAqICAgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcGFyYW0ge251bWJlcn0gbXR1U2l6ZSBUaGUgbmV3IE1UVSBzaXplLiAoMjMgLSA1MTcsIGRlZmF1bHQgaXMgdXN1YWxseSAyMy4gTWF4IHJlY29tbWVuZGVkOiA1MTIpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlcXVlc3RNdHUoZGV2aWNlSWQ6IHN0cmluZywgbXR1U2l6ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBEZXZpY2UgQ2FjaGVcbiAgICogVGhpcyBtZXRob2QgbWF5IGZpeCBhIGlzc3VlIG9mIG9sZCBjYWNoZWQgc2VydmljZXMgYW5kIGNoYXJhY3RlcmlzdGljcy5cbiAgICogTk9URSBTaW5jZSB0aGlzIHVzZXMgYW4gdW5kb2N1bWVudGVkIEFQSSBpdCdzIG5vdCBndWFyYW50ZWVkIHRvIHdvcmsuXG4gICAqIElmIHlvdSBjaG9vc2UgYSB0b28gbG93IGRlbGF5IHRpbWUgKHRpbWVvdXRNaWxsaXMpIHRoZSBtZXRob2QgY291bGQgZmFpbC5cbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAgIEJMRS5yZWZyZXNoRGV2aWNlQ2FjaGUoJzEyOjM0OjU2Ojc4OjlBOkJDJywgMTAwMDApLnRoZW4oZGlzY292ZXJlZFNlcnZpY2VzID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdUaGUgbmV3IGRpc2NvdmVyZWQgc2VydmljZXMgYWZ0ZXIgdGhlIGNsZWFuOiAnLCBkaXNjb3ZlcmVkU2VydmljZXMpO1xuICAgKiAgIH0sIGVycm9yID0+IHtcbiAgICogICAgIGNvbnNvbGUubG9nKCdSZWZyZXNoIGRldmljZSBjYWNoZSBmYWlsZWQuJyk7XG4gICAqICAgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZW91dE1pbGxpcyBEZWxheSBpbiBtaWxsaXNlY29uZHMgYWZ0ZXIgcmVmcmVzaCBiZWZvcmUgZGlzY292ZXJpbmcgc2VydmljZXMuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZnJlc2hEZXZpY2VDYWNoZShkZXZpY2VJZDogc3RyaW5nLCB0aW1lb3V0TWlsbGlzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IGZyb20gYSBwZXJpcGhlcmFsLlxuICAgKiBAdXNhZ2VcbiAgICogYGBgXG4gICAqICAgQkxFLmRpc2Nvbm5lY3QoJzEyOjM0OjU2Ojc4OjlBOkJDJykudGhlbigoKSA9PiB7XG4gICAqICAgICBjb25zb2xlLmxvZygnRGlzY29ubmVjdGVkJyk7XG4gICAqICAgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0KGRldmljZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSB2YWx1ZSBvZiBhIGNoYXJhY3RlcmlzdGljLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VVVUlEICBVVUlEIG9mIHRoZSBCTEUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyaXN0aWNVVUlEICBVVUlEIG9mIHRoZSBCTEUgY2hhcmFjdGVyaXN0aWNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkKFxuICAgIGRldmljZUlkOiBzdHJpbmcsXG4gICAgc2VydmljZVVVSUQ6IHN0cmluZyxcbiAgICBjaGFyYWN0ZXJpc3RpY1VVSUQ6IHN0cmluZ1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYy5cbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiAvLyBzZW5kIDEgYnl0ZSB0byBzd2l0Y2ggYSBsaWdodCBvblxuICAgKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDEpO1xuICAgKiBkYXRhWzBdID0gMTtcbiAgICogQkxFLndyaXRlKGRldmljZV9pZCwgJ0ZGMTAnLCAnRkYxMScsIGRhdGEuYnVmZmVyKTtcbiAgICpcbiAgICogLy8gc2VuZCBhIDMgYnl0ZSB2YWx1ZSB3aXRoIFJHQiBjb2xvclxuICAgKiB2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KDMpO1xuICAgKiBkYXRhWzBdID0gMHhGRjsgIC8vIHJlZFxuICAgKiBkYXRhWzBdID0gMHgwMDsgLy8gZ3JlZW5cbiAgICogZGF0YVswXSA9IDB4RkY7IC8vIGJsdWVcbiAgICogQkxFLndyaXRlKGRldmljZV9pZCwgJ2NjYzAnLCAnY2NjMScsIGRhdGEuYnVmZmVyKTtcbiAgICpcbiAgICogLy8gc2VuZCBhIDMyIGJpdCBpbnRlZ2VyXG4gICAqIHZhciBkYXRhID0gbmV3IFVpbnQzMkFycmF5KDEpO1xuICAgKiBkYXRhWzBdID0gY291bnRlcklucHV0LnZhbHVlO1xuICAgKiBCTEUud3JpdGUoZGV2aWNlX2lkLCBTRVJWSUNFLCBDSEFSQUNURVJJU1RJQywgZGF0YS5idWZmZXIpO1xuICAgKlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRldmljZUlkICBVVUlEIG9yIE1BQyBhZGRyZXNzIG9mIHRoZSBwZXJpcGhlcmFsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZXJ2aWNlVVVJRCAgVVVJRCBvZiB0aGUgQkxFIHNlcnZpY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXJhY3RlcmlzdGljVVVJRCAgVVVJRCBvZiB0aGUgQkxFIGNoYXJhY3RlcmlzdGljXG4gICAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IHZhbHVlICBEYXRhIHRvIHdyaXRlIHRvIHRoZSBjaGFyYWN0ZXJpc3RpYywgYXMgYW4gQXJyYXlCdWZmZXIuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd3JpdGUoXG4gICAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgICBzZXJ2aWNlVVVJRDogc3RyaW5nLFxuICAgIGNoYXJhY3RlcmlzdGljVVVJRDogc3RyaW5nLFxuICAgIHZhbHVlOiBBcnJheUJ1ZmZlclxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYyB3aXRob3V0IHdhaXRpbmcgZm9yIGNvbmZpcm1hdGlvbiBmcm9tIHRoZSBwZXJpcGhlcmFsLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VVVUlEICBVVUlEIG9mIHRoZSBCTEUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyaXN0aWNVVUlEICBVVUlEIG9mIHRoZSBCTEUgY2hhcmFjdGVyaXN0aWNcbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gdmFsdWUgIERhdGEgdG8gd3JpdGUgdG8gdGhlIGNoYXJhY3RlcmlzdGljLCBhcyBhbiBBcnJheUJ1ZmZlci5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB3cml0ZVdpdGhvdXRSZXNwb25zZShcbiAgICBkZXZpY2VJZDogc3RyaW5nLFxuICAgIHNlcnZpY2VVVUlEOiBzdHJpbmcsXG4gICAgY2hhcmFjdGVyaXN0aWNVVUlEOiBzdHJpbmcsXG4gICAgdmFsdWU6IEFycmF5QnVmZmVyXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhlIHZhbHVlIG9mIGEgY2hhcmFjdGVyaXN0aWMgY2hhbmdlcy5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiBCTEUuc3RhcnROb3RpZmljYXRpb24oZGV2aWNlX2lkLCAnRkYxMCcsICdGRjExJykuc3Vic2NyaWJlKGJ1ZmZlciA9PiB7XG4gICAqICAgY29uc29sZS5sb2coU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShidWZmZXIpKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VVVUlEICBVVUlEIG9mIHRoZSBCTEUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyaXN0aWNVVUlEICBVVUlEIG9mIHRoZSBCTEUgY2hhcmFjdGVyaXN0aWNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBvZiBjaGFyYWN0ZXJpc3RpYyBjaGFuZ2VzLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BOb3RpZmljYXRpb24nLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWVcbiAgfSlcbiAgc3RhcnROb3RpZmljYXRpb24oXG4gICAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgICBzZXJ2aWNlVVVJRDogc3RyaW5nLFxuICAgIGNoYXJhY3RlcmlzdGljVVVJRDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3AgYmVpbmcgbm90aWZpZWQgd2hlbiB0aGUgdmFsdWUgb2YgYSBjaGFyYWN0ZXJpc3RpYyBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlcnZpY2VVVUlEICBVVUlEIG9mIHRoZSBCTEUgc2VydmljZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyaXN0aWNVVUlEICBVVUlEIG9mIHRoZSBCTEUgY2hhcmFjdGVyaXN0aWNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcE5vdGlmaWNhdGlvbihcbiAgICBkZXZpY2VJZDogc3RyaW5nLFxuICAgIHNlcnZpY2VVVUlEOiBzdHJpbmcsXG4gICAgY2hhcmFjdGVyaXN0aWNVVUlEOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0IHRoZSBjb25uZWN0aW9uIHN0YXR1cy5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiBCTEUuaXNDb25uZWN0ZWQoJ0ZGQ0EwQjA5LUNCMUQtNERDMC1BMUVGLTMxQUZEM0VERkI1MycpLnRoZW4oXG4gICAqICAgKCkgPT4geyBjb25zb2xlLmxvZygnY29ubmVjdGVkJyk7IH0sXG4gICAqICAgKCkgPT4geyBjb25zb2xlLmxvZygnbm90IGNvbm5lY3RlZCcpOyB9XG4gICAqICk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGV2aWNlSWQgIFVVSUQgb3IgTUFDIGFkZHJlc3Mgb2YgdGhlIHBlcmlwaGVyYWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaXNDb25uZWN0ZWQoZGV2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCBpZiBibHVldG9vdGggaXMgZW5hYmxlZC5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgQmx1ZXRvb3RoIGlzIGVuYWJsZWQsIGFuZCByZWplY3RzIGlmIGRpc2FibGVkLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRvIGJlIG5vdGlmaWVkIHdoZW4gQmx1ZXRvb3RoIHN0YXRlIGNoYW5nZXMgb24gdGhlIGRldmljZS5cbiAgICpcbiAgICogQHVzYWdlXG4gICAqIGBgYFxuICAgKiBCTEUuc3RhcnRTdGF0ZU5vdGlmaWNhdGlvbnMoKS5zdWJzY3JpYmUoc3RhdGUgPT4ge1xuICAgKiAgIGNvbnNvbGUubG9nKFwiQmx1ZXRvb3RoIGlzIFwiICsgc3RhdGUpO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgd2hlbiB0aGUgQmx1ZXRvb3RoIGlzIGVuYWJsZWQgb3IgZGlzYWJsZWQgb24gdGhlIGRldmljZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICAgIGNsZWFyRnVuY3Rpb246ICdzdG9wU3RhdGVOb3RpZmljYXRpb25zJyxcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZVxuICB9KVxuICBzdGFydFN0YXRlTm90aWZpY2F0aW9ucygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wIHN0YXRlIG5vdGlmaWNhdGlvbnMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BTdGF0ZU5vdGlmaWNhdGlvbnMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogT3BlbiBTeXN0ZW0gQmx1ZXRvb3RoIHNldHRpbmdzIChBbmRyb2lkIG9ubHkpLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93Qmx1ZXRvb3RoU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlIChBbmRyb2lkIG9ubHkpLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmFibGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVhZCB0aGUgUlNTSSB2YWx1ZSBvbiB0aGUgZGV2aWNlIGNvbm5lY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXZpY2VJZCAgVVVJRCBvciBNQUMgYWRkcmVzcyBvZiB0aGUgcGVyaXBoZXJhbFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICByZWFkUlNTSShkZXZpY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGEgbGlzdCBvZiB0aGUgcGVyaXBoZXJhbHMgKGNvbnRhaW5pbmcgYW55IG9mIHRoZSBzcGVjaWZpZWQgc2VydmljZXMpXG4gICAqIGN1cnJlbnRseSBjb25uZWN0ZWQgdG8gdGhlIHN5c3RlbS4gVGhlIHBlcmlwaGVyYWwgbGlzdCBpcyBzZW50IHRvIHRoZSBzdWNjZXNzIGNhbGxiYWNrLlxuICAgKiBpT1Mgb25seVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBzZXJ2aWNlcyBMaXN0IG9mIHNlcnZpY2VzIHRvIGRpc2NvdmVyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYSBsaXN0IG9mIHBlcmlwaGVyYWwgb2JqZWN0c1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb25uZWN0ZWRQZXJpcGhlcmFsc1dpdGhTZXJ2aWNlcyhzZXJ2aWNlczogc3RyaW5nW10pOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGNvbm5lY3RlZCBwZXJpcGhlcmFscyBvZmZlcmluZyB0aGUgbGlzdGVkIHNlcnZpY2UgVVVJRHMuXG4gICAqIGlPUyBvbmx5XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHV1aWRzIExpc3Qgb2YgcGVyaXBoZXJhbCBVVUlEc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGEgbGlzdCBvZiBwZXJpcGhlcmFsIG9iamVjdHNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcGVyaXBoZXJhbHNXaXRoSWRlbnRpZmllcnModXVpZHM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBib25kZWQgZGV2aWNlc1xuICAgKiBBbmRyb2lkIG9ubHlcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhIGxpc3Qgb2YgcGVyaXBoZXJhbCBvYmplY3RzXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGJvbmRlZERldmljZXMoKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

    /***/

  }
}]);
//# sourceMappingURL=default~registration-login-login-module~tab3-tab3-module-es5.js.map