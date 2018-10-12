webpackJsonp([1],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiltersPageModule = (function () {
    function FiltersPageModule() {
    }
    return FiltersPageModule;
}());
FiltersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */])
        ],
    })
], FiltersPageModule);

//# sourceMappingURL=filters.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersPage = (function () {
    function FiltersPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return FiltersPage;
}());
FiltersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-filters',template:/*ion-inline-start:"/Applications/MAMP/htdocs/selfmade_new/src/pages/vote/filters/filters.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start></ion-buttons>\n    <ion-title>Filters</ion-title>\n    <ion-buttons end>\n      <button ion-button>CART</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-horizontal>\n  <p>Filter and sort your results</p>\n  <ion-list>\n\n    <ion-item inset>\n      <ion-input placeholder="Search" type="text" value=""></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col col-8 class="col-title">\n        CATEGORIES\n      </ion-col>\n      <ion-col col-4 text-right>\n        <button class="clear-button" ion-button small clear>Clear All</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid no-padding class="categories">\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button full class="active">Blockchain</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button full>Space</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button full>Medic</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <button ion-button full>High Price</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button full>Tech</button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button full>Finance</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button full class="apply-button">Apply</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Applications/MAMP/htdocs/selfmade_new/src/pages/vote/filters/filters.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], FiltersPage);

//# sourceMappingURL=filters.js.map

/***/ })

});
//# sourceMappingURL=1.js.map