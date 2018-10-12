webpackJsonp([2],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */])
        ],
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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


var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.section = 'backed';
    }
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"/Applications/MAMP/htdocs/selfmade_new/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <img src="assets/icons/menu.svg">\n      </button>\n    </ion-buttons>\n    <ion-title>Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button>CART</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <img class="profile-img" src="assets/imgs/molly1.png">\n  <ion-grid class="user-meta-box">\n    <ion-row>\n      <ion-col>\n        <h1 text-center>Molly Mandell</h1>\n        <h3 text-center>Currently the CEO &amp; Co-Founder</h3>\n        <h5 text-center>New York</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <hr>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-5 text-center class="username">\n        @selfmade\n      </ion-col>\n      <ion-col col-7 text-center class="investment">\n        Investment Success <span>71%</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div padding-vertical>\n      <ion-segment [(ngModel)]="section">\n        <ion-segment-button value="following">\n          Following\n        </ion-segment-button>\n        <ion-segment-button value="backed">\n          Backed\n        </ion-segment-button>\n        <ion-segment-button value="rewards">\n          Rewards\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    \n    <div [ngSwitch]="section">\n      <div *ngSwitchCase="\'following\'">\n        <ion-grid no-padding class="following">\n          <ion-row>\n            <ion-col col-4>\n              <img src="assets/imgs/perfumes.png">\n            </ion-col>\n            <ion-col col-8 class="following-meta">\n              <h2>Selfmade</h2>\n              <p>Creating a platform that curates socially responsible startups and providing a diverse array of rewards for followers.</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <img src="assets/imgs/hoodie.png">\n            </ion-col>\n            <ion-col col-8 class="following-meta">\n              <h2>101</h2>\n              <p>Creating a platform that curates socially responsible startups and providing a diverse array of rewards for followers.</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <img src="assets/imgs/glasses.png">\n            </ion-col>\n            <ion-col col-8 class="following-meta">\n              <h2>clap Metrics</h2>\n              <p>Creating a platform that curates socially responsible startups and providing a diverse array of rewards for followers.</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    \n      <div *ngSwitchCase="\'backed\'">\n        <img class="profile-img" src="assets/imgs/sweater.png">\n        <ion-grid class="section-meta-box">\n          <ion-row>\n            <ion-col>\n              <h1 text-center>Selfmade</h1>\n              <h3 text-center>Creating a platform that curates socially responsible startups and providing a diverse array of rewards for followers.</h3>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4 text-center class="username">\n              <p class="amount">49 069</p>\n              <p class="description">Amount raised</p>\n            </ion-col>\n            <ion-col col-4 text-center class="investment">\n              <p class="amount">35</p>\n              <p class="description"># of Backers</p>\n            </ion-col>\n            <ion-col col-4 text-center class="investment">\n              <p class="amount">2 000</p>\n              <p class="description">XCoin value</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div *ngSwitchCase="\'rewards\'">\n        <img class="profile-img" src="assets/imgs/sweater.png">\n      </div>\n    </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col text-center>\n          <p text-center><img src="assets/icons/vote.svg"></p>\n          Vote\n          <span class="active"></span>\n        </ion-col>\n        <ion-col text-center>\n          <p text-center><img src="assets/icons/rewards.svg"></p>\n          Rewards\n        </ion-col>\n        <ion-col text-center>\n          <p text-center><img src="assets/icons/campaign.svg"></p>\n          Campaigns\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Applications/MAMP/htdocs/selfmade_new/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map