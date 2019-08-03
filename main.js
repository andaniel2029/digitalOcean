(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/admin/src/app/app-routing.module.ts":
/*!******************************************************!*\
  !*** ./projects/admin/src/app/app-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./projects/admin/src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./projects/admin/src/app/login/login.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/users/users.component */ "./projects/admin/src/app/user/users/users.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/register/register.component */ "./projects/admin/src/app/user/register/register.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/profile/profile.component */ "./projects/admin/src/app/user/profile/profile.component.ts");
/* harmony import */ var _goods_goods_goods_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goods/goods/goods.component */ "./projects/admin/src/app/goods/goods/goods.component.ts");
/* harmony import */ var _goods_add_good_add_good_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goods/add-good/add-good.component */ "./projects/admin/src/app/goods/add-good/add-good.component.ts");
/* harmony import */ var _goods_edit_good_edit_good_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./goods/edit-good/edit-good.component */ "./projects/admin/src/app/goods/edit-good/edit-good.component.ts");
/* harmony import */ var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/add-category/add-category.component */ "./projects/admin/src/app/category/add-category/add-category.component.ts");
/* harmony import */ var _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category/edit-category/edit-category.component */ "./projects/admin/src/app/category/edit-category/edit-category.component.ts");
/* harmony import */ var _category_lists_lists_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./category/lists/lists.component */ "./projects/admin/src/app/category/lists/lists.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'admin', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'admin/dashboard', redirectTo: 'admin' },
    { path: 'admin/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'admin/user/users', component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
    { path: 'admin/user/register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'admin/user/profile', component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'admin/user', redirectTo: 'admin/user/users' },
    { path: 'admin/goods/register', component: _goods_add_good_add_good_component__WEBPACK_IMPORTED_MODULE_8__["AddGoodComponent"] },
    { path: 'admin/goods/edit/:id', component: _goods_edit_good_edit_good_component__WEBPACK_IMPORTED_MODULE_9__["EditGoodComponent"] },
    { path: 'admin/goods/lists', component: _goods_goods_goods_component__WEBPACK_IMPORTED_MODULE_7__["GoodsComponent"] },
    { path: 'admin/goods', redirectTo: 'admin/goods/lists' },
    { path: 'admin/category/register', component: _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_10__["AddCategoryComponent"] },
    { path: 'admin/category/edit/:id', component: _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_11__["EditCategoryComponent"] },
    { path: 'admin/category/lists', component: _category_lists_lists_component__WEBPACK_IMPORTED_MODULE_12__["ListsComponent"] },
    { path: 'admin/category', redirectTo: 'admin/category/lists' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./projects/admin/src/app/app.component.css":
/*!**************************************************!*\
  !*** ./projects/admin/src/app/app.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./projects/admin/src/app/app.component.html":
/*!***************************************************!*\
  !*** ./projects/admin/src/app/app.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./projects/admin/src/app/app.component.ts":
/*!*************************************************!*\
  !*** ./projects/admin/src/app/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'admin';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./projects/admin/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./projects/admin/src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/app.module.ts":
/*!**********************************************!*\
  !*** ./projects/admin/src/app/app.module.ts ***!
  \**********************************************/
/*! exports provided: AppModule, AdminSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSharedModule", function() { return AdminSharedModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./projects/admin/src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./projects/admin/src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./projects/admin/src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./projects/admin/src/app/login/login.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./projects/admin/src/app/nav/nav.component.ts");
/* harmony import */ var _containers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/sidebar/sidebar.component */ "./projects/admin/src/app/containers/sidebar/sidebar.component.ts");
/* harmony import */ var _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/footer/footer.component */ "./projects/admin/src/app/containers/footer/footer.component.ts");
/* harmony import */ var _containers_top_top_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/top/top.component */ "./projects/admin/src/app/containers/top/top.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/users/users.component */ "./projects/admin/src/app/user/users/users.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/register/register.component */ "./projects/admin/src/app/user/register/register.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/profile/profile.component */ "./projects/admin/src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_reset_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/reset/reset.component */ "./projects/admin/src/app/user/reset/reset.component.ts");
/* harmony import */ var _goods_goods_goods_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./goods/goods/goods.component */ "./projects/admin/src/app/goods/goods/goods.component.ts");
/* harmony import */ var _goods_add_good_add_good_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./goods/add-good/add-good.component */ "./projects/admin/src/app/goods/add-good/add-good.component.ts");
/* harmony import */ var _goods_edit_good_edit_good_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./goods/edit-good/edit-good.component */ "./projects/admin/src/app/goods/edit-good/edit-good.component.ts");
/* harmony import */ var _category_lists_lists_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category/lists/lists.component */ "./projects/admin/src/app/category/lists/lists.component.ts");
/* harmony import */ var _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./category/edit-category/edit-category.component */ "./projects/admin/src/app/category/edit-category/edit-category.component.ts");
/* harmony import */ var _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./category/add-category/add-category.component */ "./projects/admin/src/app/category/add-category/add-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var providers = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _containers_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _containers_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _containers_top_top_component__WEBPACK_IMPORTED_MODULE_9__["TopComponent"],
                _user_users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _user_reset_reset_component__WEBPACK_IMPORTED_MODULE_13__["ResetComponent"],
                _goods_goods_goods_component__WEBPACK_IMPORTED_MODULE_14__["GoodsComponent"],
                _goods_add_good_add_good_component__WEBPACK_IMPORTED_MODULE_15__["AddGoodComponent"],
                _goods_edit_good_edit_good_component__WEBPACK_IMPORTED_MODULE_16__["EditGoodComponent"],
                _category_lists_lists_component__WEBPACK_IMPORTED_MODULE_17__["ListsComponent"],
                _category_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_18__["EditCategoryComponent"],
                _category_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_19__["AddCategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: providers,
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var AdminSharedModule = /** @class */ (function () {
    function AdminSharedModule() {
    }
    AdminSharedModule.forRoot = function () {
        return {
            ngModule: AppModule,
            providers: providers
        };
    };
    AdminSharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({})
    ], AdminSharedModule);
    return AdminSharedModule;
}());



/***/ }),

/***/ "./projects/admin/src/app/category/add-category/add-category.component.css":
/*!*********************************************************************************!*\
  !*** ./projects/admin/src/app/category/add-category/add-category.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NhdGVnb3J5L2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/admin/src/app/category/add-category/add-category.component.html":
/*!**********************************************************************************!*\
  !*** ./projects/admin/src/app/category/add-category/add-category.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"main-content\">\r\n        <app-top></app-top>\r\n        <div class=\"main-content-inner\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"mb-3\">Category Register</h4>\r\n                        <form class=\"needs-validation\" novalidate>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_id\">Category ID</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"c_id\" placeholder=\"Category ID\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input category id.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_name\">Category Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"c_name\" placeholder=\"Category Name\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type new category name.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_parent_id\">Parent Category</label>\r\n                                    <select class=\"custom-select\" id=\"c_parent_id\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_depth\">Category Depth</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"c_depth\" placeholder=\"Category Depth\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input category depth.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-primary btn-lg btn-flat offset-5\" type=\"submit\">Register</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/admin/src/app/category/add-category/add-category.component.ts":
/*!********************************************************************************!*\
  !*** ./projects/admin/src/app/category/add-category/add-category.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent() {
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./projects/admin/src/app/category/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.css */ "./projects/admin/src/app/category/add-category/add-category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/category/edit-category/edit-category.component.css":
/*!***********************************************************************************!*\
  !*** ./projects/admin/src/app/category/edit-category/edit-category.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NhdGVnb3J5L2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./projects/admin/src/app/category/edit-category/edit-category.component.html":
/*!************************************************************************************!*\
  !*** ./projects/admin/src/app/category/edit-category/edit-category.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"main-content\">\r\n        <app-top></app-top>\r\n        <div class=\"main-content-inner\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"mb-3\">Edit Category</h4>\r\n                        <form class=\"needs-validation\" novalidate>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_id\">Category ID</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"c_id\" placeholder=\"Category ID\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input category id.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_name\">Category Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"c_name\" placeholder=\"Category Name\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type new category name.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_parent_id\">Parent Category</label>\r\n                                    <select class=\"custom-select\" id=\"c_parent_id\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"c_depth\">Category Depth</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"c_depth\" placeholder=\"Category Depth\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input category depth.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-primary btn-lg btn-flat offset-5\" type=\"submit\">Update</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/admin/src/app/category/edit-category/edit-category.component.ts":
/*!**********************************************************************************!*\
  !*** ./projects/admin/src/app/category/edit-category/edit-category.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent() {
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
    };
    EditCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./projects/admin/src/app/category/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.css */ "./projects/admin/src/app/category/edit-category/edit-category.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/category/lists/lists.component.css":
/*!*******************************************************************!*\
  !*** ./projects/admin/src/app/category/lists/lists.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NhdGVnb3J5L2xpc3RzL2xpc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./projects/admin/src/app/category/lists/lists.component.html":
/*!********************************************************************!*\
  !*** ./projects/admin/src/app/category/lists/lists.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <app-sidebar></app-sidebar>\n    <div class=\"main-content\">\n        <app-top></app-top>\n        <div class=\"main-content-inner\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 mt-5\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h4 class=\"mb-3\">Category List</h4>\n                            <div class=\"single-table\">\n                                <div class=\"table-responsive\">\n                                    <table class=\"table table-bordered text-center\">\n                                        <thead class=\"text-uppercase\">\n                                            <tr>\n                                                <th scope=\"col\">ID</th>\n                                                <th scope=\"col\">Name</th>\n                                                <th scope=\"col\">date</th>\n                                                <th scope=\"col\">price</th>\n                                                <th scope=\"col\">action</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>Mark</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$120</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>jone</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$150</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>Mark</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$120</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>jone</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$150</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./projects/admin/src/app/category/lists/lists.component.ts":
/*!******************************************************************!*\
  !*** ./projects/admin/src/app/category/lists/lists.component.ts ***!
  \******************************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
    }
    ListsComponent.prototype.ngOnInit = function () {
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./projects/admin/src/app/category/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.css */ "./projects/admin/src/app/category/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/containers/footer/footer.component.css":
/*!***********************************************************************!*\
  !*** ./projects/admin/src/app/containers/footer/footer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvbnRhaW5lcnMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./projects/admin/src/app/containers/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./projects/admin/src/app/containers/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"footer-area\">\n        <p>© Copyright 2019. All right reserved.</p>\n    </div>\n</footer>"

/***/ }),

/***/ "./projects/admin/src/app/containers/footer/footer.component.ts":
/*!**********************************************************************!*\
  !*** ./projects/admin/src/app/containers/footer/footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./projects/admin/src/app/containers/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./projects/admin/src/app/containers/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/containers/sidebar/sidebar.component.css":
/*!*************************************************************************!*\
  !*** ./projects/admin/src/app/containers/sidebar/sidebar.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvbnRhaW5lcnMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./projects/admin/src/app/containers/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./projects/admin/src/app/containers/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n    <div class=\"loader\"></div>\n</div>\n<!-- sidebar menu area start -->\n<div class=\"sidebar-menu\">\n    <div class=\"sidebar-header\">\n        <div class=\"logo\">\n            <a href=\"index.html\"><img src=\"assets/images/icon/logo.png\" alt=\"logo\"></a>\n        </div>\n    </div>\n    <div class=\"main-menu\">\n        <div class=\"menu-inner\">\n            <nav>\n                <ul class=\"metismenu\" id=\"menu\">\n                    <li class=\"active\">\n                        <a href=\"javascript:void(0)\" aria-expanded=\"true\">\n                            <i class=\"ti-view-grid\"></i>\n                            <span>Dashboard</span>\n                        </a>\n                        <ul class=\"collapse\">\n                            <li class=\"active\"><a href=\"admin\">Admin dashboard</a></li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" aria-expanded=\"true\">\n                            <i class=\"ti-user\"></i>\n                            <span>User</span>\n                        </a>\n                        <ul class=\"collapse\">\n                            <li><a href=\"admin/user/profile\">Profile</a></li>\n                            <li><a href=\"admin/user/users\">Users</a></li>\n                            <li><a href=\"admin/user/register\">Register</a></li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" aria-expanded=\"true\">\n                            <i class=\"ti-view-list-alt\"></i>\n                            <span>Category\n                            </span>\n                        </a>\n                        <ul class=\"collapse\">\n                            <li><a href=\"admin/category/register\">Register</a></li>\n                            <li><a href=\"admin/category/lists\">Management</a></li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" aria-expanded=\"true\">\n                            <i class=\"ti-shopping-cart\"></i>\n                            <span>Product\n                            </span>\n                        </a>\n                        <ul class=\"collapse\">\n                            <li><a href=\"admin/goods/register\">Register</a></li>\n                            <li><a href=\"admin/goods/lists\">Management</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</div>\n<!-- sidebar menu area end -->\n"

/***/ }),

/***/ "./projects/admin/src/app/containers/sidebar/sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./projects/admin/src/app/containers/sidebar/sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./projects/admin/src/app/containers/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./projects/admin/src/app/containers/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/containers/top/top.component.css":
/*!*****************************************************************!*\
  !*** ./projects/admin/src/app/containers/top/top.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2NvbnRhaW5lcnMvdG9wL3RvcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./projects/admin/src/app/containers/top/top.component.html":
/*!******************************************************************!*\
  !*** ./projects/admin/src/app/containers/top/top.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header area start -->\n<div class=\"header-area\">\n    <div class=\"row align-items-center\">\n        <!-- nav and search button -->\n        <div class=\"col-md-6 col-sm-8 clearfix\">\n            <div class=\"nav-btn pull-left\">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </div>\n        <!-- profile info & task notification -->\n        <div class=\"col-md-6 col-sm-4 clearfix\">\n            <ul class=\"notification-area pull-right\">\n                <li id=\"full-view\"><i class=\"ti-fullscreen\"></i></li>\n                <li id=\"full-view-exit\"><i class=\"ti-zoom-out\"></i></li>\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- header area end -->\n<!-- page title area start -->\n<div class=\"page-title-area\">\n    <div class=\"row align-items-center\">\n        <div class=\"col-sm-6\">\n            <div class=\"breadcrumbs-area clearfix\">\n                <h4 class=\"page-title pull-left\">Nine Sense</h4>\n                <ul class=\"breadcrumbs pull-left\">\n                    <li><a href=\"admin\">Home</a></li>\n                    <li><span>Dashboard</span></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-6 clearfix\">\n            <div class=\"user-profile pull-right\">\n                <img class=\"avatar user-thumb\" src=\"assets/images/author/avatar.png\" alt=\"avatar\">\n                <h4 class=\"user-name dropdown-toggle\" data-toggle=\"dropdown\">Admin <i class=\"fa fa-angle-down\"></i></h4>\n                <div class=\"dropdown-menu\">\n                    <a class=\"dropdown-item\" href=\"admin/user/profile\"><i class=\"ti ti-user\"></i>&nbsp;&nbsp;&nbsp;Profile</a>\n                    <a class=\"dropdown-item\" href=\"admin/logout\"><i class=\"ti ti-power-off\"></i>&nbsp;&nbsp;&nbsp;Log Out</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./projects/admin/src/app/containers/top/top.component.ts":
/*!****************************************************************!*\
  !*** ./projects/admin/src/app/containers/top/top.component.ts ***!
  \****************************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopComponent = /** @class */ (function () {
    function TopComponent() {
    }
    TopComponent.prototype.ngOnInit = function () {
    };
    TopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top',
            template: __webpack_require__(/*! ./top.component.html */ "./projects/admin/src/app/containers/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.css */ "./projects/admin/src/app/containers/top/top.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/dashboard/dashboard.component.css":
/*!******************************************************************!*\
  !*** ./projects/admin/src/app/dashboard/dashboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/admin/src/app/dashboard/dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./projects/admin/src/app/dashboard/dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <app-sidebar></app-sidebar>\n    <div class=\"main-content\">\n        <app-top></app-top>\n        <div class=\"main-content-inner\">\n            <p>dashboard contents!</p>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./projects/admin/src/app/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./projects/admin/src/app/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./projects/admin/src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./projects/admin/src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/goods/add-good/add-good.component.css":
/*!**********************************************************************!*\
  !*** ./projects/admin/src/app/goods/add-good/add-good.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2dvb2RzL2FkZC1nb29kL2FkZC1nb29kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./projects/admin/src/app/goods/add-good/add-good.component.html":
/*!***********************************************************************!*\
  !*** ./projects/admin/src/app/goods/add-good/add-good.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"main-content\">\r\n        <app-top></app-top>\r\n        <div class=\"main-content-inner\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"mb-3\">Product Register</h4>\r\n                        <form class=\"needs-validation\" novalidate>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_name\">Product Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"g_name\" placeholder=\"Product Name\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product name.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_subgid\">Parent ID</label>\r\n                                    <input type=\"Number\" class=\"form-control\" id=\"g_subgid\" placeholder=\"Parent Good's Id\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input correct good's id.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_price\">Price</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"g_price\" placeholder=\"Product Price\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product price correctly.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <h5 class=\"mb-3\">Category Select</h5>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_category\">Part Category</label>\r\n                                    <select class=\"custom-select\" id=\"g_category\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select product category.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_category\">Data Category</label>\r\n                                    <select class=\"custom-select\" id=\"g_category\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select product category.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_category\">Technology Category</label>\r\n                                    <select class=\"custom-select\" id=\"g_category\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select product category.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_rate\">Product Rate</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"g_rate\" placeholder=\"Product Rate\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product rate.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_url\">product Url</label>\r\n                                    <input type=\"url\" class=\"form-control\" id=\"g_url\" placeholder=\"Product Url\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product url.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_userlevel\">Required User Level</label>\r\n                                    <select class=\"custom-select\" id=\"g_userlevel\">\r\n                                        <option value=\"1\">basic</option>\r\n                                        <option value=\"2\">normal</option>\r\n                                        <option value=\"3\">private</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select level.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label for=\"g_summary\">Product Summary</label>\r\n                                    <textarea class=\"form-control\" id=\"g_summary\" row=\"3\" required></textarea>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product summary.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label for=\"description\">Product Description</label>\r\n                                    <textarea class=\"form-control\" id=\"description\" row=\"3\" required></textarea>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product description.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"performance\">Product Performance</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"performance\" placeholder=\"Product Performance\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product performance.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"volume\">product Url</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"volume\" placeholder=\"Product Volume\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product volume.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"owners\">Product Owners</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"owners\" placeholder=\"Product Owners\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product owners.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label for=\"other\">Product Detail</label>\r\n                                    <div id=\"other\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_img1\">Product Image</label>\r\n                                    <input id=\"g_img1\" type=\"file\">\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-primary btn-lg btn-flat offset-5\" type=\"submit\">Register</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/admin/src/app/goods/add-good/add-good.component.ts":
/*!*********************************************************************!*\
  !*** ./projects/admin/src/app/goods/add-good/add-good.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddGoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGoodComponent", function() { return AddGoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddGoodComponent = /** @class */ (function () {
    function AddGoodComponent() {
    }
    AddGoodComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#other').summernote({
                height: 300,
                placeholder: 'Please type about your product other detail information.'
            });
        });
    };
    AddGoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-good',
            template: __webpack_require__(/*! ./add-good.component.html */ "./projects/admin/src/app/goods/add-good/add-good.component.html"),
            styles: [__webpack_require__(/*! ./add-good.component.css */ "./projects/admin/src/app/goods/add-good/add-good.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddGoodComponent);
    return AddGoodComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/goods/edit-good/edit-good.component.css":
/*!************************************************************************!*\
  !*** ./projects/admin/src/app/goods/edit-good/edit-good.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2dvb2RzL2VkaXQtZ29vZC9lZGl0LWdvb2QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/admin/src/app/goods/edit-good/edit-good.component.html":
/*!*************************************************************************!*\
  !*** ./projects/admin/src/app/goods/edit-good/edit-good.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"main-content\">\r\n        <app-top></app-top>\r\n        <div class=\"main-content-inner\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"mb-3\">Product Edit</h4>\r\n                        <form class=\"needs-validation\" novalidate>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_name\">Product Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"g_name\" placeholder=\"Product Name\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product name.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_subgid\">Parent ID</label>\r\n                                    <input type=\"Number\" class=\"form-control\" id=\"g_subgid\" placeholder=\"Parent Good's Id\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input correct good's id.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_price\">Price</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"g_price\" placeholder=\"Product Price\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product price correctly.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <h5 class=\"mb-3\">Category Select</h5>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_category\">Part Category</label>\r\n                                    <select class=\"custom-select\" id=\"g_category\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select product category.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_category\">Data Category</label>\r\n                                    <select class=\"custom-select\" id=\"g_category\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select product category.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_category\">Technology Category</label>\r\n                                    <select class=\"custom-select\" id=\"g_category\">\r\n                                        <option value=\"1\">industry</option>\r\n                                        <option value=\"2\">medical</option>\r\n                                        <option value=\"3\">sports</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select product category.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_rate\">Product Rate</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"g_rate\" placeholder=\"Product Rate\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product rate.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_url\">product Url</label>\r\n                                    <input type=\"url\" class=\"form-control\" id=\"g_url\" placeholder=\"Product Url\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product url.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_userlevel\">Required User Level</label>\r\n                                    <select class=\"custom-select\" id=\"g_userlevel\">\r\n                                        <option value=\"1\">basic</option>\r\n                                        <option value=\"2\">normal</option>\r\n                                        <option value=\"3\">private</option>\r\n                                    </select>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select level.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label for=\"g_summary\">Product Summary</label>\r\n                                    <textarea class=\"form-control\" id=\"g_summary\" row=\"3\" required></textarea>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product summary.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label for=\"description\">Product Description</label>\r\n                                    <textarea class=\"form-control\" id=\"description\" row=\"3\" required></textarea>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product description.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"performance\">Product Performance</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"performance\" placeholder=\"Product Performance\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product performance.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"volume\">product Url</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"volume\" placeholder=\"Product Volume\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product volume.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"owners\">Product Owners</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"owners\" placeholder=\"Product Owners\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type product owners.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-12 mb-3\">\r\n                                    <label for=\"other\">Product Detail</label>\r\n                                    <div id=\"other\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"g_img1\">Product Image</label>\r\n                                    <input id=\"g_img1\" type=\"file\">\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-primary btn-lg btn-flat offset-5\" type=\"submit\">Update</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/admin/src/app/goods/edit-good/edit-good.component.ts":
/*!***********************************************************************!*\
  !*** ./projects/admin/src/app/goods/edit-good/edit-good.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditGoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGoodComponent", function() { return EditGoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditGoodComponent = /** @class */ (function () {
    function EditGoodComponent() {
    }
    EditGoodComponent.prototype.ngOnInit = function () {
    };
    EditGoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-good',
            template: __webpack_require__(/*! ./edit-good.component.html */ "./projects/admin/src/app/goods/edit-good/edit-good.component.html"),
            styles: [__webpack_require__(/*! ./edit-good.component.css */ "./projects/admin/src/app/goods/edit-good/edit-good.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditGoodComponent);
    return EditGoodComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/goods/goods/goods.component.css":
/*!****************************************************************!*\
  !*** ./projects/admin/src/app/goods/goods/goods.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2dvb2RzL2dvb2RzL2dvb2RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./projects/admin/src/app/goods/goods/goods.component.html":
/*!*****************************************************************!*\
  !*** ./projects/admin/src/app/goods/goods/goods.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <app-sidebar></app-sidebar>\n    <div class=\"main-content\">\n        <app-top></app-top>\n        <div class=\"main-content-inner\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 mt-5\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h4 class=\"mb-3\">Product List</h4>\n                            <div class=\"single-table\">\n                                <div class=\"table-responsive\">\n                                    <table class=\"table table-bordered text-center\">\n                                        <thead class=\"text-uppercase\">\n                                            <tr>\n                                                <th scope=\"col\">ID</th>\n                                                <th scope=\"col\">Name</th>\n                                                <th scope=\"col\">date</th>\n                                                <th scope=\"col\">price</th>\n                                                <th scope=\"col\">action</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>Mark</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$120</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>jone</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$150</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>Mark</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$120</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>jone</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$150</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./projects/admin/src/app/goods/goods/goods.component.ts":
/*!***************************************************************!*\
  !*** ./projects/admin/src/app/goods/goods/goods.component.ts ***!
  \***************************************************************/
/*! exports provided: GoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsComponent", function() { return GoodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoodsComponent = /** @class */ (function () {
    function GoodsComponent() {
    }
    GoodsComponent.prototype.ngOnInit = function () {
    };
    GoodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goods',
            template: __webpack_require__(/*! ./goods.component.html */ "./projects/admin/src/app/goods/goods/goods.component.html"),
            styles: [__webpack_require__(/*! ./goods.component.css */ "./projects/admin/src/app/goods/goods/goods.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoodsComponent);
    return GoodsComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/login/login.component.css":
/*!**********************************************************!*\
  !*** ./projects/admin/src/app/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./projects/admin/src/app/login/login.component.html":
/*!***********************************************************!*\
  !*** ./projects/admin/src/app/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preloader\">\n    <div class=\"loader\"></div>\n</div>\n<div class=\"login-area\">\n    <div class=\"container\">\n        <div class=\"login-box ptb--100\">\n            <form>\n                <div class=\"login-form-head\">\n                    <h4>Sign In</h4>\n                    <p>Welcome To NineSense Admin!</p>\n                </div>\n                <div class=\"login-form-body\">\n                    <div class=\"form-gp\">\n                        <label for=\"email\">Email address</label>\n                        <input type=\"email\" id=\"email\">\n                        <i class=\"ti-email\"></i>\n                    </div>\n                    <div class=\"form-gp\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\">\n                        <i class=\"ti-lock\"></i>\n                    </div>\n                    <div class=\"row mb-4 rmber-area\">\n                        <div class=\"col-6\">\n                            <div class=\"custom-control custom-checkbox mr-sm-2\">\n                                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlAutosizing\">\n                                <label class=\"custom-control-label\" for=\"customControlAutosizing\">Remember Me</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row mt-4\">\n                        <button class=\"btn btn-danger btn-lg btn-block\" type=\"submit\">\n                          Submit&nbsp;&nbsp;&nbsp;<i class=\"ti-arrow-right\"></i>\n                        </button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./projects/admin/src/app/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./projects/admin/src/app/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./projects/admin/src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./projects/admin/src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/nav/nav.component.css":
/*!******************************************************!*\
  !*** ./projects/admin/src/app/nav/nav.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/admin/src/app/nav/nav.component.html":
/*!*******************************************************!*\
  !*** ./projects/admin/src/app/nav/nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/admin/dashboard\">One</a> |\n<a routerLink=\"/admin/login\">Two</a>"

/***/ }),

/***/ "./projects/admin/src/app/nav/nav.component.ts":
/*!*****************************************************!*\
  !*** ./projects/admin/src/app/nav/nav.component.ts ***!
  \*****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./projects/admin/src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./projects/admin/src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/user/profile/profile.component.css":
/*!*******************************************************************!*\
  !*** ./projects/admin/src/app/user/profile/profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./projects/admin/src/app/user/profile/profile.component.html":
/*!********************************************************************!*\
  !*** ./projects/admin/src/app/user/profile/profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"main-content\">\r\n        <app-top></app-top>\r\n        <div class=\"main-content-inner\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"mb-3\">User Profile</h4>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"offset-10 mb-3\">\r\n                                <app-reset></app-reset>\r\n                            </div>\r\n                        </div>\r\n                        <form class=\"needs-validation\" novalidate>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"offset-5 mb-3\">\r\n                                    <div class=\"avatar\">\r\n                                        <img src=\"assets/images/user/placeholder.jpg\" alt=\"author image\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"name\">Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type new user name.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 mb-3\">\r\n                                    <label for=\"email\">Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"name@example.com\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input correct email address.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"country\">Country</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select country.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"phone\">Phone Number</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type phone number correctly.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"level\">Level</label>\r\n                                    <select class=\"custom-select\" id=\"level\">\r\n                                        <option value=\"1\">basic</option>\r\n                                        <option value=\"2\">normal</option>\r\n                                        <option value=\"3\">premium</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-primary btn-flat btn-lg offset-5\" type=\"submit\">Update</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/admin/src/app/user/profile/profile.component.ts":
/*!******************************************************************!*\
  !*** ./projects/admin/src/app/user/profile/profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./projects/admin/src/app/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./projects/admin/src/app/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/user/register/register.component.css":
/*!*********************************************************************!*\
  !*** ./projects/admin/src/app/user/register/register.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/admin/src/app/user/register/register.component.html":
/*!**********************************************************************!*\
  !*** ./projects/admin/src/app/user/register/register.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <app-sidebar></app-sidebar>\r\n    <div class=\"main-content\">\r\n        <app-top></app-top>\r\n        <div class=\"main-content-inner\">\r\n            <div class=\"col-12\">\r\n                <div class=\"card mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"mb-3\">User Register</h4>\r\n                        <form class=\"needs-validation\" novalidate>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"name\">Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type new user name.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"email\">Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"name@example.com\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please input correct email address.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"password\">Password</label>\r\n                                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" minlength=\"8\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type password correctly.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-row\">\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"confirmation\">Password Confirmation</label>\r\n                                    <input type=\"password\" class=\"form-control\" id=\"confirmation\" placeholder=\"Password Confirmation\" minlength=\"8\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type password again correctly.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"country\">Country</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"country\" placeholder=\"Country\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please select country.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 mb-3\">\r\n                                    <label for=\"phone\">Phone Number</label>\r\n                                    <input type=\"number\" class=\"form-control\" id=\"phone\" placeholder=\"Phone Number\" required>\r\n                                    <div class=\"valid-feedback\">\r\n                                        Ok!\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\">\r\n                                        Please type phone number correctly.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <button class=\"btn btn-primary btn-lg btn-flat offset-5\" type=\"submit\">Register</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/admin/src/app/user/register/register.component.ts":
/*!********************************************************************!*\
  !*** ./projects/admin/src/app/user/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./projects/admin/src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./projects/admin/src/app/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/user/reset/reset.component.css":
/*!***************************************************************!*\
  !*** ./projects/admin/src/app/user/reset/reset.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hZG1pbi9zcmMvYXBwL3VzZXIvcmVzZXQvcmVzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./projects/admin/src/app/user/reset/reset.component.html":
/*!****************************************************************!*\
  !*** ./projects/admin/src/app/user/reset/reset.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-flat btn-lg mt-3\" data-toggle=\"modal\" data-target=\"#reset_modal\">\r\n  Password Reset\r\n</button>\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"reset_modal\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\">Reset Password</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form class=\"needs-validation\" novalidate>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"old\">Current Password</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"old\" placeholder=\"Current Password\" minlength=\"8\" required>\r\n                            <div class=\"valid-feedback\">\r\n                                Ok!\r\n                            </div>\r\n                            <div class=\"invalid-feedback\">\r\n                                Please type current password.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"new\">New Password</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"new\" placeholder=\"New Password\" minlength=\"8\" required>\r\n                            <div class=\"valid-feedback\">\r\n                                Ok!\r\n                            </div>\r\n                            <div class=\"invalid-feedback\">\r\n                                Please type new password correctly.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col-md-12 mb-3\">\r\n                            <label for=\"confirmation\">New Password Confirmation</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"confirmation\" placeholder=\"New Password Confirmation\" minlength=\"8\" required>\r\n                            <div class=\"valid-feedback\">\r\n                                Ok!\r\n                            </div>\r\n                            <div class=\"invalid-feedback\">\r\n                                Please type new password again correctly.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"button\" class=\"btn btn-primary\">Save</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./projects/admin/src/app/user/reset/reset.component.ts":
/*!**************************************************************!*\
  !*** ./projects/admin/src/app/user/reset/reset.component.ts ***!
  \**************************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = /** @class */ (function () {
    function ResetComponent() {
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./projects/admin/src/app/user/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.css */ "./projects/admin/src/app/user/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./projects/admin/src/app/user/users/users.component.css":
/*!***************************************************************!*\
  !*** ./projects/admin/src/app/user/users/users.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import 'https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css';\r\n@import 'https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css';\r\n@import 'https://cdn.datatables.net/responsive/2.2.3/css/responsive.bootstrap.min.css';\r\n@import 'https://cdn.datatables.net/responsive/2.2.3/css/responsive.jqueryui.min.css'; */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkbWluL3NyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7d0ZBR3dGIiwiZmlsZSI6InByb2plY3RzL2FkbWluL3NyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGltcG9ydCAnaHR0cHM6Ly9jZG4uZGF0YXRhYmxlcy5uZXQvMS4xMC4xOS9jc3MvanF1ZXJ5LmRhdGFUYWJsZXMuY3NzJztcclxuQGltcG9ydCAnaHR0cHM6Ly9jZG4uZGF0YXRhYmxlcy5uZXQvMS4xMC4xOC9jc3MvZGF0YVRhYmxlcy5ib290c3RyYXA0Lm1pbi5jc3MnO1xyXG5AaW1wb3J0ICdodHRwczovL2Nkbi5kYXRhdGFibGVzLm5ldC9yZXNwb25zaXZlLzIuMi4zL2Nzcy9yZXNwb25zaXZlLmJvb3RzdHJhcC5taW4uY3NzJztcclxuQGltcG9ydCAnaHR0cHM6Ly9jZG4uZGF0YXRhYmxlcy5uZXQvcmVzcG9uc2l2ZS8yLjIuMy9jc3MvcmVzcG9uc2l2ZS5qcXVlcnl1aS5taW4uY3NzJzsgKi9cclxuIl19 */"

/***/ }),

/***/ "./projects/admin/src/app/user/users/users.component.html":
/*!****************************************************************!*\
  !*** ./projects/admin/src/app/user/users/users.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <app-sidebar></app-sidebar>\n    <div class=\"main-content\">\n        <app-top></app-top>\n        <div class=\"main-content-inner\">\n            <div class=\"row\">\n                <div class=\"col-lg-12 mt-5\">\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h4 class=\"mb-3\">User List</h4>\n                            <div class=\"single-table\">\n                                <div class=\"table-responsive\">\n                                    <table class=\"table table-bordered text-center\">\n                                        <thead class=\"text-uppercase\">\n                                            <tr>\n                                                <th scope=\"col\">ID</th>\n                                                <th scope=\"col\">Name</th>\n                                                <th scope=\"col\">date</th>\n                                                <th scope=\"col\">price</th>\n                                                <th scope=\"col\">action</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>Mark</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$120</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>jone</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$150</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>Mark</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$120</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                            <tr>\n                                                <th scope=\"row\">1</th>\n                                                <td>jone</td>\n                                                <td>09 / 07 / 2018</td>\n                                                <td>$150</td>\n                                                <td><i class=\"ti-trash\"></i></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./projects/admin/src/app/user/users/users.component.ts":
/*!**************************************************************!*\
  !*** ./projects/admin/src/app/user/users/users.component.ts ***!
  \**************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./projects/admin/src/app/user/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./projects/admin/src/app/user/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../../../projects/admin/src/app/app.module": [
		"./projects/admin/src/app/app.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/chat-input/chat-input.component.css":
/*!*****************************************************!*\
  !*** ./src/app/chat-input/chat-input.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n  color: #3f51c0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1pbnB1dC9jaGF0LWlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtaW5wdXQvY2hhdC1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMzZjUxYzA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/chat-input/chat-input.component.html":
/*!******************************************************!*\
  !*** ./src/app/chat-input/chat-input.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width\">\n  <mat-form-field class=\"full-width\">\n    <input #input matInput placeholder=\"Type a message\">\n  </mat-form-field>\n</div>\n\n"

/***/ }),

/***/ "./src/app/chat-input/chat-input.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chat-input/chat-input.component.ts ***!
  \****************************************************/
/*! exports provided: ChatInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInputComponent", function() { return ChatInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatInputComponent = /** @class */ (function () {
    function ChatInputComponent() {
    }
    ChatInputComponent.prototype.ngOnInit = function () {
    };
    ChatInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-input',
            template: __webpack_require__(/*! ./chat-input.component.html */ "./src/app/chat-input/chat-input.component.html"),
            styles: [__webpack_require__(/*! ./chat-input.component.css */ "./src/app/chat-input/chat-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatInputComponent);
    return ChatInputComponent;
}());



/***/ }),

/***/ "./src/app/chat-msg/chat-msg.component.css":
/*!*************************************************!*\
  !*** ./src/app/chat-msg/chat-msg.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg {\n  display: flex;\n  position: relative;\n  margin-right: 40px;\n  margin-bottom: 2px;\n  margin-bottom: 2px;\n  margin-left: 10px;\n  margin-top: 18px;\n  opacity: 0;\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-in;\n}\n\n.show {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n\n.card {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border-radius: 10px 20px 0px 20px;\n  padding: 10px 25px;\n  justify-content: center;\n  text-align: center;\n}\n\n.icon {\n  margin-top: 10px;\n  color: white;\n  background: #3f51c0;\n  border-radius: 35px;\n  width: 35px !important;\n  height: 35px !important;\n  display: flex;\n  justify-content: center;\n  padding: 0px;\n  align-items: center;\n  position: absolute;\n  z-index: 1;\n  margin-left: -35px;\n}\n\n.client_icon {\n  margin-top: 10px;\n  color: #3f51c0;\n  background: #ffffff;\n  border-radius: 35px;\n  width: 35px !important;\n  height: 35px !important;\n  display: flex;\n  justify-content: center;\n  padding: 0px;\n  align-items: center;\n  position: absolute;\n  z-index: 1;\n  margin-left: -35px;\n}\n\n.user {\n  background-color: #3f51c0;\n  color: white;\n}\n\n.bot {\n  border-radius: 20px 10px 20px 0px;\n  background-color: white;\n  color: #3f51c0;\n}\n\n.user-msg {\n  margin-left: 40px;\n  margin-right: 10px;\n  flex-direction: row-reverse;\n}\n\n.res_image {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1tc2cvY2hhdC1tc2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiwrQ0FBdUM7RUFBdkMsdUNBQXVDO0VBQXZDLDBEQUF1QztFQUN2Qyx5QkFBeUI7RUFDekIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1tc2cvY2hhdC1tc2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tc2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5cbi5zaG93IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDIwcHggMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMzZjUxYzA7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIHdpZHRoOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbn1cblxuLmNsaWVudF9pY29uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICMzZjUxYzA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIHdpZHRoOiAzNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAtMzVweDtcbn1cblxuLnVzZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWMwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib3Qge1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDEwcHggMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzNmNTFjMDtcbn1cblxuLnVzZXItbXNnIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4ucmVzX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat-msg/chat-msg.component.html":
/*!**************************************************!*\
  !*** ./src/app/chat-msg/chat-msg.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"msg.sendBy\">\n    <div *ngSwitchCase=\"'bot'\" class=\"msg\" [class.show]=\"isVisible\">\n        <mat-card class=\"card bot\">\n            <mat-card class=\"icon\">\n                <i class=\"fa fa-comments\">\n        </i>\n            </mat-card>\n            <mat-card-content>\n                {{msg.text}}\n            </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div *ngSwitchCase=\"'button'\" class=\"msg\" [class.show]=\"isVisible\">\n        <button class=\"bg-info\" (click)=\"btn_Click(msg.text)\">{{msg.text}}</button>\n    </div>\n\n    <div *ngSwitchCase=\"'image'\" class=\"msg\" [class.show]=\"isVisible\">\n        <mat-card class=\"card bot\">\n            <mat-card class=\"icon\">\n                <i class=\"fa fa-comments\">\n        </i>\n            </mat-card>\n            <mat-card-content>\n                <img class=\"res_image\" src=\"{{msg.text}}\">\n            </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div *ngSwitchCase=\"'user'\" class=\"msg user-msg\" [class.show]=\"isVisible\">\n        <mat-card class=\"card user\">\n            <mat-card class=\"client_icon\">\n                <i class=\"fa fa-male\">\n        </i>\n            </mat-card>\n            <mat-card-content>\n                {{msg.text}}\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat-msg/chat-msg.component.ts":
/*!************************************************!*\
  !*** ./src/app/chat-msg/chat-msg.component.ts ***!
  \************************************************/
/*! exports provided: ChatMsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMsgComponent", function() { return ChatMsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatMsgComponent = /** @class */ (function () {
    function ChatMsgComponent(dataService) {
        this.dataService = dataService;
        this.isVisible = false;
    }
    ChatMsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.isVisible = true;
        }, 0);
    };
    ChatMsgComponent.prototype.btn_Click = function (msg) {
        this.dataService.converse(msg);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChatMsgComponent.prototype, "msg", void 0);
    ChatMsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "chat-msg",
            template: __webpack_require__(/*! ./chat-msg.component.html */ "./src/app/chat-msg/chat-msg.component.html"),
            styles: [__webpack_require__(/*! ./chat-msg.component.css */ "./src/app/chat-msg/chat-msg.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ChatMsgComponent);
    return ChatMsgComponent;
}());



/***/ }),

/***/ "./src/app/chat-window/chat-window.component.css":
/*!*******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-window {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #84e4b1 !important;\n  padding: 5px;\n}\n\n.msgArea {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  height: 100%;\n}\n\n.input-area {\n  display: flex;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC13aW5kb3cvY2hhdC13aW5kb3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtd2luZG93L2NoYXQtd2luZG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC13aW5kb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRlNGIxICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm1zZ0FyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlucHV0LWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.html":
/*!********************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"chat-window\">\n  <span class=\"text-right\" id=\"chatClose\">\n    <i class=\"fa fa-times\"></i>\n  </span>\n  <ng-container [ngTemplateOutlet]=\"template\">\n    <div class=\"msgArea\" #msgArea>\n      <ng-container *ngFor=\"let msg of allMessages | async; let i = index;\" [ngTemplateOutlet]=\"defaultMsgTemplate\"\n        [ngTemplateOutletContext]=\"{\n                                       text: msg.content ,\n                                       sendBy: msg.sendBy\n                                    }\">\n\n      </ng-container>\n    </div>\n    <div class=\"input-area\">\n      <ng-container class=\"input-area\" [ngTemplateOutlet]=\"inputTemplate\"></ng-container>\n    </div>\n  </ng-container>\n</mat-card>\n\n<ng-template #defaultMsgTemplate let-text=\"text\" let-object=\"object\" let-sendBy=\"sendBy\">\n  <chat-msg [msg]=\"{text: text,sendBy: sendBy}\"></chat-msg>\n</ng-template>\n\n<ng-template #defaultInputTemplate>\n  <chat-input (change)=\"onChange($event.target);\"></chat-input>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/chat-window/chat-window.component.ts":
/*!******************************************************!*\
  !*** ./src/app/chat-window/chat-window.component.ts ***!
  \******************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatWindowComponent = /** @class */ (function () {
    function ChatWindowComponent(dataService) {
        this.dataService = dataService;
        this.onMsgReceive = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgTemplate = this.msgTemplate ? this.msgTemplate : this.defaultMsgTemplate;
        this.inputTemplate = this.inputTemplate ? this.inputTemplate : this.defaultInputTemplate;
        this.dataService.init(this.token);
        this.allMessages = this.dataService.conversation.asObservable()
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, val) {
            setTimeout(function () {
                _this.msgArea.nativeElement.scrollTop = _this.msgArea.nativeElement.scrollHeight;
            });
            if (_services_data_service__WEBPACK_IMPORTED_MODULE_2__["ESendBy"].bot === val[0].sendBy) {
                _this.onMsgReceive.emit(val[0].content);
            }
            return acc.concat(val);
        }));
        this.msg.subscribe(function (msg) {
            _this.dataService.converse(msg);
        });
    };
    ChatWindowComponent.prototype.onChange = function (target) {
        this.msg.next(target.value);
        target.value = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "msgTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "inputTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], ChatWindowComponent.prototype, "msg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChatWindowComponent.prototype, "token", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChatWindowComponent.prototype, "onMsgReceive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('msgArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatWindowComponent.prototype, "msgArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('defaultMsgTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "defaultMsgTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('defaultInputTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ChatWindowComponent.prototype, "defaultInputTemplate", void 0);
    ChatWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'Chat-bot',
            template: __webpack_require__(/*! ./chat-window.component.html */ "./src/app/chat-window/chat-window.component.html"),
            styles: [__webpack_require__(/*! ./chat-window.component.css */ "./src/app/chat-window/chat-window.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "./src/app/client/ApiAiClient.ts":
/*!***************************************!*\
  !*** ./src/app/client/ApiAiClient.ts ***!
  \***************************************/
/*! exports provided: ApiAiConstants, ApiAiClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClient", function() { return ApiAiClient; });
/* harmony import */ var _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiAiConstants */ "./src/app/client/ApiAiConstants.ts");
/* harmony import */ var _TextRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextRequest */ "./src/app/client/TextRequest.ts");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors */ "./src/app/client/Errors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"]; });





var ApiAiClient = /** @class */ (function () {
    function ApiAiClient(options) {
        if (!options || !options.accessToken) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__["ApiAiClientConfigurationError"]("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
        this.uuid = options.uuid || this.guid();
    }
    ApiAiClient.prototype.textRequest = function (query, options) {
        if (options === void 0) { options = {}; }
        if (!query) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__["ApiAiClientConfigurationError"]("Query should not be empty");
        }
        options.message = query;
        return new _TextRequest__WEBPACK_IMPORTED_MODULE_1__["default"](this, options).perform();
    };
    ApiAiClient.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ApiAiClient.prototype.getApiVersion = function () {
        return (this.apiVersion) ? this.apiVersion : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_API_VERSION;
    };
    ApiAiClient.prototype.getApiLang = function () {
        return (this.apiLang) ? this.apiLang : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_CLIENT_LANG;
    };
    ApiAiClient.prototype.getApiBaseUrl = function () {
        return (this.apiBaseUrl) ? this.apiBaseUrl : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
    };
    ApiAiClient.prototype.setuuid = function (uuid) {
        this.uuid = uuid;
    };
    ApiAiClient.prototype.getuuid = function () {
        return this.uuid;
    };
    /**
     * generates new random uuid
     * @returns {string}
     */
    ApiAiClient.prototype.guid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    };
    return ApiAiClient;
}());



/***/ }),

/***/ "./src/app/client/ApiAiConstants.ts":
/*!******************************************!*\
  !*** ./src/app/client/ApiAiConstants.ts ***!
  \******************************************/
/*! exports provided: ApiAiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return ApiAiConstants; });
var ApiAiConstants;
(function (ApiAiConstants) {
    var AVAILABLE_LANGUAGES;
    (function (AVAILABLE_LANGUAGES) {
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["EN"] = "en"] = "EN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["DE"] = "de"] = "DE";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ES"] = "es"] = "ES";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT_BR"] = "pt-BR"] = "PT_BR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_HK"] = "zh-HK"] = "ZH_HK";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_CN"] = "zh-CN"] = "ZH_CN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_TW"] = "zh-TW"] = "ZH_TW";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["NL"] = "nl"] = "NL";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["FR"] = "fr"] = "FR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["IT"] = "it"] = "IT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["JA"] = "ja"] = "JA";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["KO"] = "ko"] = "KO";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT"] = "pt"] = "PT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["RU"] = "ru"] = "RU";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["UK"] = "uk"] = "UK";
    })(AVAILABLE_LANGUAGES = ApiAiConstants.AVAILABLE_LANGUAGES || (ApiAiConstants.AVAILABLE_LANGUAGES = {}));
    ApiAiConstants.DEFAULT_BASE_URL = "http://192.168.1.142:5000/webhooks/chatroom/conversations/";
    ApiAiConstants.DEFAULT_API_VERSION = "20190707";
    ApiAiConstants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.EN;
})(ApiAiConstants || (ApiAiConstants = {}));


/***/ }),

/***/ "./src/app/client/Errors.ts":
/*!**********************************!*\
  !*** ./src/app/client/Errors.ts ***!
  \**********************************/
/*! exports provided: ApiAiBaseError, ApiAiClientConfigurationError, ApiAiRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiBaseError", function() { return ApiAiBaseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClientConfigurationError", function() { return ApiAiClientConfigurationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiRequestError", function() { return ApiAiRequestError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ApiAiBaseError = /** @class */ (function (_super) {
    __extends(ApiAiBaseError, _super);
    function ApiAiBaseError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.stack = new Error().stack;
        return _this;
    }
    return ApiAiBaseError;
}(Error));

var ApiAiClientConfigurationError = /** @class */ (function (_super) {
    __extends(ApiAiClientConfigurationError, _super);
    function ApiAiClientConfigurationError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ApiAiClientConfigurationError";
        return _this;
    }
    return ApiAiClientConfigurationError;
}(ApiAiBaseError));

var ApiAiRequestError = /** @class */ (function (_super) {
    __extends(ApiAiRequestError, _super);
    function ApiAiRequestError(message, code) {
        if (code === void 0) { code = null; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.code = code;
        _this.name = "ApiAiRequestError";
        return _this;
    }
    return ApiAiRequestError;
}(ApiAiBaseError));



/***/ }),

/***/ "./src/app/client/Request.ts":
/*!***********************************!*\
  !*** ./src/app/client/Request.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./src/app/client/Errors.ts");
/* harmony import */ var _XhrRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XhrRequest */ "./src/app/client/XhrRequest.ts");


var Request = /** @class */ (function () {
    function Request(apiAiClient, options) {
        this.apiAiClient = apiAiClient;
        this.options = options;
        // this.options.lang = this.apiAiClient.getApiLang();
        this.options.uuid = this.apiAiClient.getuuid();
        // this.uri = this.apiAiClient.getApiBaseUrl() + "query?v=" + this.apiAiClient.getApiVersion();
        this.uri = this.apiAiClient.getApiBaseUrl() + this.options.uuid + "/say";
        this.requestMethod = _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].Method.GET;
        this.headers = {
            Authorization: "Bearer " + this.apiAiClient.getAccessToken()
        };
    }
    Request.handleSuccess = function (xhr) {
        return Promise.resolve(JSON.parse(xhr.responseText));
    };
    Request.handleError = function (xhr) {
        var error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](null);
        try {
            var serverResponse = JSON.parse(xhr.responseText);
            if (serverResponse.status && serverResponse.status.errorDetails) {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](serverResponse.status.errorDetails, serverResponse.status.code);
            }
            else {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
            }
        }
        catch (e) {
            error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
        }
        return Promise.reject(error);
    };
    Request.prototype.perform = function (overrideOptions) {
        if (overrideOptions === void 0) { overrideOptions = null; }
        var options = overrideOptions ? overrideOptions : this.options;
        _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(this.requestMethod, this.uri, options, this.headers);
        this.uri =
            this.apiAiClient.getApiBaseUrl() +
                this.options.uuid +
                "/log?nocache=" +
                Date.now();
        return _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(this.requestMethod, this.uri, options, this.headers)
            .then(Request.handleSuccess.bind(this))
            .catch(Request.handleError.bind(this));
    };
    return Request;
}());
/* harmony default export */ __webpack_exports__["default"] = (Request);


/***/ }),

/***/ "./src/app/client/TextRequest.ts":
/*!***************************************!*\
  !*** ./src/app/client/TextRequest.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./src/app/client/Request.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextRequest = /** @class */ (function (_super) {
    __extends(TextRequest, _super);
    function TextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextRequest;
}(_Request__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (TextRequest);


/***/ }),

/***/ "./src/app/client/XhrRequest.ts":
/*!**************************************!*\
  !*** ./src/app/client/XhrRequest.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var XhrRequest = /** @class */ (function () {
    function XhrRequest() {
    }
    // Method that performs the ajax request
    XhrRequest.ajax = function (method, url, args, headers, options) {
        if (args === void 0) { args = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        // Creating a promise
        return new Promise(function (resolve, reject) {
            // Instantiates the XMLHttpRequest
            var client = XhrRequest.createXMLHTTPObject();
            var uri = url;
            var payload = null;
            // Add given payload to get request
            if (args && (method === XhrRequest.Method.GET)) {
                uri += "?";
                var argcount = 0;
                for (var key in args) {
                    if (args.hasOwnProperty(key)) {
                        if (argcount++) {
                            uri += "&";
                        }
                        uri += encodeURIComponent(key) + "=" + encodeURIComponent(args[key]);
                    }
                }
            }
            else if (args) {
                if (!headers) {
                    headers = {};
                }
                headers["Content-Type"] = "application/json; charset=utf-8";
                payload = JSON.stringify(args);
            }
            for (var key in options) {
                if (key in client) {
                    client[key] = options[key];
                }
            }
            // hack: method[method] is somewhat like .toString for enum Method
            // should be made in normal way
            client.open(XhrRequest.Method[method], uri, true);
            // Add given headers
            if (headers) {
                for (var key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        client.setRequestHeader(key, headers[key]);
                    }
                }
            }
            payload ? client.send(payload) : client.send();
            client.onload = function () {
                if (client.status >= 200 && client.status < 300) {
                    // Performs the function "resolve" when this.status is equal to 2xx
                    resolve(client);
                }
                else {
                    // Performs the function "reject" when this.status is different than 2xx
                    reject(client);
                }
            };
            client.onerror = function () {
                reject(client);
            };
        });
    };
    XhrRequest.get = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.GET, url, payload, headers, options);
    };
    XhrRequest.post = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.POST, url, payload, headers, options);
    };
    XhrRequest.put = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.PUT, url, payload, headers, options);
    };
    XhrRequest.delete = function (url, payload, headers, options) {
        if (payload === void 0) { payload = null; }
        if (headers === void 0) { headers = null; }
        if (options === void 0) { options = {}; }
        return XhrRequest.ajax(XhrRequest.Method.DELETE, url, payload, headers, options);
    };
    XhrRequest.createXMLHTTPObject = function () {
        var xmlhttp = null;
        for (var _i = 0, _a = XhrRequest.XMLHttpFactories; _i < _a.length; _i++) {
            var i = _a[_i];
            try {
                xmlhttp = i();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    };
    XhrRequest.XMLHttpFactories = [
        function () { return new XMLHttpRequest(); },
        function () { return new window["ActiveXObject"]("Msxml2.XMLHTTP"); },
        function () { return new window["ActiveXObject"]("Msxml3.XMLHTTP"); },
        function () { return new window["ActiveXObject"]("Microsoft.XMLHTTP"); }
    ];
    return XhrRequest;
}());
(function (XhrRequest) {
    var Method;
    (function (Method) {
        Method[Method["GET"] = "GET"] = "GET";
        Method[Method["POST"] = "POST"] = "POST";
        Method[Method["PUT"] = "PUT"] = "PUT";
        Method[Method["DELETE"] = "DELETE"] = "DELETE";
    })(Method = XhrRequest.Method || (XhrRequest.Method = {}));
})(XhrRequest || (XhrRequest = {}));
/* harmony default export */ __webpack_exports__["default"] = (XhrRequest);


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: Message, ESendBy, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESendBy", function() { return ESendBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_ApiAiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/ApiAiClient */ "./src/app/client/ApiAiClient.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Ai api Client

// RxJs modules

var Message = /** @class */ (function () {
    function Message(content, sendBy) {
        this.content = content;
        this.sendBy = sendBy;
    }
    return Message;
}());

var ESendBy;
(function (ESendBy) {
    ESendBy["user"] = "user";
    ESendBy["bot"] = "bot";
    ESendBy["button"] = "button";
    ESendBy["image"] = "image";
})(ESendBy || (ESendBy = {}));
var DataService = /** @class */ (function () {
    function DataService() {
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.msg_cnt = 1;
    }
    DataService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, ESendBy.user);
        this.update(userMessage);
        return this.client.textRequest(msg).then(function (res) {
            // chat bot message count
            var res_cnt = Object.keys(res).length;
            // prev message count and respose chat bot message diff_cnt
            var diff_cnt = res_cnt - _this.msg_cnt;
            // const speech = res.result.fulfillment.speech;
            var speech = "";
            // const botMessage = new Message(speech, ESendBy.bot);
            var botMessage;
            for (var index = 0; index < diff_cnt; index++) {
                switch (res[_this.msg_cnt + index].message.type) {
                    case "text":
                        speech = res[_this.msg_cnt + index].message.text;
                        botMessage = new Message(speech, ESendBy.bot);
                        _this.update(botMessage);
                        break;
                    case "button":
                        var btn_cnt = Object.keys(res[_this.msg_cnt + index].message.buttons)
                            .length;
                        for (var btn_index = 0; btn_index < btn_cnt; btn_index++) {
                            speech =
                                res[_this.msg_cnt + index].message.buttons[btn_index].title;
                            botMessage = new Message(speech, ESendBy.button);
                            _this.update(botMessage);
                        }
                        break;
                    case "image":
                        speech = res[_this.msg_cnt + index].message.image;
                        botMessage = new Message(speech, ESendBy.image);
                        _this.update(botMessage);
                        break;
                    default:
                        speech = "What do you want correctly?";
                        botMessage = new Message(speech, ESendBy.bot);
                        _this.update(botMessage);
                        break;
                }
            }
            _this.msg_cnt = res_cnt + 1;
        });
    };
    DataService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    DataService.prototype.init = function (token) {
        this.client = new _client_ApiAiClient__WEBPACK_IMPORTED_MODULE_1__["ApiAiClient"]({ accessToken: token });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/main/app.component.css":
/*!************************************!*\
  !*** ./src/main/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/main/app.component.html":
/*!*************************************!*\
  !*** ./src/main/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/main/app.component.ts":
/*!***********************************!*\
  !*** ./src/main/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/main/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/main/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/main/app.module.ts":
/*!********************************!*\
  !*** ./src/main/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/app-routing.module */ "./src/main/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/main/app.component.ts");
/* harmony import */ var _app_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/chat-window/chat-window.component */ "./src/app/chat-window/chat-window.component.ts");
/* harmony import */ var _app_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/chat-msg/chat-msg.component */ "./src/app/chat-msg/chat-msg.component.ts");
/* harmony import */ var _app_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/chat-input/chat-input.component */ "./src/app/chat-input/chat-input.component.ts");
/* harmony import */ var _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../projects/admin/src/app/app.module */ "./projects/admin/src/app/app.module.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/home/home.component */ "./src/main/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _app_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_9__["ChatWindowComponent"],
                _app_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_10__["ChatMsgComponent"],
                _app_chat_input_chat_input_component__WEBPACK_IMPORTED_MODULE_11__["ChatInputComponent"],
                _app_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_12__["AdminSharedModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/main/app/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/main/app/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../projects/admin/src/app/app.module */ "./projects/admin/src/app/app.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/main/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    },
    {
        path: 'admin',
        loadChildren: '../../../projects/admin/src/app/app.module#AdminSharedModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                _projects_admin_src_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AdminSharedModule"].forRoot()
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/main/app/connection.service.ts":
/*!********************************************!*\
  !*** ./src/main/app/connection.service.ts ***!
  \********************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectionService = /** @class */ (function () {
    function ConnectionService(http) {
        this.http = http;
        this.url = 'http://192.168.1.147:4000/home';
    }
    ConnectionService.prototype.sendMessage = function (messageContent) {
        var obj = {
            fd_name: messageContent.name,
            fd_email: messageContent.email,
            fd_subject: messageContent.subject,
            fd_message: messageContent.message
        };
        return this.http.post(this.url + "/feedback", obj);
    };
    ConnectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ConnectionService);
    return ConnectionService;
}());



/***/ }),

/***/ "./src/main/app/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/main/app/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-window {\r\n    display: flex;\r\n    min-height: 450px;\r\n    max-height: 500px;\r\n    min-width: 370px;\r\n    max-width: 400px;\r\n}\r\n\r\n.message {\r\n    display: flex;\r\n    border-radius: 50px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.mychatbot {\r\n    display: none;\r\n    z-index: 1000;\r\n    position: fixed;\r\n    bottom: 80px;\r\n    left: 87px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL21haW4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtd2luZG93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzNzBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5teWNoYXRib3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDgwcHg7XHJcbiAgICBsZWZ0OiA4N3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/main/app/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/main/app/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n    <div class=\"container-fluid\">\n        <div id=\"logo\" class=\"pull-left\">\n            <h1>\n                <a href=\"#intro\" class=\"scrollto\">Nine Sense</a>\n            </h1>\n        </div>\n        <nav id=\"nav-menu-container\">\n            <ul class=\"nav-menu\">\n                <li class=\"menu-active\"><a href=\"#intro\">Home</a></li>\n                <li><a href=\"#about\">About Us</a></li>\n                <li><a href=\"#services\">Services</a></li>\n                <li><a href=\"#portfolio\">Portfolio</a></li>\n                <li><a href=\"#contact\">Contact</a></li>\n            </ul>\n        </nav>\n    </div>\n</header>\n\n<!--==========================\n  Intro Section\n============================-->\n<section id=\"intro\">\n    <div class=\"intro-container\">\n        <div id=\"introCarousel\" class=\"carousel  slide carousel-fade\" data-ride=\"carousel\">\n            <ol class=\"carousel-indicators\"></ol>\n            <div class=\"carousel-inner\" role=\"listbox\">\n\n                <div class=\"carousel-item active\" style=\"background-image: url('assets/img/intro-carousel/1.jpg');\">\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-content\">\n                            <h2>Nine Sense Company is smart and wonderful.</h2>\n                            <p>We are ready for you anytime.</p>\n                            <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"carousel-item\" style=\"background-image: url('assets/img/intro-carousel/2.jpg');\">\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-content\">\n                            <h2>AI Face Recognition</h2>\n                            <p>Face Recognition – 95%+ in Large Scale by Machine Learning\n                            </p>\n                            <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"carousel-item\" style=\"background-image: url('assets/img/intro-carousel/3.jpg');\">\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-content\">\n                            <h2>Scraping & Data Science</h2>\n                            <p>Data/Web Scraping by Python, Multi Processing, NLP, Machine Learning, Pandas, Matplotlib, Time Series Analysis\n                            </p>\n                            <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"carousel-item\" style=\"background-image: url('assets/img/intro-carousel/4.jpg');\">\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-content\">\n                            <h2>eBusiness</h2>\n                            <p>Bizflow BPM / BPMN, BPR, BPM Based Global SM system, Java Based EP</p>\n                            <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"carousel-item\" style=\"background-image: url('assets/img/intro-carousel/5.jpg');\">\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-content\">\n                            <h2>Mobile</h2>\n                            <p>React Native / Ionic / Xamarine, Native Apps, AI Sensitive, Firebase, UI / UX</p>\n                            <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"carousel-item\" style=\"background-image: url('assets/img/intro-carousel/6.jpg');\">\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-content\">\n                            <h2>IP Surveillance</h2>\n                            <p>A State of the art – Super Speed Video Transcoding without GPU, H.264 / H.265 / VP9, All in one: Video Streaming Protocols, Low Latency, IP Camera, Network Video Recorder, AI</p>\n                            <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"carousel-item\" style=\"background-image: url('assets/img/intro-carousel/7.jpg');\">\n                    <div class=\"carousel-container\">\n                        <div class=\"carousel-content\">\n                            <h2>AI Chatbot And Speech Recognition</h2>\n                            <p>Python, NLTK, SpaCy, Tensorflow, scikit-learn, Chatbot – Rasa, Dialogflow, UI/UX, Bot Integration, No repeated fallback, Speech Recognition – No Delay in real time\n                            </p>\n                            <a href=\"#featured-services\" class=\"btn-get-started scrollto\">Get Started</a>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <a class=\"carousel-control-prev\" href=\"#introCarousel\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon ion-chevron-left\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n\n            <a class=\"carousel-control-next\" href=\"#introCarousel\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon ion-chevron-right\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n\n        </div>\n    </div>\n</section>\n<!-- #intro -->\n\n<main id=\"main\">\n\n    <!--==========================\n    Featured Services Section\n  ============================-->\n    <section id=\"featured-services\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-lg-4 box\">\n                    <i class=\"ion-ios-people-outline\"></i>\n                    <h4 class=\"title\"><a href=\"\">Company Introduction</a></h4>\n                    <p class=\"description\">\n                        Nova Cambodia Inc was renamed to Ninesenses Inc. Our company is responsing speedly to new technology, specialized our talents is going ahead in the talent's era of today.\n                    </p>\n                </div>\n\n                <div class=\"col-lg-4 box box-bg\">\n                    <i class=\"ion-ios-world-outline\"></i>\n                    <h4 class=\"title\"><a href=\"\">Our Solgan</a></h4>\n                    <p class=\"description\">\n                        Nine Sense in Everything !\n                        <br>\n                        <br> Nothing is impossible !\n                    </p>\n                </div>\n\n                <div class=\"col-lg-4 box\">\n                    <i class=\"ion-ios-time-outline\"></i>\n                    <h4 class=\"title\"><a href=\"\">Hollo</a></h4>\n                    <p class=\"description\">Thank you for your visiting our homepage. We want you will spend beneficial time.</p>\n                </div>\n\n            </div>\n        </div>\n    </section>\n    <!-- #featured-services -->\n\n    <!--==========================\n    About Us Section\n  ============================-->\n    <section id=\"about\">\n        <div class=\"container\">\n\n            <header class=\"section-header\">\n                <h3>About Us</h3>\n                <p>\n                    We believe that AI will unlock another era of world development, and that the R&D and deployment of computer vision and deep learning technologies will redefine human life as we know it and establish a new connection between us and the world at large.\n                    Not only will this transform society as a whole, but it will push mankind forward as well.\n                </p>\n            </header>\n\n            <div class=\"row about-cols\">\n\n                <div class=\"col-md-4 wow fadeInUp\">\n                    <div class=\"about-col\">\n                        <div class=\"img\">\n                            <img src=\"assets/img/about-mission.jpg\" alt=\"\" class=\"img-fluid\">\n                            <div class=\"icon\"><i class=\"ion-ios-speedometer-outline\"></i></div>\n                        </div>\n                        <h2 class=\"title\"><a href=\"#\">Our Mission</a></h2>\n                        <p>\n                            Create, apply, and share intelligence to advance causes that benefit the human society\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"0.1s\">\n                    <div class=\"about-col\">\n                        <div class=\"img\">\n                            <img src=\"assets/img/about-plan.jpg\" alt=\"\" class=\"img-fluid\">\n                            <div class=\"icon\"><i class=\"ion-ios-list-outline\"></i></div>\n                        </div>\n                        <h2 class=\"title\"><a href=\"#\">Our Plan</a></h2>\n                        <p>\n                            Leading new technology, Corporating Market partnership, Owning State of the art in the AI\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4 wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <div class=\"about-col\">\n                        <div class=\"img\">\n                            <img src=\"assets/img/about-vision.jpg\" alt=\"\" class=\"img-fluid\">\n                            <div class=\"icon\"><i class=\"ion-ios-eye-outline\"></i></div>\n                        </div>\n                        <h2 class=\"title\"><a href=\"#\">Our Vision</a></h2>\n                        <p>\n                            The technology and solution for whole world. Creative Ideas, DevOps, Solutions, Artificial Intelligences, Drastic actions\n                        </p>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </section>\n    <!-- #about -->\n\n    <!--==========================\n    Services Section\n  ============================-->\n    <section id=\"services\">\n        <div class=\"container\">\n\n            <header class=\"section-header wow fadeInUp\">\n                <h3>Services</h3>\n                <p>\n                    We are supporting Surveillance, Enterprise Business, Business Process, Security, Monitoring Solutions. Talented AI will be in every solutions.\n                </p>\n            </header>\n\n            <div class=\"row\">\n\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\">\n                        <i class=\"ion-ios-analytics-outline\"></i>\n                    </div>\n                    <h4 class=\"title\">\n                        <a href=\"\">Scraping & Data Science</a>\n                    </h4>\n                    <p class=\"description\">\n                        Web & Data Scraping\n                        <br> Technologies Trend Analysis\n                        <br> Data Mining\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\"><i class=\"ion-ios-bookmarks-outline\"></i></div>\n                    <h4 class=\"title\"><a href=\"\">AI</a></h4>\n                    <p class=\"description\">\n                        Chatbot\n                        <br> Face Recognition\n                        <br> Speech Recognition\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\"><i class=\"ion-ios-paper-outline\"></i></div>\n                    <h4 class=\"title\"><a href=\"\">eGovernment</a></h4>\n                    <p class=\"description\">\n                        NII (National Information Infrastructure) & IT Center\n                        <br> PAIS (Provincial Administration Information System)\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\"><i class=\"ion-ios-speedometer-outline\"></i></div>\n                    <h4 class=\"title\"><a href=\"\">eBusiness</a></h4>\n                    <p class=\"description\">\n                        BPM (Business Process Management)\n                        <br> GSM Portal (Global Software Maintenance Portal)\n                        <br> Enterprise Portal\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\"><i class=\"ion-social-apple-outline\"></i></div>\n                    <h4 class=\"title\"><a href=\"\">Mobile</a></h4>\n                    <p class=\"description\">\n                        Chatbot\n                        <br> Simple and Smart Homepage\n                        <br> Mobile IP Surveillance\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\"><i class=\"ion-ios-barcode-outline\"></i></div>\n                    <h4 class=\"title\"><a href=\"\">Web</a></h4>\n                    <p class=\"description\">\n                        Respnsive and Progressive Homepage\n                        <br> Chatbot Integration\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\"><i class=\"ion-ios-videocam-outline\"></i></div>\n                    <h4 class=\"title\"><a href=\"\">IP Surveillance</a></h4>\n                    <p class=\"description\">IP Camera, NVR, NAS NVR\n                        <br> Mobile\n                        <br> CubeLive\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 box wow bounceInUp\" data-wow-delay=\"0.1s\" data-wow-duration=\"1.4s\">\n                    <div class=\"icon\"><i class=\"ion-ios-box-outline\"></i></div>\n                    <h4 class=\"title\"><a href=\"\">DB Solution</a></h4>\n                    <p class=\"description\">\n                        Orange, Data Tracer / Masker\n                        <br> Tentao ETL: Data Integration, Pentaho open source based\n                        <br> EAS : Email Archiving System\n                    </p>\n                </div>\n\n            </div>\n\n        </div>\n    </section>\n    <!-- #services -->\n\n    <!--==========================\n    Call To Action Section\n  ============================-->\n    <section id=\"call-to-action\" class=\"wow fadeIn\">\n        <div class=\"container text-center\">\n            <h3>Call To Action</h3>\n            <p>\n                Please once touch us, we will do best for you. Your actions will be creative and drastic , you will have a great chance for world innovations with us. We are already prepared. Please..\n            </p>\n            <a class=\"cta-btn scrollto\" href=\"#contact\">Call To Action</a>\n        </div>\n    </section>\n    <!-- #call-to-action -->\n\n    <!--==========================\n    Skills Section\n  ============================-->\n    <section id=\"skills\">\n        <div class=\"container\">\n\n            <header class=\"section-header\">\n                <h3>Our Skills</h3>\n            </header>\n\n            <div class=\"skills-content\">\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"skill\">Artificial Intelligence</span>\n                    </div>\n                </div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"97\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"skill\">IT Process: DevOps Full Stack</span>\n                    </div>\n                </div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"93\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"skill\">Languages: Powerful Python, MEAN And MERN Full Stackl, Web (Angular, React), Mobile\n            (React Native, Ionic, Native App)</span>\n                    </div>\n                </div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" aria-valuenow=\"91\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"skill\">Interesting: IoT, Odoo ERP</span>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </section>\n\n    <!--==========================\n    Portfolio Section\n  ============================-->\n    <section id=\"portfolio\" class=\"section-bg\">\n        <div class=\"container\">\n\n            <header class=\"section-header\">\n                <h3 class=\"section-title\">Our Portfolio</h3>\n            </header>\n\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <ul id=\"portfolio-flters\">\n                        <li data-filter=\"*\" class=\"filter-active\">All</li>\n                        <li data-filter=\".filter-sdc\">Data Science</li>\n                        <li data-filter=\".filter-ai\">AI</li>\n                        <li data-filter=\".filter-eg\">eGovernment</li>\n                        <li data-filter=\".filter-eb\">eBusiness</li>\n                        <li data-filter=\".filter-app\">Mobile</li>\n                        <li data-filter=\".filter-web\">Web</li>\n                        <li data-filter=\".filter-ip\">IP Surveillance</li>\n                        <li data-filter=\".filter-db\">DB</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"row portfolio-container\">\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-sdc wow fadeInUp\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/sdc1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/sdc1.jpg\" data-lightbox=\"portfolio\" data-title=\"Site Analysis\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">Site Analysis</a></h4>\n                            <p>Scraping & Data Science</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-sdc wow fadeInUp\" data-wow-delay=\"0.1s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/sdc2.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/sdc2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Service & Technology\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">Service & Technology</a></h4>\n                            <p>Scraping & Data Mining</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-ai wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/ai1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/ai1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"ai 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">Face Recognition</a></h4>\n                            <p>AI</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-ai wow fadeInUp\" data-wow-delay=\"0.3s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/ai2.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/ai2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"ai 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">Speech Recognition</a></h4>\n                            <p>AI</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-eg wow fadeInUp\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/eg1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/eg1.jpg\" data-lightbox=\"portfolio\" data-title=\"Site Analysis\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">NII & IT Center</a></h4>\n                            <p>eGovernment</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-eg wow fadeInUp\" data-wow-delay=\"0.1s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/eg2.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/eg2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Service & Technology\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">PAIS</a></h4>\n                            <p>eGovernment</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-eb wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/eb1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/eb1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"BPM\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">BPM</a></h4>\n                            <p>eBusiness</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-eb wow fadeInUp\" data-wow-delay=\"0.3s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/eb2.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/eb2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"GSM, Enterprise Portal\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">GSM, Enterprise Portal</a></h4>\n                            <p>eBusiness</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-app wow fadeInUp\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/app1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/app1.jpg\" data-lightbox=\"portfolio\" data-title=\"App 1\" class=\"link-preview\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">App 1</a></h4>\n                            <p>App</p>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"col-lg-3 col-md-6 portfolio-item filter-app wow fadeInUp\" data-wow-delay=\"0.1s\">\n        <div class=\"portfolio-wrap\">\n          <figure>\n            <img src=\"assets/img/portfolio/app2.jpg\" class=\"img-fluid\" alt=\"\">\n            <a href=\"assets/img/portfolio/app2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"App 2\"\n              title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n          </figure>\n          <div class=\"portfolio-info\">\n            <h4><a href=\"#\">App 2</a></h4>\n            <p>App</p>\n          </div>\n        </div>\n      </div> -->\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.1s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/web1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/web1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 1\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">Web 1</a></h4>\n                            <p>Web</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-web wow fadeInUp\" data-wow-delay=\"0.2s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/web2.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/web2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Web 2\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">Web 2</a></h4>\n                            <p>Web</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-ip wow fadeInUp\" data-wow-delay=\"0.3s\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/ip1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/ip1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"IP Camera, NVR\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">IP Camera, NVR</a></h4>\n                            <p>IP Surveillance</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-ip wow fadeInUp\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/ip2.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/ip2.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"IP Camera, NVR\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">NVR, CubeLive</a></h4>\n                            <p>IP Surveillance</p>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 portfolio-item filter-db wow fadeInUp\">\n                    <div class=\"portfolio-wrap\">\n                        <figure>\n                            <img src=\"assets/img/portfolio/db1.jpg\" class=\"img-fluid\" alt=\"\">\n                            <a href=\"assets/img/portfolio/db1.jpg\" class=\"link-preview\" data-lightbox=\"portfolio\" data-title=\"Orange, EAS\" title=\"Preview\"><i class=\"ion ion-eye\"></i></a>\n                        </figure>\n                        <div class=\"portfolio-info\">\n                            <h4><a href=\"#\">Orange, EAS</a></h4>\n                            <p>DB Solution</p>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </section>\n    <!-- #portfolio -->\n\n    <!--==========================\n    Clients Section\n  ============================-->\n    <section id=\"clients\" class=\"wow fadeInUp\">\n        <div class=\"container\">\n\n            <header class=\"section-header\">\n                <h3>Our Partners</h3>\n            </header>\n\n            <div class=\"owl-carousel clients-carousel\">\n                <img src=\"assets/img/clients/client-1.png\" alt=\"\">\n                <img src=\"assets/img/clients/client-2.png\" alt=\"\">\n                <img src=\"assets/img/clients/client-3.png\" alt=\"\">\n                <img src=\"assets/img/clients/client-4.png\" alt=\"\">\n                <img src=\"assets/img/clients/client-5.png\" alt=\"\">\n                <img src=\"assets/img/clients/client-6.png\" alt=\"\">\n                <img src=\"assets/img/clients/client-7.png\" alt=\"\">\n                <img src=\"assets/img/clients/client-8.png\" alt=\"\">\n            </div>\n\n        </div>\n    </section>\n    <!-- #clients -->\n\n    <!--==========================\n    Clients Section\n  ============================-->\n\n    <!--==========================\n    Contact Section\n  ============================-->\n    <section id=\"contact\" class=\"section-bg wow fadeInUp\">\n        <div class=\"container\">\n\n            <div class=\"section-header\">\n                <h3>Contact Us</h3>\n                <p>Contact us anytime, We are ready for you.</p>\n            </div>\n\n            <div class=\"row contact-info\">\n\n                <div class=\"col-md-4\">\n                    <div class=\"contact-address\">\n                        <i class=\"ion-ios-location-outline\"></i>\n                        <h3>Address</h3>\n                        <address>Trung Morn Street, Phnom Phen, Cambodia</address>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"contact-phone\">\n                        <i class=\"ion-ios-telephone-outline\"></i>\n                        <h3>Phone Number</h3>\n                        <p><a href=\"tel:+85501584042\">+ 855 967 288 503</a></p>\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"contact-email\">\n                        <i class=\"ion-ios-email-outline\"></i>\n                        <h3>Email</h3>\n                        <p><a href=\"xj588588@gmail.com\">aisense.vision@gmail.com</a></p>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"form\">\n                <form [formGroup]=\"angForm\" novalidate (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Your Name\" formControlName=\"name\" #name />\n                    </div>\n                    <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger text-center\">\n                        <div *ngIf=\"angForm.controls['name'].errors.required\">\n                            * Name is required.\n                        </div>\n                        <div *ngIf=\"angForm.controls['name'].errors.minlength\">\n                            * More than 2 letters.\n                        </div>\n                        <div *ngIf=\"angForm.controls['name'].errors.pattern\">\n                            * Invalid pattern. (Only a-z, A-Z and 0-9)\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Your Email\" formControlName=\"email\" #email />\n                    </div>\n                    <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger text-center\">\n                        <div *ngIf=\"angForm.controls['email'].errors.required\">\n                            * Email is required.\n                        </div>\n                        <div *ngIf=\"angForm.controls['email'].errors.email\">\n                            * Invalid Email Address.\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\" formControlName=\"subject\" #subject />\n                    </div>\n                    <div *ngIf=\"angForm.controls['subject'].invalid && (angForm.controls['subject'].dirty || angForm.controls['subject'].touched)\" class=\"alert alert-danger text-center\">\n                        <div *ngIf=\"angForm.controls['subject'].errors.required\">\n                            * Subject is required.\n                        </div>\n                        <div *ngIf=\"angForm.controls['subject'].errors.minlength\">\n                            * More than 5 letters.\n                        </div>\n                        <div *ngIf=\"angForm.controls['subject'].errors.pattern\">\n                            * Invalid pattern. (Only a-z, A-Z and 0-9)\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" name=\"message\" rows=\"5\" placeholder=\"Message\" formControlName=\"message\" #message></textarea>\n                    </div>\n                    <div *ngIf=\"angForm.controls['message'].invalid && (angForm.controls['message'].dirty || angForm.controls['message'].touched)\" class=\"alert alert-danger text-center\">\n                        <div *ngIf=\"angForm.controls['message'].errors.required\">\n                            * Message is required.\n                        </div>\n                        <div *ngIf=\"angForm.controls['message'].errors.minlength\">\n                            * More than 9 letters.\n                        </div>\n                    </div>\n                    <div class=\"text-center\">\n                        <button type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\">\n                        <i class=\"fa fa-send-o\"></i> Send Message\n                      </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </section>\n\n</main>\n\n<!--==========================\n  Footer\n============================-->\n<footer id=\"footer\">\n    <div class=\"footer-top\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-lg-4 col-md-6 footer-info\">\n                    <h3>Nine Sense</h3>\n                    <p>\n                        We believe that AI will unlock another era of world development, and that the R&D and deployment of computer vision and deep learning technologies will redefine human life as we know it and establish a new connection between us and the world at large.\n                        Not only will this transform society as a whole, but it will push mankind forward as well.\n                    </p>\n                </div>\n                <div class=\"col-lg-4 col-md-6 footer-links\">\n                    <h4>Useful Links</h4>\n                    <ul class=\"useful-link\">\n                        <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#intro\">Home</a></li>\n                        <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#about\">About us</a></li>\n                        <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#services\">Services</a></li>\n                        <li><i class=\"ion-ios-arrow-right\"></i> <a href=\"#portfolio\">Portfolio</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-4 col-md-6 footer-contact\">\n                    <h4>Contact Us</h4>\n                    <p>\n                        Trung Morn Street <br> Phnom phen, <br> Cambodia <br>\n                        <strong>Phone:</strong> +855 967 288 503<br>\n                        <strong>Email:</strong> aisense.vision@gmail.com<br>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"copyright\">\n            &copy; Copyright <strong>Nine Sense - 2019</strong>. All Rights Reserved\n        </div>\n    </div>\n</footer>\n\n<a href=\"#\" class=\"back-to-top\"><i class=\"fa fa-chevron-up\"></i></a>\n<span class=\"chat_bot\" id=\"chatbot\">\n<i class=\"fa fa-comments\"></i>\n</span>\n\n<div class=\"mychatbot\" id=\"mychatbot\">\n    <Chat-bot class=\"chat-window\" [token]=\"'0146bb6bc73f4ef4bbf44e82aa6af957'\" [msg]=\"msg\" [msgTemplate]='message' [inputTemplate]='input' (onMsgReceive)=\"onMsgReceive($event)\">\n        <ng-template #window>\n        </ng-template>\n    </Chat-bot>\n\n    <ng-template #message let-text=\"text\" let-object=\"object\" let-sendBy=\"sendBy\">\n        <chat-msg [msg]=\"{text: text,sendBy: sendBy}\"></chat-msg>\n    </ng-template>\n    <ng-template #input>\n        <chat-input (change)=\"onChange($event.target);\"></chat-input>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/main/app/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/main/app/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connection.service */ "./src/main/app/connection.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, connectionService) {
        this.fb = fb;
        this.connectionService = connectionService;
        this.msg = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.msgArray = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.createForm();
    }
    HomeComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9, a-z, A-Z, .]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9, a-z, A-Z, .]*')]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9)]]
        });
    };
    HomeComponent.prototype.onChange = function (target) {
        this.msg.next(target.value);
        target.value = '';
    };
    HomeComponent.prototype.onMsgReceive = function (msg) { };
    HomeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.connectionService.sendMessage(this.angForm.value).subscribe(function () {
            alert('Your message has been sent.');
            _this.angForm.reset();
        }, function (error) {
            console.log('Error', error);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/main/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/main/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/main/environments/environment.ts":
/*!**********************************************!*\
  !*** ./src/main/environments/environment.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main/main.ts":
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ "./src/main/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/main/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/main/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\proIntroduction\src\main\main.ts */"./src/main/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map