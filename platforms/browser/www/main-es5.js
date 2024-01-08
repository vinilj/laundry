function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentsCountdowntimerCountdowntimerCountdowntimerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>00:{{mins}}:{{secs}}</h1>\n<!-- <h1>{{valueTime}}</h1> -->\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/dropprogress/dropprogress.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/dropprogress/dropprogress.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentsDropprogressDropprogressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<svg style=\"width: 100%;\" height=\"44\" viewBox=\"0 0 314 44\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <line x1=\"17\" y1=\"5.5\" x2=\"293\" y2=\"5.49998\" stroke=\"#642E58\" stroke-dasharray=\"2 2\" />\n  <circle id=\"1\" cx=\"18\" cy=\"6\" r=\"6\" fill=\"#C4C4C4\" />\n  <path id=\"2\"\n    d=\"M11.9051 23.71C11.5251 23.71 11.1951 23.7867 10.9151 23.94C10.6418 24.0933 10.4185 24.3 10.2451 24.56C10.0718 24.8133 9.94181 25.1033 9.85514 25.43C9.77514 25.7567 9.73514 26.09 9.73514 26.43C9.73514 26.77 9.77514 27.1033 9.85514 27.43C9.94181 27.7567 10.0718 28.05 10.2451 28.31C10.4185 28.5633 10.6418 28.7667 10.9151 28.92C11.1951 29.0733 11.5251 29.15 11.9051 29.15C12.2851 29.15 12.6118 29.0733 12.8851 28.92C13.1651 28.7667 13.3918 28.5633 13.5651 28.31C13.7385 28.05 13.8651 27.7567 13.9451 27.43C14.0318 27.1033 14.0751 26.77 14.0751 26.43C14.0751 26.09 14.0318 25.7567 13.9451 25.43C13.8651 25.1033 13.7385 24.8133 13.5651 24.56C13.3918 24.3 13.1651 24.0933 12.8851 23.94C12.6118 23.7867 12.2851 23.71 11.9051 23.71ZM11.9051 22.69C12.4385 22.69 12.9151 22.79 13.3351 22.99C13.7618 23.19 14.1218 23.46 14.4151 23.8C14.7085 24.14 14.9318 24.5367 15.0851 24.99C15.2451 25.4433 15.3251 25.9233 15.3251 26.43C15.3251 26.9433 15.2451 27.4267 15.0851 27.88C14.9318 28.3333 14.7085 28.73 14.4151 29.07C14.1218 29.41 13.7618 29.68 13.3351 29.88C12.9151 30.0733 12.4385 30.17 11.9051 30.17C11.3718 30.17 10.8918 30.0733 10.4651 29.88C10.0451 29.68 9.68848 29.41 9.39514 29.07C9.10181 28.73 8.87514 28.3333 8.71514 27.88C8.56181 27.4267 8.48514 26.9433 8.48514 26.43C8.48514 25.9233 8.56181 25.4433 8.71514 24.99C8.87514 24.5367 9.10181 24.14 9.39514 23.8C9.68848 23.46 10.0451 23.19 10.4651 22.99C10.8918 22.79 11.3718 22.69 11.9051 22.69ZM15.9695 24.83H17.0395V25.83H17.0595C17.0928 25.69 17.1561 25.5533 17.2495 25.42C17.3495 25.2867 17.4661 25.1667 17.5995 25.06C17.7395 24.9467 17.8928 24.8567 18.0595 24.79C18.2261 24.7233 18.3961 24.69 18.5695 24.69C18.7028 24.69 18.7928 24.6933 18.8395 24.7C18.8928 24.7067 18.9461 24.7133 18.9995 24.72V25.82C18.9195 25.8067 18.8361 25.7967 18.7495 25.79C18.6695 25.7767 18.5895 25.77 18.5095 25.77C18.3161 25.77 18.1328 25.81 17.9595 25.89C17.7928 25.9633 17.6461 26.0767 17.5195 26.23C17.3928 26.3767 17.2928 26.56 17.2195 26.78C17.1461 27 17.1095 27.2533 17.1095 27.54V30H15.9695V24.83ZM23.846 30H22.766V29.3H22.746C22.5926 29.6 22.3693 29.8167 22.076 29.95C21.7826 30.0767 21.4726 30.14 21.146 30.14C20.7393 30.14 20.3826 30.07 20.076 29.93C19.776 29.7833 19.526 29.5867 19.326 29.34C19.126 29.0933 18.976 28.8033 18.876 28.47C18.776 28.13 18.726 27.7667 18.726 27.38C18.726 26.9133 18.7893 26.51 18.916 26.17C19.0426 25.83 19.2093 25.55 19.416 25.33C19.6293 25.11 19.8693 24.95 20.136 24.85C20.4093 24.7433 20.686 24.69 20.966 24.69C21.126 24.69 21.2893 24.7067 21.456 24.74C21.6226 24.7667 21.7826 24.8133 21.936 24.88C22.0893 24.9467 22.2293 25.0333 22.356 25.14C22.4893 25.24 22.5993 25.36 22.686 25.5H22.706V22.86H23.846V30ZM19.866 27.47C19.866 27.69 19.8926 27.9067 19.946 28.12C20.006 28.3333 20.0926 28.5233 20.206 28.69C20.326 28.8567 20.476 28.99 20.656 29.09C20.836 29.19 21.0493 29.24 21.296 29.24C21.5493 29.24 21.766 29.1867 21.946 29.08C22.1326 28.9733 22.2826 28.8333 22.396 28.66C22.516 28.4867 22.6026 28.2933 22.656 28.08C22.716 27.86 22.746 27.6367 22.746 27.41C22.746 26.8367 22.616 26.39 22.356 26.07C22.1026 25.75 21.756 25.59 21.316 25.59C21.0493 25.59 20.8226 25.6467 20.636 25.76C20.456 25.8667 20.306 26.01 20.186 26.19C20.0726 26.3633 19.9893 26.5633 19.936 26.79C19.8893 27.01 19.866 27.2367 19.866 27.47ZM28.3059 26.96C28.2926 26.78 28.2526 26.6067 28.1859 26.44C28.1259 26.2733 28.0393 26.13 27.9259 26.01C27.8193 25.8833 27.6859 25.7833 27.5259 25.71C27.3726 25.63 27.1993 25.59 27.0059 25.59C26.8059 25.59 26.6226 25.6267 26.4559 25.7C26.2959 25.7667 26.1559 25.8633 26.0359 25.99C25.9226 26.11 25.8293 26.2533 25.7559 26.42C25.6893 26.5867 25.6526 26.7667 25.6459 26.96H28.3059ZM25.6459 27.71C25.6459 27.91 25.6726 28.1033 25.7259 28.29C25.7859 28.4767 25.8726 28.64 25.9859 28.78C26.0993 28.92 26.2426 29.0333 26.4159 29.12C26.5893 29.2 26.7959 29.24 27.0359 29.24C27.3693 29.24 27.6359 29.17 27.8359 29.03C28.0426 28.8833 28.1959 28.6667 28.2959 28.38H29.3759C29.3159 28.66 29.2126 28.91 29.0659 29.13C28.9193 29.35 28.7426 29.5367 28.5359 29.69C28.3293 29.8367 28.0959 29.9467 27.8359 30.02C27.5826 30.1 27.3159 30.14 27.0359 30.14C26.6293 30.14 26.2693 30.0733 25.9559 29.94C25.6426 29.8067 25.3759 29.62 25.1559 29.38C24.9426 29.14 24.7793 28.8533 24.6659 28.52C24.5593 28.1867 24.5059 27.82 24.5059 27.42C24.5059 27.0533 24.5626 26.7067 24.6759 26.38C24.7959 26.0467 24.9626 25.7567 25.1759 25.51C25.3959 25.2567 25.6593 25.0567 25.9659 24.91C26.2726 24.7633 26.6193 24.69 27.0059 24.69C27.4126 24.69 27.7759 24.7767 28.0959 24.95C28.4226 25.1167 28.6926 25.34 28.9059 25.62C29.1193 25.9 29.2726 26.2233 29.3659 26.59C29.4659 26.95 29.4926 27.3233 29.4459 27.71H25.6459ZM29.9792 24.83H31.0492V25.83H31.0692C31.1026 25.69 31.1659 25.5533 31.2592 25.42C31.3592 25.2867 31.4759 25.1667 31.6092 25.06C31.7492 24.9467 31.9026 24.8567 32.0692 24.79C32.2359 24.7233 32.4059 24.69 32.5792 24.69C32.7126 24.69 32.8026 24.6933 32.8492 24.7C32.9026 24.7067 32.9559 24.7133 33.0092 24.72V25.82C32.9292 25.8067 32.8459 25.7967 32.7592 25.79C32.6792 25.7767 32.5992 25.77 32.5192 25.77C32.3259 25.77 32.1426 25.81 31.9692 25.89C31.8026 25.9633 31.6559 26.0767 31.5292 26.23C31.4026 26.3767 31.3026 26.56 31.2292 26.78C31.1559 27 31.1192 27.2533 31.1192 27.54V30H29.9792V24.83ZM0.937408 34.86H4.34741C5.13408 34.86 5.72408 35.03 6.11741 35.37C6.51074 35.71 6.70741 36.1833 6.70741 36.79C6.70741 37.13 6.65741 37.4133 6.55741 37.64C6.45741 37.86 6.34074 38.04 6.20741 38.18C6.07408 38.3133 5.94074 38.41 5.80741 38.47C5.68074 38.53 5.58741 38.57 5.52741 38.59V38.61C5.63407 38.6233 5.74741 38.6567 5.86741 38.71C5.99407 38.7633 6.11074 38.85 6.21741 38.97C6.32408 39.0833 6.41074 39.2333 6.47741 39.42C6.55074 39.6067 6.58741 39.84 6.58741 40.12C6.58741 40.54 6.61741 40.9233 6.67741 41.27C6.74408 41.61 6.84408 41.8533 6.97741 42H5.63741C5.54407 41.8467 5.48741 41.6767 5.46741 41.49C5.45408 41.3033 5.44741 41.1233 5.44741 40.95C5.44741 40.6233 5.42741 40.3433 5.38741 40.11C5.34741 39.87 5.27408 39.6733 5.16741 39.52C5.06074 39.36 4.91407 39.2433 4.72741 39.17C4.54741 39.0967 4.31408 39.06 4.02741 39.06H2.18741V42H0.937408V34.86ZM2.18741 38.11H4.23741C4.63741 38.11 4.94074 38.0167 5.14741 37.83C5.35407 37.6367 5.45741 37.35 5.45741 36.97C5.45741 36.7433 5.42407 36.56 5.35741 36.42C5.29074 36.2733 5.19741 36.16 5.07741 36.08C4.96408 36 4.83074 35.9467 4.67741 35.92C4.53074 35.8933 4.37741 35.88 4.21741 35.88H2.18741V38.11ZM11.0351 38.96C11.0218 38.78 10.9818 38.6067 10.9151 38.44C10.8551 38.2733 10.7684 38.13 10.6551 38.01C10.5484 37.8833 10.4151 37.7833 10.2551 37.71C10.1018 37.63 9.92842 37.59 9.73509 37.59C9.53509 37.59 9.35176 37.6267 9.18509 37.7C9.02509 37.7667 8.88509 37.8633 8.76509 37.99C8.65176 38.11 8.55842 38.2533 8.48509 38.42C8.41842 38.5867 8.38176 38.7667 8.37509 38.96H11.0351ZM8.37509 39.71C8.37509 39.91 8.40176 40.1033 8.45509 40.29C8.51509 40.4767 8.60176 40.64 8.71509 40.78C8.82842 40.92 8.97176 41.0333 9.14509 41.12C9.31842 41.2 9.52509 41.24 9.76509 41.24C10.0984 41.24 10.3651 41.17 10.5651 41.03C10.7718 40.8833 10.9251 40.6667 11.0251 40.38H12.1051C12.0451 40.66 11.9418 40.91 11.7951 41.13C11.6484 41.35 11.4718 41.5367 11.2651 41.69C11.0584 41.8367 10.8251 41.9467 10.5651 42.02C10.3118 42.1 10.0451 42.14 9.76509 42.14C9.35842 42.14 8.99842 42.0733 8.68509 41.94C8.37176 41.8067 8.10509 41.62 7.88509 41.38C7.67176 41.14 7.50842 40.8533 7.39509 40.52C7.28842 40.1867 7.23509 39.82 7.23509 39.42C7.23509 39.0533 7.29176 38.7067 7.40509 38.38C7.52509 38.0467 7.69176 37.7567 7.90509 37.51C8.12509 37.2567 8.38842 37.0567 8.69509 36.91C9.00176 36.7633 9.34842 36.69 9.73509 36.69C10.1418 36.69 10.5051 36.7767 10.8251 36.95C11.1518 37.1167 11.4218 37.34 11.6351 37.62C11.8484 37.9 12.0018 38.2233 12.0951 38.59C12.1951 38.95 12.2218 39.3233 12.1751 39.71H8.37509ZM16.1984 38.56C16.1517 38.24 16.0217 38 15.8084 37.84C15.6017 37.6733 15.3384 37.59 15.0184 37.59C14.8717 37.59 14.7151 37.6167 14.5484 37.67C14.3817 37.7167 14.2284 37.81 14.0884 37.95C13.9484 38.0833 13.8317 38.2733 13.7384 38.52C13.6451 38.76 13.5984 39.0767 13.5984 39.47C13.5984 39.6833 13.6217 39.8967 13.6684 40.11C13.7217 40.3233 13.8017 40.5133 13.9084 40.68C14.0217 40.8467 14.1651 40.9833 14.3384 41.09C14.5117 41.19 14.7217 41.24 14.9684 41.24C15.3017 41.24 15.5751 41.1367 15.7884 40.93C16.0084 40.7233 16.1451 40.4333 16.1984 40.06H17.3384C17.2317 40.7333 16.9751 41.25 16.5684 41.61C16.1684 41.9633 15.6351 42.14 14.9684 42.14C14.5617 42.14 14.2017 42.0733 13.8884 41.94C13.5817 41.8 13.3217 41.6133 13.1084 41.38C12.8951 41.14 12.7317 40.8567 12.6184 40.53C12.5117 40.2033 12.4584 39.85 12.4584 39.47C12.4584 39.0833 12.5117 38.72 12.6184 38.38C12.7251 38.04 12.8851 37.7467 13.0984 37.5C13.3117 37.2467 13.5751 37.05 13.8884 36.91C14.2084 36.7633 14.5817 36.69 15.0084 36.69C15.3084 36.69 15.5917 36.73 15.8584 36.81C16.1317 36.8833 16.3717 36.9967 16.5784 37.15C16.7917 37.3033 16.9651 37.4967 17.0984 37.73C17.2317 37.9633 17.3117 38.24 17.3384 38.56H16.1984ZM21.4817 38.96C21.4684 38.78 21.4284 38.6067 21.3617 38.44C21.3017 38.2733 21.215 38.13 21.1017 38.01C20.995 37.8833 20.8617 37.7833 20.7017 37.71C20.5484 37.63 20.375 37.59 20.1817 37.59C19.9817 37.59 19.7984 37.6267 19.6317 37.7C19.4717 37.7667 19.3317 37.8633 19.2117 37.99C19.0984 38.11 19.005 38.2533 18.9317 38.42C18.865 38.5867 18.8284 38.7667 18.8217 38.96H21.4817ZM18.8217 39.71C18.8217 39.91 18.8484 40.1033 18.9017 40.29C18.9617 40.4767 19.0484 40.64 19.1617 40.78C19.275 40.92 19.4184 41.0333 19.5917 41.12C19.765 41.2 19.9717 41.24 20.2117 41.24C20.545 41.24 20.8117 41.17 21.0117 41.03C21.2184 40.8833 21.3717 40.6667 21.4717 40.38H22.5517C22.4917 40.66 22.3884 40.91 22.2417 41.13C22.095 41.35 21.9184 41.5367 21.7117 41.69C21.505 41.8367 21.2717 41.9467 21.0117 42.02C20.7584 42.1 20.4917 42.14 20.2117 42.14C19.805 42.14 19.445 42.0733 19.1317 41.94C18.8184 41.8067 18.5517 41.62 18.3317 41.38C18.1184 41.14 17.955 40.8533 17.8417 40.52C17.735 40.1867 17.6817 39.82 17.6817 39.42C17.6817 39.0533 17.7384 38.7067 17.8517 38.38C17.9717 38.0467 18.1384 37.7567 18.3517 37.51C18.5717 37.2567 18.835 37.0567 19.1417 36.91C19.4484 36.7633 19.795 36.69 20.1817 36.69C20.5884 36.69 20.9517 36.7767 21.2717 36.95C21.5984 37.1167 21.8684 37.34 22.0817 37.62C22.295 37.9 22.4484 38.2233 22.5417 38.59C22.6417 38.95 22.6684 39.3233 22.6217 39.71H18.8217ZM23.185 34.86H24.325V35.94H23.185V34.86ZM23.185 36.83H24.325V42H23.185V36.83ZM24.7238 36.83H25.9638L27.2738 40.8H27.2938L28.5538 36.83H29.7338L27.8838 42H26.6038L24.7238 36.83ZM33.636 38.96C33.6227 38.78 33.5827 38.6067 33.516 38.44C33.456 38.2733 33.3693 38.13 33.256 38.01C33.1493 37.8833 33.016 37.7833 32.856 37.71C32.7027 37.63 32.5293 37.59 32.336 37.59C32.136 37.59 31.9527 37.6267 31.786 37.7C31.626 37.7667 31.486 37.8633 31.366 37.99C31.2527 38.11 31.1593 38.2533 31.086 38.42C31.0193 38.5867 30.9827 38.7667 30.976 38.96H33.636ZM30.976 39.71C30.976 39.91 31.0027 40.1033 31.056 40.29C31.116 40.4767 31.2027 40.64 31.316 40.78C31.4293 40.92 31.5727 41.0333 31.746 41.12C31.9193 41.2 32.126 41.24 32.366 41.24C32.6993 41.24 32.966 41.17 33.166 41.03C33.3727 40.8833 33.526 40.6667 33.626 40.38H34.706C34.646 40.66 34.5427 40.91 34.396 41.13C34.2493 41.35 34.0727 41.5367 33.866 41.69C33.6593 41.8367 33.426 41.9467 33.166 42.02C32.9127 42.1 32.646 42.14 32.366 42.14C31.9593 42.14 31.5993 42.0733 31.286 41.94C30.9727 41.8067 30.706 41.62 30.486 41.38C30.2727 41.14 30.1093 40.8533 29.996 40.52C29.8893 40.1867 29.836 39.82 29.836 39.42C29.836 39.0533 29.8927 38.7067 30.006 38.38C30.126 38.0467 30.2927 37.7567 30.506 37.51C30.726 37.2567 30.9893 37.0567 31.296 36.91C31.6027 36.7633 31.9493 36.69 32.336 36.69C32.7427 36.69 33.106 36.7767 33.426 36.95C33.7527 37.1167 34.0227 37.34 34.236 37.62C34.4493 37.9 34.6027 38.2233 34.696 38.59C34.796 38.95 34.8227 39.3233 34.776 39.71H30.976ZM40.1793 42H39.0993V41.3H39.0793C38.926 41.6 38.7026 41.8167 38.4093 41.95C38.116 42.0767 37.806 42.14 37.4793 42.14C37.0726 42.14 36.716 42.07 36.4093 41.93C36.1093 41.7833 35.8593 41.5867 35.6593 41.34C35.4593 41.0933 35.3093 40.8033 35.2093 40.47C35.1093 40.13 35.0593 39.7667 35.0593 39.38C35.0593 38.9133 35.1226 38.51 35.2493 38.17C35.376 37.83 35.5426 37.55 35.7493 37.33C35.9626 37.11 36.2026 36.95 36.4693 36.85C36.7426 36.7433 37.0193 36.69 37.2993 36.69C37.4593 36.69 37.6226 36.7067 37.7893 36.74C37.956 36.7667 38.116 36.8133 38.2693 36.88C38.4226 36.9467 38.5626 37.0333 38.6893 37.14C38.8226 37.24 38.9326 37.36 39.0193 37.5H39.0393V34.86H40.1793V42ZM36.1993 39.47C36.1993 39.69 36.226 39.9067 36.2793 40.12C36.3393 40.3333 36.426 40.5233 36.5393 40.69C36.6593 40.8567 36.8093 40.99 36.9893 41.09C37.1693 41.19 37.3826 41.24 37.6293 41.24C37.8826 41.24 38.0993 41.1867 38.2793 41.08C38.466 40.9733 38.616 40.8333 38.7293 40.66C38.8493 40.4867 38.936 40.2933 38.9893 40.08C39.0493 39.86 39.0793 39.6367 39.0793 39.41C39.0793 38.8367 38.9493 38.39 38.6893 38.07C38.436 37.75 38.0893 37.59 37.6493 37.59C37.3826 37.59 37.156 37.6467 36.9693 37.76C36.7893 37.8667 36.6393 38.01 36.5193 38.19C36.406 38.3633 36.3226 38.5633 36.2693 38.79C36.2226 39.01 36.1993 39.2367 36.1993 39.47Z\"\n    fill=\"#C4C4C4\" />\n  <circle id=\"3\" cx=\"87\" cy=\"6\" r=\"6\" fill=\"#C4C4C4\" />\n  <path id=\"4\"\n    d=\"M73.0567 22.86H74.3267L75.6167 28.32H75.6367L77.0767 22.86H78.3567L79.7567 28.32H79.7767L81.1067 22.86H82.3767L80.4067 30H79.1367L77.7067 24.54H77.6867L76.2267 30H74.9367L73.0567 22.86ZM86.6657 28.85C86.6657 28.99 86.6823 29.09 86.7157 29.15C86.7557 29.21 86.829 29.24 86.9357 29.24C86.969 29.24 87.009 29.24 87.0557 29.24C87.1023 29.24 87.1557 29.2333 87.2157 29.22V30.01C87.1757 30.0233 87.1223 30.0367 87.0557 30.05C86.9957 30.07 86.9323 30.0867 86.8657 30.1C86.799 30.1133 86.7323 30.1233 86.6657 30.13C86.599 30.1367 86.5423 30.14 86.4957 30.14C86.2623 30.14 86.069 30.0933 85.9157 30C85.7623 29.9067 85.6623 29.7433 85.6157 29.51C85.389 29.73 85.109 29.89 84.7757 29.99C84.449 30.09 84.1323 30.14 83.8257 30.14C83.5923 30.14 83.369 30.1067 83.1557 30.04C82.9423 29.98 82.7523 29.89 82.5857 29.77C82.4257 29.6433 82.2957 29.4867 82.1957 29.3C82.1023 29.1067 82.0557 28.8833 82.0557 28.63C82.0557 28.31 82.1123 28.05 82.2257 27.85C82.3457 27.65 82.499 27.4933 82.6857 27.38C82.879 27.2667 83.0923 27.1867 83.3257 27.14C83.5657 27.0867 83.8057 27.0467 84.0457 27.02C84.2523 26.98 84.449 26.9533 84.6357 26.94C84.8223 26.92 84.9857 26.89 85.1257 26.85C85.2723 26.81 85.3857 26.75 85.4657 26.67C85.5523 26.5833 85.5957 26.4567 85.5957 26.29C85.5957 26.1433 85.559 26.0233 85.4857 25.93C85.419 25.8367 85.3323 25.7667 85.2257 25.72C85.1257 25.6667 85.0123 25.6333 84.8857 25.62C84.759 25.6 84.639 25.59 84.5257 25.59C84.2057 25.59 83.9423 25.6567 83.7357 25.79C83.529 25.9233 83.4123 26.13 83.3857 26.41H82.2457C82.2657 26.0767 82.3457 25.8 82.4857 25.58C82.6257 25.36 82.8023 25.1833 83.0157 25.05C83.2357 24.9167 83.4823 24.8233 83.7557 24.77C84.029 24.7167 84.309 24.69 84.5957 24.69C84.849 24.69 85.099 24.7167 85.3457 24.77C85.5923 24.8233 85.8123 24.91 86.0057 25.03C86.2057 25.15 86.3657 25.3067 86.4857 25.5C86.6057 25.6867 86.6657 25.9167 86.6657 26.19V28.85ZM85.5257 27.41C85.3523 27.5233 85.139 27.5933 84.8857 27.62C84.6323 27.64 84.379 27.6733 84.1257 27.72C84.0057 27.74 83.889 27.77 83.7757 27.81C83.6623 27.8433 83.5623 27.8933 83.4757 27.96C83.389 28.02 83.319 28.1033 83.2657 28.21C83.219 28.31 83.1957 28.4333 83.1957 28.58C83.1957 28.7067 83.2323 28.8133 83.3057 28.9C83.379 28.9867 83.4657 29.0567 83.5657 29.11C83.6723 29.1567 83.7857 29.19 83.9057 29.21C84.0323 29.23 84.1457 29.24 84.2457 29.24C84.3723 29.24 84.509 29.2233 84.6557 29.19C84.8023 29.1567 84.939 29.1 85.0657 29.02C85.199 28.94 85.309 28.84 85.3957 28.72C85.4823 28.5933 85.5257 28.44 85.5257 28.26V27.41ZM88.419 28.34C88.4523 28.6733 88.579 28.9067 88.799 29.04C89.019 29.1733 89.2823 29.24 89.589 29.24C89.6957 29.24 89.8157 29.2333 89.949 29.22C90.089 29.2 90.219 29.1667 90.339 29.12C90.459 29.0733 90.5557 29.0067 90.629 28.92C90.709 28.8267 90.7457 28.7067 90.739 28.56C90.7323 28.4133 90.679 28.2933 90.579 28.2C90.479 28.1067 90.349 28.0333 90.189 27.98C90.0357 27.92 89.859 27.87 89.659 27.83C89.459 27.79 89.2557 27.7467 89.049 27.7C88.8357 27.6533 88.629 27.5967 88.429 27.53C88.2357 27.4633 88.059 27.3733 87.899 27.26C87.7457 27.1467 87.6223 27.0033 87.529 26.83C87.4357 26.65 87.389 26.43 87.389 26.17C87.389 25.89 87.4557 25.6567 87.589 25.47C87.729 25.2767 87.9023 25.1233 88.109 25.01C88.3223 24.89 88.5557 24.8067 88.809 24.76C89.069 24.7133 89.3157 24.69 89.549 24.69C89.8157 24.69 90.069 24.72 90.309 24.78C90.5557 24.8333 90.7757 24.9233 90.969 25.05C91.169 25.1767 91.3323 25.3433 91.459 25.55C91.5923 25.75 91.6757 25.9933 91.709 26.28H90.519C90.4657 26.0067 90.339 25.8233 90.139 25.73C89.9457 25.6367 89.7223 25.59 89.469 25.59C89.389 25.59 89.2923 25.5967 89.179 25.61C89.0723 25.6233 88.969 25.65 88.869 25.69C88.7757 25.7233 88.6957 25.7767 88.629 25.85C88.5623 25.9167 88.529 26.0067 88.529 26.12C88.529 26.26 88.5757 26.3733 88.669 26.46C88.769 26.5467 88.8957 26.62 89.049 26.68C89.209 26.7333 89.389 26.78 89.589 26.82C89.789 26.86 89.9957 26.9033 90.209 26.95C90.4157 26.9967 90.619 27.0533 90.819 27.12C91.019 27.1867 91.1957 27.2767 91.349 27.39C91.509 27.5033 91.6357 27.6467 91.729 27.82C91.829 27.9933 91.879 28.2067 91.879 28.46C91.879 28.7667 91.809 29.0267 91.669 29.24C91.529 29.4533 91.3457 29.6267 91.119 29.76C90.899 29.8933 90.6523 29.99 90.379 30.05C90.1057 30.11 89.8357 30.14 89.569 30.14C89.2423 30.14 88.939 30.1033 88.659 30.03C88.3857 29.9567 88.1457 29.8467 87.939 29.7C87.739 29.5467 87.579 29.36 87.459 29.14C87.3457 28.9133 87.2857 28.6467 87.279 28.34H88.419ZM92.4112 22.86H93.5512V25.51H93.5712C93.7112 25.2767 93.9179 25.0833 94.1912 24.93C94.4712 24.77 94.7812 24.69 95.1212 24.69C95.6879 24.69 96.1345 24.8367 96.4612 25.13C96.7879 25.4233 96.9512 25.8633 96.9512 26.45V30H95.8112V26.75C95.7979 26.3433 95.7112 26.05 95.5512 25.87C95.3912 25.6833 95.1412 25.59 94.8012 25.59C94.6079 25.59 94.4345 25.6267 94.2812 25.7C94.1279 25.7667 93.9979 25.8633 93.8912 25.99C93.7845 26.11 93.7012 26.2533 93.6412 26.42C93.5812 26.5867 93.5512 26.7633 93.5512 26.95V30H92.4112V22.86ZM71.0146 34.86H72.2646V42H71.0146V34.86ZM73.3044 36.83H74.3844V37.59L74.4044 37.61C74.5778 37.3233 74.8044 37.1 75.0844 36.94C75.3644 36.7733 75.6744 36.69 76.0144 36.69C76.5811 36.69 77.0278 36.8367 77.3544 37.13C77.6811 37.4233 77.8444 37.8633 77.8444 38.45V42H76.7044V38.75C76.6911 38.3433 76.6044 38.05 76.4444 37.87C76.2844 37.6833 76.0344 37.59 75.6944 37.59C75.5011 37.59 75.3278 37.6267 75.1744 37.7C75.0211 37.7667 74.8911 37.8633 74.7844 37.99C74.6778 38.11 74.5944 38.2533 74.5344 38.42C74.4744 38.5867 74.4444 38.7633 74.4444 38.95V42H73.3044V36.83ZM78.1933 36.83H79.0533V35.28H80.1933V36.83H81.2233V37.68H80.1933V40.44C80.1933 40.56 80.1966 40.6633 80.2033 40.75C80.2166 40.8367 80.2399 40.91 80.2733 40.97C80.3133 41.03 80.3699 41.0767 80.4433 41.11C80.5166 41.1367 80.6166 41.15 80.7433 41.15C80.8233 41.15 80.9033 41.15 80.9833 41.15C81.0633 41.1433 81.1433 41.13 81.2233 41.11V41.99C81.0966 42.0033 80.9733 42.0167 80.8533 42.03C80.7333 42.0433 80.6099 42.05 80.4833 42.05C80.1833 42.05 79.9399 42.0233 79.7533 41.97C79.5733 41.91 79.4299 41.8267 79.3233 41.72C79.2233 41.6067 79.1533 41.4667 79.1133 41.3C79.0799 41.1333 79.0599 40.9433 79.0533 40.73V37.68H78.1933V36.83ZM81.74 34.86H82.88V35.94H81.74V34.86ZM81.74 36.83H82.88V42H81.74V36.83ZM88.1188 40.85C88.1188 40.99 88.1355 41.09 88.1688 41.15C88.2088 41.21 88.2821 41.24 88.3888 41.24C88.4221 41.24 88.4621 41.24 88.5088 41.24C88.5555 41.24 88.6088 41.2333 88.6688 41.22V42.01C88.6288 42.0233 88.5755 42.0367 88.5088 42.05C88.4488 42.07 88.3855 42.0867 88.3188 42.1C88.2521 42.1133 88.1855 42.1233 88.1188 42.13C88.0521 42.1367 87.9955 42.14 87.9488 42.14C87.7155 42.14 87.5221 42.0933 87.3688 42C87.2155 41.9067 87.1155 41.7433 87.0688 41.51C86.8421 41.73 86.5621 41.89 86.2288 41.99C85.9021 42.09 85.5855 42.14 85.2788 42.14C85.0455 42.14 84.8221 42.1067 84.6088 42.04C84.3955 41.98 84.2055 41.89 84.0388 41.77C83.8788 41.6433 83.7488 41.4867 83.6488 41.3C83.5555 41.1067 83.5088 40.8833 83.5088 40.63C83.5088 40.31 83.5655 40.05 83.6788 39.85C83.7988 39.65 83.9521 39.4933 84.1388 39.38C84.3321 39.2667 84.5455 39.1867 84.7788 39.14C85.0188 39.0867 85.2588 39.0467 85.4988 39.02C85.7055 38.98 85.9021 38.9533 86.0888 38.94C86.2755 38.92 86.4388 38.89 86.5788 38.85C86.7255 38.81 86.8388 38.75 86.9188 38.67C87.0055 38.5833 87.0488 38.4567 87.0488 38.29C87.0488 38.1433 87.0121 38.0233 86.9388 37.93C86.8721 37.8367 86.7855 37.7667 86.6788 37.72C86.5788 37.6667 86.4655 37.6333 86.3388 37.62C86.2121 37.6 86.0921 37.59 85.9788 37.59C85.6588 37.59 85.3955 37.6567 85.1888 37.79C84.9821 37.9233 84.8655 38.13 84.8388 38.41H83.6988C83.7188 38.0767 83.7988 37.8 83.9388 37.58C84.0788 37.36 84.2555 37.1833 84.4688 37.05C84.6888 36.9167 84.9355 36.8233 85.2088 36.77C85.4821 36.7167 85.7621 36.69 86.0488 36.69C86.3021 36.69 86.5521 36.7167 86.7988 36.77C87.0455 36.8233 87.2655 36.91 87.4588 37.03C87.6588 37.15 87.8188 37.3067 87.9388 37.5C88.0588 37.6867 88.1188 37.9167 88.1188 38.19V40.85ZM86.9788 39.41C86.8055 39.5233 86.5921 39.5933 86.3388 39.62C86.0855 39.64 85.8321 39.6733 85.5788 39.72C85.4588 39.74 85.3421 39.77 85.2288 39.81C85.1155 39.8433 85.0155 39.8933 84.9288 39.96C84.8421 40.02 84.7721 40.1033 84.7188 40.21C84.6721 40.31 84.6488 40.4333 84.6488 40.58C84.6488 40.7067 84.6855 40.8133 84.7588 40.9C84.8321 40.9867 84.9188 41.0567 85.0188 41.11C85.1255 41.1567 85.2388 41.19 85.3588 41.21C85.4855 41.23 85.5988 41.24 85.6988 41.24C85.8255 41.24 85.9621 41.2233 86.1088 41.19C86.2555 41.1567 86.3921 41.1 86.5188 41.02C86.6521 40.94 86.7621 40.84 86.8488 40.72C86.9355 40.5933 86.9788 40.44 86.9788 40.26V39.41ZM88.4921 36.83H89.3521V35.28H90.4921V36.83H91.5221V37.68H90.4921V40.44C90.4921 40.56 90.4954 40.6633 90.5021 40.75C90.5154 40.8367 90.5388 40.91 90.5721 40.97C90.6121 41.03 90.6688 41.0767 90.7421 41.11C90.8154 41.1367 90.9154 41.15 91.0421 41.15C91.1221 41.15 91.2021 41.15 91.2821 41.15C91.3621 41.1433 91.4421 41.13 91.5221 41.11V41.99C91.3954 42.0033 91.2721 42.0167 91.1521 42.03C91.0321 42.0433 90.9088 42.05 90.7821 42.05C90.4821 42.05 90.2388 42.0233 90.0521 41.97C89.8721 41.91 89.7288 41.8267 89.6221 41.72C89.5221 41.6067 89.4521 41.4667 89.4121 41.3C89.3788 41.1333 89.3588 40.9433 89.3521 40.73V37.68H88.4921V36.83ZM95.5589 38.96C95.5455 38.78 95.5055 38.6067 95.4389 38.44C95.3789 38.2733 95.2922 38.13 95.1789 38.01C95.0722 37.8833 94.9389 37.7833 94.7789 37.71C94.6255 37.63 94.4522 37.59 94.2589 37.59C94.0589 37.59 93.8755 37.6267 93.7089 37.7C93.5489 37.7667 93.4089 37.8633 93.2889 37.99C93.1755 38.11 93.0822 38.2533 93.0089 38.42C92.9422 38.5867 92.9055 38.7667 92.8989 38.96H95.5589ZM92.8989 39.71C92.8989 39.91 92.9255 40.1033 92.9789 40.29C93.0389 40.4767 93.1255 40.64 93.2389 40.78C93.3522 40.92 93.4955 41.0333 93.6689 41.12C93.8422 41.2 94.0489 41.24 94.2889 41.24C94.6222 41.24 94.8889 41.17 95.0889 41.03C95.2955 40.8833 95.4489 40.6667 95.5489 40.38H96.6289C96.5689 40.66 96.4655 40.91 96.3189 41.13C96.1722 41.35 95.9955 41.5367 95.7889 41.69C95.5822 41.8367 95.3489 41.9467 95.0889 42.02C94.8355 42.1 94.5689 42.14 94.2889 42.14C93.8822 42.14 93.5222 42.0733 93.2089 41.94C92.8955 41.8067 92.6289 41.62 92.4089 41.38C92.1955 41.14 92.0322 40.8533 91.9189 40.52C91.8122 40.1867 91.7589 39.82 91.7589 39.42C91.7589 39.0533 91.8155 38.7067 91.9289 38.38C92.0489 38.0467 92.2155 37.7567 92.4289 37.51C92.6489 37.2567 92.9122 37.0567 93.2189 36.91C93.5255 36.7633 93.8722 36.69 94.2589 36.69C94.6655 36.69 95.0289 36.7767 95.3489 36.95C95.6755 37.1167 95.9455 37.34 96.1589 37.62C96.3722 37.9 96.5255 38.2233 96.6189 38.59C96.7189 38.95 96.7455 39.3233 96.6989 39.71H92.8989ZM102.102 42H101.022V41.3H101.002C100.849 41.6 100.625 41.8167 100.332 41.95C100.039 42.0767 99.7288 42.14 99.4022 42.14C98.9955 42.14 98.6388 42.07 98.3322 41.93C98.0322 41.7833 97.7822 41.5867 97.5822 41.34C97.3822 41.0933 97.2322 40.8033 97.1322 40.47C97.0322 40.13 96.9822 39.7667 96.9822 39.38C96.9822 38.9133 97.0455 38.51 97.1722 38.17C97.2988 37.83 97.4655 37.55 97.6722 37.33C97.8855 37.11 98.1255 36.95 98.3922 36.85C98.6655 36.7433 98.9422 36.69 99.2222 36.69C99.3822 36.69 99.5455 36.7067 99.7122 36.74C99.8788 36.7667 100.039 36.8133 100.192 36.88C100.345 36.9467 100.485 37.0333 100.612 37.14C100.745 37.24 100.855 37.36 100.942 37.5H100.962V34.86H102.102V42ZM98.1222 39.47C98.1222 39.69 98.1488 39.9067 98.2022 40.12C98.2622 40.3333 98.3488 40.5233 98.4622 40.69C98.5822 40.8567 98.7322 40.99 98.9122 41.09C99.0922 41.19 99.3055 41.24 99.5522 41.24C99.8055 41.24 100.022 41.1867 100.202 41.08C100.389 40.9733 100.539 40.8333 100.652 40.66C100.772 40.4867 100.859 40.2933 100.912 40.08C100.972 39.86 101.002 39.6367 101.002 39.41C101.002 38.8367 100.872 38.39 100.612 38.07C100.359 37.75 100.012 37.59 99.5722 37.59C99.3055 37.59 99.0788 37.6467 98.8922 37.76C98.7122 37.8667 98.5622 38.01 98.4422 38.19C98.3288 38.3633 98.2455 38.5633 98.1922 38.79C98.1455 39.01 98.1222 39.2367 98.1222 39.47Z\"\n    fill=\"#C4C4C4\" />\n  <circle id=\"5\" cx=\"156\" cy=\"6\" r=\"6\" fill=\"#C4C4C4\" />\n  <path id=\"6\"\n    d=\"M132.984 22.86H134.234V30H132.984V22.86ZM135.274 24.83H136.354V25.59L136.374 25.61C136.547 25.3233 136.774 25.1 137.054 24.94C137.334 24.7733 137.644 24.69 137.984 24.69C138.551 24.69 138.997 24.8367 139.324 25.13C139.651 25.4233 139.814 25.8633 139.814 26.45V30H138.674V26.75C138.661 26.3433 138.574 26.05 138.414 25.87C138.254 25.6833 138.004 25.59 137.664 25.59C137.471 25.59 137.297 25.6267 137.144 25.7C136.991 25.7667 136.861 25.8633 136.754 25.99C136.647 26.11 136.564 26.2533 136.504 26.42C136.444 26.5867 136.414 26.7633 136.414 26.95V30H135.274V24.83ZM143.163 24.83H144.243V25.53H144.263C144.423 25.23 144.646 25.0167 144.933 24.89C145.22 24.7567 145.53 24.69 145.863 24.69C146.27 24.69 146.623 24.7633 146.923 24.91C147.23 25.05 147.483 25.2467 147.683 25.5C147.883 25.7467 148.033 26.0367 148.133 26.37C148.233 26.7033 148.283 27.06 148.283 27.44C148.283 27.7867 148.236 28.1233 148.143 28.45C148.056 28.7767 147.92 29.0667 147.733 29.32C147.553 29.5667 147.323 29.7667 147.043 29.92C146.763 30.0667 146.433 30.14 146.053 30.14C145.886 30.14 145.72 30.1233 145.553 30.09C145.386 30.0633 145.226 30.0167 145.073 29.95C144.92 29.8833 144.776 29.8 144.643 29.7C144.516 29.5933 144.41 29.47 144.323 29.33H144.303V31.91H143.163V24.83ZM147.143 27.42C147.143 27.1867 147.113 26.96 147.053 26.74C146.993 26.52 146.903 26.3267 146.783 26.16C146.663 25.9867 146.513 25.85 146.333 25.75C146.153 25.6433 145.946 25.59 145.713 25.59C145.233 25.59 144.87 25.7567 144.623 26.09C144.383 26.4233 144.263 26.8667 144.263 27.42C144.263 27.68 144.293 27.9233 144.353 28.15C144.42 28.37 144.516 28.56 144.643 28.72C144.77 28.88 144.92 29.0067 145.093 29.1C145.273 29.1933 145.48 29.24 145.713 29.24C145.973 29.24 146.193 29.1867 146.373 29.08C146.553 28.9733 146.7 28.8367 146.813 28.67C146.933 28.4967 147.016 28.3033 147.063 28.09C147.116 27.87 147.143 27.6467 147.143 27.42ZM148.913 24.83H149.983V25.83H150.003C150.036 25.69 150.099 25.5533 150.193 25.42C150.293 25.2867 150.409 25.1667 150.543 25.06C150.683 24.9467 150.836 24.8567 151.003 24.79C151.169 24.7233 151.339 24.69 151.513 24.69C151.646 24.69 151.736 24.6933 151.783 24.7C151.836 24.7067 151.889 24.7133 151.943 24.72V25.82C151.863 25.8067 151.779 25.7967 151.693 25.79C151.613 25.7767 151.533 25.77 151.453 25.77C151.259 25.77 151.076 25.81 150.903 25.89C150.736 25.9633 150.589 26.0767 150.463 26.23C150.336 26.3767 150.236 26.56 150.163 26.78C150.089 27 150.053 27.2533 150.053 27.54V30H148.913V24.83ZM154.289 30.14C153.876 30.14 153.506 30.0733 153.179 29.94C152.859 29.8 152.586 29.61 152.359 29.37C152.139 29.13 151.969 28.8433 151.849 28.51C151.736 28.1767 151.679 27.81 151.679 27.41C151.679 27.0167 151.736 26.6533 151.849 26.32C151.969 25.9867 152.139 25.7 152.359 25.46C152.586 25.22 152.859 25.0333 153.179 24.9C153.506 24.76 153.876 24.69 154.289 24.69C154.703 24.69 155.069 24.76 155.389 24.9C155.716 25.0333 155.989 25.22 156.209 25.46C156.436 25.7 156.606 25.9867 156.719 26.32C156.839 26.6533 156.899 27.0167 156.899 27.41C156.899 27.81 156.839 28.1767 156.719 28.51C156.606 28.8433 156.436 29.13 156.209 29.37C155.989 29.61 155.716 29.8 155.389 29.94C155.069 30.0733 154.703 30.14 154.289 30.14ZM154.289 29.24C154.543 29.24 154.763 29.1867 154.949 29.08C155.136 28.9733 155.289 28.8333 155.409 28.66C155.529 28.4867 155.616 28.2933 155.669 28.08C155.729 27.86 155.759 27.6367 155.759 27.41C155.759 27.19 155.729 26.97 155.669 26.75C155.616 26.53 155.529 26.3367 155.409 26.17C155.289 25.9967 155.136 25.8567 154.949 25.75C154.763 25.6433 154.543 25.59 154.289 25.59C154.036 25.59 153.816 25.6433 153.629 25.75C153.443 25.8567 153.289 25.9967 153.169 26.17C153.049 26.3367 152.959 26.53 152.899 26.75C152.846 26.97 152.819 27.19 152.819 27.41C152.819 27.6367 152.846 27.86 152.899 28.08C152.959 28.2933 153.049 28.4867 153.169 28.66C153.289 28.8333 153.443 28.9733 153.629 29.08C153.816 29.1867 154.036 29.24 154.289 29.24ZM162.294 29.73C162.294 30.51 162.074 31.09 161.634 31.47C161.2 31.8567 160.574 32.05 159.754 32.05C159.494 32.05 159.23 32.0233 158.964 31.97C158.704 31.9167 158.464 31.8267 158.244 31.7C158.03 31.5733 157.85 31.4067 157.704 31.2C157.557 30.9933 157.47 30.74 157.444 30.44H158.584C158.617 30.6 158.674 30.73 158.754 30.83C158.834 30.93 158.927 31.0067 159.034 31.06C159.147 31.12 159.27 31.1567 159.404 31.17C159.537 31.19 159.677 31.2 159.824 31.2C160.284 31.2 160.62 31.0867 160.834 30.86C161.047 30.6333 161.154 30.3067 161.154 29.88V29.09H161.134C160.974 29.3767 160.754 29.6 160.474 29.76C160.2 29.92 159.904 30 159.584 30C159.17 30 158.817 29.93 158.524 29.79C158.237 29.6433 157.997 29.4467 157.804 29.2C157.617 28.9467 157.48 28.6567 157.394 28.33C157.307 28.0033 157.264 27.6533 157.264 27.28C157.264 26.9333 157.317 26.6033 157.424 26.29C157.53 25.9767 157.684 25.7033 157.884 25.47C158.084 25.23 158.327 25.04 158.614 24.9C158.907 24.76 159.237 24.69 159.604 24.69C159.93 24.69 160.23 24.76 160.504 24.9C160.777 25.0333 160.987 25.2467 161.134 25.54H161.154V24.83H162.294V29.73ZM159.764 29.1C160.017 29.1 160.23 29.05 160.404 28.95C160.584 28.8433 160.727 28.7067 160.834 28.54C160.947 28.3667 161.027 28.1733 161.074 27.96C161.127 27.74 161.154 27.52 161.154 27.3C161.154 27.08 161.127 26.8667 161.074 26.66C161.02 26.4533 160.937 26.27 160.824 26.11C160.717 25.95 160.574 25.8233 160.394 25.73C160.22 25.6367 160.01 25.59 159.764 25.59C159.51 25.59 159.297 25.6433 159.124 25.75C158.95 25.8567 158.81 25.9967 158.704 26.17C158.597 26.3367 158.52 26.53 158.474 26.75C158.427 26.9633 158.404 27.1767 158.404 27.39C158.404 27.6033 158.43 27.8133 158.484 28.02C158.537 28.22 158.617 28.4 158.724 28.56C158.837 28.72 158.977 28.85 159.144 28.95C159.317 29.05 159.524 29.1 159.764 29.1ZM163.108 24.83H164.178V25.83H164.198C164.231 25.69 164.295 25.5533 164.388 25.42C164.488 25.2867 164.605 25.1667 164.738 25.06C164.878 24.9467 165.031 24.8567 165.198 24.79C165.365 24.7233 165.535 24.69 165.708 24.69C165.841 24.69 165.931 24.6933 165.978 24.7C166.031 24.7067 166.085 24.7133 166.138 24.72V25.82C166.058 25.8067 165.975 25.7967 165.888 25.79C165.808 25.7767 165.728 25.77 165.648 25.77C165.455 25.77 165.271 25.81 165.098 25.89C164.931 25.9633 164.785 26.0767 164.658 26.23C164.531 26.3767 164.431 26.56 164.358 26.78C164.285 27 164.248 27.2533 164.248 27.54V30H163.108V24.83ZM169.665 26.96C169.651 26.78 169.611 26.6067 169.545 26.44C169.485 26.2733 169.398 26.13 169.285 26.01C169.178 25.8833 169.045 25.7833 168.885 25.71C168.731 25.63 168.558 25.59 168.365 25.59C168.165 25.59 167.981 25.6267 167.815 25.7C167.655 25.7667 167.515 25.8633 167.395 25.99C167.281 26.11 167.188 26.2533 167.115 26.42C167.048 26.5867 167.011 26.7667 167.005 26.96H169.665ZM167.005 27.71C167.005 27.91 167.031 28.1033 167.085 28.29C167.145 28.4767 167.231 28.64 167.345 28.78C167.458 28.92 167.601 29.0333 167.775 29.12C167.948 29.2 168.155 29.24 168.395 29.24C168.728 29.24 168.995 29.17 169.195 29.03C169.401 28.8833 169.555 28.6667 169.655 28.38H170.735C170.675 28.66 170.571 28.91 170.425 29.13C170.278 29.35 170.101 29.5367 169.895 29.69C169.688 29.8367 169.455 29.9467 169.195 30.02C168.941 30.1 168.675 30.14 168.395 30.14C167.988 30.14 167.628 30.0733 167.315 29.94C167.001 29.8067 166.735 29.62 166.515 29.38C166.301 29.14 166.138 28.8533 166.025 28.52C165.918 28.1867 165.865 27.82 165.865 27.42C165.865 27.0533 165.921 26.7067 166.035 26.38C166.155 26.0467 166.321 25.7567 166.535 25.51C166.755 25.2567 167.018 25.0567 167.325 24.91C167.631 24.7633 167.978 24.69 168.365 24.69C168.771 24.69 169.135 24.7767 169.455 24.95C169.781 25.1167 170.051 25.34 170.265 25.62C170.478 25.9 170.631 26.2233 170.725 26.59C170.825 26.95 170.851 27.3233 170.805 27.71H167.005ZM172.198 28.34C172.231 28.6733 172.358 28.9067 172.578 29.04C172.798 29.1733 173.061 29.24 173.368 29.24C173.475 29.24 173.595 29.2333 173.728 29.22C173.868 29.2 173.998 29.1667 174.118 29.12C174.238 29.0733 174.335 29.0067 174.408 28.92C174.488 28.8267 174.525 28.7067 174.518 28.56C174.511 28.4133 174.458 28.2933 174.358 28.2C174.258 28.1067 174.128 28.0333 173.968 27.98C173.815 27.92 173.638 27.87 173.438 27.83C173.238 27.79 173.035 27.7467 172.828 27.7C172.615 27.6533 172.408 27.5967 172.208 27.53C172.015 27.4633 171.838 27.3733 171.678 27.26C171.525 27.1467 171.401 27.0033 171.308 26.83C171.215 26.65 171.168 26.43 171.168 26.17C171.168 25.89 171.235 25.6567 171.368 25.47C171.508 25.2767 171.681 25.1233 171.888 25.01C172.101 24.89 172.335 24.8067 172.588 24.76C172.848 24.7133 173.095 24.69 173.328 24.69C173.595 24.69 173.848 24.72 174.088 24.78C174.335 24.8333 174.555 24.9233 174.748 25.05C174.948 25.1767 175.111 25.3433 175.238 25.55C175.371 25.75 175.455 25.9933 175.488 26.28H174.298C174.245 26.0067 174.118 25.8233 173.918 25.73C173.725 25.6367 173.501 25.59 173.248 25.59C173.168 25.59 173.071 25.5967 172.958 25.61C172.851 25.6233 172.748 25.65 172.648 25.69C172.555 25.7233 172.475 25.7767 172.408 25.85C172.341 25.9167 172.308 26.0067 172.308 26.12C172.308 26.26 172.355 26.3733 172.448 26.46C172.548 26.5467 172.675 26.62 172.828 26.68C172.988 26.7333 173.168 26.78 173.368 26.82C173.568 26.86 173.775 26.9033 173.988 26.95C174.195 26.9967 174.398 27.0533 174.598 27.12C174.798 27.1867 174.975 27.2767 175.128 27.39C175.288 27.5033 175.415 27.6467 175.508 27.82C175.608 27.9933 175.658 28.2067 175.658 28.46C175.658 28.7667 175.588 29.0267 175.448 29.24C175.308 29.4533 175.125 29.6267 174.898 29.76C174.678 29.8933 174.431 29.99 174.158 30.05C173.885 30.11 173.615 30.14 173.348 30.14C173.021 30.14 172.718 30.1033 172.438 30.03C172.165 29.9567 171.925 29.8467 171.718 29.7C171.518 29.5467 171.358 29.36 171.238 29.14C171.125 28.9133 171.065 28.6467 171.058 28.34H172.198ZM177.05 28.34C177.084 28.6733 177.21 28.9067 177.43 29.04C177.65 29.1733 177.914 29.24 178.22 29.24C178.327 29.24 178.447 29.2333 178.58 29.22C178.72 29.2 178.85 29.1667 178.97 29.12C179.09 29.0733 179.187 29.0067 179.26 28.92C179.34 28.8267 179.377 28.7067 179.37 28.56C179.364 28.4133 179.31 28.2933 179.21 28.2C179.11 28.1067 178.98 28.0333 178.82 27.98C178.667 27.92 178.49 27.87 178.29 27.83C178.09 27.79 177.887 27.7467 177.68 27.7C177.467 27.6533 177.26 27.5967 177.06 27.53C176.867 27.4633 176.69 27.3733 176.53 27.26C176.377 27.1467 176.254 27.0033 176.16 26.83C176.067 26.65 176.02 26.43 176.02 26.17C176.02 25.89 176.087 25.6567 176.22 25.47C176.36 25.2767 176.534 25.1233 176.74 25.01C176.954 24.89 177.187 24.8067 177.44 24.76C177.7 24.7133 177.947 24.69 178.18 24.69C178.447 24.69 178.7 24.72 178.94 24.78C179.187 24.8333 179.407 24.9233 179.6 25.05C179.8 25.1767 179.964 25.3433 180.09 25.55C180.224 25.75 180.307 25.9933 180.34 26.28H179.15C179.097 26.0067 178.97 25.8233 178.77 25.73C178.577 25.6367 178.354 25.59 178.1 25.59C178.02 25.59 177.924 25.5967 177.81 25.61C177.704 25.6233 177.6 25.65 177.5 25.69C177.407 25.7233 177.327 25.7767 177.26 25.85C177.194 25.9167 177.16 26.0067 177.16 26.12C177.16 26.26 177.207 26.3733 177.3 26.46C177.4 26.5467 177.527 26.62 177.68 26.68C177.84 26.7333 178.02 26.78 178.22 26.82C178.42 26.86 178.627 26.9033 178.84 26.95C179.047 26.9967 179.25 27.0533 179.45 27.12C179.65 27.1867 179.827 27.2767 179.98 27.39C180.14 27.5033 180.267 27.6467 180.36 27.82C180.46 27.9933 180.51 28.2067 180.51 28.46C180.51 28.7667 180.44 29.0267 180.3 29.24C180.16 29.4533 179.977 29.6267 179.75 29.76C179.53 29.8933 179.284 29.99 179.01 30.05C178.737 30.11 178.467 30.14 178.2 30.14C177.874 30.14 177.57 30.1033 177.29 30.03C177.017 29.9567 176.777 29.8467 176.57 29.7C176.37 29.5467 176.21 29.36 176.09 29.14C175.977 28.9133 175.917 28.6467 175.91 28.34H177.05Z\"\n    fill=\"#C4C4C4\" />\n  <circle id=\"7\" cx=\"225\" cy=\"6\" r=\"6\" fill=\"#C4C4C4\" />\n  <path id=\"8\"\n    d=\"M214.771 24.83H215.981L216.991 28.69H217.011L217.981 24.83H219.131L220.061 28.69H220.081L221.131 24.83H222.291L220.671 30H219.501L218.541 26.16H218.521L217.571 30H216.371L214.771 24.83ZM227.021 28.85C227.021 28.99 227.038 29.09 227.071 29.15C227.111 29.21 227.184 29.24 227.291 29.24C227.324 29.24 227.364 29.24 227.411 29.24C227.458 29.24 227.511 29.2333 227.571 29.22V30.01C227.531 30.0233 227.478 30.0367 227.411 30.05C227.351 30.07 227.288 30.0867 227.221 30.1C227.154 30.1133 227.088 30.1233 227.021 30.13C226.954 30.1367 226.898 30.14 226.851 30.14C226.618 30.14 226.424 30.0933 226.271 30C226.118 29.9067 226.018 29.7433 225.971 29.51C225.744 29.73 225.464 29.89 225.131 29.99C224.804 30.09 224.488 30.14 224.181 30.14C223.948 30.14 223.724 30.1067 223.511 30.04C223.298 29.98 223.108 29.89 222.941 29.77C222.781 29.6433 222.651 29.4867 222.551 29.3C222.458 29.1067 222.411 28.8833 222.411 28.63C222.411 28.31 222.468 28.05 222.581 27.85C222.701 27.65 222.854 27.4933 223.041 27.38C223.234 27.2667 223.448 27.1867 223.681 27.14C223.921 27.0867 224.161 27.0467 224.401 27.02C224.608 26.98 224.804 26.9533 224.991 26.94C225.178 26.92 225.341 26.89 225.481 26.85C225.628 26.81 225.741 26.75 225.821 26.67C225.908 26.5833 225.951 26.4567 225.951 26.29C225.951 26.1433 225.914 26.0233 225.841 25.93C225.774 25.8367 225.688 25.7667 225.581 25.72C225.481 25.6667 225.368 25.6333 225.241 25.62C225.114 25.6 224.994 25.59 224.881 25.59C224.561 25.59 224.298 25.6567 224.091 25.79C223.884 25.9233 223.768 26.13 223.741 26.41H222.601C222.621 26.0767 222.701 25.8 222.841 25.58C222.981 25.36 223.158 25.1833 223.371 25.05C223.591 24.9167 223.838 24.8233 224.111 24.77C224.384 24.7167 224.664 24.69 224.951 24.69C225.204 24.69 225.454 24.7167 225.701 24.77C225.948 24.8233 226.168 24.91 226.361 25.03C226.561 25.15 226.721 25.3067 226.841 25.5C226.961 25.6867 227.021 25.9167 227.021 26.19V28.85ZM225.881 27.41C225.708 27.5233 225.494 27.5933 225.241 27.62C224.988 27.64 224.734 27.6733 224.481 27.72C224.361 27.74 224.244 27.77 224.131 27.81C224.018 27.8433 223.918 27.8933 223.831 27.96C223.744 28.02 223.674 28.1033 223.621 28.21C223.574 28.31 223.551 28.4333 223.551 28.58C223.551 28.7067 223.588 28.8133 223.661 28.9C223.734 28.9867 223.821 29.0567 223.921 29.11C224.028 29.1567 224.141 29.19 224.261 29.21C224.388 29.23 224.501 29.24 224.601 29.24C224.728 29.24 224.864 29.2233 225.011 29.19C225.158 29.1567 225.294 29.1 225.421 29.02C225.554 28.94 225.664 28.84 225.751 28.72C225.838 28.5933 225.881 28.44 225.881 28.26V27.41ZM228.774 28.34C228.808 28.6733 228.934 28.9067 229.154 29.04C229.374 29.1733 229.638 29.24 229.944 29.24C230.051 29.24 230.171 29.2333 230.304 29.22C230.444 29.2 230.574 29.1667 230.694 29.12C230.814 29.0733 230.911 29.0067 230.984 28.92C231.064 28.8267 231.101 28.7067 231.094 28.56C231.088 28.4133 231.034 28.2933 230.934 28.2C230.834 28.1067 230.704 28.0333 230.544 27.98C230.391 27.92 230.214 27.87 230.014 27.83C229.814 27.79 229.611 27.7467 229.404 27.7C229.191 27.6533 228.984 27.5967 228.784 27.53C228.591 27.4633 228.414 27.3733 228.254 27.26C228.101 27.1467 227.978 27.0033 227.884 26.83C227.791 26.65 227.744 26.43 227.744 26.17C227.744 25.89 227.811 25.6567 227.944 25.47C228.084 25.2767 228.258 25.1233 228.464 25.01C228.678 24.89 228.911 24.8067 229.164 24.76C229.424 24.7133 229.671 24.69 229.904 24.69C230.171 24.69 230.424 24.72 230.664 24.78C230.911 24.8333 231.131 24.9233 231.324 25.05C231.524 25.1767 231.688 25.3433 231.814 25.55C231.948 25.75 232.031 25.9933 232.064 26.28H230.874C230.821 26.0067 230.694 25.8233 230.494 25.73C230.301 25.6367 230.078 25.59 229.824 25.59C229.744 25.59 229.648 25.5967 229.534 25.61C229.428 25.6233 229.324 25.65 229.224 25.69C229.131 25.7233 229.051 25.7767 228.984 25.85C228.918 25.9167 228.884 26.0067 228.884 26.12C228.884 26.26 228.931 26.3733 229.024 26.46C229.124 26.5467 229.251 26.62 229.404 26.68C229.564 26.7333 229.744 26.78 229.944 26.82C230.144 26.86 230.351 26.9033 230.564 26.95C230.771 26.9967 230.974 27.0533 231.174 27.12C231.374 27.1867 231.551 27.2767 231.704 27.39C231.864 27.5033 231.991 27.6467 232.084 27.82C232.184 27.9933 232.234 28.2067 232.234 28.46C232.234 28.7667 232.164 29.0267 232.024 29.24C231.884 29.4533 231.701 29.6267 231.474 29.76C231.254 29.8933 231.008 29.99 230.734 30.05C230.461 30.11 230.191 30.14 229.924 30.14C229.598 30.14 229.294 30.1033 229.014 30.03C228.741 29.9567 228.501 29.8467 228.294 29.7C228.094 29.5467 227.934 29.36 227.814 29.14C227.701 28.9133 227.641 28.6467 227.634 28.34H228.774ZM232.767 22.86H233.907V25.51H233.927C234.067 25.2767 234.273 25.0833 234.547 24.93C234.827 24.77 235.137 24.69 235.477 24.69C236.043 24.69 236.49 24.8367 236.817 25.13C237.143 25.4233 237.307 25.8633 237.307 26.45V30H236.167V26.75C236.153 26.3433 236.067 26.05 235.907 25.87C235.747 25.6833 235.497 25.59 235.157 25.59C234.963 25.59 234.79 25.6267 234.637 25.7C234.483 25.7667 234.353 25.8633 234.247 25.99C234.14 26.11 234.057 26.2533 233.997 26.42C233.937 26.5867 233.907 26.7633 233.907 26.95V30H232.767V22.86ZM208.29 38.56C208.243 38.24 208.113 38 207.9 37.84C207.693 37.6733 207.43 37.59 207.11 37.59C206.963 37.59 206.806 37.6167 206.64 37.67C206.473 37.7167 206.32 37.81 206.18 37.95C206.04 38.0833 205.923 38.2733 205.83 38.52C205.736 38.76 205.69 39.0767 205.69 39.47C205.69 39.6833 205.713 39.8967 205.76 40.11C205.813 40.3233 205.893 40.5133 206 40.68C206.113 40.8467 206.256 40.9833 206.43 41.09C206.603 41.19 206.813 41.24 207.06 41.24C207.393 41.24 207.666 41.1367 207.88 40.93C208.1 40.7233 208.236 40.4333 208.29 40.06H209.43C209.323 40.7333 209.066 41.25 208.66 41.61C208.26 41.9633 207.726 42.14 207.06 42.14C206.653 42.14 206.293 42.0733 205.98 41.94C205.673 41.8 205.413 41.6133 205.2 41.38C204.986 41.14 204.823 40.8567 204.71 40.53C204.603 40.2033 204.55 39.85 204.55 39.47C204.55 39.0833 204.603 38.72 204.71 38.38C204.816 38.04 204.976 37.7467 205.19 37.5C205.403 37.2467 205.666 37.05 205.98 36.91C206.3 36.7633 206.673 36.69 207.1 36.69C207.4 36.69 207.683 36.73 207.95 36.81C208.223 36.8833 208.463 36.9967 208.67 37.15C208.883 37.3033 209.056 37.4967 209.19 37.73C209.323 37.9633 209.403 38.24 209.43 38.56H208.29ZM212.393 42.14C211.98 42.14 211.61 42.0733 211.283 41.94C210.963 41.8 210.69 41.61 210.463 41.37C210.243 41.13 210.073 40.8433 209.953 40.51C209.84 40.1767 209.783 39.81 209.783 39.41C209.783 39.0167 209.84 38.6533 209.953 38.32C210.073 37.9867 210.243 37.7 210.463 37.46C210.69 37.22 210.963 37.0333 211.283 36.9C211.61 36.76 211.98 36.69 212.393 36.69C212.806 36.69 213.173 36.76 213.493 36.9C213.82 37.0333 214.093 37.22 214.313 37.46C214.54 37.7 214.71 37.9867 214.823 38.32C214.943 38.6533 215.003 39.0167 215.003 39.41C215.003 39.81 214.943 40.1767 214.823 40.51C214.71 40.8433 214.54 41.13 214.313 41.37C214.093 41.61 213.82 41.8 213.493 41.94C213.173 42.0733 212.806 42.14 212.393 42.14ZM212.393 41.24C212.646 41.24 212.866 41.1867 213.053 41.08C213.24 40.9733 213.393 40.8333 213.513 40.66C213.633 40.4867 213.72 40.2933 213.773 40.08C213.833 39.86 213.863 39.6367 213.863 39.41C213.863 39.19 213.833 38.97 213.773 38.75C213.72 38.53 213.633 38.3367 213.513 38.17C213.393 37.9967 213.24 37.8567 213.053 37.75C212.866 37.6433 212.646 37.59 212.393 37.59C212.14 37.59 211.92 37.6433 211.733 37.75C211.546 37.8567 211.393 37.9967 211.273 38.17C211.153 38.3367 211.063 38.53 211.003 38.75C210.95 38.97 210.923 39.19 210.923 39.41C210.923 39.6367 210.95 39.86 211.003 40.08C211.063 40.2933 211.153 40.4867 211.273 40.66C211.393 40.8333 211.546 40.9733 211.733 41.08C211.92 41.1867 212.14 41.24 212.393 41.24ZM215.617 36.83H216.697V37.55H216.727C216.814 37.4233 216.907 37.3067 217.007 37.2C217.107 37.0933 217.217 37.0033 217.337 36.93C217.464 36.8567 217.607 36.8 217.767 36.76C217.927 36.7133 218.111 36.69 218.317 36.69C218.631 36.69 218.921 36.76 219.187 36.9C219.461 37.04 219.654 37.2567 219.767 37.55C219.961 37.2833 220.184 37.0733 220.437 36.92C220.691 36.7667 221.007 36.69 221.387 36.69C221.934 36.69 222.357 36.8233 222.657 37.09C222.964 37.3567 223.117 37.8033 223.117 38.43V42H221.977V38.98C221.977 38.7733 221.971 38.5867 221.957 38.42C221.944 38.2467 221.904 38.1 221.837 37.98C221.777 37.8533 221.684 37.7567 221.557 37.69C221.431 37.6233 221.257 37.59 221.037 37.59C220.651 37.59 220.371 37.71 220.197 37.95C220.024 38.19 219.937 38.53 219.937 38.97V42H218.797V38.68C218.797 38.32 218.731 38.05 218.597 37.87C218.471 37.6833 218.234 37.59 217.887 37.59C217.741 37.59 217.597 37.62 217.457 37.68C217.324 37.74 217.204 37.8267 217.097 37.94C216.997 38.0533 216.914 38.1933 216.847 38.36C216.787 38.5267 216.757 38.7167 216.757 38.93V42H215.617V36.83ZM224.015 36.83H225.095V37.53H225.115C225.275 37.23 225.498 37.0167 225.785 36.89C226.072 36.7567 226.382 36.69 226.715 36.69C227.122 36.69 227.475 36.7633 227.775 36.91C228.082 37.05 228.335 37.2467 228.535 37.5C228.735 37.7467 228.885 38.0367 228.985 38.37C229.085 38.7033 229.135 39.06 229.135 39.44C229.135 39.7867 229.088 40.1233 228.995 40.45C228.908 40.7767 228.772 41.0667 228.585 41.32C228.405 41.5667 228.175 41.7667 227.895 41.92C227.615 42.0667 227.285 42.14 226.905 42.14C226.738 42.14 226.572 42.1233 226.405 42.09C226.238 42.0633 226.078 42.0167 225.925 41.95C225.772 41.8833 225.628 41.8 225.495 41.7C225.368 41.5933 225.262 41.47 225.175 41.33H225.155V43.91H224.015V36.83ZM227.995 39.42C227.995 39.1867 227.965 38.96 227.905 38.74C227.845 38.52 227.755 38.3267 227.635 38.16C227.515 37.9867 227.365 37.85 227.185 37.75C227.005 37.6433 226.798 37.59 226.565 37.59C226.085 37.59 225.722 37.7567 225.475 38.09C225.235 38.4233 225.115 38.8667 225.115 39.42C225.115 39.68 225.145 39.9233 225.205 40.15C225.272 40.37 225.368 40.56 225.495 40.72C225.622 40.88 225.772 41.0067 225.945 41.1C226.125 41.1933 226.332 41.24 226.565 41.24C226.825 41.24 227.045 41.1867 227.225 41.08C227.405 40.9733 227.552 40.8367 227.665 40.67C227.785 40.4967 227.868 40.3033 227.915 40.09C227.968 39.87 227.995 39.6467 227.995 39.42ZM229.795 34.86H230.935V42H229.795V34.86ZM235.394 38.96C235.38 38.78 235.34 38.6067 235.274 38.44C235.214 38.2733 235.127 38.13 235.014 38.01C234.907 37.8833 234.774 37.7833 234.614 37.71C234.46 37.63 234.287 37.59 234.094 37.59C233.894 37.59 233.71 37.6267 233.544 37.7C233.384 37.7667 233.244 37.8633 233.124 37.99C233.01 38.11 232.917 38.2533 232.844 38.42C232.777 38.5867 232.74 38.7667 232.734 38.96H235.394ZM232.734 39.71C232.734 39.91 232.76 40.1033 232.814 40.29C232.874 40.4767 232.96 40.64 233.074 40.78C233.187 40.92 233.33 41.0333 233.504 41.12C233.677 41.2 233.884 41.24 234.124 41.24C234.457 41.24 234.724 41.17 234.924 41.03C235.13 40.8833 235.284 40.6667 235.384 40.38H236.464C236.404 40.66 236.3 40.91 236.154 41.13C236.007 41.35 235.83 41.5367 235.624 41.69C235.417 41.8367 235.184 41.9467 234.924 42.02C234.67 42.1 234.404 42.14 234.124 42.14C233.717 42.14 233.357 42.0733 233.044 41.94C232.73 41.8067 232.464 41.62 232.244 41.38C232.03 41.14 231.867 40.8533 231.754 40.52C231.647 40.1867 231.594 39.82 231.594 39.42C231.594 39.0533 231.65 38.7067 231.764 38.38C231.884 38.0467 232.05 37.7567 232.264 37.51C232.484 37.2567 232.747 37.0567 233.054 36.91C233.36 36.7633 233.707 36.69 234.094 36.69C234.5 36.69 234.864 36.7767 235.184 36.95C235.51 37.1167 235.78 37.34 235.994 37.62C236.207 37.9 236.36 38.2233 236.454 38.59C236.554 38.95 236.58 39.3233 236.534 39.71H232.734ZM236.547 36.83H237.407V35.28H238.547V36.83H239.577V37.68H238.547V40.44C238.547 40.56 238.55 40.6633 238.557 40.75C238.57 40.8367 238.594 40.91 238.627 40.97C238.667 41.03 238.724 41.0767 238.797 41.11C238.87 41.1367 238.97 41.15 239.097 41.15C239.177 41.15 239.257 41.15 239.337 41.15C239.417 41.1433 239.497 41.13 239.577 41.11V41.99C239.45 42.0033 239.327 42.0167 239.207 42.03C239.087 42.0433 238.964 42.05 238.837 42.05C238.537 42.05 238.294 42.0233 238.107 41.97C237.927 41.91 237.784 41.8267 237.677 41.72C237.577 41.6067 237.507 41.4667 237.467 41.3C237.434 41.1333 237.414 40.9433 237.407 40.73V37.68H236.547V36.83ZM243.614 38.96C243.601 38.78 243.561 38.6067 243.494 38.44C243.434 38.2733 243.347 38.13 243.234 38.01C243.127 37.8833 242.994 37.7833 242.834 37.71C242.681 37.63 242.507 37.59 242.314 37.59C242.114 37.59 241.931 37.6267 241.764 37.7C241.604 37.7667 241.464 37.8633 241.344 37.99C241.231 38.11 241.137 38.2533 241.064 38.42C240.997 38.5867 240.961 38.7667 240.954 38.96H243.614ZM240.954 39.71C240.954 39.91 240.981 40.1033 241.034 40.29C241.094 40.4767 241.181 40.64 241.294 40.78C241.407 40.92 241.551 41.0333 241.724 41.12C241.897 41.2 242.104 41.24 242.344 41.24C242.677 41.24 242.944 41.17 243.144 41.03C243.351 40.8833 243.504 40.6667 243.604 40.38H244.684C244.624 40.66 244.521 40.91 244.374 41.13C244.227 41.35 244.051 41.5367 243.844 41.69C243.637 41.8367 243.404 41.9467 243.144 42.02C242.891 42.1 242.624 42.14 242.344 42.14C241.937 42.14 241.577 42.0733 241.264 41.94C240.951 41.8067 240.684 41.62 240.464 41.38C240.251 41.14 240.087 40.8533 239.974 40.52C239.867 40.1867 239.814 39.82 239.814 39.42C239.814 39.0533 239.871 38.7067 239.984 38.38C240.104 38.0467 240.271 37.7567 240.484 37.51C240.704 37.2567 240.967 37.0567 241.274 36.91C241.581 36.7633 241.927 36.69 242.314 36.69C242.721 36.69 243.084 36.7767 243.404 36.95C243.731 37.1167 244.001 37.34 244.214 37.62C244.427 37.9 244.581 38.2233 244.674 38.59C244.774 38.95 244.801 39.3233 244.754 39.71H240.954ZM250.157 42H249.077V41.3H249.057C248.904 41.6 248.681 41.8167 248.387 41.95C248.094 42.0767 247.784 42.14 247.457 42.14C247.051 42.14 246.694 42.07 246.387 41.93C246.087 41.7833 245.837 41.5867 245.637 41.34C245.437 41.0933 245.287 40.8033 245.187 40.47C245.087 40.13 245.037 39.7667 245.037 39.38C245.037 38.9133 245.101 38.51 245.227 38.17C245.354 37.83 245.521 37.55 245.727 37.33C245.941 37.11 246.181 36.95 246.447 36.85C246.721 36.7433 246.997 36.69 247.277 36.69C247.437 36.69 247.601 36.7067 247.767 36.74C247.934 36.7667 248.094 36.8133 248.247 36.88C248.401 36.9467 248.541 37.0333 248.667 37.14C248.801 37.24 248.911 37.36 248.997 37.5H249.017V34.86H250.157V42ZM246.177 39.47C246.177 39.69 246.204 39.9067 246.257 40.12C246.317 40.3333 246.404 40.5233 246.517 40.69C246.637 40.8567 246.787 40.99 246.967 41.09C247.147 41.19 247.361 41.24 247.607 41.24C247.861 41.24 248.077 41.1867 248.257 41.08C248.444 40.9733 248.594 40.8333 248.707 40.66C248.827 40.4867 248.914 40.2933 248.967 40.08C249.027 39.86 249.057 39.6367 249.057 39.41C249.057 38.8367 248.927 38.39 248.667 38.07C248.414 37.75 248.067 37.59 247.627 37.59C247.361 37.59 247.134 37.6467 246.947 37.76C246.767 37.8667 246.617 38.01 246.497 38.19C246.384 38.3633 246.301 38.5633 246.247 38.79C246.201 39.01 246.177 39.2367 246.177 39.47Z\"\n    fill=\"#C4C4C4\" />\n  <circle id=\"9\" cx=\"294\" cy=\"6\" r=\"6\" fill=\"#C4C4C4\" />\n  <path id=\"10\"\n    d=\"M273.919 22.86H276.879C277.425 22.86 277.899 22.9533 278.299 23.14C278.699 23.3267 279.025 23.5833 279.279 23.91C279.532 24.23 279.719 24.6067 279.839 25.04C279.965 25.4733 280.029 25.9367 280.029 26.43C280.029 26.9233 279.965 27.3867 279.839 27.82C279.719 28.2533 279.532 28.6333 279.279 28.96C279.025 29.28 278.699 29.5333 278.299 29.72C277.899 29.9067 277.425 30 276.879 30H273.919V22.86ZM275.169 28.98H276.399C276.885 28.98 277.282 28.9167 277.589 28.79C277.902 28.6567 278.145 28.4767 278.319 28.25C278.499 28.0167 278.619 27.7467 278.679 27.44C278.745 27.1267 278.779 26.79 278.779 26.43C278.779 26.07 278.745 25.7367 278.679 25.43C278.619 25.1167 278.499 24.8467 278.319 24.62C278.145 24.3867 277.902 24.2067 277.589 24.08C277.282 23.9467 276.885 23.88 276.399 23.88H275.169V28.98ZM284.192 26.96C284.179 26.78 284.139 26.6067 284.072 26.44C284.012 26.2733 283.925 26.13 283.812 26.01C283.705 25.8833 283.572 25.7833 283.412 25.71C283.259 25.63 283.085 25.59 282.892 25.59C282.692 25.59 282.509 25.6267 282.342 25.7C282.182 25.7667 282.042 25.8633 281.922 25.99C281.809 26.11 281.715 26.2533 281.642 26.42C281.575 26.5867 281.539 26.7667 281.532 26.96H284.192ZM281.532 27.71C281.532 27.91 281.559 28.1033 281.612 28.29C281.672 28.4767 281.759 28.64 281.872 28.78C281.985 28.92 282.129 29.0333 282.302 29.12C282.475 29.2 282.682 29.24 282.922 29.24C283.255 29.24 283.522 29.17 283.722 29.03C283.929 28.8833 284.082 28.6667 284.182 28.38H285.262C285.202 28.66 285.099 28.91 284.952 29.13C284.805 29.35 284.629 29.5367 284.422 29.69C284.215 29.8367 283.982 29.9467 283.722 30.02C283.469 30.1 283.202 30.14 282.922 30.14C282.515 30.14 282.155 30.0733 281.842 29.94C281.529 29.8067 281.262 29.62 281.042 29.38C280.829 29.14 280.665 28.8533 280.552 28.52C280.445 28.1867 280.392 27.82 280.392 27.42C280.392 27.0533 280.449 26.7067 280.562 26.38C280.682 26.0467 280.849 25.7567 281.062 25.51C281.282 25.2567 281.545 25.0567 281.852 24.91C282.159 24.7633 282.505 24.69 282.892 24.69C283.299 24.69 283.662 24.7767 283.982 24.95C284.309 25.1167 284.579 25.34 284.792 25.62C285.005 25.9 285.159 26.2233 285.252 26.59C285.352 26.95 285.379 27.3233 285.332 27.71H281.532ZM285.895 22.86H287.035V30H285.895V22.86ZM287.974 22.86H289.114V23.94H287.974V22.86ZM287.974 24.83H289.114V30H287.974V24.83ZM289.513 24.83H290.753L292.063 28.8H292.083L293.343 24.83H294.523L292.673 30H291.393L289.513 24.83ZM298.425 26.96C298.412 26.78 298.372 26.6067 298.305 26.44C298.245 26.2733 298.158 26.13 298.045 26.01C297.938 25.8833 297.805 25.7833 297.645 25.71C297.492 25.63 297.318 25.59 297.125 25.59C296.925 25.59 296.742 25.6267 296.575 25.7C296.415 25.7667 296.275 25.8633 296.155 25.99C296.042 26.11 295.948 26.2533 295.875 26.42C295.808 26.5867 295.772 26.7667 295.765 26.96H298.425ZM295.765 27.71C295.765 27.91 295.792 28.1033 295.845 28.29C295.905 28.4767 295.992 28.64 296.105 28.78C296.218 28.92 296.362 29.0333 296.535 29.12C296.708 29.2 296.915 29.24 297.155 29.24C297.488 29.24 297.755 29.17 297.955 29.03C298.162 28.8833 298.315 28.6667 298.415 28.38H299.495C299.435 28.66 299.332 28.91 299.185 29.13C299.038 29.35 298.862 29.5367 298.655 29.69C298.448 29.8367 298.215 29.9467 297.955 30.02C297.702 30.1 297.435 30.14 297.155 30.14C296.748 30.14 296.388 30.0733 296.075 29.94C295.762 29.8067 295.495 29.62 295.275 29.38C295.062 29.14 294.898 28.8533 294.785 28.52C294.678 28.1867 294.625 27.82 294.625 27.42C294.625 27.0533 294.682 26.7067 294.795 26.38C294.915 26.0467 295.082 25.7567 295.295 25.51C295.515 25.2567 295.778 25.0567 296.085 24.91C296.392 24.7633 296.738 24.69 297.125 24.69C297.532 24.69 297.895 24.7767 298.215 24.95C298.542 25.1167 298.812 25.34 299.025 25.62C299.238 25.9 299.392 26.2233 299.485 26.59C299.585 26.95 299.612 27.3233 299.565 27.71H295.765ZM300.098 24.83H301.168V25.83H301.188C301.222 25.69 301.285 25.5533 301.378 25.42C301.478 25.2867 301.595 25.1667 301.728 25.06C301.868 24.9467 302.022 24.8567 302.188 24.79C302.355 24.7233 302.525 24.69 302.698 24.69C302.832 24.69 302.922 24.6933 302.968 24.7C303.022 24.7067 303.075 24.7133 303.128 24.72V25.82C303.048 25.8067 302.965 25.7967 302.878 25.79C302.798 25.7767 302.718 25.77 302.638 25.77C302.445 25.77 302.262 25.81 302.088 25.89C301.922 25.9633 301.775 26.0767 301.648 26.23C301.522 26.3767 301.422 26.56 301.348 26.78C301.275 27 301.238 27.2533 301.238 27.54V30H300.098V24.83ZM306.655 26.96C306.642 26.78 306.602 26.6067 306.535 26.44C306.475 26.2733 306.388 26.13 306.275 26.01C306.168 25.8833 306.035 25.7833 305.875 25.71C305.722 25.63 305.548 25.59 305.355 25.59C305.155 25.59 304.972 25.6267 304.805 25.7C304.645 25.7667 304.505 25.8633 304.385 25.99C304.272 26.11 304.178 26.2533 304.105 26.42C304.038 26.5867 304.002 26.7667 303.995 26.96H306.655ZM303.995 27.71C303.995 27.91 304.022 28.1033 304.075 28.29C304.135 28.4767 304.222 28.64 304.335 28.78C304.448 28.92 304.592 29.0333 304.765 29.12C304.938 29.2 305.145 29.24 305.385 29.24C305.718 29.24 305.985 29.17 306.185 29.03C306.392 28.8833 306.545 28.6667 306.645 28.38H307.725C307.665 28.66 307.562 28.91 307.415 29.13C307.268 29.35 307.092 29.5367 306.885 29.69C306.678 29.8367 306.445 29.9467 306.185 30.02C305.932 30.1 305.665 30.14 305.385 30.14C304.978 30.14 304.618 30.0733 304.305 29.94C303.992 29.8067 303.725 29.62 303.505 29.38C303.292 29.14 303.128 28.8533 303.015 28.52C302.908 28.1867 302.855 27.82 302.855 27.42C302.855 27.0533 302.912 26.7067 303.025 26.38C303.145 26.0467 303.312 25.7567 303.525 25.51C303.745 25.2567 304.008 25.0567 304.315 24.91C304.622 24.7633 304.968 24.69 305.355 24.69C305.762 24.69 306.125 24.7767 306.445 24.95C306.772 25.1167 307.042 25.34 307.255 25.62C307.468 25.9 307.622 26.2233 307.715 26.59C307.815 26.95 307.842 27.3233 307.795 27.71H303.995ZM313.198 30H312.118V29.3H312.098C311.945 29.6 311.722 29.8167 311.428 29.95C311.135 30.0767 310.825 30.14 310.498 30.14C310.092 30.14 309.735 30.07 309.428 29.93C309.128 29.7833 308.878 29.5867 308.678 29.34C308.478 29.0933 308.328 28.8033 308.228 28.47C308.128 28.13 308.078 27.7667 308.078 27.38C308.078 26.9133 308.142 26.51 308.268 26.17C308.395 25.83 308.562 25.55 308.768 25.33C308.982 25.11 309.222 24.95 309.488 24.85C309.762 24.7433 310.038 24.69 310.318 24.69C310.478 24.69 310.642 24.7067 310.808 24.74C310.975 24.7667 311.135 24.8133 311.288 24.88C311.442 24.9467 311.582 25.0333 311.708 25.14C311.842 25.24 311.952 25.36 312.038 25.5H312.058V22.86H313.198V30ZM309.218 27.47C309.218 27.69 309.245 27.9067 309.298 28.12C309.358 28.3333 309.445 28.5233 309.558 28.69C309.678 28.8567 309.828 28.99 310.008 29.09C310.188 29.19 310.402 29.24 310.648 29.24C310.902 29.24 311.118 29.1867 311.298 29.08C311.485 28.9733 311.635 28.8333 311.748 28.66C311.868 28.4867 311.955 28.2933 312.008 28.08C312.068 27.86 312.098 27.6367 312.098 27.41C312.098 26.8367 311.968 26.39 311.708 26.07C311.455 25.75 311.108 25.59 310.668 25.59C310.402 25.59 310.175 25.6467 309.988 25.76C309.808 25.8667 309.658 26.01 309.538 26.19C309.425 26.3633 309.342 26.5633 309.288 26.79C309.242 27.01 309.218 27.2367 309.218 27.47Z\"\n    fill=\"#C4C4C4\" />\n</svg>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/profileheader/profileheader.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/profileheader/profileheader.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonComponentsProfileheaderProfileheaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\" style=\"display: grid;height:12em\" text-center><img class=\"profile-box\"\n          src=\"../../../assets/imgs/profile.png\" alt=\"\"></ion-col>\n      <ion-col size=\"8\" class=\"dispay-grid\">\n        <div class=\"header-content\" *ngIf=\"user\">\n          <!-- <h3>{{user.name}}</h3> -->\n          <h3>{{user.name}}</h3>\n\n          <p>+91 {{user.mobile}}</p>\n          <p>{{user.email}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-card class=\"wallet-card ion-no-margin-top no-shadow\" routerLink=\"/tabs/wallet\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\">\n          <h4 class=\"primary-color ion-no-margin-top\">Total Earned coins <span style=\"float: right;\">{{totalWalletBalance}}</span>\n          </h4>\n\n          <h6 class=\"thin-font color-gray ion-no-margin\">*You can use coins at the time of payment</h6>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n  </ion-grid>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _common_service_auth_gaurd_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./common/service/auth-gaurd/auth-gaurd.service */
    "./src/app/common/service/auth-gaurd/auth-gaurd.service.ts");

    var routes = [{
      canActivate: [_common_service_auth_gaurd_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_3__["AuthGaurdService"]],
      path: 'tabs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      // canActivate: [AuthGaurdService],
      path: 'userdetails',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registration-userdetails-userdetails-module */
        "registration-userdetails-userdetails-module").then(__webpack_require__.bind(null,
        /*! ./registration/userdetails/userdetails.module */
        "./src/app/registration/userdetails/userdetails.module.ts")).then(function (m) {
          return m.UserdetailsPageModule;
        });
      }
    }, // {
    //   canActivate: [AuthGaurdService],
    //   path: 'orderlist',
    //   loadChildren: () => import('./store/orderlist/orderlist.module').then(m => m.OrderlistPageModule)
    // },
    {
      path: '',
      // canActivate: [RoleGaurdService],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      }
    }, {
      path: 'onboarding',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registration-onboarding-onboarding-module */
        "registration-onboarding-onboarding-module").then(__webpack_require__.bind(null,
        /*! ./registration/onboarding/onboarding.module */
        "./src/app/registration/onboarding/onboarding.module.ts")).then(function (m) {
          return m.OnboardingPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | registration-login-login-module */
        [__webpack_require__.e("default~registration-login-login-module~tab3-tab3-module"), __webpack_require__.e("registration-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./registration/login/login.module */
        "./src/app/registration/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'otp',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | registration-otp-otp-module */
        "registration-otp-otp-module").then(__webpack_require__.bind(null,
        /*! ./registration/otp/otp.module */
        "./src/app/registration/otp/otp.module.ts")).then(function (m) {
          return m.OtpPageModule;
        });
      }
    }, {
      // canActivate: [AuthGaurdService],
      path: 'storelist',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | store-orderlist-orderlist-module */
        [__webpack_require__.e("common"), __webpack_require__.e("store-orderlist-orderlist-module")]).then(__webpack_require__.bind(null,
        /*! ./store/orderlist/orderlist.module */
        "./src/app/store/orderlist/orderlist.module.ts")).then(function (m) {
          return m.OrderlistPageModule;
        });
      }
    }, {
      path: 'storeorderdetail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | store-orderdetail-orderdetail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("store-orderdetail-orderdetail-module")]).then(__webpack_require__.bind(null,
        /*! ./store/orderdetail/orderdetail.module */
        "./src/app/store/orderdetail/orderdetail.module.ts")).then(function (m) {
          return m.OrderdetailPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, screenOrientation) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.initializeApp();
        console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]);
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);

            _this.platform.backButton.subscribeWithPriority(9999, function () {
              document.addEventListener('backbutton', function (event) {
                event.preventDefault();
                event.stopPropagation();
                console.log('hello');
              }, false);
            });

            _this.statusBar.backgroundColorByHexString('#ffffff');

            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__["ScreenOrientation"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./common/components/customcomponent.module */
    "./src/app/common/components/customcomponent.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./common/service/pipe/pipes.module */
    "./src/app/common/service/pipe/pipes.module.ts");
    /* harmony import */


    var _common_apilayer_error_handling_errorinterceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./common/apilayer/error-handling/errorinterceptor.service */
    "./src/app/common/apilayer/error-handling/errorinterceptor.service.ts");
    /* harmony import */


    var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/screen-orientation/ngx */
    "./node_modules/@ionic-native/screen-orientation/__ivy_ngcc__/ngx/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _common_components_customcomponent_module__WEBPACK_IMPORTED_MODULE_9__["CustomComponentModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _common_service_pipe_pipes_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_15__["ScreenOrientation"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _common_apilayer_error_handling_errorinterceptor_service__WEBPACK_IMPORTED_MODULE_14__["ErrorinterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/apilayer/APIs/userapi.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/common/apilayer/APIs/userapi.service.ts ***!
    \*********************************************************/

  /*! exports provided: UserapiService */

  /***/
  function srcAppCommonApilayerAPIsUserapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserapiService", function () {
      return UserapiService;
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


    var _http_header_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../http-header/http.service */
    "./src/app/common/apilayer/http-header/http.service.ts");
    /* harmony import */


    var _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");

    var UserapiService = /*#__PURE__*/function () {
      function UserapiService(httpService, localStorage) {
        _classCallCheck(this, UserapiService);

        this.httpService = httpService;
        this.localStorage = localStorage;
      }

      _createClass(UserapiService, [{
        key: "getUserIdFromStorage",
        value: function getUserIdFromStorage() {
          var _this2 = this;

          return this.localStorage.getStoredKey('user').then(function (user) {
            // console.log(user);
            _this2.userId = user.id;
          });
        }
        /*** For User Signup
        *@param{"mobile": "string"}*/

      }, {
        key: "userSignup",
        value: function userSignup(user) {
          return this.httpService.post('mobile/signup', user);
        }
        /*** For User Login
        *@param{"mobile": "string","otp": 0}*/

      }, {
        key: "userLogin",
        value: function userLogin(user) {
          return this.httpService.post('mobile/login', user);
        }
        /**
        * Fetch loggedin user data
        *@param{}
        */

      }, {
        key: "getUserData",
        value: function getUserData() {
          return this.httpService.get('users/me');
        }
      }, {
        key: "getUserDataById",
        value: function getUserDataById(id) {
          return this.httpService.get('users/' + id);
        }
      }, {
        key: "createUserData",
        value: function createUserData(user) {
          return this.httpService.post('mobile/createUser', user);
        }
      }, {
        key: "resendOTP",
        value: function resendOTP(user) {
          return this.httpService.post('resendOtp', user);
        }
      }, {
        key: "userLogout",
        value: function userLogout() {
          return this.httpService.get('/logout');
        }
      }, {
        key: "getUserWallet",
        value: function getUserWallet() {
          return this.httpService.get('users/' + this.userId + '/wallets');
        }
      }, {
        key: "getWalletHistory",
        value: function getWalletHistory() {
          return this.httpService.get('users/' + this.userId + '/wallet-histories');
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.httpService.patch('users/' + user.id, user);
        }
      }, {
        key: "addRechargeCoupon",
        value: function addRechargeCoupon(couponCode) {
          return this.httpService.post('/recharge-wallets', couponCode);
        }
      }]);

      return UserapiService;
    }();

    UserapiService.ctorParameters = function () {
      return [{
        type: _http_header_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
      }, {
        type: _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStroageService"]
      }];
    };

    UserapiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_http_header_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStroageService"]])], UserapiService);
    /***/
  },

  /***/
  "./src/app/common/apilayer/error-handling/errorinterceptor.service.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/common/apilayer/error-handling/errorinterceptor.service.ts ***!
    \****************************************************************************/

  /*! exports provided: ErrorinterceptorService */

  /***/
  function srcAppCommonApilayerErrorHandlingErrorinterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorinterceptorService", function () {
      return ErrorinterceptorService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/toast/toast.service */
    "./src/app/common/service/toast/toast.service.ts");
    /* harmony import */


    var _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /** key to fetch stored token fron local storage */


    var TOKEN_KEY = "authToken";

    var ErrorinterceptorService = /*#__PURE__*/function () {
      function ErrorinterceptorService(localStorage, toast, router) {
        _classCallCheck(this, ErrorinterceptorService);

        this.localStorage = localStorage;
        this.toast = toast;
        this.router = router;
      }

      _createClass(ErrorinterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.localStorage.getStoredKey(TOKEN_KEY)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (token) {
            /** if  Auth token exists adds it to the header */
            if (token) {
              request = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + token)
              });
            } //Check network connection, other wise throw offline exception


            if (navigator.onLine) {
              return next.handle(request)
              /**error interceptor */
              .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                /**bad request error */
                if (err.error.error.statusCode === 400) _this3.toast.toastFail('Something went wrong !!');
                /**Internal server erroe */

                if (err.error.error.statusCode === 500) _this3.toast.toastFail('Something went wrong. Please contact support !');
                if (err.error.error.statusCode === 406) _this3.toast.toastFail(err.error.error.message);
                /**Internal server erroe */

                if (err.error.error.statusCode === 401) {
                  _this3.toast.toastFail('Please login to continue');

                  _this3.router.navigateByUrl('/login');
                } else // this.toast.toastFail(err.error.error.message)
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.error.error);
              }));
            } else _this3.toast.toastFail("You are OFFLINE. Please check your network connection!");

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("You are OFFLINE. Please check your network connection!");
          }));
        }
      }]);

      return ErrorinterceptorService;
    }();

    ErrorinterceptorService.ctorParameters = function () {
      return [{
        type: _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"]
      }, {
        type: _service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ErrorinterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStroageService"], _service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], ErrorinterceptorService); // @Injectable({
    //   providedIn: 'root'
    // })
    // export class ErrorinterceptorService {
    //   constructor(private toast: ToastService) { }
    //   /**
    //     * @example
    //     * intercept(request,next)
    //     * @param request  HttpRequest
    //     * @param next HttpHandler
    //     *@returns {void}
    //     */
    //   // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   //   //Check network connection, other wise throw offline exception
    //   //   if (navigator.onLine) {
    //   //     return next.handle(request)
    //   //       /**error interceptor */
    //   //       .pipe(catchError(err => {
    //   //         /**bad request error */
    //   //         if (err.error.status === 400)
    //   //           this.toast.toastFail('Something went wrong !!')
    //   //         /**Internal server erroe */
    //   //         if (err.error.status === 500)
    //   //           this.toast.toastFail('Something went wrong. Please contact support !')
    //   //         else
    //   //           this.toast.toastFail(err.error.message)
    //   //         return throwError(err.error)
    //   //       }))
    //   //   }
    //   //   else
    //   //     this.toast.toastFail("You are OFFLINE. Please check your network connection!")
    //   //   return throwError("You are OFFLINE. Please check your network connection!");
    //   // }
    // }

    /***/
  },

  /***/
  "./src/app/common/apilayer/http-header/http.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/common/apilayer/http-header/http.service.ts ***!
    \*************************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppCommonApilayerHttpHeaderHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");

    var HttpService = /*#__PURE__*/function () {
      /**
       *@ignore
       */
      function HttpService(_http, localStorage) {
        _classCallCheck(this, HttpService);

        this._http = _http;
        this.localStorage = localStorage;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': ''
          })
        };
      }
      /**
       * HTTP get service
       * @param {string} url api url to get data
       * @param {boolean} status True | false (Use loader or not)
       * @returns HTTP response
       */


      _createClass(HttpService, [{
        key: "get",
        value: function get(url) {
          return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + url, this.httpOptions); // return this._http.get<any>(environment.apiBaseUrl+ url);
        }
        /**
         * HTTP post service
         * @param {string} url api url to get data
         * @param {object} model data to be stored in DB
         * @param {boolean} status True | false (Use loader or not)
         * @returns HTTP response
         */

      }, {
        key: "post",
        value: function post(url, model) {
          return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + url, model, this.httpOptions);
        }
        /**
         * HTTP put service
         * @param {string} url api url to get data
         * @param {object} model data to be stored in DB
         * @returns HTTP response
         */

      }, {
        key: "put",
        value: function put(url, model) {
          return this._http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + url, model, this.httpOptions);
        }
        /**
         * HTTP put service
         * @param {string} url api url to get data
         * @param {object} model data to be stored in DB
         * @returns HTTP response
         */

      }, {
        key: "patch",
        value: function patch(url, model) {
          return this._http.patch(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + url, model, this.httpOptions);
        }
        /**
         * HTTP delete service
         * @param {string} url api url to get data
         * @returns HTTP response
         */

      }, {
        key: "delete",
        value: function _delete(url) {
          return this._http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + url);
        }
      }]);

      return HttpService;
    }();

    HttpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStroageService"]
      }];
    };

    HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStroageService"]])], HttpService);
    /***/
  },

  /***/
  "./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonComponentsCountdowntimerCountdowntimerCountdowntimerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  font-size: 2.2em;\n  margin: 10px 0 0 0;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvY291bnRkb3dudGltZXIvY291bnRkb3dudGltZXIvRDpcXFByb2plY3RzXFxsYXVuZHJ5XFxhcHAvc3JjXFxhcHBcXGNvbW1vblxcY29tcG9uZW50c1xcY291bnRkb3dudGltZXJcXGNvdW50ZG93bnRpbWVyXFxjb3VudGRvd250aW1lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvY291bnRkb3dudGltZXIvY291bnRkb3dudGltZXIvY291bnRkb3dudGltZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvY291bnRkb3dudGltZXIvY291bnRkb3dudGltZXIvY291bnRkb3dudGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH0iLCJoMSB7XG4gIGZvbnQtc2l6ZTogMi4yZW07XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CountdowntimerComponent */

  /***/
  function srcAppCommonComponentsCountdowntimerCountdowntimerCountdowntimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountdowntimerComponent", function () {
      return CountdowntimerComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    var CountdowntimerComponent = /*#__PURE__*/function () {
      function CountdowntimerComponent() {
        _classCallCheck(this, CountdowntimerComponent);

        this.valueTime = '00:30:00';
        this.hours = '00';
        this.mins = '00';
        this.secs = '00';
      }

      _createClass(CountdowntimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var time = new Date(this.data.startTime).getTime(); // let date1 = new Date(time + 30 * 60000).getTime()

          var date1 = moment__WEBPACK_IMPORTED_MODULE_3__(time).add(30, 'minutes').valueOf(); // console.log(moment(time).valueOf(),moment(time).add(30, 'minutes').valueOf());

          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000, 1000).subscribe(function () {
            var date2 = moment__WEBPACK_IMPORTED_MODULE_3__().valueOf(); // let date2: any = new Date().getTime()

            var res = (date1 - date2) / 1000; // console.log(res, date1, date2);
            // get hours        
            // var hours = Math.floor(res / 3600) % 24;
            // get minutes

            if (Math.floor(res / 60) % 60 >= 0) {
              // get minutes 
              if (Math.floor(res / 60) % 60 < 10 && Math.floor(res / 60) % 60 >= 0) _this4.mins = '0' + Math.floor(res / 60) % 60;

              if (Math.floor(res / 60) % 60 > 9 && Math.floor(res / 60) % 60 >= 0) {
                _this4.mins = Math.floor(res / 60) % 60;
              } // get seconds


              if (Math.round(res % 60) < 10 && Math.round(res % 60) >= 0) _this4.secs = '0' + Math.round(res % 60);

              if (Math.round(res % 60) > 9 && Math.round(res % 60) >= 0) {
                _this4.secs = Math.round(res % 60);
              } // console.log('minutes: ' + this.mins, this.secs);

            }
          });
        }
      }]);

      return CountdowntimerComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CountdowntimerComponent.prototype, "data", void 0);
    CountdowntimerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-countdowntimer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./countdowntimer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./countdowntimer.component.scss */
      "./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CountdowntimerComponent);
    /***/
  },

  /***/
  "./src/app/common/components/customcomponent.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/common/components/customcomponent.module.ts ***!
    \*************************************************************/

  /*! exports provided: CustomComponentModule */

  /***/
  function srcAppCommonComponentsCustomcomponentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomComponentModule", function () {
      return CustomComponentModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/dist/fesm5.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _profileheader_profileheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profileheader/profileheader.component */
    "./src/app/common/components/profileheader/profileheader.component.ts");
    /* harmony import */


    var _countdowntimer_countdowntimer_countdowntimer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./countdowntimer/countdowntimer/countdowntimer.component */
    "./src/app/common/components/countdowntimer/countdowntimer/countdowntimer.component.ts");
    /* harmony import */


    var _dropprogress_dropprogress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dropprogress/dropprogress.component */
    "./src/app/common/components/dropprogress/dropprogress.component.ts");

    var CustomComponentModule = function CustomComponentModule() {
      _classCallCheck(this, CustomComponentModule);
    };

    CustomComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
      entryComponents: [_profileheader_profileheader_component__WEBPACK_IMPORTED_MODULE_5__["ProfileheaderComponent"], _dropprogress_dropprogress_component__WEBPACK_IMPORTED_MODULE_7__["DropProgressComponent"]],
      declarations: [_profileheader_profileheader_component__WEBPACK_IMPORTED_MODULE_5__["ProfileheaderComponent"], _countdowntimer_countdowntimer_countdowntimer_component__WEBPACK_IMPORTED_MODULE_6__["CountdowntimerComponent"], _dropprogress_dropprogress_component__WEBPACK_IMPORTED_MODULE_7__["DropProgressComponent"]],
      exports: [_profileheader_profileheader_component__WEBPACK_IMPORTED_MODULE_5__["ProfileheaderComponent"], _countdowntimer_countdowntimer_countdowntimer_component__WEBPACK_IMPORTED_MODULE_6__["CountdowntimerComponent"], _dropprogress_dropprogress_component__WEBPACK_IMPORTED_MODULE_7__["DropProgressComponent"]]
    })], CustomComponentModule);
    /***/
  },

  /***/
  "./src/app/common/components/dropprogress/dropprogress.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/common/components/dropprogress/dropprogress.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonComponentsDropprogressDropprogressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9jb21wb25lbnRzL2Ryb3Bwcm9ncmVzcy9kcm9wcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/common/components/dropprogress/dropprogress.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/common/components/dropprogress/dropprogress.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DropProgressComponent */

  /***/
  function srcAppCommonComponentsDropprogressDropprogressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropProgressComponent", function () {
      return DropProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropProgressComponent = /*#__PURE__*/function () {
      function DropProgressComponent() {
        _classCallCheck(this, DropProgressComponent);

        this.currentStatus = 0;
      }

      _createClass(DropProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(OrderStatus[this.data]);
          this.currentStatus = OrderStatus[this.data];
          this.updateColor();
        } // <ion-button class="primary-border" (click)="updateOrderStatus('order received')">Order Received</ion-button>
        // <ion-button class="primary-border" (click)="updateOrderStatus('wash completed')">Wash completed</ion-button>
        // <ion-button class="primary-border" (click)="updateOrderStatus('wash intiated')">Wash Intiated</ion-button>
        // <ion-button class="primary-border" (click)="updateOrderStatus('packed')">Packed to deliver</ion-button>
        // <ion-button class="primary-border" (click)="updateOrderStatus('inpogress')">In Progress</ion-button>
        // <ion-button class="primary-border" (click)="updateOrderStatus('delivered')">Deliver</ion-button>

      }, {
        key: "updateColor",
        value: function updateColor() {
          console.log('updatecalled');

          if (this.currentStatus > 0) {
            document.getElementById('1').style.fill = "#10dc60";
            document.getElementById('2').style.fill = "#000000";
          }

          if (this.currentStatus > 1) {
            document.getElementById('3').style.fill = "#10dc60";
            document.getElementById('4').style.fill = "#000000";
          }

          if (this.currentStatus > 2) {
            document.getElementById('5').style.fill = "#10dc60";
            document.getElementById('6').style.fill = "#000000";
          }

          if (this.currentStatus > 3) {
            document.getElementById('7').style.fill = "#10dc60";
            document.getElementById('8').style.fill = "#000000";
          }

          if (this.currentStatus == 6) {
            document.getElementById('9').style.fill = "#10dc60";
            document.getElementById('10').style.fill = "#000000";
          }
        }
      }]);

      return DropProgressComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DropProgressComponent.prototype, "data", void 0);
    DropProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropprogress',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropprogress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/dropprogress/dropprogress.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropprogress.component.scss */
      "./src/app/common/components/dropprogress/dropprogress.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropProgressComponent);
    var OrderStatus;

    (function (OrderStatus) {
      OrderStatus[OrderStatus["order received"] = 1] = "order received";
      OrderStatus[OrderStatus["wash intiated"] = 2] = "wash intiated";
      OrderStatus[OrderStatus["inpogress"] = 3] = "inpogress";
      OrderStatus[OrderStatus["wash completed"] = 4] = "wash completed";
      OrderStatus[OrderStatus["packed"] = 5] = "packed";
      OrderStatus[OrderStatus["delivered"] = 6] = "delivered";
    })(OrderStatus || (OrderStatus = {}));
    /***/

  },

  /***/
  "./src/app/common/components/profileheader/profileheader.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/common/components/profileheader/profileheader.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonComponentsProfileheaderProfileheaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-box {\n  margin: auto;\n  width: 80%;\n}\n\n.header-content {\n  margin: auto auto auto 0;\n}\n\n.header-content h3 {\n  margin-top: 0;\n  font-size: 16px !important;\n  color: #ffffff;\n}\n\n.header-content p {\n  color: #ffffff;\n  font-size: 14px !important;\n}\n\n.background-primary {\n  padding-bottom: 1px;\n}\n\n.wallet-card {\n  margin-bottom: 12px;\n  height: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvcHJvZmlsZWhlYWRlci9EOlxcUHJvamVjdHNcXGxhdW5kcnlcXGFwcC9zcmNcXGFwcFxcY29tbW9uXFxjb21wb25lbnRzXFxwcm9maWxlaGVhZGVyXFxwcm9maWxlaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb24vY29tcG9uZW50cy9wcm9maWxlaGVhZGVyL3Byb2ZpbGVoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0Usd0JBQUE7QUNFRjs7QURERTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQ0dKOztBREFBO0VBQ0UsbUJBQUE7QUNHRjs7QUREQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbXBvbmVudHMvcHJvZmlsZWhlYWRlci9wcm9maWxlaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtYm94IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuLmhlYWRlci1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xuICBoMyB7XG4gICAgbWFyZ2luLXRvcDogMCAgO1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIHAge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbi53YWxsZXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGhlaWdodDogNWVtO1xufVxuIiwiLnByb2ZpbGUtYm94IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuXG4uaGVhZGVyLWNvbnRlbnQge1xuICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XG59XG4uaGVhZGVyLWNvbnRlbnQgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaGVhZGVyLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtcHJpbWFyeSB7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG5cbi53YWxsZXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGhlaWdodDogNWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/common/components/profileheader/profileheader.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/common/components/profileheader/profileheader.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ProfileheaderComponent */

  /***/
  function srcAppCommonComponentsProfileheaderProfileheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileheaderComponent", function () {
      return ProfileheaderComponent;
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


    var _apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../apilayer/APIs/userapi.service */
    "./src/app/common/apilayer/APIs/userapi.service.ts");
    /* harmony import */


    var _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");

    var ProfileheaderComponent = /*#__PURE__*/function () {
      function ProfileheaderComponent(userService, localStorage) {
        var _this5 = this;

        _classCallCheck(this, ProfileheaderComponent);

        this.userService = userService;
        this.localStorage = localStorage;
        localStorage.getStoredKey('user').then(function (user) {
          console.log(user);
          _this5.user = user;
        });
        this.getUserWalletData();
      }

      _createClass(ProfileheaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUserWalletData",
        value: function getUserWalletData() {
          var _this6 = this;

          this.userService.getUserIdFromStorage().then(function () {
            _this6.totalWalletBalance = 0;

            _this6.userService.getUserWallet().subscribe(function (res) {
              console.log(res, 'wallet');
              res.forEach(function (element) {
                _this6.totalWalletBalance += element.balance;
              });
            });
          });
        }
      }]);

      return ProfileheaderComponent;
    }();

    ProfileheaderComponent.ctorParameters = function () {
      return [{
        type: _apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"]
      }, {
        type: _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStroageService"]
      }];
    };

    ProfileheaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profileheader',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profileheader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/components/profileheader/profileheader.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profileheader.component.scss */
      "./src/app/common/components/profileheader/profileheader.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_apilayer_APIs_userapi_service__WEBPACK_IMPORTED_MODULE_2__["UserapiService"], _service_localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStroageService"]])], ProfileheaderComponent);
    /***/
  },

  /***/
  "./src/app/common/service/auth-gaurd/auth-gaurd.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/common/service/auth-gaurd/auth-gaurd.service.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthGaurdService */

  /***/
  function srcAppCommonServiceAuthGaurdAuthGaurdServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function () {
      return AuthGaurdService;
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


    var _localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../localstorage/local-stroage.service */
    "./src/app/common/service/localstorage/local-stroage.service.ts");

    var AuthGaurdService = /*#__PURE__*/function () {
      function AuthGaurdService(router, localStorage) {
        _classCallCheck(this, AuthGaurdService);

        this.router = router;
        this.localStorage = localStorage;
      }

      _createClass(AuthGaurdService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var currentUser, viewedTutorial;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.getItem('authToken');

                  case 2:
                    currentUser = _context.sent;
                    _context.next = 5;
                    return this.getItem('viewedTutorial');

                  case 5:
                    viewedTutorial = _context.sent;

                    if (!currentUser) {
                      _context.next = 10;
                      break;
                    }

                    return _context.abrupt("return", true);

                  case 10:
                    this.router.navigateByUrl('/login');
                    return _context.abrupt("return", false);

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          var _this7 = this;

          return new Promise(function (fulfill, neglect) {
            _this7.localStorage.getStoredKey(key).then(function (val) {
              if (val) fulfill(true);else fulfill(false);
            })["catch"](function (err) {
              fulfill(false);
            });
          });
        }
      }]);

      return AuthGaurdService;
    }();

    AuthGaurdService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStroageService"]
      }];
    };

    AuthGaurdService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _localstorage_local_stroage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStroageService"]])], AuthGaurdService);
    /***/
  },

  /***/
  "./src/app/common/service/localstorage/local-stroage.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/common/service/localstorage/local-stroage.service.ts ***!
    \**********************************************************************/

  /*! exports provided: LocalStroageService */

  /***/
  function srcAppCommonServiceLocalstorageLocalStroageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStroageService", function () {
      return LocalStroageService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var LocalStroageService = /*#__PURE__*/function () {
      function LocalStroageService(storage) {
        _classCallCheck(this, LocalStroageService);

        this.storage = storage;
      }

      _createClass(LocalStroageService, [{
        key: "setStorageKey",
        value: function setStorageKey(key, value) {
          // set a key/value
          return this.storage.set(key, value);
        }
      }, {
        key: "getStoredKey",
        value: function getStoredKey(key) {
          // Or to get a key/value pair
          return this.storage.get(key);
        }
      }, {
        key: "clearStorage",
        value: function clearStorage() {
          this.storage.set('authToken', null);
          return this.storage.set('user', null);
        }
      }]);

      return LocalStroageService;
    }();

    LocalStroageService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    LocalStroageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], LocalStroageService);
    /***/
  },

  /***/
  "./src/app/common/service/pipe/date-time.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/common/service/pipe/date-time.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: DateTimePipe */

  /***/
  function srcAppCommonServicePipeDateTimePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimePipe", function () {
      return DateTimePipe;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var DateTimePipe = /*#__PURE__*/function () {
      function DateTimePipe() {
        _classCallCheck(this, DateTimePipe);
      }

      _createClass(DateTimePipe, [{
        key: "transform",
        value: function transform(value) {
          return moment__WEBPACK_IMPORTED_MODULE_2__(value).format('hh:mm A, DD MMM YYYY');
        }
      }]);

      return DateTimePipe;
    }();

    DateTimePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'dateTime'
    })], DateTimePipe);
    /***/
  },

  /***/
  "./src/app/common/service/pipe/pipes.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/common/service/pipe/pipes.module.ts ***!
    \*****************************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppCommonServicePipePipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _date_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./date-time.pipe */
    "./src/app/common/service/pipe/date-time.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__["DateTimePipe"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]],
      exports: [_date_time_pipe__WEBPACK_IMPORTED_MODULE_3__["DateTimePipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/common/service/toast/toast.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/common/service/toast/toast.service.ts ***!
    \*******************************************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppCommonServiceToastToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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

    var ToastService = /*#__PURE__*/function () {
      function ToastService(toastController) {
        _classCallCheck(this, ToastService);

        this.toastController = toastController;
      }

      _createClass(ToastService, [{
        key: "toastSuccess",
        value: function toastSuccess(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: message,
                      color: 'primary',
                      duration: 2000,
                      showCloseButton: true
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "toastFail",
        value: function toastFail(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: message,
                      color: 'danger',
                      duration: 2000,
                      showCloseButton: true
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], ToastService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      name: '(Dev)',
      apiBaseUrl: 'https://api.coinlaundryindia.com/' // apiBaseUrl:'http://35.154.46.248:3000/'
      // apiBaseUrl:'http://localhost:3000/'

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\laundry\app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map