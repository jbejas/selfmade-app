webpackJsonp([4],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignsPageModule", function() { return CampaignsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__campaigns__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CampaignsPageModule = (function () {
    function CampaignsPageModule() {
    }
    return CampaignsPageModule;
}());
CampaignsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__campaigns__["a" /* CampaignsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__campaigns__["a" /* CampaignsPage */])
        ],
    })
], CampaignsPageModule);

//# sourceMappingURL=campaigns.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampaignsPage; });
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


var CampaignsPage = (function () {
    function CampaignsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.section = 'backed';
    }
    return CampaignsPage;
}());
CampaignsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-campaigns',template:/*ion-inline-start:"/Applications/MAMP/htdocs/selfmade_new/src/pages/campaigns/campaigns.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <img src="assets/icons/menu.svg">\n      </button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button>CART</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="active-campaigns">\n    <ion-row>\n      <ion-col col-5 text-right>\n        NOW ACTIVE\n      </ion-col>\n      <ion-col col-2 text-center>\n        <span class="active-days">7</span>\n      </ion-col>\n      <ion-col col-5 text-left>\n        CAMPAIGNS\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="campaign-img">\n    <img src="assets/imgs/user1.png">\n    <div class="campaign-like">\n      <ion-icon ios="ios-heart" md="md-heart"></ion-icon>\n    </div>\n  </div>\n  <ion-grid class="user-meta-box">\n    <ion-row>\n      <ion-col>\n        <h1 text-center>Selfmade</h1>\n        <p text-center class="time-remaining"><span class="days">05</span> d : <span class="hours">10</span> h : <span class="minutes">36</span> m : <span class="seconds">05</span> s</p>\n        <h3 text-center>Creating a platform that curates socially responsible startups and providing a diverse array of rewards for followers.</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class="percentage-holder">\n          <div class="percentage"></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="campaign-meta">\n      <ion-col text-center>\n        71%<br><span>Funded</span>\n      </ion-col>\n      <ion-col text-center>\n        $48,123<br><span>Raised</span>\n      </ion-col>\n      <ion-col text-center>\n        13<br><span>Backers</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col text-center>\n          <p text-center><img src="assets/icons/vote.svg"></p>\n          Vote\n        </ion-col>\n        <ion-col text-center>\n          <p text-center><img src="assets/icons/rewards.svg"></p>\n          Rewards\n        </ion-col>\n        <ion-col text-center>\n          <p text-center><img src="assets/icons/campaign.svg"></p>\n          Campaigns\n          <span class="active"></span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Applications/MAMP/htdocs/selfmade_new/src/pages/campaigns/campaigns.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CampaignsPage);

//# sourceMappingURL=campaigns.js.map

/***/ })

});
//# sourceMappingURL=4.js.map