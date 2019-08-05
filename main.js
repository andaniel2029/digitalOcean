(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	],
	"./client/client.module": [
		"./src/app/client/client.module.ts",
		"client-client-module"
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
	return __webpack_require__.e(ids[1]).then(function() {
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

/***/ "./src/app/admin/admin-layout/_nav.ts":
/*!********************************************!*\
  !*** ./src/app/admin/admin-layout/_nav.ts ***!
  \********************************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var navItems = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        icon: 'icon-cursor',
    },
    {
        name: 'Users List',
        url: '/admin/users-list',
        icon: 'icon-people'
    },
    {
        name: 'BTC Received',
        url: '/admin/btc-received',
        icon: 'icon-arrow-left-circle'
    },
    {
        name: 'BTC Sent',
        url: '/admin/btc-sent',
        icon: 'icon-arrow-right-circle',
    },
    {
        name: 'BTC To LC Successful',
        url: '/admin/btc-to-lc-success',
        icon: 'icon-check',
    },
    {
        name: 'LC To BTC Successful',
        url: '/admin/lc-to-btc-success',
        icon: 'icon-check',
    },
    {
        name: 'All Conversion Tx',
        url: '/admin/all-conversion',
        icon: 'icon-plus',
    },
    {
        name: 'Cancelled Conversion',
        url: '/admin/cancelled-conversion',
        icon: 'icon-close',
    },
    {
        name: 'Open Orders',
        url: '/admin/open-orders',
        icon: 'icon-clock',
    },
    {
        name: 'Edit Multiplier',
        url: '/admin/edit-multiplier',
        icon: 'icon-settings'
    },
    {
        name: 'Bazaar Value Settings',
        url: '/admin/bazaar-value-settings',
        icon: 'icon-settings'
    },
    {
        name: 'Logout',
        url: '/admin/logout',
        icon: 'icon-logout',
    }
];


/***/ }),

/***/ "./src/app/admin/admin-layout/admin-layout.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-layout/admin-layout.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header{\r\n\tbackground-color: #2f353a;\r\n\tborder-bottom: none;\r\n}\r\n.dropdown-item:hover{\r\n\tcolor: black;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-layout/admin-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-layout/admin-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"site-header py-1 app-header navbar\">\r\n    <div class=\"container-fluid d-flex flex-row justify-content-between\">\r\n        <div class=\"d-flex flex-row\">\r\n            <a class=\"py-2 mr-4\" href=\"#\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"d-block mx-auto\">\r\n                  <circle cx=\"12\" cy=\"12\" r=\"10\"></circle>\r\n                  <line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line>\r\n                  <line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line>\r\n                  <line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line>\r\n                  <line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line>\r\n                  <line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line>\r\n                  <line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>\r\n                </svg>\r\n            </a>\r\n            <div class=\"btn-group\">\r\n                <a class=\"py-2 btn btn-dark\" [routerLink]=\"['/admin/dashboard']\">Dashboard</a>\r\n                <button type=\"button\" class=\"btn btn-dark dropdown-toggle dropdown-toggle-split d-block d-lg-none\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                   <span class=\"sr-only\">Toggle Dropdown</span>\r\n                </button>\r\n                <div class=\"dropdown-menu\">\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/users-list']\">Users List</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/btc-received']\">BTC Received</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/btc-sent']\">BTC Sent</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/btc-to-lc-success']\">BTC To LC Successful</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/lc-to-btc-success']\">LC To BTC Successful</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/all-conversion']\">All Conversion Tx</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/cancelled-conversion']\">Cancelled Conversion</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/open-orders']\">Open Orders</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/edit-multiplier']\">Edit Multiplier</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/bazaar-value-settings']\">Bazaar Value Settings</a>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/admin/logout']\">Logout</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <form class=\"form-inline my-0\">\r\n            <a [routerLink]=\"['/admin/logout']\">\r\n                <button class=\"btn btn-outline-info my-0\" type=\"button\">Logout</button>\r\n            </a>\r\n        </form>\r\n    </div>\r\n</nav>\r\n<div class=\"app-body\">\r\n    <app-sidebar [fixed]=\"true\" [display]=\"'lg'\">\r\n        <app-sidebar-nav [navItems]=\"navItems\"></app-sidebar-nav>\r\n        <app-sidebar-minimizer></app-sidebar-minimizer>\r\n    </app-sidebar>\r\n    <main class=\"main my-3\">\r\n        <div class=\"container-fluid\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </main>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin-layout/admin-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-layout/admin-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nav */ "./src/app/admin/admin-layout/_nav.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_1__["navItems"];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/admin/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.css */ "./src/app/admin/admin-layout/admin-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminGuard, AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "./src/app/admin/admin-layout/admin-layout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/admin/logout/logout.component.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-table/order-table.component */ "./src/app/admin/order-table/order-table.component.ts");
/* harmony import */ var _btc_received_btc_received_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./btc-received/btc-received.component */ "./src/app/admin/btc-received/btc-received.component.ts");
/* harmony import */ var _btc_sent_btc_sent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./btc-sent/btc-sent.component */ "./src/app/admin/btc-sent/btc-sent.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/admin/users-list/users-list.component.ts");
/* harmony import */ var _edit_multiplier_edit_multiplier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-multiplier/edit-multiplier.component */ "./src/app/admin/edit-multiplier/edit-multiplier.component.ts");
/* harmony import */ var _bazaar_value_settings_bazaar_value_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bazaar-value-settings/bazaar-value-settings.component */ "./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AdminGuard = /** @class */ (function () {
    function AdminGuard(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (!this.storage.getAdminUser() /* check user logged or not */) {
            this.router.navigate(['/admin/login']);
            return false;
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());

var routes = [
    {
        path: '',
        component: _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_2__["AdminLayoutComponent"],
        canActivate: [AdminGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                path: 'btc-received',
                component: _btc_received_btc_received_component__WEBPACK_IMPORTED_MODULE_8__["BtcReceivedComponent"]
            },
            {
                path: 'btc-sent',
                component: _btc_sent_btc_sent_component__WEBPACK_IMPORTED_MODULE_9__["BtcSentComponent"]
            },
            {
                path: 'users-list',
                component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_10__["UsersListComponent"]
            },
            {
                path: 'btc-to-lc-success',
                component: _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_7__["OrderTableComponent"],
                data: { display: 'btc-to-lc-success' }
            },
            {
                path: 'lc-to-btc-success',
                component: _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_7__["OrderTableComponent"],
                data: { display: 'lc-to-btc-success' }
            },
            {
                path: 'all-conversion',
                component: _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_7__["OrderTableComponent"],
                data: { display: 'all-conversion' }
            },
            {
                path: 'cancelled-conversion',
                component: _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_7__["OrderTableComponent"],
                data: { display: 'cancelled-conversion' }
            },
            {
                path: 'open-orders',
                component: _order_table_order_table_component__WEBPACK_IMPORTED_MODULE_7__["OrderTableComponent"],
                data: { display: 'open-orders' }
            },
            {
                path: 'edit-multiplier',
                component: _edit_multiplier_edit_multiplier_component__WEBPACK_IMPORTED_MODULE_11__["EditMultiplierComponent"]
            },
            {
                path: 'bazaar-value-settings',
                component: _bazaar_value_settings_bazaar_value_settings_component__WEBPACK_IMPORTED_MODULE_12__["BazaarValueSettingsComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__["LogoutComponent"]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <form class=\"col-md-6 col-lg-3\" (ngSubmit)=\"save()\">\n        <div class=\"form-group\">\n            <label>Display Bazaar Signup After Reach Target BTC Conversion</label>\n            <input class=\"form-control\" type=\"number\" name=\"btc_conversion_target\" [(ngModel)]=\"btc_conversion_target\">\n        </div>\n        <div class=\"form-group\">\n            <label>Refill Products If Availability Reach To</label>\n            <input class=\"form-control\" type=\"number\" name=\"refill_product_availavility\" [(ngModel)]=\"refill_product_availavility\">\n        </div>\n        <div class=\"form-group\">\n            <label>Bazaar LC Maintaining Balance</label>\n            <input class=\"form-control\" type=\"number\" name=\"lc_maintaining_balance\" [(ngModel)]=\"lc_maintaining_balance\">\n        </div>\n        <div class=\"alert alert-success\" *ngIf=\"showSuccess == true\">\n            {{ success.message }}\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"showError == true\">\n            {{ error.message }}\n        </div>\n        <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-success\" value=\"Save\">\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.ts ***!
  \********************************************************************************/
/*! exports provided: BazaarValueSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazaarValueSettingsComponent", function() { return BazaarValueSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BazaarValueSettingsComponent = /** @class */ (function () {
    function BazaarValueSettingsComponent(api, share, toastr) {
        this.api = api;
        this.share = share;
        this.toastr = toastr;
        this.btc_conversion_target = 0;
        this.refill_product_availavility = 0;
        this.lc_maintaining_balance = 0;
        this.showSuccess = false;
        this.success = { message: '' };
        this.showError = false;
        this.error = { message: '' };
    }
    BazaarValueSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getToBackend('/admin/getBazaarValueSettings', this.share.admin_user.token).then(function (response) {
            // console.log(response);
            _this.btc_conversion_target = response.BtcConversionTarget;
            _this.refill_product_availavility = response.RefillProductAvailavility;
            _this.lc_maintaining_balance = response.LcMaintainingBalance;
        });
    };
    BazaarValueSettingsComponent.prototype.save = function () {
        var _this = this;
        this.showError = false;
        this.showSuccess = false;
        this.api.postToBackend('/admin/setBazaarValueSettings', { BtcConversionTarget: this.btc_conversion_target,
            RefillProductAvailavility: this.refill_product_availavility,
            LcMaintainingBalance: this.lc_maintaining_balance
        }, this.share.admin_user.token).then(function (response) {
            if (response.status === 'success') {
                _this.success.message = 'Successfully saved!';
                _this.toastr.info('Bazaar Value Setting Success!', 'INFO');
                _this.showSuccess = true;
            }
            if (response.status === 'error') {
                _this.showError = true;
                _this.error.message = response.payload;
                _this.toastr.error('Invalid Setting Value!', 'ERROR');
            }
            console.log(response);
        });
    };
    BazaarValueSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bazaar-value-settings',
            template: __webpack_require__(/*! ./bazaar-value-settings.component.html */ "./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.html"),
            styles: [__webpack_require__(/*! ./bazaar-value-settings.component.css */ "./src/app/admin/bazaar-value-settings/bazaar-value-settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BazaarValueSettingsComponent);
    return BazaarValueSettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/btc-received/btc-received.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/btc-received/btc-received.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/btc-received/btc-received.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/btc-received/btc-received.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive-md\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>ID</th>\n\t\t\t<th>Date</th>\n\t\t\t<th>User ID</th>\n\t\t\t<th>Amount</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let transaction of adminsocket.btc_received\">\n\t\t\t<td>{{transaction._id}}</td>\n\t\t\t<td style=\"min-width: 160px\">{{transaction.date | date:'yyyy/MM/dd hh:mm:ss'}}</td>\n\t\t\t<td style=\"min-width: 80px\">{{transaction.userid}}</td>\n\t\t\t<td>{{transaction.amount | number:'0.8-8'}}</td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "./src/app/admin/btc-received/btc-received.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/btc-received/btc-received.component.ts ***!
  \**************************************************************/
/*! exports provided: BtcReceivedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcReceivedComponent", function() { return BtcReceivedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BtcReceivedComponent = /** @class */ (function () {
    function BtcReceivedComponent(adminsocket) {
        this.adminsocket = adminsocket;
    }
    BtcReceivedComponent.prototype.ngOnInit = function () {
    };
    BtcReceivedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btc-received',
            template: __webpack_require__(/*! ./btc-received.component.html */ "./src/app/admin/btc-received/btc-received.component.html"),
            styles: [__webpack_require__(/*! ./btc-received.component.css */ "./src/app/admin/btc-received/btc-received.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], BtcReceivedComponent);
    return BtcReceivedComponent;
}());



/***/ }),

/***/ "./src/app/admin/btc-sent/btc-sent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/btc-sent/btc-sent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/btc-sent/btc-sent.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/btc-sent/btc-sent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive-md\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>ID</th>\n\t\t\t<th>Date</th>\n\t\t\t<th>User ID</th>\n\t\t\t<th>Amount</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let transaction of adminsocket.btc_sent\">\n\t\t\t<td>{{ transaction._id }}</td>\n\t\t\t<td style=\"min-width: 160px\">{{ transaction.date  | date:'yyyy/MM/dd hh:mm:ss'}}</td>\n\t\t\t<td style=\"min-width: 80px\">{{ transaction.userid }}</td>\n\t\t\t<td>{{ transaction.amount | number:'0.8-8' }}</td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "./src/app/admin/btc-sent/btc-sent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/btc-sent/btc-sent.component.ts ***!
  \******************************************************/
/*! exports provided: BtcSentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtcSentComponent", function() { return BtcSentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BtcSentComponent = /** @class */ (function () {
    function BtcSentComponent(adminsocket) {
        this.adminsocket = adminsocket;
    }
    BtcSentComponent.prototype.ngOnInit = function () {
    };
    BtcSentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btc-sent',
            template: __webpack_require__(/*! ./btc-sent.component.html */ "./src/app/admin/btc-sent/btc-sent.component.html"),
            styles: [__webpack_require__(/*! ./btc-sent.component.css */ "./src/app/admin/btc-sent/btc-sent.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], BtcSentComponent);
    return BtcSentComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert{\r\n    word-break: break-all;\r\n}"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\">\n    1 LC : {{ adminsocket.lc_btc | number:'0.0-15' }} BTC\n</div>\n<div class=\"alert alert-danger\">\n    1 BTC : {{ adminsocket.btc_usd }} USD\n</div>\n<div class=\"row\">\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Default wallet address: {{ share.admin_user.wallet }}\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total BTC Received: {{ adminsocket.received_btc }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total BTC Sent: {{ adminsocket.sent_btc }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total BTC Converted To LC: {{ adminsocket.converted_btc }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total Transfer Fee: {{ adminsocket.transfer_fee }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total Remaining BTC: {{ adminsocket.remain_btc }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total BTC Sent & Converted To LC: {{ adminsocket.sent_btc + adminsocket.converted_btc }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total LC Converted to BTC: {{ adminsocket.converted_lc }} LC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Total Conversion Fee: {{ adminsocket.conversion_fee }} LC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Overall Total BTC To Receive: {{ adminsocket.receive_btc }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Convertible BTC: {{ adminsocket.converted_btc - adminsocket.receive_btc }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Overall Network Fee: {{ adminsocket.network_fee }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Overall Receivable BTC: {{ adminsocket.received_btc - adminsocket.network_fee }} BTC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            LC Adder Recorded: {{ adminsocket.adder }} LC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            LC Subtract Record: {{ adminsocket.subtracter }} LC\n        </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n        <div class=\"alert alert-secondary\">\n            Gap Of Adder From Subtract: {{ adminsocket.adder - adminsocket.subtracter }} LC\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
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
    function DashboardComponent(adminsocket, share) {
        this.adminsocket = adminsocket;
        this.share = share;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-multiplier/edit-multiplier.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/edit-multiplier/edit-multiplier.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/edit-multiplier/edit-multiplier.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/edit-multiplier/edit-multiplier.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\t<form class=\"col-md-6 col-lg-3\" (ngSubmit)=\"save()\">\t\n\t\t<div class=\"form-group\">\n\t\t\t<label>Adder & Subtracter Multiplier</label>\n\t\t\t<input class=\"form-control\" name=\"ASmulti\" [(ngModel)]=\"ASmulti\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Conversion Fee Multiplier</label>\n\t\t\t<input class=\"form-control\" name=\"CFmulti\" [(ngModel)]=\"CFmulti\">\n\t\t</div>\n\t\t<div class=\"alert alert-success\" *ngIf=\"showSuccess == true\"> \n\t\t\t{{ success.message }}\n\t\t</div>\n\t\t<div class=\"alert alert-danger\" *ngIf=\"showError == true\"> \n\t\t\t{{ error.message }}\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<input type=\"submit\" class=\"btn btn-success\" value=\"Save\">\n\t\t</div>\n\t</form>\t\n</div>\n"

/***/ }),

/***/ "./src/app/admin/edit-multiplier/edit-multiplier.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/edit-multiplier/edit-multiplier.component.ts ***!
  \********************************************************************/
/*! exports provided: EditMultiplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMultiplierComponent", function() { return EditMultiplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditMultiplierComponent = /** @class */ (function () {
    function EditMultiplierComponent(api, share, toastr) {
        this.api = api;
        this.share = share;
        this.toastr = toastr;
        this.ASmulti = 0;
        this.CFmulti = 0;
        this.showSuccess = false;
        this.success = { message: '' };
        this.showError = false;
        this.error = { message: '' };
    }
    EditMultiplierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getToBackend('/admin/getMultiplier', this.share.admin_user.token).then(function (response) {
            // console.log(response);
            _this.ASmulti = response.AS;
            _this.CFmulti = response.CF;
        });
    };
    EditMultiplierComponent.prototype.save = function () {
        var _this = this;
        this.showError = false;
        this.showSuccess = false;
        // tslint:disable-next-line: max-line-length
        this.api.postToBackend('/admin/setMultiplier', { AS: this.ASmulti, CF: this.CFmulti }, this.share.admin_user.token).then(function (response) {
            if (response.status === 'success') {
                _this.success.message = 'Successfully saved!';
                _this.toastr.info('Multiplier Setting Success!', 'INFO');
                _this.showSuccess = true;
            }
            if (response.status === 'error') {
                _this.showError = true;
                _this.error.message = response.payload;
                _this.toastr.error('Invalid Value!', 'ERROR');
            }
            console.log(response);
        });
    };
    EditMultiplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-multiplier',
            template: __webpack_require__(/*! ./edit-multiplier.component.html */ "./src/app/admin/edit-multiplier/edit-multiplier.component.html"),
            styles: [__webpack_require__(/*! ./edit-multiplier.component.css */ "./src/app/admin/edit-multiplier/edit-multiplier.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EditMultiplierComponent);
    return EditMultiplierComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    \n  </div>\n<form \n  name='form' \n  (ngSubmit)=\"f.form.valid && submit()\" \n  #f=\"ngForm\" \n  class='d-flex flex-wrap flex-column m-auto pt-4' novalidate>\n  <div class='col-lg-4 col-6 m-auto'>\n    <h1 class=\"text-center\"><span ><img style=\"height: 40px; margin-right: 30px;\" src=\"../../../assets/logo.png\"/></span>Admin Login</h1>\n  </div>\n\n  <div class='input-wrap col-12 col-lg-7 m-auto'>\n      <div \n      class='form-group m-auto '>\n      <label for=\"email\">Email</label>\n      <input \n      class='form-control' \n      required\n      type=\"email\" id=\"email\" name = \"email\" [(ngModel)] = 'user.email' #email=\"ngModel\">\n    </div>\n  <!--validate Email-->\n    <div  *ngIf=' f.submitted && email.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n      <div *ngIf=\"email.errors.required\">\n        <small>Email is required.</small>\n      </div>\n    </div>\n  </div>\n\n  <div class='input-wrap m-auto col-12 col-lg-7 m-auto'>\n    <div class='form-group  m-auto'>\n      <label for=\"password\">Password</label>\n      <input \n        class='form-control' \n        type=\"password\" \n        id=\"password\" \n        name = \"password\" \n        required\n        [(ngModel)] = 'user.password'\n        #password = 'ngModel'>\n    </div>\n\n      <!--validate Password-->\n      <div  *ngIf=' f.submitted && password.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n        <div *ngIf=\"password.errors.required\">\n          <small>password is required.</small>\n        </div>\n      </div>\n  </div>\n  <div  *ngIf='loading'class='loading'>\n    <img  class='img-fluid'src= 'assets/loading.gif' /> \n  </div>\n  <div class='input-wrap m-auto col-12 col-lg-7 m-auto'>\n    <div  *ngIf='showError' class=\"alert alert-danger error-message\" role=\"alert\">\n      <small>{{error.message}}</small>\n    </div>\n  </div>\n  <div class=' m-auto'> \n    <button  class='btn btn-success mt-2 '  type='submit'>Submit</button>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
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
    function LoginComponent(http, router, storage, share) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.share = share;
        this.loading = false;
        this.showError = false;
        this.error = {
            message: ''
        };
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.share.admin_user) {
            this.router.navigate(['admin/dashboard']);
        }
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.http.postToBackend('/admin/login', this.user)
            .then(function (result) {
            console.log(result);
            var user = result.payload;
            /* Save User To Local Storage */
            _this.storage.saveAdminUser(user);
            _this.share.updateAdminUser(user);
            _this.loading = false;
            _this.router.navigate(['admin/dashboard']);
        })
            .catch(function (err) {
            console.log(err);
            _this.loading = false;
            _this.showError = true;
            _this.error.message = JSON.parse(err._body).payload;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/admin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/logout/logout.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/logout/logout.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/logout/logout.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/logout/logout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/logout/logout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/logout/logout.component.ts ***!
  \**************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(storage, router, share, adminsocket) {
        this.storage = storage;
        this.router = router;
        this.share = share;
        this.adminsocket = adminsocket;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.storage.destroyAdminUser();
        this.share.updateAdminUser(false);
        this.adminsocket.disconnect();
        this.router.navigate(['/admin/login']);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/admin/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/admin/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/admin/order-table/order-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/order-table/order-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.firstLetter::first-letter{\r\n\ttext-transform:  uppercase;\r\n}"

/***/ }),

/***/ "./src/app/admin/order-table/order-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/order-table/order-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-responsive-xl\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th>ID</th>\n\t\t\t<th style=\"min-width: 160px;\">Date</th>\n\t\t\t<th>Rate</th>\n\t\t\t<th style=\"min-width: 100px;\">LC Amount</th>\n\t\t\t<th style=\"min-width: 150px;\">BTC Amount Paid</th>\n\t\t\t<th style=\"min-width: 200px;\">Total BTC Price To Receive</th>\n\t\t\t<th style=\"min-width: 90px;\">Type</th>\n\t\t\t<th>Status</th>\n\t\t\t<th *ngIf=\"display == 'btc-to-lc-success' || display == 'lc-to-btc-success'\" style=\"min-width: 130px;\">Conversion Fee</th>\n\t\t\t<th *ngIf=\"display == 'btc-to-lc-success'\">Adder</th>\n\t\t\t<th *ngIf=\"display == 'lc-to-btc-success'\">Subtracter</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let order of orders\">\n\t\t\t<td>{{ order.orderid }}</td>\n\t\t\t<td>{{ order.date | date:'yyyy/MM/dd hh:mm:ss'}}</td>\n\t\t\t<td>{{ order.rate | number:'0.8-8' }}</td>\n\t\t\t<td>{{ order.lcamount }}</td>\n\t\t\t<td>{{ order.btc_paid ? order.btc_paid : \"---\" }}</td>\n\t\t\t<td>{{ order.btc_receive ? order.btc_receive : \"---\" }}</td>\n\t\t\t<td>{{ order.type == 'ltob' ? 'LC To BTC' : 'BTC To LC' }}</td>\n\t\t\t<td class=\"firstLetter\">{{ order.status }}</td>\n\t\t\t<td *ngIf=\"display == 'btc-to-lc-success' || display == 'lc-to-btc-success'\">{{ order.fee }}</td>\n\t\t\t<td *ngIf=\"display == 'btc-to-lc-success' || display == 'lc-to-btc-success'\">{{ order.adder }}</td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "./src/app/admin/order-table/order-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/order-table/order-table.component.ts ***!
  \************************************************************/
/*! exports provided: OrderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTableComponent", function() { return OrderTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderTableComponent = /** @class */ (function () {
    function OrderTableComponent(route, adminservice) {
        this.route = route;
        this.adminservice = adminservice;
        this.orders = [];
    }
    OrderTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (v) {
            _this.display = v.display;
            _this.orders = _this.adminservice.orders.filter(function (order) {
                if (v.display == 'btc-to-lc-success') {
                    return order.type == 'btol' && order.status == 'successful';
                }
                if (v.display == 'lc-to-btc-success') {
                    return order.type == 'ltob' && order.status == 'successful';
                }
                if (v.display == 'cancelled-conversion') {
                    return order.status == 'cancel';
                }
                if (v.display == 'open-orders') {
                    return order.status == 'open';
                }
                return true;
            });
        });
    };
    OrderTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-table',
            template: __webpack_require__(/*! ./order-table.component.html */ "./src/app/admin/order-table/order-table.component.html"),
            styles: [__webpack_require__(/*! ./order-table.component.css */ "./src/app/admin/order-table/order-table.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], OrderTableComponent);
    return OrderTableComponent;
}());



/***/ }),

/***/ "./src/app/admin/users-list/users-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/users-list/users-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/users-list/users-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/users-list/users-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-12 col-md-6\">\n\n\n\t\t<div class='form-group m-auto'>\n\n\t\t    <label for=\"user_id\">User ID</label>\n\t\t    <div class=\"input-group mb-3\">\n\t\t\t  <input type=\"text\" \n\t\t\t  \t\t class=\"form-control\" \n\t\t\t  \t\t placeholder=\"Search first name, last name, or user ID here...\"\n\t\t\t  \t\t [(ngModel)]=\"search_text\"\n\t\t\t  \t\t name=\"search_text\"\n\t\t\t  \t\t (keyup.enter)=\"find()\">\n\t\t\t  <div class=\"input-group-append\">\n\t\t\t    <button class=\"btn btn-outline-secondary\" \n\t\t\t    \t\ttype=\"button\" \n\t\t\t    \t\tid=\"button-addon2\"\n\t\t\t    \t\t(click)=\"find()\">\n\t\t\t    \tFind</button>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t\t<table class=\"table table-responsive-sm\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>ID</th>\n\t\t\t\t\t<th>First Name</th>\n\t\t\t\t\t<th>Last Name</th>\n\t\t\t\t\t<th>Email</th>\n\t\t\t\t\t<th>Agent ID</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let user of find_users\" \n\t\t\t\t\t[ngClass]=\"{'table-success': user.userid==selectID}\" \n\t\t\t\t\t(click)=\"doSelect(user.userid)\">\n\t\t\t\t\t<td>{{user.userid}}</td>\n\t\t\t\t\t<td>{{user.first_name}}</td>\n\t\t\t\t\t<td>{{user.last_name}}</td>\n\t\t\t\t\t<td>{{user.email}}</td>\n\t\t\t\t\t<td>{{user.agent_id}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"col-12 col-md-6\">\n\t\t<app-user-detail [userid]=\"selectID\"></app-user-detail>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/users-list/users-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/users-list/users-list.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(api, share) {
        this.api = api;
        this.share = share;
        this.find_users = [];
        this.selectID = 0;
    }
    UsersListComponent.prototype.ngOnInit = function () {
    };
    UsersListComponent.prototype.find = function () {
        var _this = this;
        if (this.search_text) {
            this.api.postToBackend('/admin/searchUsers', { search: this.search_text }, this.share.admin_user.token).then(function (result) {
                _this.find_users = result;
                if (Array.isArray(result) && result.length > 0) {
                    _this.selectID = result[0].userid;
                }
            });
        }
    };
    UsersListComponent.prototype.doSelect = function (id) {
        this.selectID = id;
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/admin/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/admin/users-list/users-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<simple-notifications></simple-notifications>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _client_client_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/client-routing.module */ "./src/app/client/client-routing.module.ts");
/* harmony import */ var _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                // tslint:disable-next-line: deprecation
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["SimpleNotificationsModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()
            ],
            providers: [_client_client_routing_module__WEBPACK_IMPORTED_MODULE_8__["Guard"], _admin_admin_routing_module__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var routes = [
    {
        path: '',
        loadChildren: './client/client.module#ClientModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    }
];


/***/ }),

/***/ "./src/app/bazaar.service.ts":
/*!***********************************!*\
  !*** ./src/app/bazaar.service.ts ***!
  \***********************************/
/*! exports provided: BazaarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazaarService", function() { return BazaarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BazaarService = /** @class */ (function () {
    function BazaarService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl;
    }
    BazaarService.prototype.getBazaars = function (country) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.uri + "/getBazaars/" + country).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    BazaarService.prototype.getBazaarProducts = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.uri + "/getBazaarProducts/" + userid).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    BazaarService.prototype.getPreCheckoutInfo = function (userid) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.uri + "/getPreCheckoutInfo/" + userid).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    BazaarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BazaarService);
    return BazaarService;
}());



/***/ }),

/***/ "./src/app/client/about/about.component.css":
/*!**************************************************!*\
  !*** ./src/app/client/about/about.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/client/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<p>\n\t  about works!\n\t</p>\n</div>"

/***/ }),

/***/ "./src/app/client/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/client/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/client/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/client/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\r\n    color: red;\r\n}\r\n\r\n.card-body {\r\n    padding: 0.75rem;\r\n}\r\n\r\nlabel {\r\n    font-weight: bold;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <strong>Bazaar Product Edit</strong></div>\n    <div class=\"card-body\">\n        <form class=\"form-horizontal\" [formGroup]=\"bzp_angForm\" (ngSubmit)=\"submitProd(total_indirect_savings.value)\">\n            <div class=\"row\">\n                <div class=\"col-sm-3 col-md-3\">\n                    <div class=\"card text-white bg-danger text-center\">\n                        <div class=\"card-body\">\n                            <strong>1 LC : {{ socket.lc_btc | number:'0.0-15' }} BTC</strong>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-3 col-md-3\">\n                    <div class=\"card text-white bg-success text-center\">\n                        <div class=\"card-body\">\n                            <strong>1 LC : {{ socket.btc_usd * socket.lc_btc | number:'0.4-4' }}</strong>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-3 col-md-3\">\n                    <div class=\"card text-white bg-dark text-center\">\n                        <div class=\"card-body\">\n                            <strong>1 BTC : {{ socket.btc_usd | number:'0.4-4' }} USD</strong>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-3 col-md-3\">\n                    <div class=\"card text-white bg-primary text-center\">\n                        <div class=\"card-body\">\n                            <strong>LC Balance : {{ socket.lc_balance }} LC</strong>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"bzp_photo\">Add Photo</label>\n                <div class=\"col-md-10\">\n                    <input #bzp_photo type=\"file\" class=\"form-control\" id=\"bzp_photo\" formControlName=\"bzp_photo\" accept=\"image/*\" name=\"bzp_photo\" hidden (change)=\"preview(bzp_photo.files);bzp_uploader.uploadAll();\" ng2FileSelect [uploader]=\"bzp_uploader\" />\n                    <img [src]=\"imgURL || 'http://placehold.it/350X150'\" height=\"150px;\" width=\"350px;\" alt=\"Bazaar Product Image\" />\n                    <label for=\"bzp_photo\" style=\"margin-left: 30px;\"><strong>Select Photo By Clicking Here</strong></label>\n                </div>\n            </div>\n            <div *ngIf=\"bzp_angForm.controls['bzp_photo'].invalid && (bzp_angForm.controls['bzp_photo'].dirty || bzp_angForm.controls['bzp_photo'].touched)\" class=\"alert text-center\">\n                <div *ngIf=\"bzp_angForm.controls['bzp_photo'].errors.required\">\n                    * Bazaar Product Photo is required!\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"bp_name\">Product Name</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"text\" formControlName=\"bp_name\" #bp_name placeholder=\"Enter Product Name..\">\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"availability\">Availability</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"text\" [readonly]=\"original_availability >= socket.RefillProductAvailavility\" formControlName=\"availability\" #availability placeholder=\"Enter number of product stock 5 or above..\">\n                </div>\n            </div>\n            <div *ngIf=\"bzp_angForm.controls['bp_name'].invalid && (bzp_angForm.controls['bp_name'].dirty || bzp_angForm.controls['bp_name'].touched)\" class=\"alert text-center\">\n                <div *ngIf=\"bzp_angForm.controls['bp_name'].errors.required\">\n                    * Product Name is required!\n                </div>\n                <div *ngIf=\"bzp_angForm.controls['bp_name'].errors.minlength\">\n                    * Please more type!\n                </div>\n            </div>\n            <div *ngIf=\"bzp_angForm.controls['availability'].invalid && (bzp_angForm.controls['availability'].dirty || bzp_angForm.controls['availability'].touched)\" class=\"alert text-center\">\n                <div *ngIf=\"bzp_angForm.controls['availability'].errors.required\">\n                    * Availability is required!\n                </div>\n                <div *ngIf=\"bzp_angForm.controls['availability'].errors.min || bzp_angForm.controls['availability'].invalid\">\n                    * Invalid Number. Availability value have to be over 5\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"initial_cc_price\">Initial CC Price {{ curCode }}</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" [readonly]=\"original_availability >= socket.RefillProductAvailavility\" type=\"text\" formControlName=\"initial_cc_price\" #initial_cc_price (keyup)=\"cc_lc_Change(initial_cc_price.value)\" placeholder=\"Enter Product price base on your country currency price..\">\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"control_cc_price\">Controlled CC Price ({{ curCode }})</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly #control_cc_price value=\"{{ auto_control_cc_price }}\">\n                </div>\n            </div>\n            <div *ngIf=\"bzp_angForm.controls['initial_cc_price'].invalid && (bzp_angForm.controls['initial_cc_price'].dirty || bzp_angForm.controls['initial_cc_price'].touched)\" class=\"alert text-center\">\n                <div *ngIf=\"bzp_angForm.controls['initial_cc_price'].errors.required\">\n                    * Initial CC Price is required!\n                </div>\n                <div *ngIf=\"bzp_angForm.controls['initial_cc_price'].errors.min || bzp_angForm.controls['initial_cc_price'].invalid\">\n                    * Invalid Value. Initial CC Price must be over 0.\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"initial_lc_price\">Initial LC Price (LC)</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly #initial_lc_price value=\"{{ auto_initial_lc_price / (socket.btc_usd * socket.lc_btc * currencyValue) }}\">\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"control_lc_price\">Controlled LC Price (LC)</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly #control_lc_price value=\"{{ auto_control_lc_price / (socket.btc_usd * socket.lc_btc * currencyValue) }}\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"lc_cc\">1 LC To Country Currency</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly #lc_cc value=\"{{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }}\">\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"lc_btc\">1 LC To BTC</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly value=\"{{ socket.lc_btc | number:'0.0-15' }}\" #lc_btc>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"assigned_savings\">Assigned Savings</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" [readonly]=\"original_availability >= socket.RefillProductAvailavility\" type=\"text\" formControlName=\"assigned_savings\" #assigned_savings value=\"{{ auto_assigned_savings}}\" (keyup)=\"saving_Change(assigned_savings.value, 0)\" placeholder=\"Enter number 18 - 36..\">\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"agent_savings\">Agent Savings</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" [readonly]=\"original_availability >= socket.RefillProductAvailavility\" type=\"text\" formControlName=\"agent_savings\" #agent_savings value=\"{{ auto_agent_savings }}\" (keyup)=\"saving_Change(agent_savings.value, 1)\" placeholder=\"Enter number 1 - 5..\">\n                </div>\n            </div>\n            <div *ngIf=\"bzp_angForm.controls['assigned_savings'].invalid && (bzp_angForm.controls['assigned_savings'].dirty)\" class=\"alert text-center\">\n                <div *ngIf=\"bzp_angForm.controls['assigned_savings'].errors.required\">\n                    * Assigned Savings is required!\n                </div>\n                <div *ngIf=\"bzp_angForm.controls['assigned_savings'].errors.min || bzp_angForm.controls['assigned_savings'].errors.max || bzp_angForm.controls['assigned_savings'].invalid\">\n                    * Invalid Value. A ssigned Savings is 18 - 36\n                </div>\n            </div>\n            <div *ngIf=\"bzp_angForm.controls['agent_savings'].invalid && (bzp_angForm.controls['agent_savings'].dirty)\" class=\"alert text-center\">\n                <div *ngIf=\"bzp_angForm.controls['agent_savings'].errors.required\">\n                    * Agent Savings is required!\n                </div>\n                <div *ngIf=\"bzp_angForm.controls['agent_savings'].errors.min || bzp_angForm.controls['agent_savings'].errors.max || bzp_angForm.controls['agent_savings'].invalid\">\n                    * Invalid Value. A gent Savings is 1 -5\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"personal_savings\">Personal Savings</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly value=\"{{ auto_personal_savings }}\" #personal_savings>\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"indirect_savings\">Indirect Savings</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly value=\"{{ auto_indirect_savings }}\" #indirect_savings>\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"total_product_costs\">Total Product Costs</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly #total_product_costs value=\"{{ availability.value * initial_cc_price.value }}\">\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"total_indirect_savings\">Total Indirect Savings</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"number\" readonly #total_indirect_savings value=\"{{ original_availability >= socket.RefillProductAvailavility ? availability.value * initial_cc_price.value * auto_assigned_savings / 100 / (socket.btc_usd * socket.lc_btc * currencyValue) : (availability.value - original_availability) * initial_cc_price.value * auto_assigned_savings / 100 / (socket.btc_usd * socket.lc_btc * currencyValue) }}\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"bzp_type\">Regular Price</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"radio\" formControlName=\"bzp_type\" #bzp_type value=\"regular\" name=\"bzp_type\">\n                </div>\n                <label class=\"col-md-2 col-form-label\" for=\"bzp_type\">Promo Price</label>\n                <div class=\"col-md-4\">\n                    <input class=\"form-control\" type=\"radio\" formControlName=\"bzp_type\" #bzp_type value=\"promo\" name=\"bzp_type\">\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-md-2 col-form-label\" for=\"product_description\">Product Description</label>\n                <div class=\"col-md-10\">\n                    <textarea class=\"form-control\" rows=\"7\" formControlName=\"product_description\" #product_description placeholder=\"Enter Product Description..\"></textarea>\n                </div>\n            </div>\n            <div *ngIf=\"bzp_angForm.controls['product_description'].invalid && (bzp_angForm.controls['product_description'].dirty || bzp_angForm.controls['product_description'].touched)\" class=\"alert text-center\">\n                <div *ngIf=\"bzp_angForm.controls['product_description'].errors.required\">\n                    * Product Description is required!\n                </div>\n                <div *ngIf=\"bzp_angForm.controls['product_description'].errors.minlength\">\n                    * Please more type!\n                </div>\n            </div>\n            <div *ngIf='loading' class='loading'>\n                <img class='img-fluid' src='assets/loading.gif' alt=\"\" />\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                    <div *ngIf=\"total_indirect_savings.value > socket.lc_balance; else sub_enable\">\n                        <button class=\"btn btn-primary mt-10\" type=\"submit\" disabled>\n                            Product Post\n                        </button>\n                        <div class=\"alert\">\n                            * Your BTC Balance is not enough. Please charge.\n                        </div>\n                    </div>\n                    <ng-template #sub_enable>\n                        <button class=\"btn btn-primary mt-10\" type=\"submit\" [disabled]=\"bzp_angForm.pristine || !imgURL || bzp_angForm.controls['product_description'].invalid || bzp_angForm.controls['agent_savings'].invalid || bzp_angForm.controls['assigned_savings'].invalid || bzp_angForm.controls['initial_cc_price'].invalid || bzp_angForm.controls['availability'].invalid || bzp_angForm.controls['bp_name'].invalid\">\n                            Update Product\n                        </button>\n                    </ng-template>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: BazaarProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazaarProductEditComponent", function() { return BazaarProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../model/currency */ "./src/app/model/currency.ts");
/* harmony import */ var src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/country-currency-price.service */ "./src/app/services/country-currency-price.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var BazaarProductEditComponent = /** @class */ (function () {
    function BazaarProductEditComponent(router, socket, share, api, fb, ccp, notify, http) {
        this.router = router;
        this.socket = socket;
        this.share = share;
        this.api = api;
        this.fb = fb;
        this.ccp = ccp;
        this.notify = notify;
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].backendUrl;
        this.auto_control_cc_price = 0;
        this.auto_initial_lc_price = 0;
        this.auto_control_lc_price = 0;
        this.auto_indirect_savings = 8;
        this.auto_personal_savings = 0;
        this.original_availability = 0;
        this.bz_pro_id = 0;
        this.currency = new _model_currency__WEBPACK_IMPORTED_MODULE_8__["default"];
        this.cCode = 'PH';
        this.curCode = 'PHP';
        this.currencyValue = 0;
        this.bzp_image_name = '';
        this.loading = false;
        this.bzp_uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({
            url: this.uri + '/images/bazaarProd', itemAlias: 'bzp_photo', headers: [{ name: 'Accept', value: 'application/json' }]
        });
        this.createForm();
    }
    BazaarProductEditComponent.prototype.createForm = function () {
        // create bazaar product form
        this.bzp_angForm = this.fb.group({
            bp_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            availability: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            initial_cc_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            assigned_savings: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(36), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            agent_savings: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            product_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bzp_photo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bzp_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    BazaarProductEditComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0) {
            return;
        }
        // console.log(files);
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    BazaarProductEditComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        var data = JSON.parse(response);
        // console.log(data);
        this.bzp_image_name = data['name'];
        // console.log(this.bzp_image_name);
    };
    BazaarProductEditComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response);
        console.log(error);
    };
    BazaarProductEditComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.bzp_uploader.onAfterAddingFile = function (file) {
                            file.withCredentials = false;
                        };
                        // for response after image uploading
                        this.bzp_uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
                        this.bzp_uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
                        // get product info from db
                        this.api.postToBackend('/productEdit', { bzp_id: this.router.params['_value'].id }, this.share.user.token).then(function (res) {
                            // console.log(res);
                            if (Object.keys(res).length === 1) {
                                _this.imgURL = 'assets/' + res[0]['bzp_photo'];
                                // fill input value with product information
                                _this.bzp_angForm.get('bp_name').setValue(res[0]['bp_name']);
                                _this.bzp_angForm.get('availability').setValue(res[0]['availability']);
                                _this.bzp_angForm.get('initial_cc_price').setValue(res[0]['initial_cc_price']);
                                _this.bzp_angForm.get('assigned_savings').setValue(res[0]['assigned_savings']);
                                _this.bzp_angForm.get('agent_savings').setValue(res[0]['agent_savings']);
                                _this.bzp_angForm.get('product_description').setValue(res[0]['product_description']);
                                _this.bzp_angForm.get('bzp_type').setValue(res[0]['bzp_type']);
                                _this.cc_lc_Change(res[0]['initial_cc_price']);
                                _this.auto_assigned_savings = res[0]['assigned_savings'];
                                _this.auto_agent_savings = res[0]['agent_savings'];
                                _this.auto_personal_savings = res[0]['assigned_savings'] - res[0]['agent_savings'] - _this.auto_indirect_savings;
                                _this.original_availability = res[0]['availability'];
                                _this.bz_pro_id = res[0]['bz_pro_id'];
                                _this.bzp_image_name = res[0]['bzp_photo'];
                            }
                        });
                        // get user country code
                        _a = this;
                        return [4 /*yield*/, this.ccp.getUserInfo()];
                    case 1:
                        // get user country code
                        _a.userInfo = _c.sent();
                        this.cCode = this.userInfo['countryCode'];
                        // get user country currency code
                        this.curCode = this.currency["" + this.cCode];
                        // get user country currency value
                        _b = this;
                        return [4 /*yield*/, this.ccp.getCurrencyValue(this.curCode)];
                    case 2:
                        // get user country currency value
                        _b.currencyValue = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BazaarProductEditComponent.prototype.cc_lc_Change = function (initial_cc_price) {
        this.auto_control_cc_price = initial_cc_price;
        this.auto_initial_lc_price = initial_cc_price;
        this.auto_control_lc_price = initial_cc_price;
    };
    BazaarProductEditComponent.prototype.saving_Change = function (saving_value, flag) {
        if (flag === 0) {
            this.auto_assigned_savings = saving_value;
        }
        else {
            this.auto_agent_savings = saving_value;
        }
        this.auto_personal_savings = this.auto_assigned_savings - this.auto_agent_savings - this.auto_indirect_savings;
    };
    // update bazaar product submit
    BazaarProductEditComponent.prototype.submitProd = function (total_lc_amount) {
        var _this = this;
        this.loading = true;
        var bz_prod_uri = this.uri + '/bzprodUpdate/' + this.bz_pro_id;
        this.bzp_angForm.value.agent_savings = this.agent_savings.nativeElement.value;
        this.bzp_angForm.value.assigned_savings = this.assigned_savings.nativeElement.value;
        this.bzp_angForm.value.control_cc_price = this.control_cc_price.nativeElement.value;
        this.bzp_angForm.value.control_lc_price = this.control_lc_price.nativeElement.value;
        this.bzp_angForm.value.indirect_savings = this.indirect_savings.nativeElement.value;
        this.bzp_angForm.value.initial_lc_price = this.initial_lc_price.nativeElement.value;
        this.bzp_angForm.value.lc_btc = this.lc_btc.nativeElement.value;
        this.bzp_angForm.value.lc_cc = this.lc_cc.nativeElement.value;
        this.bzp_angForm.value.personal_savings = this.personal_savings.nativeElement.value;
        this.bzp_angForm.value.total_indirect_savings = this.total_indirect_savings.nativeElement.value;
        this.bzp_angForm.value.total_product_costs = this.total_product_costs.nativeElement.value;
        this.bzp_angForm.value.bzp_photo = this.bzp_image_name;
        var new_availability = parseInt(this.bzp_angForm.value.availability, 10);
        if (this.original_availability === new_availability) {
            // updating produt post
            this.http.post("" + bz_prod_uri, this.bzp_angForm.value).subscribe(function (res) {
                _this.loading = false;
                if (res['status'] === 'success') {
                    _this.notify.success('INFO', 'Product Update Success!', { timeOut: 5000 });
                    _this.ngOnInit();
                }
            });
        }
        else {
            this.api.postToBackend('/recordOrder', {
                rate: this.socket.lc_btc,
                amount_lc: total_lc_amount,
                type: 'bzpost'
            }, this.share.user.token).then(function (res) {
                _this.loading = false;
                _this.notify.success('INFO', 'Processing Success!', { timeOut: 5000 });
                // updating produt post
                _this.http.post("" + bz_prod_uri, _this.bzp_angForm.value).subscribe(function (rs) {
                    if (rs['status'] === 'success') {
                        _this.notify.success('INFO', 'Product Update Success!', { timeOut: 5000 });
                        _this.ngOnInit();
                    }
                });
            }).catch(function (err) {
                _this.notify.error('ERROR', JSON.parse(err._body).payload);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('agent_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "agent_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('assigned_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "assigned_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('control_cc_price'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "control_cc_price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('control_lc_price'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "control_lc_price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('indirect_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "indirect_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('initial_lc_price'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "initial_lc_price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lc_btc'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "lc_btc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lc_cc'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "lc_cc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('personal_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "personal_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('total_indirect_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "total_indirect_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('total_product_costs'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BazaarProductEditComponent.prototype, "total_product_costs", void 0);
    BazaarProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bazaar-product-edit',
            template: __webpack_require__(/*! ./bazaar-product-edit.component.html */ "./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.html"),
            styles: [__webpack_require__(/*! ./bazaar-product-edit.component.css */ "./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"], src_app_services_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_9__["CountryCurrencyPriceService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]])
    ], BazaarProductEditComponent);
    return BazaarProductEditComponent;
}());



/***/ }),

/***/ "./src/app/client/bazaar/bazaar-product/bazaar-product.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/client/bazaar/bazaar-product/bazaar-product.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 1px solid #ddd;\r\n    border-radius: 3px;\r\n    padding: 3px;\r\n    min-height: 188px;\r\n    max-height: 188px;\r\n}\r\n\r\n.card-body {\r\n    padding: 0.75rem;\r\n}\r\n\r\n.search-hero {\r\n    padding-bottom: 30px;\r\n}\r\n\r\np {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.bz_cart_icon {\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.badge {\r\n    padding-left: 9px;\r\n    padding-right: 9px;\r\n    border-radius: 9px;\r\n}\r\n\r\n.label-warning[href],\r\n.badge-warning[href] {\r\n    background-color: #c67605;\r\n}\r\n\r\n#cart_count {\r\n    font-size: 15px;\r\n    background: #007bff;\r\n    color: #fff;\r\n    padding: 0 5px;\r\n    vertical-align: top;\r\n    margin-left: -9px;\r\n}\r\n\r\n.shop_title {\r\n    text-transform: uppercase;\r\n    margin-bottom: 15px;\r\n}\r\n\r\nh5 {\r\n    font-size: 0.75rem;\r\n}"

/***/ }),

/***/ "./src/app/client/bazaar/bazaar-product/bazaar-product.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/client/bazaar/bazaar-product/bazaar-product.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"search-hero col-md-11 col-sm-11\">\n        <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" autocomplete=\"off\" placeholder=\"Search product name or product description here...\">\n    </div>\n    <div class=\"col-md-1 col-sm-1 bz_cart_icon\">\n        <a [routerLink]=\"['precheckout']\">\n            <em class=\"icon-basket\"></em>\n            <span class='badge badge-warning' id=\"cart_count\" name=\"cart_count\">{{ cart_count }}</span>\n        </a>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n        <div class=\"card border-dark\">\n            <div class=\"card-body\">\n                <p>\n                    <strong>Important : </strong> Buy product to the bazaar owner which you know. The transaction of buying and selling is between buyer and seller. We are not liable to any undeliveried products or any product related issue.\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-primary text-center\">\n            <div class=\"card-body\">\n                <strong>LC Maintaining Balance : {{ socket.LcMaintainingBalance }} LC</strong>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-danger text-center\">\n            <div class=\"card-body\">\n                <strong>1 LC : {{ socket.lc_btc | number:'0.0-15' }} BTC</strong>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-success text-center\">\n            <div class=\"card-body\">\n                <strong>1 LC : {{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }} {{ curCode }}</strong>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-dark text-center\">\n            <div class=\"card-body\">\n                <strong>LC Balance : {{ socket.lc_balance }} LC</strong>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"socket.LcMaintainingBalance >= socket.lc_balance\">\n    <div class=\"col-md-12 col-sm-12 text-center text-danger\">\n        <p>\n            * Please charge LC Balance. If your LC Balance is greater than LC Manitaining Balance, you can add product to cart.\n        </p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n        <h4 class=\"shop_title\">\n            <strong>\n              {{ bz_shop_name }}\n          </strong>\n        </h4>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 col-sm-12 text-center\" *ngIf=\"!bazaar_products.length; else display_products\">\n        <p>\n            * No products in this bazaar shop.\n        </p>\n    </div>\n    <ng-template #display_products>\n        <div class=\"col-md-3\" *ngFor=\"let bzp of bazaar_products | keyvalue | filter:searchText; let i = index\">\n            <div class=\"card mb-4 text-white bg-dark\">\n                <img class=\"card-img-top\" src=\"assets/{{ bzp.value.bzp_photo }}\" alt=\"bzp.value.bp_name\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Product Name : {{ bzp.value.bp_name }}</h5>\n                    <h5 class=\"card-title\">Initial LC Price : {{ bzp.value.initial_lc_price }} LC</h5>\n                    <h5 class=\"card-title\">Controlled LC Price : {{ bzp.value.initial_cc_price / (socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4') }} LC</h5>\n                    <h5 class=\"card-title\">Initial CC Price : {{ bzp.value.initial_cc_price }} {{ curCode }}</h5>\n                    <h5 class=\"card-title\">Controlled CC Price : {{ bzp.value.initial_cc_price / (socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4') * bzp.value.lc_cc }} {{ curCode }}</h5>\n                    <h5 class=\"card-title\">Personal Savings : {{ bzp.value.personal_savings }} %</h5>\n                    <h5 class=\"card-title\">Agent Savings : {{ bzp.value.agent_savings }} %</h5>\n                    <h5 class=\"card-title\">Availability : {{ bzp.value.availability }}</h5>\n                    <h5 class=\"card-title\">1 LC To CC @ Post Priced : {{ bzp.value.lc_cc }} {{ curCode }}</h5>\n                    <h5 class=\"card-title\">Present 1 LC to CC : {{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }} {{ curCode }}</h5>\n                    <h5 class=\"card-title\">Present 1 LC to BTC : {{ socket.lc_btc | number:'0.0-15' }} BTC</h5>\n                    <h5 class=\"card-title\">Product Description : {{ bzp.value.product_description | slice:0:20 }} ...</h5>\n                    <button class=\"btn btn-block btn-primary\" [routerLink]=\"['product/edit/', bzp.value.bz_pro_id]\" *ngIf=\"owner_flag\">Edit</button>\n                    <button class=\"btn btn-block btn-danger\" *ngIf=\"owner_flag\" data-toggle=\"modal\" attr.data-target=\"#confirmModal{{i}}\">Delete</button>\n                    <button class=\"btn btn-outline-light btn-block\" *ngIf=\"!owner_flag\" [disabled]=\"socket.LcMaintainingBalance >= socket.lc_balance\" (click)=\"addToCart(bzp.value.bz_pro_id)\">Add To Cart</button>\n\n                    <div class=\"modal fade\" id=\"confirmModal{{i}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"BazaarConfirmModal\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-primary\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h4 class=\"modal-title\">Confirmation</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                        <span aria-hidden=\"true\">&times;</span>\n                                    </button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    <div class=\"text-center text-dark\">\n                                        <strong>Do you want to delete this product?</strong>\n                                    </div>\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button class=\"close\" data-dismiss=\"modal\" type=\"button\" (click)=\"product_delete(bzp.value.bz_pro_id)\">\n                                        <a class=\"btn btn-danger\">Delete</a>\n                                    </button>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                                        <a class=\"btn btn-secondary\">Cancel</a>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/client/bazaar/bazaar-product/bazaar-product.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/client/bazaar/bazaar-product/bazaar-product.component.ts ***!
  \**************************************************************************/
/*! exports provided: BazaarProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazaarProductComponent", function() { return BazaarProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var src_app_bazaar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bazaar.service */ "./src/app/bazaar.service.ts");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/currency */ "./src/app/model/currency.ts");
/* harmony import */ var src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/country-currency-price.service */ "./src/app/services/country-currency-price.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var BazaarProductComponent = /** @class */ (function () {
    function BazaarProductComponent(share, bzs, socket, ccp, http, notify, route, api) {
        this.share = share;
        this.bzs = bzs;
        this.socket = socket;
        this.ccp = ccp;
        this.http = http;
        this.notify = notify;
        this.route = route;
        this.api = api;
        this.currency = new _model_currency__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.cCode = 'PH';
        this.curCode = 'PHP';
        this.currencyValue = 0;
        this.bazaar_products = {};
        this.cart_count = 0;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].backendUrl;
        this.owner_flag = false;
    }
    BazaarProductComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var param_id, _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        param_id = parseInt(this.route.params['_value'].id, 10);
                        if (param_id === this.share.user.id) {
                            this.owner_flag = true;
                        }
                        // get cart count
                        this.getCartCount();
                        // get user country code
                        _a = this;
                        return [4 /*yield*/, this.ccp.getUserInfo()];
                    case 1:
                        // get user country code
                        _a.userInfo = _d.sent();
                        this.cCode = this.userInfo['countryCode'];
                        // get user country currency code
                        this.curCode = this.currency["" + this.cCode];
                        // get user country currency value
                        _b = this;
                        return [4 /*yield*/, this.ccp.getCurrencyValue(this.curCode)];
                    case 2:
                        // get user country currency value
                        _b.currencyValue = _d.sent();
                        // get bazaar products
                        _c = this;
                        return [4 /*yield*/, this.bzs.getBazaarProducts(this.route.params['_value'].id)];
                    case 3:
                        // get bazaar products
                        _c.bazaar_products = _d.sent();
                        // console.log(this.bazaar_products);
                        // get bazaar info
                        this.http.get(this.uri + '/getBazaarInfo/' + this.route.params['_value'].id).subscribe(function (response) {
                            if (response['bz_name']) {
                                _this.bz_shop_name = response['bz_name'];
                            }
                            else {
                                _this.bz_shop_name = 'Bazaar Shop';
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BazaarProductComponent.prototype.getCartCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.uri + "/getCartCount/" + this.share.user.id).toPromise()];
                    case 1:
                        res = _a.sent();
                        this.cart_count = res['total'];
                        return [2 /*return*/];
                }
            });
        });
    };
    BazaarProductComponent.prototype.addToCart = function (bz_pro_id) {
        var _this = this;
        var param_id = parseInt(this.route.params['_value'].id, 10);
        var share_user_id = parseInt(this.share.user.id, 10);
        if (param_id === share_user_id) {
            this.notify.error('INFO', 'This is your own product!', { timeOut: 5000 });
        }
        else {
            this.http.post(this.uri + "/addToCart", { bz_pro_id: bz_pro_id, userid: this.share.user.id }).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.cart_count++;
                    _this.notify.success('INFO', res['payload'], { timeOut: 5000 });
                }
                else if (res['status'] === 'already') {
                    _this.notify.error('INFO', res['payload'], { timeOut: 5000 });
                }
            });
        }
    };
    BazaarProductComponent.prototype.product_delete = function (bz_pro_id) {
        var _this = this;
        this.api.postToBackend('/deleteProduct', { bz_pro_id: bz_pro_id }, this.share.user.token).then(function (res) {
            if (res['status'] === 'success') {
                _this.notify.success('INFO', res['payload'], { timeOut: 5000 });
                _this.ngOnInit();
            }
            else if (res['status'] === 'error') {
                _this.notify.error('INFO', res['payload'], { timeOut: 5000 });
            }
        });
    };
    BazaarProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bazaar-product',
            template: __webpack_require__(/*! ./bazaar-product.component.html */ "./src/app/client/bazaar/bazaar-product/bazaar-product.component.html"),
            styles: [__webpack_require__(/*! ./bazaar-product.component.css */ "./src/app/client/bazaar/bazaar-product/bazaar-product.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"], src_app_bazaar_service__WEBPACK_IMPORTED_MODULE_2__["BazaarService"], src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_5__["CountryCurrencyPriceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], angular2_notifications__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"]])
    ], BazaarProductComponent);
    return BazaarProductComponent;
}());



/***/ }),

/***/ "./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table tbody tr td {\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\ntable thead th {\r\n    text-align: center;\r\n}\r\n\r\nimg {\r\n    border: 1px solid #ddd;\r\n    border-radius: 3px;\r\n    padding: 3px;\r\n}\r\n\r\n.mb-20 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.dataTables_filter input {\r\n    width: 300px;\r\n    display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row  mb-20\">\n        <div class=\"col-md-4 col-sm-4\">\n            <button class=\"btn btn-block btn-success\" (click)=\"personal()\" [disabled]=\"flag\">\n              <strong>Persanal Savings</strong>\n            </button>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <button class=\"btn btn-block btn-danger\" (click)=\"agent()\" [disabled]=\"!flag\">\n              <strong>Agent Savings</strong>\n            </button>\n        </div>\n        <div class=\"col-md-4 col-sm-4\">\n            <button class=\"btn btn-block btn-primary\" disabled>\n                <strong>{{ flag ? 'Personal Savings' : 'Agent Savings' }} LC</strong>\n              </button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <a (click)=\"goToBazaarHome()\" style=\"cursor: pointer;\">\n                    <strong>Bazaar / </strong>\n                </a>\n                <a class=\"active text-primary\">\n                    <strong>{{ flag ? 'Personal' : 'Agent' }} & Savings</strong>\n                </a>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 col-sm-12\">\n                        <table class=\"table table-striped table-bordered row-border\" *ngIf=\"flag\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n                            <thead>\n                                <tr>\n                                    <th>No</th>\n                                    <th>Image</th>\n                                    <th>Product Name</th>\n                                    <th>Sold @ LC Price</th>\n                                    <th>Initial LC Price</th>\n                                    <th>Sold @ CC Price</th>\n                                    <th>Initial CC Price</th>\n                                    <th>Number Itme Sold</th>\n                                    <th>Total LC Amount</th>\n                                    <th>Personal Savings</th>\n                                    <th>TPS</th>\n                                    <th>Date & Time</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let bazaar of savings | keyvalue; let i = index\">\n                                    <td>{{ i + 1 }}</td>\n                                    <td>\n                                        <img src=\"assets/{{ bazaar.value.Bzp_Info[0].bzp_photo }}\" style=\"max-width:100px; max-height:70px;\" alt=\"\" />\n                                    </td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].bp_name }}</td>\n                                    <td>{{ bazaar.value.buy_controlled_lc_price | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].initial_lc_price | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.buy_controlled_cc_price }}{{ curCode }}</td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].initial_cc_price }}{{ curCode }}</td>\n                                    <td>{{ bazaar.value.quantity }}</td>\n                                    <td>{{ bazaar.value.lcamount | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].personal_savings }} %</td>\n                                    <td>{{ bazaar.value.tps | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.update_time | date : 'short' }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <table class=\"table table-striped table-bordered row-border\" *ngIf=\"!flag\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTriggerAgent\">\n                            <thead>\n                                <tr>\n                                    <th>No</th>\n                                    <th>Image</th>\n                                    <th>Product Name</th>\n                                    <th>Sold @ LC Price</th>\n                                    <th>Initial LC Price</th>\n                                    <th>Sold @ CC Price</th>\n                                    <th>Initial CC Price</th>\n                                    <th>Number Itme Sold</th>\n                                    <th>Total LC Amount</th>\n                                    <th>Agent Savings</th>\n                                    <th>TAS</th>\n                                    <th>Date & Time</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let bazaar of agentSavings | keyvalue; let i = index\">\n                                    <td>{{ i + 1 }}</td>\n                                    <td>\n                                        <img src=\"assets/{{ bazaar.value.Bzp_Info[0].bzp_photo }}\" style=\"max-width:100px; max-height:70px;\" alt=\"\" />\n                                    </td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].bp_name }}</td>\n                                    <td>{{ bazaar.value.buy_controlled_lc_price | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].initial_lc_price | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.buy_controlled_cc_price }}{{ curCode }}</td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].initial_cc_price }}{{ curCode }}</td>\n                                    <td>{{ bazaar.value.quantity }}</td>\n                                    <td>{{ bazaar.value.lcamount | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.Bzp_Info[0].agent_savings }} %</td>\n                                    <td>{{ bazaar.value.tas | number:'0.4-4' }}LC</td>\n                                    <td>{{ bazaar.value.update_time | date : 'short' }}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.ts ***!
  \******************************************************************************************/
/*! exports provided: PersonalAgentSavingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalAgentSavingsComponent", function() { return PersonalAgentSavingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/country-currency-price.service */ "./src/app/services/country-currency-price.service.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../model/currency */ "./src/app/model/currency.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var PersonalAgentSavingsComponent = /** @class */ (function () {
    function PersonalAgentSavingsComponent(router, share, api, ccp) {
        this.router = router;
        this.share = share;
        this.api = api;
        this.ccp = ccp;
        this.savings = {};
        this.agentSavings = {};
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dtTriggerAgent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.flag = true;
        this.currency = new _model_currency__WEBPACK_IMPORTED_MODULE_6__["default"];
        this.cCode = 'PH';
        this.curCode = 'PHP';
    }
    PersonalAgentSavingsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // get user country code
                        _a = this;
                        return [4 /*yield*/, this.ccp.getUserInfo()];
                    case 1:
                        // get user country code
                        _a.userInfo = _b.sent();
                        this.cCode = this.userInfo['countryCode'];
                        // get user country currency code
                        this.curCode = this.currency["" + this.cCode];
                        this.dtOptions = {
                            pagingType: 'full_numbers',
                            pageLength: 10,
                            processing: true,
                            ordering: true
                        };
                        this.getData(this.flag);
                        return [2 /*return*/];
                }
            });
        });
    };
    PersonalAgentSavingsComponent.prototype.getData = function (cond) {
        var _this = this;
        if (cond) {
            this.api.postToBackend('/getPersonalSavings', { userid: this.share.user.id }, this.share.user.token).then(function (res) {
                _this.savings = res;
                _this.dtTrigger.next();
            });
        }
        else {
            this.agentSavings = {};
            this.dtTriggerAgent.next();
        }
    };
    // tslint:disable-next-line: use-life-cycle-interface
    PersonalAgentSavingsComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
        this.dtTriggerAgent.unsubscribe();
    };
    PersonalAgentSavingsComponent.prototype.personal = function () {
        this.flag = !this.flag;
        this.getData(this.flag);
    };
    PersonalAgentSavingsComponent.prototype.agent = function () {
        this.flag = !this.flag;
        this.getData(this.flag);
    };
    PersonalAgentSavingsComponent.prototype.goToBazaarHome = function () {
        this.router.navigate(['cryptobazaar']);
    };
    PersonalAgentSavingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-agent-savings',
            template: __webpack_require__(/*! ./personal-agent-savings.component.html */ "./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.html"),
            styles: [__webpack_require__(/*! ./personal-agent-savings.component.css */ "./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_5__["CountryCurrencyPriceService"]])
    ], PersonalAgentSavingsComponent);
    return PersonalAgentSavingsComponent;
}());



/***/ }),

/***/ "./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout_title {\r\n    text-transform: uppercase;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.card-body {\r\n    padding: 0.75rem;\r\n}\r\n\r\nimg {\r\n    border: 1px solid #ddd;\r\n    border-radius: 3px;\r\n    padding: 3px;\r\n    min-height: 150px;\r\n    max-height: 150px;\r\n}\r\n\r\nh5 {\r\n    font-size: 1.0rem;\r\n}\r\n\r\n.mb-15 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.ml-10 {\r\n    margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-primary text-center\">\n            <div class=\"card-body\">\n                <strong>LC Maintaining Balance : {{ socket.LcMaintainingBalance }} LC</strong>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-danger text-center\">\n            <div class=\"card-body\">\n                <strong>1 LC : {{ socket.lc_btc | number:'0.0-15' }} BTC</strong>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-success text-center\">\n            <div class=\"card-body\">\n                <strong>1 LC : {{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }} {{ curCode }}</strong>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-3 col-md-3\">\n        <div class=\"card text-white bg-dark text-center\">\n            <div class=\"card-body\">\n                <strong>LC Balance : {{ socket.lc_balance }} LC</strong>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-10 col-sm-10\">\n        <h4 class=\"checkout_title\">\n            <strong>\n                Pre Checkout Orders\n          </strong>\n        </h4>\n    </div>\n    <div class=\"col-md-2 col-sm-2\">\n        <button class=\"btn btn-block btn-primary mb-15\">\n          <em class=\"icon-basket\"></em>\n          <strong> {{ cart_count }} product(s)</strong>\n        </button>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n        <div *ngIf='loading' class='loading'>\n            <img class='img-fluid' src='assets/loading.gif' alt=\"\" />\n        </div>\n    </div>\n    <div class=\"col-md-12 col-sm-12\">\n        <div class=\"alert alert-success text-center\" style=\"color:white\" *ngIf=\"showSuccess == true\">\n            <strong>* {{ success.message }}</strong>\n        </div>\n    </div>\n    <div class=\"col-sm-12 col-md-12\" *ngIf=\"claim && cart_count > 0\">\n        <div class=\"card bg-secondary text-center\">\n            <div class=\"card-body\">\n                <strong>Bazaar # : {{ bazaar_shop_id }} | Claim Code : {{ claim }}</strong>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12 text-center\" *ngIf=\"!pre_check_out_info.length; else display_products\">\n        <strong>* There is no products. Please add product to cart.</strong>\n    </div>\n    <ng-template #display_products>\n        <div class=\"col-md-12 row\" *ngFor=\"let bzp of pre_check_out_info | keyvalue\">\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 text-white bg-dark\">\n                    <img class=\"card-img-top\" src=\"assets/{{ bzp.value.Pro_Info[0].bzp_photo }}\" alt=\"bzp.value.Pro_Info[0].bp_name\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">Bazaar # : {{ bzp.value.Pro_Info[0].userid }}</h5>\n                        <h5 class=\"card-title\">Product Name : {{ bzp.value.Pro_Info[0].bp_name }}</h5>\n                        <h5 class=\"card-title\">Availability : {{ bzp.value.Pro_Info[0].availability }}</h5>\n                        <h5 class=\"card-title\">Initial LC Price : {{ bzp.value.Pro_Info[0].initial_lc_price }} LC</h5>\n                        <h5 class=\"card-title\">Controlled LC Price : {{ bzp.value.Pro_Info[0].initial_cc_price / (socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4') }} LC</h5>\n                        <h5 class=\"card-title\">Initial CC Price : {{ bzp.value.Pro_Info[0].initial_cc_price }} {{ curCode }}</h5>\n                        <h5 class=\"card-title\">Controlled CC Price : {{ bzp.value.Pro_Info[0].initial_cc_price / (socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4') * bzp.value.Pro_Info[0].lc_cc }} {{ curCode }}</h5>\n                        <h5 class=\"card-title\">1 LC To CC @ Post Priced : {{ bzp.value.Pro_Info[0].lc_cc }} {{ curCode }}</h5>\n                        <h5 class=\"card-title\">Personal Savings : {{ bzp.value.Pro_Info[0].personal_savings }} %</h5>\n                        <h5 class=\"card-title\">Agent Savings : {{ bzp.value.Pro_Info[0].agent_savings }} %</h5>\n                        <h5 class=\"card-title\">Present 1 LC to CC : {{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }} {{ curCode }}</h5>\n                        <h5 class=\"card-title\">Present 1 LC to BTC : {{ socket.lc_btc | number:'0.0-15' }} BTC</h5>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <strong>Order Details</strong>\n                    </div>\n                    <div class=\"card-body\">\n                        <form class=\"form-horizontal\">\n                            <div class=\"alert alert-danger text-center\" *ngIf=\"total_payable_lc * bzp.value.Pro_Info[0].lc_cc > socket.lc_balance\">\n                                Insufficient LC Balance\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-5 col-form-label\" for=\"buy_controlled_cc_price{{bzp.value.bz_pro_id}}\">Buy @ Controlled CC Price</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\" name=\"buy_controlled_cc_price{{bzp.value.bz_pro_id}}\" (keyup)=\"buy_controlled_cc_price_change($event, bzp.value.Pro_Info[0].lc_cc)\" required placeholder=\"Please type controll cc value...\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"alert alert-danger text-center\" *ngIf=\"0 > buy_controlled_cc_price\">\n                                Invalid value\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-5 col-form-label\" for=\"quantity{{bzp.value.bz_pro_id}}\">Quantity</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\" name=\"quantity{{bzp.value.bz_pro_id}}\" (keyup)=\"quantity_change($event)\" placeholder=\"Please type quantity...\" required type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"alert alert-danger text-center\" *ngIf=\"quantity > bzp.value.Pro_Info[0].availability || 0 > quantity\">\n                                Insufficient stocks or invalid value\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-5 col-form-label\" for=\"totoal_payable_cc_value{{bzp.value.bz_pro_id}}\">Total Payable CC Value</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\" #totoal_payable_cc_value{{bzp.value.bz_pro_id}} type=\"number\" readonly [value]=\"total_payable_cc\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-5 col-form-label\" for=\"total_payable_lc{{bzp.value.bz_pro_id}}\">Total Payable LC</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\" #total_payable_lc{{bzp.value.bz_pro_id}} type=\"number\" readonly [value]=\"total_payable_lc\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-5 col-form-label\" for=\"buy_controlled_lc_price{{bzp.value.bz_pro_id}}\">Buy @ Controlled LC Price</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\" #buy_controlled_lc_price{{bzp.value.bz_pro_id}} readonly type=\"number\" [value]=\"buy_controlled_lc_price\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-5 col-form-label\" for=\"tps\">TPS</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\" #tps readonly type=\"number\" [value]=\"total_payable_lc * bzp.value.Pro_Info[0].personal_savings / 100\">\n                                </div>\n                            </div>\n                            <div class=\"form-group row\">\n                                <label class=\"col-sm-5 col-form-label\" for=\"tas\">TAS</label>\n                                <div class=\"col-sm-6\">\n                                    <input class=\"form-control\" #tas readonly type=\"number\" [value]=\"total_payable_lc * bzp.value.Pro_Info[0].agent_savings / 100\">\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <button class=\"btn btn-danger\" type=\"submit\" (click)=\"submitPay(bzp.value.Pro_Info[0].userid, bzp.value.bz_pro_id, tps.value, tas.value, bzp.value.cart_id)\" [disabled]=\"total_payable_lc * bzp.value.Pro_Info[0].lc_cc > socket.lc_balance || quantity > bzp.value.Pro_Info[0].availability  || !buy_controlled_cc_price || 0 >= buy_controlled_cc_price || !quantity || 0 >= quantity\">Pay Item</button>\n                        <button class=\"btn btn-dark ml-10\" type=\"button\" (click)=\"cancelProduct(bzp.value.cart_id)\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.ts ***!
  \************************************************************************************/
/*! exports provided: PreCheckoutOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreCheckoutOrdersComponent", function() { return PreCheckoutOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/country-currency-price.service */ "./src/app/services/country-currency-price.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/currency */ "./src/app/model/currency.ts");
/* harmony import */ var src_app_services_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_bazaar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/bazaar.service */ "./src/app/bazaar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var PreCheckoutOrdersComponent = /** @class */ (function () {
    function PreCheckoutOrdersComponent(socket, ccp, api, share, http, bzs, fb, notify) {
        this.socket = socket;
        this.ccp = ccp;
        this.api = api;
        this.share = share;
        this.http = http;
        this.bzs = bzs;
        this.fb = fb;
        this.notify = notify;
        this.currency = new _model_currency__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.cCode = 'PH';
        this.curCode = 'PHP';
        this.currencyValue = 0;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl;
        this.pre_check_out_info = {};
        this.cart_count = 0;
        this.total_payable_cc = 0;
        this.total_payable_lc = 0;
        this.loading = false;
        this.showSuccess = false;
        this.success = { message: '' };
        this.bazaar_shop_id = 0;
        this.payItem = this.fb.group({});
    }
    PreCheckoutOrdersComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.buy_controlled_cc_price = 0;
                        this.quantity = 0;
                        // get cart count
                        this.getCartCount();
                        // get user country code
                        _a = this;
                        return [4 /*yield*/, this.ccp.getUserInfo()];
                    case 1:
                        // get user country code
                        _a.userInfo = _d.sent();
                        this.cCode = this.userInfo['countryCode'];
                        // get user country currency code
                        this.curCode = this.currency["" + this.cCode];
                        // get user country currency value
                        _b = this;
                        return [4 /*yield*/, this.ccp.getCurrencyValue(this.curCode)];
                    case 2:
                        // get user country currency value
                        _b.currencyValue = _d.sent();
                        // get pre checkout order product information
                        _c = this;
                        return [4 /*yield*/, this.bzs.getPreCheckoutInfo(this.share.user.id)];
                    case 3:
                        // get pre checkout order product information
                        _c.pre_check_out_info = _d.sent();
                        // console.log(this.pre_check_out_info);
                        if (this.pre_check_out_info.length) {
                            this.api.postToBackend('/claim', { shop_id: this.pre_check_out_info[0].Pro_Info[0].userid, userid: this.share.user.id }, this.share.user.token).then(function (res) {
                                // console.log(Object.keys(res).length);
                                if (Object.keys(res).length === 0) {
                                    _this.claim = false;
                                }
                                else {
                                    // console.log(res);
                                    _this.claim = res[0]['claim'];
                                    _this.bazaar_shop_id = res[0]['shop_id'];
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PreCheckoutOrdersComponent.prototype.getCartCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.uri + "/getCartCount/" + this.share.user.id).toPromise()];
                    case 1:
                        res = _a.sent();
                        this.cart_count = res['total'];
                        return [2 /*return*/];
                }
            });
        });
    };
    PreCheckoutOrdersComponent.prototype.buy_controlled_cc_price_change = function (event, lc_to_cc_post_priced) {
        this.buy_controlled_cc_price = parseFloat(event.target.value);
        // Buy @ Controlled LC Price = Buy @ Controlled CC Price / 1 LC To CC @ Post Priced
        this.buy_controlled_lc_price = this.buy_controlled_cc_price / lc_to_cc_post_priced;
        // Total Payable CC Value = Quantity * Buy @ Controlled CC Price
        this.total_payable_cc = this.buy_controlled_cc_price * this.quantity;
        // Total Payable LC = Quantity * Buy @ Controlled LC Price
        this.total_payable_lc = this.quantity * this.buy_controlled_lc_price;
    };
    PreCheckoutOrdersComponent.prototype.quantity_change = function (event) {
        this.quantity = parseInt(event.target.value, 10);
        this.total_payable_cc = parseFloat((this.buy_controlled_cc_price * this.quantity).toFixed(7));
        this.total_payable_lc = this.quantity * this.buy_controlled_lc_price;
    };
    PreCheckoutOrdersComponent.prototype.submitPay = function (shop_id, bz_pro_id, tps, tas, cart_id) {
        var _this = this;
        if (this.bazaar_shop_id !== 0) {
            if (this.bazaar_shop_id !== shop_id && this.claim) {
                this.notify.error('INFO', 'Shop to bazaar id number ' + this.bazaar_shop_id, { timeOut: 5000 });
                this.ngOnInit();
                return;
            }
        }
        this.payItem.value.shop_id = shop_id;
        this.payItem.value.bz_pro_id = bz_pro_id;
        this.payItem.value.quantity = this.quantity;
        this.payItem.value.buy_controlled_cc_price = this.buy_controlled_cc_price;
        this.payItem.value.total_payable_cc_price = this.total_payable_cc;
        this.payItem.value.total_payable_lc = this.total_payable_lc;
        this.payItem.value.buy_controlled_lc_price = this.buy_controlled_lc_price;
        this.payItem.value.tps = tps;
        this.payItem.value.tas = tas;
        this.payItem.value.rate = this.socket.lc_btc;
        this.payItem.value.type = 'bzppay';
        this.payItem.value.claim = this.claim;
        this.payItem.value.cart_count = this.cart_count;
        this.payItem.value.cart_id = cart_id;
        // console.log(this.payItem.value);
        this.showSuccess = false;
        this.loading = true;
        this.api.postToBackend('/recordOrder', this.payItem.value, this.share.user.token).then(function (res) {
            _this.loading = false;
            if (res['status'] === 'success') {
                _this.notify.success('INFO', 'Pay Processing Success!', { timeOut: 5000 });
                _this.success.message = 'Payment Success!';
                _this.showSuccess = true;
                _this.ngOnInit();
            }
        }).catch(function (err) {
            _this.notify.error('ERROR', JSON.parse(err._body).payload);
        });
    };
    PreCheckoutOrdersComponent.prototype.cancelProduct = function (cid) {
        var _this = this;
        this.loading = true;
        this.api.postToBackend('/removeProductFromCart', { cart_id: cid }, this.share.user.token).then(function (res) {
            _this.loading = false;
            if (res) {
                _this.notify.success('INFO', 'Product Removed from your cart.', { timeOut: 5000 });
                _this.ngOnInit();
            }
        }).catch(function (err) {
            _this.notify.error('ERROR', JSON.parse(err._body).payload);
        });
    };
    PreCheckoutOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pre-checkout-orders',
            template: __webpack_require__(/*! ./pre-checkout-orders.component.html */ "./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.html"),
            styles: [__webpack_require__(/*! ./pre-checkout-orders.component.css */ "./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_2__["CountryCurrencyPriceService"], src_app_services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
            src_app_services_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_bazaar_service__WEBPACK_IMPORTED_MODULE_7__["BazaarService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"]])
    ], PreCheckoutOrdersComponent);
    return PreCheckoutOrdersComponent;
}());



/***/ }),

/***/ "./src/app/client/client-layout/client-layout.component.css":
/*!******************************************************************!*\
  !*** ./src/app/client/client-layout/client-layout.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/client-layout/client-layout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/client-layout/client-layout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid py-5\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/client/client-layout/client-layout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/client-layout/client-layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLayoutComponent", function() { return ClientLayoutComponent; });
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

var ClientLayoutComponent = /** @class */ (function () {
    function ClientLayoutComponent() {
    }
    ClientLayoutComponent.prototype.ngOnInit = function () {
    };
    ClientLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-layout',
            template: __webpack_require__(/*! ./client-layout.component.html */ "./src/app/client/client-layout/client-layout.component.html"),
            styles: [__webpack_require__(/*! ./client-layout.component.css */ "./src/app/client/client-layout/client-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientLayoutComponent);
    return ClientLayoutComponent;
}());



/***/ }),

/***/ "./src/app/client/client-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/client/client-routing.module.ts ***!
  \*************************************************/
/*! exports provided: Guard, ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return Guard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-layout/client-layout.component */ "./src/app/client/client-layout/client-layout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/client/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/client/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/client/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/client/register/register.component.ts");
/* harmony import */ var _withdrawal_withdrawal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withdrawal/withdrawal.component */ "./src/app/client/withdrawal/withdrawal.component.ts");
/* harmony import */ var _convert1_convert1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./convert1/convert1.component */ "./src/app/client/convert1/convert1.component.ts");
/* harmony import */ var _convert2_convert2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./convert2/convert2.component */ "./src/app/client/convert2/convert2.component.ts");
/* harmony import */ var _openorder_openorder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./openorder/openorder.component */ "./src/app/client/openorder/openorder.component.ts");
/* harmony import */ var _successfulorder_successfulorder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./successfulorder/successfulorder.component */ "./src/app/client/successfulorder/successfulorder.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about/about.component */ "./src/app/client/about/about.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/client/faq/faq.component.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _txhistory_txhistory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./txhistory/txhistory.component */ "./src/app/client/txhistory/txhistory.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/client/how-it-works/how-it-works.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/client/contact-us/contact-us.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/client/forgot-password/forgot-password.component.ts");
/* harmony import */ var _crypto_bazaar_crypto_bazaar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./crypto-bazaar/crypto-bazaar.component */ "./src/app/client/crypto-bazaar/crypto-bazaar.component.ts");
/* harmony import */ var _bazaar_bazaar_product_bazaar_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bazaar/bazaar-product/bazaar-product.component */ "./src/app/client/bazaar/bazaar-product/bazaar-product.component.ts");
/* harmony import */ var _bazaar_pre_checkout_orders_pre_checkout_orders_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bazaar/pre-checkout-orders/pre-checkout-orders.component */ "./src/app/client/bazaar/pre-checkout-orders/pre-checkout-orders.component.ts");
/* harmony import */ var _bazaar_bazaar_product_edit_bazaar_product_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bazaar/bazaar-product-edit/bazaar-product-edit.component */ "./src/app/client/bazaar/bazaar-product-edit/bazaar-product-edit.component.ts");
/* harmony import */ var _bazaar_personal_agent_savings_personal_agent_savings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bazaar/personal-agent-savings/personal-agent-savings.component */ "./src/app/client/bazaar/personal-agent-savings/personal-agent-savings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var Guard = /** @class */ (function () {
    function Guard(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    Guard.prototype.canActivate = function () {
        if (!this.storage.getUser() /* check user logged or not */) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    Guard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Guard);
    return Guard;
}());

var routes = [
    {
        path: '',
        component: _client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            },
            {
                path: 'home',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            },
            {
                path: 'register/:id',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            },
            {
                path: 'dashboard',
                canActivate: [Guard],
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                path: 'withdrawal',
                canActivate: [Guard],
                component: _withdrawal_withdrawal_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawalComponent"]
            },
            {
                path: 'convert-btc-to-lc',
                canActivate: [Guard],
                component: _convert1_convert1_component__WEBPACK_IMPORTED_MODULE_8__["Convert1Component"]
            },
            {
                path: 'convert-lc-to-btc',
                canActivate: [Guard],
                component: _convert2_convert2_component__WEBPACK_IMPORTED_MODULE_9__["Convert2Component"]
            },
            {
                path: 'open-order',
                canActivate: [Guard],
                component: _openorder_openorder_component__WEBPACK_IMPORTED_MODULE_10__["OpenorderComponent"]
            },
            {
                path: 'successful-order',
                canActivate: [Guard],
                component: _successfulorder_successfulorder_component__WEBPACK_IMPORTED_MODULE_11__["SuccessfulorderComponent"]
            },
            {
                path: 'txhistory',
                canActivate: [Guard],
                component: _txhistory_txhistory_component__WEBPACK_IMPORTED_MODULE_15__["TxhistoryComponent"]
            },
            {
                path: 'about',
                component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_13__["FaqComponent"]
            },
            {
                path: 'how',
                component: _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_16__["HowItWorksComponent"]
            },
            {
                path: 'contact',
                component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_17__["ContactUsComponent"]
            },
            {
                path: 'forgot',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"]
            },
            {
                path: 'cryptobazaar',
                component: _crypto_bazaar_crypto_bazaar_component__WEBPACK_IMPORTED_MODULE_19__["CryptoBazaarComponent"]
            },
            {
                path: 'cryptobazaar/shop/:id',
                component: _bazaar_bazaar_product_bazaar_product_component__WEBPACK_IMPORTED_MODULE_20__["BazaarProductComponent"]
            },
            {
                path: 'cryptobazaar/shop/:id/product/edit/:id',
                component: _bazaar_bazaar_product_edit_bazaar_product_edit_component__WEBPACK_IMPORTED_MODULE_22__["BazaarProductEditComponent"]
            },
            {
                path: 'cryptobazaar/shop/:id/precheckout',
                component: _bazaar_pre_checkout_orders_pre_checkout_orders_component__WEBPACK_IMPORTED_MODULE_21__["PreCheckoutOrdersComponent"]
            },
            {
                path: 'cryptobazaar/pandasavings',
                component: _bazaar_personal_agent_savings_personal_agent_savings_component__WEBPACK_IMPORTED_MODULE_23__["PersonalAgentSavingsComponent"]
            }
        ]
    }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/client/contact-us/contact-us.component.css":
/*!************************************************************!*\
  !*** ./src/app/client/contact-us/contact-us.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/contact-us/contact-us.component.html":
/*!*************************************************************!*\
  !*** ./src/app/client/contact-us/contact-us.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <div class=\"card\">\n                <div class=\"card-body col-md-10 offset-1\">\n                    <div class=\"row\">\n                        <div class=\"col text-center\">\n                            <h3>Contact Us</h3>\n                        </div>\n                    </div>\n                    <form [formGroup]=\"angForm\" novalidate class=\"form-horizontal\">\n                        <div class=\"form-group\">\n                            <label class=\"form-col-form-label\" for=\"email\">Eamil</label>\n                            <input class=\"form-control\" id=\"email\" type=\"email\" formControlName=\"email\" #email placeholder=\"Please type your email address\">\n                        </div>\n                        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"angForm.controls['email'].errors.required\">\n                                * Email is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['email'].errors.email\">\n                                * Email is not valid!\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"form-col-form-label\" for=\"title\">Title</label>\n                            <input class=\"form-control\" id=\"title\" type=\"text\" formControlName=\"title\" #title placeholder=\"Please type title\">\n                        </div>\n                        <div *ngIf=\"angForm.controls['title'].invalid && (angForm.controls['title'].dirty || angForm.controls['title'].touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"angForm.controls['title'].errors.required\">\n                                * Title is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['title'].errors.minlength\">\n                                * Please more type!\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"form-col-form-label\" for=\"message\">Message</label>\n                            <textarea class=\"form-control\" id=\"message\" type=\"text\" rows=\"7\" formControlName=\"message\" #message placeholder=\"Please type message\"></textarea>\n                        </div>\n                        <div *ngIf=\"angForm.controls['message'].invalid && (angForm.controls['message'].dirty || angForm.controls['message'].touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"angForm.controls['message'].errors.required\">\n                                * Message is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['message'].errors.minlength\">\n                                * Please more type!\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <button class=\"btn btn-success\" (click)=\"contact(email.value, title.value, message.value)\" [disabled]=\"angForm.pristine || angForm.invalid\">\n                                  Send\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/contact-us/contact-us.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/client/contact-us/contact-us.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact.service */ "./src/app/services/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(fb, cs) {
        this.fb = fb;
        this.cs = cs;
        this.createForm();
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(30)]]
        });
    };
    ContactUsComponent.prototype.contact = function (email, title, message) {
        this.cs.sendMessage(email, title, message);
        this.angForm.reset();
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/client/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/client/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/client/convert1/convert1.component.css":
/*!********************************************************!*\
  !*** ./src/app/client/convert1/convert1.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/convert1/convert1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/client/convert1/convert1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-subheader action=\"convert-btc-to-lc\"></app-subheader>\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<app-convert1form \n\t\t\t\t[btc_balance]=\"socket.btc_balance\" \n\t\t\t\t[lc_balance]=\"socket.lc_balance\" \n\t\t\t\t[lc_btc]=\"socket.lc_btc\">\n\t\t\t\t\n\t\t\t</app-convert1form>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<app-last-convert type=\"ltob\" [status]=\"socket.status_ltob\"></app-last-convert>\n\t\t\t<app-last-convert type=\"btol\" [status]=\"socket.status_btol\"></app-last-convert>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/client/convert1/convert1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/client/convert1/convert1.component.ts ***!
  \*******************************************************/
/*! exports provided: Convert1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Convert1Component", function() { return Convert1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Convert1Component = /** @class */ (function () {
    function Convert1Component(socket) {
        this.socket = socket;
    }
    Convert1Component.prototype.ngOnInit = function () {
    };
    Convert1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-convert1',
            template: __webpack_require__(/*! ./convert1.component.html */ "./src/app/client/convert1/convert1.component.html"),
            styles: [__webpack_require__(/*! ./convert1.component.css */ "./src/app/client/convert1/convert1.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], Convert1Component);
    return Convert1Component;
}());



/***/ }),

/***/ "./src/app/client/convert2/convert2.component.css":
/*!********************************************************!*\
  !*** ./src/app/client/convert2/convert2.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/convert2/convert2.component.html":
/*!*********************************************************!*\
  !*** ./src/app/client/convert2/convert2.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-subheader action=\"convert-lc-to-btc\"></app-subheader>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\">\n\t\t\t<app-convert2form \n\t\t\t\t[btc_balance]=\"socket.btc_balance\"\n\t\t\t\t[lc_balance]=\"socket.lc_balance\"\n\t\t\t\t[lc_btc]=\"socket.lc_btc\">\n\t\t\t\t\n\t\t\t</app-convert2form>\n\t\t</div>\n\t\t<div class=\"col-md-6\">\n\t\t\t<app-last-convert type=\"ltob\" [status]=\"socket.status_ltob\"></app-last-convert>\n\t\t\t<app-last-convert type=\"btol\" [status]=\"socket.status_btol\"></app-last-convert>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/client/convert2/convert2.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/client/convert2/convert2.component.ts ***!
  \*******************************************************/
/*! exports provided: Convert2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Convert2Component", function() { return Convert2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Convert2Component = /** @class */ (function () {
    function Convert2Component(socket) {
        this.socket = socket;
    }
    Convert2Component.prototype.ngOnInit = function () {
    };
    Convert2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-convert2',
            template: __webpack_require__(/*! ./convert2.component.html */ "./src/app/client/convert2/convert2.component.html"),
            styles: [__webpack_require__(/*! ./convert2.component.css */ "./src/app/client/convert2/convert2.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
    ], Convert2Component);
    return Convert2Component;
}());



/***/ }),

/***/ "./src/app/client/crypto-bazaar/crypto-bazaar.component.css":
/*!******************************************************************!*\
  !*** ./src/app/client/crypto-bazaar/crypto-bazaar.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.alert {\r\n    color: red;\r\n}\r\n\r\n.card-body {\r\n    padding: 0.75rem;\r\n}"

/***/ }),

/***/ "./src/app/client/crypto-bazaar/crypto-bazaar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/crypto-bazaar/crypto-bazaar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\" *ngIf=\"btc_conversion_submitted < socket.BtcConversionTarget\">\n        <div class=\"col-sm-12 col-md-12\">\n            <h3>Bazaar Creation</h3>\n            <hr>\n        </div>\n        <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card text-white bg-success text-center\">\n                <div class=\"card-body\">\n                    <h4>BTC Conversion Target : {{ socket.BtcConversionTarget }} BTC</h4>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card text-white bg-info text-center\">\n                <div class=\"card-body\">\n                    <h4>BTC Conversion Submitted : {{ btc_conversion_submitted }} BTC</h4>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-12 col-md-12\">\n            <div class=\"card border-danger\">\n                <div class=\"card-body\">\n                    <p>\n                        <strong>Note :</strong> Bazaar application form will be enable once you reach the BTC Conversion Target. Enjoy the selling and buying experience of commodities, services or any leagal means accepted by the law inside Crypto Bazaar.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"btc_conversion_submitted >= socket.BtcConversionTarget && !bazaar_flag\">\n        <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card text-white bg-success text-center\">\n                <div class=\"card-body\">\n                    <h4>BTC Conversion Target : {{ socket.BtcConversionTarget }} BTC</h4>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-md-6\">\n            <div class=\"card text-white bg-info text-center\">\n                <div class=\"card-body\">\n                    <h4>BTC Conversion Submitted : {{ btc_conversion_submitted }} BTC</h4>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Bazaar Creation</strong></div>\n                <div class=\"card-body\">\n                    <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate (ngSubmit)=\"submitFunc()\">\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"bz_photo\">Add Photo</label>\n                            <div class=\"col-md-9\">\n                                <input #bz_photo type=\"file\" class=\"form-control\" id=\"bz_photo\" formControlName=\"bz_photo\" accept=\"image/*\" name=\"bz_photo\" hidden (change)=\"preview(bz_photo.files);bz_uploader.uploadAll()\" ng2FileSelect [uploader]=\"bz_uploader\" />\n                                <img [src]=\"imgURL || 'http://placehold.it/350X150'\" height=\"150px;\" width=\"350px;\" alt=\"Bazaar Image\" />\n                                <label for=\"bz_photo\" style=\"margin-left: 30px;\"><strong>Select Bazaar Photo By Clicking Here</strong></label>\n                            </div>\n                        </div>\n                        <div *ngIf=\"angForm.controls['bz_photo'].invalid && (angForm.controls['bz_photo'].dirty || angForm.controls['bz_photo'].touched)\" class=\"alert text-center\">\n                            <div *ngIf=\"angForm.controls['bz_photo'].errors.required\">\n                                * Please Select Photo!\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"bz_name\">Bazaar Name</label>\n                            <div class=\"col-md-9\">\n                                <input class=\"form-control\" type=\"text\" formControlName=\"bz_name\" #bz_name placeholder=\"Enter Bazaar Name..\">\n                            </div>\n                        </div>\n                        <div *ngIf=\"angForm.controls['bz_name'].invalid && (angForm.controls['bz_name'].dirty || angForm.controls['bz_name'].touched)\" class=\"alert text-center\">\n                            <div *ngIf=\"angForm.controls['bz_name'].errors.required\">\n                                * Bazaar Name is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['bz_name'].errors.minlength\">\n                                * Please more type!\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"city\">City Information</label>\n                            <div class=\"col-md-9\">\n                                <input class=\"form-control\" type=\"text\" formControlName=\"city\" #city placeholder=\"Enter City..\">\n                            </div>\n                        </div>\n                        <div *ngIf=\"angForm.controls['city'].invalid && (angForm.controls['city'].dirty || angForm.controls['city'].touched)\" class=\"alert text-center\">\n                            <div *ngIf=\"angForm.controls['city'].errors.required\">\n                                * City Information is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['city'].errors.minlength\">\n                                * Please more type!\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"address\">Address Information</label>\n                            <div class=\"col-md-9\">\n                                <input class=\"form-control\" type=\"text\" formControlName=\"address\" #address placeholder=\"Enter Address..\">\n                            </div>\n                        </div>\n                        <div *ngIf=\"angForm.controls['address'].invalid && (angForm.controls['address'].dirty || angForm.controls['address'].touched)\" class=\"alert text-center\">\n                            <div *ngIf=\"angForm.controls['address'].errors.required\">\n                                * Address is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['address'].errors.minlength\">\n                                * Please more type!\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label class=\"col-md-3 col-form-label\" for=\"shop_rule\">Shop Rule</label>\n                            <div class=\"col-md-9\">\n                                <textarea class=\"form-control\" rows=\"7\" formControlName=\"shop_rule\" #shop_rule placeholder=\"Enter Shop Rule..\"></textarea>\n                            </div>\n                        </div>\n                        <div *ngIf=\"angForm.controls['shop_rule'].invalid && (angForm.controls['shop_rule'].dirty || angForm.controls['shop_rule'].touched)\" class=\"alert text-center\">\n                            <div *ngIf=\"angForm.controls['shop_rule'].errors.required\">\n                                * Shop Rule is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['shop_rule'].errors.minlength\">\n                                * Please more type!\n                            </div>\n                        </div>\n                        <div *ngIf='loading' class='loading'>\n                            <img class='img-fluid' src='assets/loading.gif' alt=\"\" />\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <button class=\"btn btn-primary mt-10\" type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\">\n                                    Create Bazaar Now\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"btc_conversion_submitted >= socket.BtcConversionTarget && bazaar_flag\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Bazaar</strong>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-2\">\n                            <div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-bazaar-home\" data-toggle=\"tab\" href=\"#bazaar-home\" role=\"tab\" aria-controls=\"bazaar-home\" aria-selected=\"false\">Bazaar Home</a>\n                                <a class=\"list-group-item list-group-item-action active\" id=\"list-bazaar-product-post\" data-toggle=\"tab\" href=\"#bazaar-product-post\" role=\"tab\" aria-controls=\"bazaar-product-post\" aria-selected=\"true\">Bazaar Product Posting</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-pre-checkout-order\" data-toggle=\"tab\" href=\"#pre-checkout-order\" role=\"tab\" aria-controls=\"pre-checkout-order\">Pre Checkout Orders</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-open-orders\" data-toggle=\"tab\" href=\"#open-orders\" role=\"tab\" aria-controls=\"open-orders\">Open Orders</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-unclaimed-orders\" data-toggle=\"tab\" href=\"#unclaimed-orders\" role=\"tab\" aria-controls=\"unclaimed-orders\">Unclaimed Orders</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-claimed-orders\" data-toggle=\"tab\" href=\"#claimed-orders\" role=\"tab\" aria-controls=\"claimed-orders\">Claimed Orders</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-sales-inventory\" data-toggle=\"tab\" href=\"#sales-inventory\" role=\"tab\" aria-controls=\"sales-inventory\">Sales Inventory</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-indirect-savings\" data-toggle=\"tab\" href=\"#indirect-savings\" role=\"tab\" aria-controls=\"indirect-savings\">Indirect Savings</a>\n                                <a class=\"list-group-item list-group-item-action\" [routerLink]=\"['pandasavings']\">Personal & Agent Savings</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-promo-items\" data-toggle=\"tab\" href=\"#promo-items\" role=\"tab\" aria-controls=\"promo-items\">Promo Items</a>\n                                <a class=\"list-group-item list-group-item-action\" id=\"list-top-rewards\" data-toggle=\"tab\" href=\"#top-rewards\" role=\"tab\" aria-controls=\"top-rewards\">Top 10 Rewards</a>\n                            </div>\n                        </div>\n                        <div class=\"col-10\">\n                            <div class=\"tab-content\" id=\"nav-tabContent\">\n                                <div class=\"tab-pane fade\" id=\"bazaar-home\" role=\"tabpanel\" aria-labelledby=\"list-bazaar-home\">\n                                    <app-bazaar-home></app-bazaar-home>\n                                </div>\n                                <div class=\"tab-pane fade active show\" id=\"bazaar-product-post\" role=\"tabpanel\" aria-labelledby=\"list-bazaar-product-post\">\n                                    <div class=\"card\">\n                                        <div class=\"card-header\">\n                                            <strong>Bazaar Product Posting</strong></div>\n                                        <div class=\"card-body\">\n                                            <form class=\"form-horizontal\" [formGroup]=\"bzp_angForm\" (ngSubmit)=\"submitProd(total_indirect_savings.value)\">\n                                                <div class=\"col-md-12\">\n                                                    <div class=\"card border-info text-center\">\n                                                        <div class=\"card-body\">\n                                                            <h5>Note: Profit of sellers will depend on PHPC market exchange and conversion timing.</h5>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-6 col-md-6\">\n                                                        <div class=\"card text-white bg-danger text-center\">\n                                                            <div class=\"card-body\">\n                                                                <strong>1 LC : {{ socket.lc_btc | number:'0.0-15' }} BTC</strong>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-sm-6 col-md-6\">\n                                                        <div class=\"card text-white bg-success text-center\">\n                                                            <div class=\"card-body\">\n                                                                <strong>1 LC : {{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }} {{ curCode }}</strong>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-sm-6 col-md-6\">\n                                                        <div class=\"card text-white bg-dark text-center\">\n                                                            <div class=\"card-body\">\n                                                                <strong>1 BTC : {{ socket.btc_usd | number:'0.4-4' }} USD</strong>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-sm-6 col-md-6\">\n                                                        <div class=\"card text-white bg-primary text-center\">\n                                                            <div class=\"card-body\">\n                                                                <strong>LC Balance : {{ lc_balance }} LC</strong>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"bzp_photo\">Add Photo</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input #bzp_photo type=\"file\" class=\"form-control\" id=\"bzp_photo\" formControlName=\"bzp_photo\" accept=\"image/*\" name=\"bzp_photo\" hidden (change)=\"preview(bzp_photo.files);bzp_uploader.uploadAll();\" ng2FileSelect [uploader]=\"bzp_uploader\" />\n                                                        <img [src]=\"imgURL || 'http://placehold.it/350X150'\" height=\"150px;\" width=\"350px;\" alt=\"Bazaar Product Image\" />\n                                                        <label for=\"bzp_photo\" style=\"margin-left: 30px;\"><strong>Select Photo By Clicking Here</strong></label>\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"bzp_angForm.controls['bzp_photo'].invalid && (bzp_angForm.controls['bzp_photo'].dirty || bzp_angForm.controls['bzp_photo'].touched)\" class=\"alert text-center\">\n                                                    <div *ngIf=\"bzp_angForm.controls['bzp_photo'].errors.required\">\n                                                        * Bazaar Product Photo is required!\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"bp_name\">Product Name</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"text\" formControlName=\"bp_name\" #bp_name placeholder=\"Enter Product Name..\">\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"bzp_angForm.controls['bp_name'].invalid && (bzp_angForm.controls['bp_name'].dirty || bzp_angForm.controls['bp_name'].touched)\" class=\"alert text-center\">\n                                                    <div *ngIf=\"bzp_angForm.controls['bp_name'].errors.required\">\n                                                        * Product Name is required!\n                                                    </div>\n                                                    <div *ngIf=\"bzp_angForm.controls['bp_name'].errors.minlength\">\n                                                        * Please more type!\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"availability\">Availability</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"text\" formControlName=\"availability\" #availability placeholder=\"Enter number of product stock 5 or above..\">\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"bzp_angForm.controls['availability'].invalid && (bzp_angForm.controls['availability'].dirty || bzp_angForm.controls['availability'].touched)\" class=\"alert text-center\">\n                                                    <div *ngIf=\"bzp_angForm.controls['availability'].errors.required\">\n                                                        * Availability is required!\n                                                    </div>\n                                                    <div *ngIf=\"bzp_angForm.controls['availability'].errors.min || bzp_angForm.controls['availability'].invalid\">\n                                                        * Invalid Number. Availability value have to be over 5\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"initial_cc_price\">Initial CC Price {{ curCode }}</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"text\" formControlName=\"initial_cc_price\" #initial_cc_price (keyup)=\"cc_lc_Change(initial_cc_price.value)\" placeholder=\"Enter Product price base on your country currency price..\">\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"bzp_angForm.controls['initial_cc_price'].invalid && (bzp_angForm.controls['initial_cc_price'].dirty || bzp_angForm.controls['initial_cc_price'].touched)\" class=\"alert text-center\">\n                                                    <div *ngIf=\"bzp_angForm.controls['initial_cc_price'].errors.required\">\n                                                        * Initial CC Price is required!\n                                                    </div>\n                                                    <div *ngIf=\"bzp_angForm.controls['initial_cc_price'].errors.min || bzp_angForm.controls['initial_cc_price'].invalid\">\n                                                        * Invalid Value. Initial CC Price must be over 0.\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"control_cc_price\">Controlled CC Price ({{ curCode }})</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly #control_cc_price value=\"{{ auto_control_cc_price }}\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"initial_lc_price\">Initial LC Price (LC)</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly #initial_lc_price value=\"{{ auto_initial_lc_price / (socket.btc_usd * socket.lc_btc * currencyValue) }}\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"control_lc_price\">Controlled LC Price (LC)</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly #control_lc_price value=\"{{ auto_control_lc_price / (socket.btc_usd * socket.lc_btc * currencyValue) }}\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"lc_cc\">1 LC To Country Currency</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly #lc_cc value=\"{{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }}\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"lc_btc\">1 LC To BTC</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly value=\"{{ socket.lc_btc | number:'0.0-15' }}\" #lc_btc>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"assigned_savings\">Assigned Savings</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"text\" formControlName=\"assigned_savings\" #assigned_savings value=\"{{ auto_assigned_savings}}\" (keyup)=\"saving_Change(assigned_savings.value, 0)\" placeholder=\"Enter number 18 - 36..\">\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"bzp_angForm.controls['assigned_savings'].invalid && (bzp_angForm.controls['assigned_savings'].dirty)\" class=\"alert text-center\">\n                                                    <div *ngIf=\"bzp_angForm.controls['assigned_savings'].errors.required\">\n                                                        * Assigned Savings is required!\n                                                    </div>\n                                                    <div *ngIf=\"bzp_angForm.controls['assigned_savings'].errors.min || bzp_angForm.controls['assigned_savings'].errors.max || bzp_angForm.controls['assigned_savings'].invalid\">\n                                                        * Invalid Value. A ssigned Savings is 18 - 36 </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"agent_savings\">Agent Savings</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"text\" formControlName=\"agent_savings\" #agent_savings value=\"{{ auto_agent_savings }}\" (keyup)=\"saving_Change(agent_savings.value, 1)\" placeholder=\"Enter number 1 - 5..\">\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"bzp_angForm.controls['agent_savings'].invalid && (bzp_angForm.controls['agent_savings'].dirty)\" class=\"alert text-center\">\n                                                    <div *ngIf=\"bzp_angForm.controls['agent_savings'].errors.required\">\n                                                        * Agent Savings is required!\n                                                    </div>\n                                                    <div *ngIf=\"bzp_angForm.controls['agent_savings'].errors.min || bzp_angForm.controls['agent_savings'].errors.max || bzp_angForm.controls['agent_savings'].invalid\">\n                                                        * Invalid Value. A gent Savings is 1 -5 </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"personal_savings\">Personal Savings</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly value=\"{{ auto_personal_savings }}\" #personal_savings>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"indirect_savings\">Indirect Savings</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly value=\"{{ auto_indirect_savings }}\" #indirect_savings>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"total_product_costs\">Total Product Costs</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly #total_product_costs value=\"{{ availability.value * initial_cc_price.value }}\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"total_indirect_savings\">Total Indirect Savings</label>\n                                                    <div class=\"col-md-9\">\n                                                        <input class=\"form-control\" type=\"number\" readonly #total_indirect_savings value=\"{{ availability.value * initial_cc_price.value * auto_assigned_savings / 100 / (socket.btc_usd * socket.lc_btc * currencyValue) }}\">\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group row\">\n                                                    <label class=\"col-md-3 col-form-label\" for=\"product_description\">Product Description</label>\n                                                    <div class=\"col-md-9\">\n                                                        <textarea class=\"form-control\" rows=\"7\" formControlName=\"product_description\" #product_description placeholder=\"Enter Product Description..\"></textarea>\n                                                    </div>\n                                                </div>\n                                                <div *ngIf=\"bzp_angForm.controls['product_description'].invalid && (bzp_angForm.controls['product_description'].dirty || bzp_angForm.controls['product_description'].touched)\" class=\"alert text-center\">\n                                                    <div *ngIf=\"bzp_angForm.controls['product_description'].errors.required\">\n                                                        * Product Description is required!\n                                                    </div>\n                                                    <div *ngIf=\"bzp_angForm.controls['product_description'].errors.minlength\">\n                                                        * Please more type!\n                                                    </div>\n                                                </div>\n                                                <div class=\"alert alert-success text-center\" style=\"color:white\" *ngIf=\"showSuccess == true\">\n                                                    {{ success.message }}\n                                                </div>\n                                                <div *ngIf='loading' class='loading'>\n                                                    <img class='img-fluid' src='assets/loading.gif' alt=\"\" />\n                                                </div>\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-12 text-center\">\n                                                        <div *ngIf=\"total_indirect_savings.value > lc_balance; else sub_enable\">\n                                                            <button class=\"btn btn-primary mt-10\" type=\"submit\" disabled>\n                                                                Product Post\n                                                            </button>\n                                                            <div class=\"alert\">\n                                                                * Your BTC Balance is not enough. Please charge.\n                                                            </div>\n                                                        </div>\n                                                        <ng-template #sub_enable>\n                                                            <button class=\"btn btn-primary mt-10\" type=\"submit\" [disabled]=\"bzp_angForm.invalid\">\n                                                                Product Post\n                                                            </button>\n                                                        </ng-template>\n                                                    </div>\n                                                </div>\n                                            </form>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"pre-checkout-order\" role=\"tabpanel\" aria-labelledby=\"list-pre-checkout-order\">\n                                    <app-pre-checkout-orders></app-pre-checkout-orders>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"open-orders\" role=\"tabpanel\" aria-labelledby=\"list-open-orders\">\n                                    <app-open-orders></app-open-orders>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"unclaimed-orders\" role=\"tabpanel\" aria-labelledby=\"list-unclaimed-orders\">\n                                    <app-unclaimed-orders></app-unclaimed-orders>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"claimed-orders\" role=\"tabpanel\" aria-labelledby=\"list-claimed-orders\">\n                                    <app-claimed-orders></app-claimed-orders>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"sales-inventory\" role=\"tabpanel\" aria-labelledby=\"list-sales-inventory\">\n                                    <app-sales-inventory></app-sales-inventory>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"indirect-savings\" role=\"tabpanel\" aria-labelledby=\"list-indirect-savings\">\n                                    <app-indirect-savings></app-indirect-savings>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"promo-items\" role=\"tabpanel\" aria-labelledby=\"list-promo-items\">\n                                    <app-promo-items></app-promo-items>\n                                </div>\n                                <div class=\"tab-pane fade\" id=\"top-rewards\" role=\"tabpanel\" aria-labelledby=\"list-top-rewards\">\n                                    <app-top-rewards></app-top-rewards>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/crypto-bazaar/crypto-bazaar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/crypto-bazaar/crypto-bazaar.component.ts ***!
  \*****************************************************************/
/*! exports provided: CryptoBazaarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoBazaarComponent", function() { return CryptoBazaarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/country-currency-price.service */ "./src/app/services/country-currency-price.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../model/currency */ "./src/app/model/currency.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var CryptoBazaarComponent = /** @class */ (function () {
    function CryptoBazaarComponent(api, share, ccp, fb, http, router, socket, notify) {
        this.api = api;
        this.share = share;
        this.ccp = ccp;
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.socket = socket;
        this.notify = notify;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].backendUrl;
        this.loading = false;
        this.showSuccess = false;
        this.success = { message: '' };
        this.bazaar_flag = false;
        this.btc_conversion_submitted = 0;
        this.lc_balance = 0;
        this.currency = new _model_currency__WEBPACK_IMPORTED_MODULE_10__["default"];
        this.cCode = 'PH';
        this.curCode = 'PHP';
        this.currencyValue = 0;
        this.bzp_id = 0;
        this.auto_control_cc_price = 0;
        this.auto_initial_lc_price = 0;
        this.auto_control_lc_price = 0;
        this.auto_indirect_savings = 8;
        this.auto_personal_savings = 0;
        this.bzp_image_name = '';
        this.bz_uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploader"]({
            url: this.uri + '/images/bazaar/' + this.share.user.id, itemAlias: 'bz_photo'
        });
        this.bzp_uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileUploader"]({
            url: this.uri + '/images/bazaarProd', itemAlias: 'bzp_photo', headers: [{ name: 'Accept', value: 'application/json' }]
        });
        this.createForm();
    }
    CryptoBazaarComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0) {
            return;
        }
        // console.log(files);
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    CryptoBazaarComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        var data = JSON.parse(response);
        // console.log(data);
        this.bzp_image_name = data['name'];
        console.log(this.bzp_image_name);
    };
    CryptoBazaarComponent.prototype.onErrorItem = function (item, response, status, headers) {
        var error = JSON.parse(response);
        console.log(error);
    };
    CryptoBazaarComponent.prototype.createForm = function () {
        // create bazaar form
        this.angForm = this.fb.group({
            bz_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
            shop_rule: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(20)]],
            bz_photo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // create bazaar product form
        this.bzp_angForm = this.fb.group({
            bp_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            availability: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]],
            initial_cc_price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]],
            assigned_savings: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(36), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]],
            agent_savings: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]],
            product_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bzp_photo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CryptoBazaarComponent.prototype.cc_lc_Change = function (initial_cc_price) {
        this.auto_control_cc_price = initial_cc_price;
        this.auto_initial_lc_price = initial_cc_price;
        this.auto_control_lc_price = initial_cc_price;
    };
    CryptoBazaarComponent.prototype.saving_Change = function (saving_value, flag) {
        if (flag === 0) {
            this.auto_assigned_savings = saving_value;
        }
        else {
            this.auto_agent_savings = saving_value;
        }
        this.auto_personal_savings = this.auto_assigned_savings - this.auto_agent_savings - this.auto_indirect_savings;
    };
    CryptoBazaarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.bz_uploader.onAfterAddingFile = function (file) {
                            file.withCredentials = false;
                        };
                        this.bzp_uploader.onAfterAddingFile = function (file) {
                            file.withCredentials = false;
                        };
                        this.bzp_uploader.onErrorItem = function (item, response, status, headers) { return _this.onErrorItem(item, response, status, headers); };
                        this.bzp_uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
                        this.api.getToBackend('/admin/getBtcConversionSubmitted/' + this.share.user.id, this.share.user.token).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                // console.log(response);
                                this.btc_conversion_submitted = response;
                                if (this.btc_conversion_submitted >= this.socket.BtcConversionTarget) {
                                    console.log('what to do?');
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        this.api.get(this.uri + '/getLcBalance/' + this.share.user.id).then(function (response) {
                            _this.lc_balance = response['value'];
                        });
                        this.api.get(this.uri + '/getBazaarInfo/' + this.share.user.id).then(function (response) {
                            if (response['bz_flag'] === 0) {
                                _this.bazaar_flag = false;
                            }
                            else {
                                _this.bazaar_flag = true;
                            }
                        });
                        // get user country code
                        _a = this;
                        return [4 /*yield*/, this.ccp.getUserInfo()];
                    case 1:
                        // get user country code
                        _a.userInfo = _c.sent();
                        this.cCode = this.userInfo['countryCode'];
                        // get user country currency code
                        this.curCode = this.currency["" + this.cCode];
                        // get user country currency value
                        _b = this;
                        return [4 /*yield*/, this.ccp.getCurrencyValue(this.curCode)];
                    case 2:
                        // get user country currency value
                        _b.currencyValue = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // create bazaar submit
    CryptoBazaarComponent.prototype.submitFunc = function () {
        var _this = this;
        this.loading = true;
        var bazaar_uri = this.uri + '/bazaarCreate/' + this.share.user.id;
        this.http.post("" + bazaar_uri, this.angForm.value).subscribe(function (res) {
            _this.loading = false;
            // console.log(res);
            if (res['status'] === 'success') {
                _this.angForm.reset();
                _this.bazaar_flag = true;
                _this.router.navigate(['/cryptobazaar']);
            }
        });
    };
    // create bazaar product submit
    CryptoBazaarComponent.prototype.submitProd = function (total_lc_amount) {
        var _this = this;
        this.showSuccess = false;
        this.loading = true;
        // console.log('rate ' + this.socket.lc_btc + ' amount_lc ' + total_lc_amount);
        this.api.postToBackend('/recordOrder', {
            rate: this.socket.lc_btc,
            amount_lc: total_lc_amount,
            type: 'bzpost'
        }, this.share.user.token).then(function (res) {
            console.log('order res ' + res);
            _this.loading = false;
            _this.notify.success('INFO', 'Processing Success!', { timeOut: 5000 });
            var bz_prod_uri = _this.uri + '/bzprodCreate/' + _this.share.user.id;
            _this.bzp_angForm.value.agent_savings = _this.agent_savings.nativeElement.value;
            _this.bzp_angForm.value.assigned_savings = _this.assigned_savings.nativeElement.value;
            _this.bzp_angForm.value.control_cc_price = _this.control_cc_price.nativeElement.value;
            _this.bzp_angForm.value.control_lc_price = _this.control_lc_price.nativeElement.value;
            _this.bzp_angForm.value.indirect_savings = _this.indirect_savings.nativeElement.value;
            _this.bzp_angForm.value.initial_lc_price = _this.initial_lc_price.nativeElement.value;
            _this.bzp_angForm.value.lc_btc = _this.lc_btc.nativeElement.value;
            _this.bzp_angForm.value.lc_cc = _this.lc_cc.nativeElement.value;
            _this.bzp_angForm.value.personal_savings = _this.personal_savings.nativeElement.value;
            _this.bzp_angForm.value.total_indirect_savings = _this.total_indirect_savings.nativeElement.value;
            _this.bzp_angForm.value.total_product_costs = _this.total_product_costs.nativeElement.value;
            _this.bzp_angForm.value.bzp_photo = _this.bzp_image_name;
            _this.bzp_angForm.value.user_country = _this.share.user.user_country;
            _this.http.post("" + bz_prod_uri, _this.bzp_angForm.value).subscribe(function (rs) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log('product add res ' + rs);
                    if (rs['status'] === 'success') {
                        this.bzp_angForm.reset();
                        this.success.message = 'Product Successfully Added!';
                        this.showSuccess = true;
                        this.notify.success('INFO', 'Product Successfully Added!', { timeOut: 5000 });
                    }
                    return [2 /*return*/];
                });
            }); });
        }).catch(function (err) {
            _this.notify.error('ERROR', JSON.parse(err._body).payload);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('agent_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "agent_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('assigned_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "assigned_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('control_cc_price'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "control_cc_price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('control_lc_price'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "control_lc_price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('indirect_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "indirect_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('initial_lc_price'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "initial_lc_price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lc_btc'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "lc_btc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lc_cc'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "lc_cc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('personal_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "personal_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('total_indirect_savings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "total_indirect_savings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('total_product_costs'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CryptoBazaarComponent.prototype, "total_product_costs", void 0);
    CryptoBazaarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crypto-bazaar',
            template: __webpack_require__(/*! ./crypto-bazaar.component.html */ "./src/app/client/crypto-bazaar/crypto-bazaar.component.html"),
            styles: [__webpack_require__(/*! ./crypto-bazaar.component.css */ "./src/app/client/crypto-bazaar/crypto-bazaar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"],
            src_app_services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_6__["CountryCurrencyPriceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]])
    ], CryptoBazaarComponent);
    return CryptoBazaarComponent;
}());



/***/ }),

/***/ "./src/app/client/dashboard/dashboard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/client/dashboard/dashboard.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/client/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n    <div class=\"col-lg-4 col-md-6 col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class='qr row'>\n                    <img class='img-fluid m-auto' src=\"{{'https://chart.googleapis.com/chart?cht=qr&chl=bitcoin:' + user.wallet + '&choe=UTF-8&chs=200x200'}}\" alt=\"\" />\n                </div>\n                <p class='addr text-center'>{{user.wallet}}</p>\n                <p class=\"text-center\"><span class=\"btn btn-outline-dark\" (click)=\"copyToClipboard(user.wallet)\">Copy Wallet Address</span></p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-8 col-md-6 col-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">Balance: {{socket.btc_balance | number:'0.8-8'}} BTC</p>\n                <p class=\"card-text\">Balance: {{socket.lc_balance}} LC</p>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-body\" *ngIf=\"socket.last_transaction\">\n                <p class=\"card-text\">Last Tx: {{socket.last_transaction.type | txtype}}</p>\n                <p class=\"card-text\">Amount: {{socket.last_transaction.amount | number:'0.8-8'}} BTC</p>\n                <p class=\"card-text\">Tx Date: {{socket.last_transaction.date | date:'yyyy/MM/dd hh:mm:ss'}}</p>\n                <p class=\"card-text\" *ngIf=\"socket.last_transaction.wallet\">{{socket.last_transaction.type == 'receive' ? \"Sender\" : \"Receiver\"}} Address: {{socket.last_transaction.wallet}}</p>\n            </div>\n            <div class=\"card-body\" *ngIf=\"!socket.last_transaction\">\n                <p class=\"card-text\">No transaction</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"alert alert-info\">\n    <p>Your referal link: <span>{{ frontendUrl + \"/register/\" +  user.id}} </span></p>\n</div>"

/***/ }),

/***/ "./src/app/client/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/client/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
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
    function DashboardComponent(share, socket) {
        this.share = share;
        this.socket = socket;
        this.user = this.share.user;
        this.frontendUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].frontendUrl;
        this.copyToClipboard = function (str) {
            var el = document.createElement('textarea');
            el.value = str;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            var selected = document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            if (selected) {
                document.getSelection().removeAllRanges();
                document.getSelection().addRange(selected);
            }
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/client/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/client/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/client/faq/faq.component.css":
/*!**********************************************!*\
  !*** ./src/app/client/faq/faq.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/faq/faq.component.html":
/*!***********************************************!*\
  !*** ./src/app/client/faq/faq.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<p>\n\t  faq works!\n\t</p>\n</div>"

/***/ }),

/***/ "./src/app/client/faq/faq.component.ts":
/*!*********************************************!*\
  !*** ./src/app/client/faq/faq.component.ts ***!
  \*********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
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

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/client/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/client/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/client/forgot-password/forgot-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/client/forgot-password/forgot-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/forgot-password/forgot-password.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/client/forgot-password/forgot-password.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <strong>Forgot Password</strong>\n                </div>\n                <div class=\"card-body col-md-10 offset-1\">\n                    <form [formGroup]=\"angForm\" novalidate class=\"form-horizontal\">\n                        <div class=\"form-group\">\n                            <label class=\"form-col-form-label\" for=\"email\">Eamil</label>\n                            <input class=\"form-control\" id=\"email\" type=\"email\" formControlName=\"email\" #email placeholder=\"Please type your email address\">\n                        </div>\n                        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"angForm.controls['email'].errors.required\">\n                                * Email is required!\n                            </div>\n                            <div *ngIf=\"angForm.controls['email'].errors.email\">\n                                * Email is not valid!\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <button class=\"btn btn-danger\" (click)=\"recovery(email.value)\" [disabled]=\"angForm.pristine || angForm.invalid\">\n                                  Password Recovery\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/forgot-password/forgot-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/client/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_forgotpw_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/forgotpw.service */ "./src/app/services/forgotpw.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(fb, router, fps) {
        this.fb = fb;
        this.router = router;
        this.fps = fps;
        this.createForm();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    ForgotPasswordComponent.prototype.recovery = function (email) {
        this.fps.recovery(email);
        this.router.navigate(['/login']);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/client/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/client/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_forgotpw_service__WEBPACK_IMPORTED_MODULE_3__["ForgotpwService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/client/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/client/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    letter-spacing: 1.5px;\r\n}"

/***/ }),

/***/ "./src/app/client/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/client/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 col-md-12\">\n        <h2 class=\"text-center text-info\">PEOPLE HELPING PEOPLE COIN SERVING PEOPLE THROUGHOUT THE WORLD!</h2>\n    </div>\n</div>\n<hr>\n<div class=\"row\">\n    <div class=\"col-12 col-md-12\">\n        <p>\n            <strong>\n        PEOPLE HELPING PEOPLE COIN USED TO CONTROL THE ABUSIVE & UNCONTROLABLE INFLATION RATE THROUGHOUT THE WORLD. THE\n        PRIMARY PURPOSE OF THIS COIN IS FOR CONSUMERISM. MASTER THE BASIC WORKING FLOW OF COIN PRICE INCREMENTAL VERSUS\n        PRODUCT PRICE DECREMENTAL. SPEND LESS FOR LEARNING PURPOSE IF YOUR NOT THAT WELL INFORMED ON HOW DOES IT WORKS.\n        SPEND MORE & ENJOY ONCE YOU’VE MASTERED THE FLOW OF EVERYTHING. ASK FOR ASSISTANCE FROM AGENT WHO REFERED THIS\n        WEB\n        APP.\n      </strong>\n        </p>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"userInfo; else offline\">\n    <div class=\"col-12 col-md-12\">\n        <table class=\"table table-borderless table-success table-sm text-center rounded\">\n            <thead>\n                <tr>\n                    <th class=\"border-0\" scope=\"col\">Your Country : {{ userInfo?.country }}</th>\n                    <th class=\"border-0\" scope=\"col\">Your City : {{ userInfo?.city }}</th>\n                    <th class=\"border-0\" scope=\"col\">Your Country Code : {{ userInfo?.countryCode }}</th>\n                    <th class=\"border-0\" scope=\"col\">Your Time Zone : {{ userInfo?.timezone }}</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n</div>\n<ng-template #offline>\n    <div class=\"row\">\n        <div class=\"col-12 col-md-12 text-center\">\n            <div class=\"alert alert-danger error-message\" role=\"alert\">\n                No internet, you are on offline status.\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<div class=\"row\">\n    <div class=\"col-12 col-md-12\">\n        <table class=\"table table-borderless table-primary table-sm text-center rounded\">\n            <thead>\n                <tr>\n                    <th class=\"border-0\" scope=\"col\">1 BTC : {{ socket.btc_usd | number:'0.4-4' }} USD</th>\n                    <th class=\"border-0\" scope=\"col\">1 BTC : {{ socket.btc_usd * currencyValue | number:'0.4-4' }} {{ curCode }}</th>\n                    <th class=\"border-0\" scope=\"col\">1 LC : {{ socket.lc_btc | number:'0.0-15' }} BTC</th>\n                    <th class=\"border-0\" scope=\"col\">1 LC : {{ socket.btc_usd * socket.lc_btc * currencyValue | number:'0.4-4' }} {{ curCode }}</th>\n                </tr>\n            </thead>\n        </table>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 col-md-6\">\n        <app-last-convert type=\"ltob\" [status]=\"socket.status_ltob\"></app-last-convert>\n    </div>\n    <div class=\"col-12 col-md-6\">\n        <app-last-convert type=\"btol\" [status]=\"socket.status_btol\"></app-last-convert>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"!share.user\">\n    <div class=\"col-12 col-md-6 my-3\">\n        <a [routerLink]=\"['/register']\" class=\" btn btn-outline-dark btn-lg btn-block\">Free Signup</a>\n    </div>\n    <div class=\"col-12 col-md-6 my-3\">\n        <a [routerLink]=\"['/login']\" class=\"btn btn-outline-dark btn-lg btn-block\">Login</a>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-12 col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"text-center\">Total Users:</h3>\n                <h4 class=\"text-center\">{{ socket.total_user }}</h4>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"text-center\">Online Now:</h3>\n                <h4 class=\"text-center\">{{ socket.online_user }}</h4>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"text-center\">Overall BTC Received:</h3>\n                <h4 class=\"text-center\">{{ socket.btc_received_count }}</h4>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"text-center\">Overall BTC Sent:</h3>\n                <h4 class=\"text-center\">{{ socket.btc_sent_count }}</h4>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"text-center\">BTC Received Today:</h3>\n                <h4 class=\"text-center\">{{ socket.btc_received_today_count }}</h4>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h3 class=\"text-center\">BTC Sent Today:</h3>\n                <h4 class=\"text-center\">{{ socket.btc_sent_today_count }}</h4>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/client/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/country-currency-price.service */ "./src/app/services/country-currency-price.service.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/currency */ "./src/app/model/currency.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(socket, share, ccp, api) {
        this.socket = socket;
        this.share = share;
        this.ccp = ccp;
        this.api = api;
        this.currency = new _model_currency__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.cCode = 'PH';
        this.curCode = 'PHP';
        this.currencyValue = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // get user country code
                        _a = this;
                        return [4 /*yield*/, this.ccp.getUserInfo()];
                    case 1:
                        // get user country code
                        _a.userInfo = _c.sent();
                        // user country code
                        this.cCode = this.userInfo['countryCode'];
                        // get user country currency code
                        this.curCode = this.currency["" + this.cCode];
                        // get user country currency value
                        _b = this;
                        return [4 /*yield*/, this.ccp.getCurrencyValue(this.curCode)];
                    case 2:
                        // get user country currency value
                        _b.currencyValue = _c.sent();
                        // periodly update
                        this.interval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = this;
                                        return [4 /*yield*/, this.ccp.getCurrencyValue(this.curCode)];
                                    case 1:
                                        _a.currencyValue = _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 1200000);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/client/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/client/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"],
            _services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_4__["CountryCurrencyPriceService"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/client/how-it-works/how-it-works.component.css":
/*!****************************************************************!*\
  !*** ./src/app/client/how-it-works/how-it-works.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n    font-weight: 700;\r\n}\r\n\r\np {\r\n    font-size: 1.2rem;\r\n}\r\n\r\nhr {\r\n    height: 1px;\r\n    width: 60%;\r\n    background-color: grey;\r\n}"

/***/ }),

/***/ "./src/app/client/how-it-works/how-it-works.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/client/how-it-works/how-it-works.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12 col-md-12 text-center\">\n        <h2><strong>How It Works?</strong></h2>\n    </div>\n</div>\n<hr>\n\n<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n            <div class=\"card border-primary\">\n                <div class=\"card-header\">\n                    <strong>People Helping People As Inflation Controller</strong>\n                </div>\n                <div class=\"card-body\">\n                    <p>\n                        User can participate in buying & selling products in online community. Seller can create bazaar display page & able to post respective products & services. The system will charge the posting costs of commodities base on the price being displayed in the\n                        page. Charges will vary from 18 percent to 36 percent base on the commodity price.\n                        <br> Buyer can buy products in the website using <strong>“Crypto Currency”</strong> payment. Buyer will be having load to his/her “PHPC” wallet in order to do purchasing commodities. Prices of commodities inside the website is\n                        <strong>“VOLATILE”</strong> depends on the market performance of crypto currency in the market. The commodity prices will drop once the <strong>“PHPC”</strong> price increased and the price of commodity will rise once the\n                        <strong>“PHPC”</strong> price decreased. But buyer can still buy the commodities inside the website by setting the desired buying price at their affordable price to pay. Meaning buyer can set price into their desired lower price.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n            <div class=\"card border-success\">\n                <div class=\"card-header\">\n                    <strong>People Helping People As Employer & Job Seeker</strong>\n                </div>\n                <div class=\"card-body\">\n                    <p>\n                        User of this website can post their skills, ability & talent as a job seeker. The other way around users can also post job vacancies if they want to hire some people in an specific field of works, then comply their requirements along the way of hiring\n                        transactions.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n            <div class=\"card border-warning\">\n                <div class=\"card-header\">\n                    <strong>People Helping People As Alkansya or Coin Bank</strong>\n                </div>\n                <div class=\"card-body\">\n                    <p>\n                        User can do savings by loading <strong>“Crypto Currency”</strong> wallet & convert from <strong>“BTC Wallet” to “PHPC Wallet”</strong>. After conversion of “BTC”, check the price value of “PHPC” at the time of conversion. The user\n                        can reconvert the coin from <strong>“PHPC Wallet” back to “BTC Wallet”</strong> once the price of “PHPC” will reach to 25% increase from the time of “BTC” conversion submitted. Example: conversion price from “BTC Wallet” is 1 PHPC\n                        = 0.00001653. So do this mathematics, 1653 multiply to 0.25 the answer is 413.25. Now you only get the whole number and add the whole number to the price of conversion you did, 1653 add the 413 the answer is 2,066. Now the target\n                        conversion price from “PHPC Wallet” to “BTC Wallet” is 2,066. Once the price is 0.00002066 you can proceed the conversion from “PHPC Wallet” to “BTC Wallet”. If the user follow the said conversion rule religiously, the “Crypto\n                        Currency” load balance will increased by its value.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"animated fadeIn\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n            <div class=\"card border-danger\">\n                <div class=\"card-header\">\n                    <strong>People Helping People As Rewarding Commodities</strong>\n                </div>\n                <div class=\"card-body\">\n                    <p>\n                        User can participate in buying, selling & leadership of consumers. Top 10 from buyers, sellers, & network leaders will receive reward base on the sales. Reward program will be daily, weekly & monthly sales base.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/how-it-works/how-it-works.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/client/how-it-works/how-it-works.component.ts ***!
  \***************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
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

var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/client/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/client/how-it-works/how-it-works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/client/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/client/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/client/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form name='form' (ngSubmit)=\"f.form.valid && submit()\" #f=\"ngForm\" class='d-flex flex-wrap flex-column m-auto pt-4' novalidate>\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto '>\n                <label for=\"email\">Email</label>\n                <input class='form-control' required type=\"email\" id=\"email\" name=\"email\" [(ngModel)]='user.email' #email=\"ngModel\">\n            </div>\n            <!--validate Email-->\n            <div *ngIf=' f.submitted && email.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"email.errors.required\">\n                    <small>Email is required.</small>\n                </div>\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group  m-auto'>\n                <label for=\"password\">Password</label>\n                <input class='form-control' type=\"password\" id=\"password\" name=\"password\" required [(ngModel)]='user.password' #password='ngModel'>\n            </div>\n            <!--validate Password-->\n            <div *ngIf=' f.submitted && password.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"password.errors.required\">\n                    <small>password is required.</small>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf='loading' class='loading'>\n            <img class='img-fluid' src='assets/loading.gif' alt=\"\" />\n        </div>\n\n        <div class='input-wrap m-auto col-12 col-lg-7 m-auto'>\n            <div *ngIf='showError' class=\"alert alert-danger error-message\" role=\"alert\">\n                <small>{{error.message}}</small>\n            </div>\n        </div>\n\n        <div class=' m-auto'>\n            <button class='btn btn-success mt-2 ' type='submit'>Login</button>\n        </div>\n\n        <div class='text-center mt-2'>\n            <small>Not yet Member? <a [routerLink]=\"['/register']\"> Sign up</a></small>\n            <small class=\"ml-10\"><a class=\"text-danger\" [routerLink]=\"['/forgot']\">Forgot password?</a></small>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/client/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/client/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
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
    function LoginComponent(http, router, storage, share, socket) {
        this.http = http;
        this.router = router;
        this.storage = storage;
        this.share = share;
        this.socket = socket;
        this.loading = false;
        this.showError = false;
        this.error = {
            message: ''
        };
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.share.user) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.http.postToBackend('/login', this.user)
            .then(function (result) {
            var user = result.payload;
            /* Save User To Local Storage */
            _this.storage.saveUser(user);
            _this.share.updateUser(user);
            _this.socket.reconnect();
            _this.loading = false;
            _this.router.navigate(['home']);
        })
            .catch(function (err) {
            _this.loading = false;
            _this.showError = true;
            _this.error.message = JSON.parse(err._body).payload;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/client/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/client/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/client/openorder/openorder.component.css":
/*!**********************************************************!*\
  !*** ./src/app/client/openorder/openorder.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/openorder/openorder.component.html":
/*!***********************************************************!*\
  !*** ./src/app/client/openorder/openorder.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-subheader action=\"open-order\"></app-subheader>\n\t<table class=\"table  table-responsive-xl\">\n\t\t<thead>\n\t\t\t<th>Amount</th>\n\t\t\t<th>Price</th>\n\t\t\t<th>BTC Amount Paid</th>\n\t\t\t<th>Total BTC Price To Receive</th>\n\t\t\t<th>Conversion Type</th>\n\t\t\t<th>Date</th>\n\t\t\t<th>Action</th>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor='let order of orders'>\n\t\t\t\t<td>{{ order.lcamount }}</td>\n\t\t\t\t<td>{{ order.rate | number:'0.0-15' }}</td>\n\t\t\t\t<td>{{ order.btc_paid ? order.btc_paid : \"---\" }}</td>\n\t\t\t\t<td>{{ order.btc_receive ? order.btc_receive : \"---\" }}</td>\n\t\t\t\t<td>{{ order.type == 'btol' ? 'BTC To LC' : 'LC To BTC' }}</td>\n\t\t\t\t<td>{{ order.date | date:'yyyy/MM/dd hh:mm:ss' }}</td>\n\t\t\t\t<td class=\"py-1\"><button class=\"btn btn-default btn-sm\"  (click)=\"cancel(order._id)\">Cancel</button></td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/client/openorder/openorder.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/client/openorder/openorder.component.ts ***!
  \*********************************************************/
/*! exports provided: OpenorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenorderComponent", function() { return OpenorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpenorderComponent = /** @class */ (function () {
    function OpenorderComponent(api, share, socket) {
        this.api = api;
        this.share = share;
        this.socket = socket;
        this.orders = [];
    }
    OpenorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getToBackend('/getOpenOrders', this.share.user.token).then(function (result) {
            _this.orders = result;
            console.log(result);
        });
    };
    OpenorderComponent.prototype.cancel = function (orderid) {
        var _this = this;
        if (confirm("Do you realy cancel this order?")) {
            this.api.postToBackend('/cancelOrder', { orderid: orderid }, this.share.user.token).then(function (result) {
                _this.orders = result;
            });
        }
    };
    OpenorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-openorder',
            template: __webpack_require__(/*! ./openorder.component.html */ "./src/app/client/openorder/openorder.component.html"),
            styles: [__webpack_require__(/*! ./openorder.component.css */ "./src/app/client/openorder/openorder.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])
    ], OpenorderComponent);
    return OpenorderComponent;
}());



/***/ }),

/***/ "./src/app/client/register/register.component.css":
/*!********************************************************!*\
  !*** ./src/app/client/register/register.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n    margin-bottom:20px !important;\r\n}"

/***/ }),

/***/ "./src/app/client/register/register.component.html":
/*!*********************************************************!*\
  !*** ./src/app/client/register/register.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"../../../../node_modules/angular-countries/dist/js/ngCountries.js\"></script>\n<div class=\"container\">\n    <form class='d-flex flex-wrap flex-column m-auto pt-4' #f=\"ngForm\" (ngSubmit)=\"f.form.valid && submit()\" name=\"form\">\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class=\"form-row\">\n                <div class=\"col\">\n                    <label for=\"first_name\">First Name:</label>\n                    <input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control\" [(ngModel)]=\"user.first_name\" #first_name=\"ngModel\">\n                </div>\n                <div class=\"col\">\n                    <label for=\"last_name\">Last Name:</label>\n                    <input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control\" [(ngModel)]=\"user.last_name\" #last_name=\"ngModel\">\n                </div>\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto'>\n                <label for=\"email\">Email Address:</label>\n                <input class='form-control' type=\"email\" id=\"email\" name=\"email\" required email=\"true\" [(ngModel)]='user.email' #email=\"ngModel\">\n            </div>\n            <!--validate Email-->\n            <div *ngIf='f.submitted && email.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"email.errors.required\">\n                    <small>Email is required.</small>\n                </div>\n                <div *ngIf=\"email.errors.email\">\n                    <small>Invalid email address.</small>\n                </div>\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto'>\n                <label for=\"phonenumber\">Mobile Phone:</label>\n                <input class='form-control' type=\"text\" id=\"phonenumber\" name=\"phonenumber\" required pattern=\"[-+()0-9]{8,}\" [(ngModel)]='user.phonenumber' #phone=\"ngModel\">\n            </div>\n            <!--validate Phone-->\n            <div *ngIf='f.submitted && phone.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"phone.errors.required\">\n                    <small>Phone is required.</small>\n                </div>\n                <div *ngIf=\"phone.errors.pattern\">\n                    <small>Invalid phone number.</small>\n                </div>\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto'>\n                <label for=\"agent_id\">Agent ID:</label>\n                <input class='form-control' type=\"text\" id=\"agent_id\" name=\"agent_id\" [(ngModel)]='user.agent_id' #agent_id=\"ngModel\">\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto'>\n                <label for=\"password\">Password:</label>\n                <input class='form-control' type=\"password\" id=\"password\" name=\"password\" [(ngModel)]='user.password' #password='ngModel' minlength=\"6\" required>\n            </div>\n            <!--validate Password-->\n            <div *ngIf='f.submitted && password.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"password.errors.required\">\n                    <small>password is required.</small>\n                </div>\n                <div *ngIf=\"password.errors.minlength\">\n                    <small>minimum length greater than 5.</small>\n                </div>\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto'>\n                <label for=\"re_password\">Retype Password:</label>\n                <input class='form-control' type=\"password\" id=\"re_password\" name=\"re_password\" [(ngModel)]='user.re_password' [appRetypepassword]=\"user.password\" required minlength=\"6\" #re_password=\"ngModel\">\n            </div>\n            <!--validate Password-->\n            <div *ngIf='f.submitted && re_password.invalid' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"re_password.errors.required\">\n                    <small>re-type password is required.</small>\n                </div>\n                <div *ngIf=\"re_password.errors.appRetypepassword\">\n                    <small>re-type password not match password.</small>\n                </div>\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto'>\n                <label for=\"user_country\">Country</label>\n                <input class=\"form-control\" type=\"text\" id=\"user_country\" required name=\"user_country\" [(ngModel)]='user.user_country' readonly #user_country=\"ngModel\">\n            </div>\n            <div *ngIf='!user_country.value' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"user_country.errors.required\">\n                    <small>You are on offline or can't get your information. Please refresh and retry later.</small>\n                </div>\n            </div>\n        </div>\n\n        <div class='input-wrap col-12 col-lg-7 m-auto'>\n            <div class='form-group m-auto'>\n                <label for=\"currency_val\">Currency Value (1USD)</label>\n                <input class=\"form-control\" type=\"text\" id=\"currency_val\" required name=\"currency_val\" [(ngModel)]='user.currency_val' readonly #currency_val=\"ngModel\">\n            </div>\n            <div *ngIf='!currency_val.value' class=\"alert alert-danger mt-2\" role=\"alert\">\n                <div *ngIf=\"currency_val.errors.required\">\n                    <small>You are on offline or can't get your information. Please refresh and retry later.</small>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf='loading' class='loading'>\n            <img class='img-fluid' src='assets/loading.gif' alt=\"\" />\n        </div>\n        <div class='input-wrap m-auto col-12 col-lg-7 m-auto'>\n            <div *ngIf='showError' class=\"alert alert-danger error-message\" role=\"alert\">\n                <small>{{error.message}}</small>\n            </div>\n        </div>\n        <div class='mt-3 m-auto'>\n            <button class='btn btn-success  mt-2' type='submit' [disabled]=\"f.invalid\">Submit</button>\n        </div>\n        <div class='text-center mt-2'>\n            <small>Already have account? <a [routerLink]=\"['/login']\"> Login</a></small>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/client/register/register.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/client/register/register.component.ts ***!
  \*******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/country-currency-price.service */ "./src/app/services/country-currency-price.service.ts");
/* harmony import */ var _model_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/currency */ "./src/app/model/currency.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router, route, storage, share, socket, ccp) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.storage = storage;
        this.share = share;
        this.socket = socket;
        this.ccp = ccp;
        this.loading = false;
        this.showError = false;
        this.error = {
            message: ''
        };
        this.user = {
            first_name: '',
            last_name: '',
            email: '',
            phonenumber: '',
            password: '',
            re_password: '',
            agent_id: '',
            user_country: '',
            currency_val: ''
        };
        this.currency = new _model_currency__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.cCode = 'PH';
        this.curCode = 'PHP';
        this.currencyValue = 0;
    }
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.http.postToBackend('/register', this.user)
            .then(function (result) {
            var user = result.payload;
            _this.storage.saveUser(user);
            _this.share.updateUser(user);
            _this.socket.reconnect();
            _this.loading = false;
            _this.router.navigate(['/home']);
        })
            .catch(function (err) {
            if (err.status === 422) {
                _this.showError = true;
                _this.loading = false;
                _this.error.message = 'Please enter required field';
            }
            else {
                _this.showError = true;
                _this.loading = false;
                _this.error.message = JSON.parse(err._body).payload;
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // get user country code
                        _a = this;
                        return [4 /*yield*/, this.ccp.getUserInfo()];
                    case 1:
                        // get user country code
                        _a.userInfo = _c.sent();
                        // user country code
                        this.user.user_country = this.userInfo['country'];
                        this.cCode = this.userInfo['countryCode'];
                        // get user country currency code
                        this.curCode = this.currency["" + this.cCode];
                        // get user country currency value
                        _b = this;
                        return [4 /*yield*/, this.ccp.getCurrencyValue(this.curCode)];
                    case 2:
                        // get user country currency value
                        _b.currencyValue = _c.sent();
                        this.user.currency_val = this.currencyValue + ' ' + this.curCode;
                        id = +this.route.snapshot.paramMap.get('id');
                        if (id > 0) {
                            this.storage.saveAgentID(String(id));
                            this.user.agent_id = String(id);
                        }
                        else {
                            this.user.agent_id = this.storage.getAgentID();
                        }
                        console.log(this.user.agent_id);
                        if (this.storage.getUser()) {
                            this.router.navigate(['/home']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/client/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/client/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _services_country_currency_price_service__WEBPACK_IMPORTED_MODULE_6__["CountryCurrencyPriceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/client/successfulorder/successfulorder.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/client/successfulorder/successfulorder.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/successfulorder/successfulorder.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/client/successfulorder/successfulorder.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-subheader action=\"successful-order\"></app-subheader>\n\t<table class=\"table table-responsive-xl\">\n\t\t<thead>\n\t\t\t<th>Amount (LC)</th>\n\t\t\t<th>Price</th>\n\t\t\t<th>BTC Amount Paid</th>\n\t\t\t<th>Total BTC Price To Received</th>\n\t\t\t<th>Conversion Type</th>\n\t\t\t<th>Date</th>\n\t\t\t<th>Fee (LC)</th>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor='let order of orders'>\n\t\t\t\t<td>{{ order.lcamount }}</td>\n\t\t\t\t<td>{{ order.rate | number:'0.0-15' }}</td>\n\t\t\t\t<td>{{ order.btc_paid ? order.btc_paid : \"---\" }}</td>\n\t\t\t\t<td>{{ order.btc_receive ? order.btc_receive : \"---\" }}</td>\n\t\t\t\t<td>{{ order.type == 'btol' ? 'BTC To LC' : 'LC To BTC' }}</td>\n\t\t\t\t<td>{{ order.date  | date:'yyyy/MM/dd hh:mm:ss'}}</td>\n\t\t\t\t<td>{{ order.fee | number:'0.0-5' }}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/client/successfulorder/successfulorder.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/client/successfulorder/successfulorder.component.ts ***!
  \*********************************************************************/
/*! exports provided: SuccessfulorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfulorderComponent", function() { return SuccessfulorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessfulorderComponent = /** @class */ (function () {
    function SuccessfulorderComponent(api, share) {
        this.api = api;
        this.share = share;
        this.orders = [];
    }
    SuccessfulorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getToBackend('/getSuccessfulOrders', this.share.user.token).then(function (result) {
            _this.orders = result;
            console.log(result);
        });
    };
    SuccessfulorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-successfulorder',
            template: __webpack_require__(/*! ./successfulorder.component.html */ "./src/app/client/successfulorder/successfulorder.component.html"),
            styles: [__webpack_require__(/*! ./successfulorder.component.css */ "./src/app/client/successfulorder/successfulorder.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"]])
    ], SuccessfulorderComponent);
    return SuccessfulorderComponent;
}());



/***/ }),

/***/ "./src/app/client/txhistory/txhistory.component.css":
/*!**********************************************************!*\
  !*** ./src/app/client/txhistory/txhistory.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.first::first-letter{\r\n\ttext-transform: uppercase;\r\n}"

/***/ }),

/***/ "./src/app/client/txhistory/txhistory.component.html":
/*!***********************************************************!*\
  !*** ./src/app/client/txhistory/txhistory.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<div class=\"alert alert-success\">\n\t\t\t\tOverall BTC Received: {{ overall_received | btc }}BTC\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<div class=\"alert alert-success\">\n\t\t\t\tOverall BTC Sent: {{ overall_sent | btc }}BTC\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<div class=\"alert alert-success\">\n\t\t\t\tOverall Reward Received: {{ overall_reward | btc }}BTC\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-12 col-md-6\">\n\t\t\t<div class=\"alert alert-success\">\n\t\t\t\tReferred Traders: {{ referred_count }}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\n\t\t<div class=\"btn-group col-12 mb-3 d-block\" role=\"group\" aria-label=\"Basic example\">\n\t\t  <button type=\"button\" class=\"btn \" [ngClass]=\"{'btn-primary': type=='all'}\" (click)=\"show('all')\">All Transaction</button>\n\t\t  <button type=\"button\" class=\"btn \" [ngClass]=\"{'btn-primary': type=='reward'}\" (click)=\"show('reward')\">Reward Received Only</button>\n\t\t  <button type=\"button\" class=\"btn \" [ngClass]=\"{'btn-primary': type=='received'}\" (click)=\"show('received')\">BTC Received Only</button>\n\t\t  <button type=\"button\" class=\"btn \" [ngClass]=\"{'btn-primary': type=='sent'}\" (click)=\"show('sent')\">BTC Sent Only</button>\n\t\t</div>\n\t</div>\n\t<table class=\"table table-responsive-xl\" *ngIf=\"type!='received'\">\n\t\t<thead>\n\t\t\t<th>ID</th>\n\t\t\t<th>Date</th>\n\t\t\t<th style=\"width: 14%\">Amount</th>\n\t\t\t<th style=\"width: 14%\">Previous Amount</th>\n\t\t\t<th style=\"width: 14%\">New Amount</th>\n\t\t\t<th>Type</th>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor='let transaction of display'>\n\t\t\t\t<td>{{ transaction._id }}</td>\n\t\t\t\t<td>{{ transaction.date | date:'yyyy/MM/dd hh:mm:ss' }}</td>\n\t\t\t\t<td>{{ transaction.amount | btc }}</td>\n\t\t\t\t<td>{{ transaction.old | btc}}</td>\n\t\t\t\t<td>{{ transaction.new | btc }}</td>\n\t\t\t\t<td class=\"first\">{{ transaction.type }}</td>\n\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\n\t</table>\n\t<table class=\"table table-responsive-xl\" *ngIf=\"type=='received'\">\n\t\t<thead>\n\t\t\t<th>ID</th>\n\t\t\t<th>Date</th>\n\t\t\t<th>Amount</th>\n\t\t\t<th>Network Fee</th>\n\t\t\t<th>Receivable Amount</th>\n\t\t\t<th>Previous Amount</th>\n\t\t\t<th>New Amount</th>\n\t\t\t<th>Type</th>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor='let transaction of display'>\n\t\t\t\t<td>{{ transaction._id }}</td>\n\t\t\t\t<td>{{ transaction.date | date:'yyyy/MM/dd hh:mm:ss' }}</td>\n\t\t\t\t<td>{{ transaction.amount | btc }}</td>\n\t\t\t\t<td>{{ transaction.fee | btc }}</td>\n\t\t\t\t<td>{{ transaction.amount - transaction.fee | btc }}</td>\n\t\t\t\t<td>{{ transaction.old | btc}}</td>\n\t\t\t\t<td>{{ transaction.new | btc }}</td>\n\t\t\t\t<td class=\"first\">{{ transaction.type }}</td>\n\t\t\t\t\n\t\t\t</tr>\n\t\t</tbody>\n\t\t\n\t</table>\n"

/***/ }),

/***/ "./src/app/client/txhistory/txhistory.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/client/txhistory/txhistory.component.ts ***!
  \*********************************************************/
/*! exports provided: TxhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxhistoryComponent", function() { return TxhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TxhistoryComponent = /** @class */ (function () {
    function TxhistoryComponent(api, share) {
        this.api = api;
        this.share = share;
        this.transactions = [];
        this.overall_received = 0;
        this.overall_sent = 0;
        this.overall_reward = 0;
        this.display = [];
        this.referred_count = 0;
    }
    TxhistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = 'all';
        this.api.getToBackend('/getAllTransactions', this.share.user.token).then(function (response) {
            _this.transactions = response;
            _this.display = _this.transactions;
            response.map(function (transaction) {
                if (transaction.type == 'sent') {
                    _this.overall_sent += transaction.amount;
                }
                if (transaction.type == 'received') {
                    _this.overall_received += transaction.amount;
                }
                if (transaction.type == 'reward') {
                    _this.overall_reward += transaction.amount;
                }
            });
        });
        this.api.getToBackend('/getReferredCount', this.share.user.token).then(function (response) {
            _this.referred_count = response.result;
        });
    };
    TxhistoryComponent.prototype.show = function (type) {
        this.type = type;
        this.display = this.transactions.filter(function (transaction) {
            if (type == 'all')
                return true;
            return transaction.type == type;
        });
    };
    TxhistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-txhistory',
            template: __webpack_require__(/*! ./txhistory.component.html */ "./src/app/client/txhistory/txhistory.component.html"),
            styles: [__webpack_require__(/*! ./txhistory.component.css */ "./src/app/client/txhistory/txhistory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"]])
    ], TxhistoryComponent);
    return TxhistoryComponent;
}());



/***/ }),

/***/ "./src/app/client/withdrawal/withdrawal.component.css":
/*!************************************************************!*\
  !*** ./src/app/client/withdrawal/withdrawal.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/withdrawal/withdrawal.component.html":
/*!*************************************************************!*\
  !*** ./src/app/client/withdrawal/withdrawal.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"send()\">\n  <div class=\"form-group row\">\n    <label class=\"col-sm-3 col-form-label\">1 BTC: </label>\n    <label class=\"col-sm-9 col-form-label\">{{ socket.btc_usd | number:'0.4-4' }} USD</label>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-3 col-form-label\">Balance: </label>\n    <label class=\"col-sm-9 col-form-label\">{{ socket.btc_balance | number:'0.8-8' }} BTC</label>\n  </div>\n\n  <div class=\"form-group row\">\n    <label for=\"inputEmail3\" class=\"col-sm-3 col-form-label\">Wallet Address: </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" name=\"address\" class=\"form-control\" id=\"wallet_address\"\n        placeholder=\"Enter wallet address here...\" [(ngModel)]='sendData.target'>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label for=\"inputPassword3\" class=\"col-sm-3 col-form-label\">Amount: </label>\n    <div class=\"col-sm-9\">\n      <input type=\"text\" class=\"form-control\" name=\"amount\" id=\"amount\" placeholder=\"Enter amount here...\"\n        [(ngModel)]='sendData.amount'>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-3 col-form-label\">Total Deductible to balance: </label>\n    <label class=\"col-sm-9 col-form-label\">\n      {{ addFee()  }}\n    </label>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-3 col-form-label\">Important: </label>\n    <label class=\"col-sm-9 col-form-label\">\n      Transaction fee will be 0.0001 BTC\n    </label>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-3 col-form-label\"></label>\n    <div class=\"col-sm-9\">\n      <div *ngIf='showError' class=\" alert alert-danger mt-2\" role=\"alert\">\n        {{error.message}}\n      </div>\n      <div *ngIf='showResult' class=\" alert alert-success mt-2\" role=\"alert\">\n        {{result.message}}\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf='loading' class='loading'>\n    <img class='img-fluid' src='assets/loading.gif' alt=\"\" />\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"col-sm-3 col-form-label\"></label>\n    <div class=\"col-sm-9\">\n      <button *ngIf='!loading' type=\"submit\" class=\"btn btn-primary\"\n        [disabled]=\"sendData.target == '' || sendData.amount < 0.0001 || socket.btc_balance < addFee()\">Send</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/client/withdrawal/withdrawal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/client/withdrawal/withdrawal.component.ts ***!
  \***********************************************************/
/*! exports provided: WithdrawalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawalComponent", function() { return WithdrawalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WithdrawalComponent = /** @class */ (function () {
    function WithdrawalComponent(api, share, socket) {
        this.api = api;
        this.share = share;
        this.socket = socket;
        this.loading = false;
        this.sendData = {
            target: '',
            amount: '0'
        };
        this.showResult = false;
        this.showError = false;
        this.result = {
            message: ''
        };
        this.error = {
            message: ''
        };
    }
    WithdrawalComponent.prototype.ngOnInit = function () {
    };
    WithdrawalComponent.prototype.send = function () {
        var _this = this;
        this.loading = true;
        this.showError = false;
        this.showResult = false;
        this.error.message = '';
        this.result.message = '';
        this.api
            .postToBackend('/send', {
            to: this.sendData.target,
            amount: this.sendData.amount
        }, this.share.user.token)
            .then(function (result) {
            _this.loading = false;
            _this.showResult = true;
            _this.result.message = 'successfully';
        })
            .catch(function (err) {
            _this.loading = false;
            _this.showError = true;
            if (err.status === 401) {
                _this.error.message = 'user token expired';
            }
            else {
                var ResponseObject = JSON.parse(err._body).payload;
                // console.log(JSON.parse(err._body));
                // console.log(ResponseObject);
                _this.error.message = ResponseObject;
                // if ('response' in ResponseObject) {
                //   this.error.message = ResponseObject.response.text;
                // } else {
                //   this.error.message = ResponseObject;
                // }
            }
        });
    };
    WithdrawalComponent.prototype.addFee = function () {
        return (+this.sendData.amount + 0.0001).toFixed(8);
    };
    WithdrawalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdrawal',
            template: __webpack_require__(/*! ./withdrawal.component.html */ "./src/app/client/withdrawal/withdrawal.component.html"),
            styles: [__webpack_require__(/*! ./withdrawal.component.css */ "./src/app/client/withdrawal/withdrawal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_share_service__WEBPACK_IMPORTED_MODULE_1__["ShareService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]])
    ], WithdrawalComponent);
    return WithdrawalComponent;
}());



/***/ }),

/***/ "./src/app/model/currency.ts":
/*!***********************************!*\
  !*** ./src/app/model/currency.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Currency = /** @class */ (function () {
    function Currency() {
        this.AF = 'AFN';
        this.AL = 'ALL';
        this.DZ = 'DZD';
        this.AS = 'USD';
        this.AD = 'EUR';
        this.AO = 'AOA';
        this.AI = 'XCD';
        this.AG = 'XCD';
        this.AR = 'ARS';
        this.AM = 'AMD';
        this.AW = 'AWG';
        this.AU = 'AUD';
        this.AT = 'EUR';
        this.AZ = 'AZN';
        this.BS = 'BSD';
        this.BH = 'BHD';
        this.BD = 'BDT';
        this.BB = 'BBD';
        this.BY = 'BYR';
        this.BE = 'EUR';
        this.BZ = 'BZD';
        this.BJ = 'XOF';
        this.BM = 'BMD';
        this.BT = 'BTN';
        this.BO = 'BOB';
        this.BQ = 'USD';
        this.BA = 'BAM';
        this.BW = 'BWP';
        this.BV = 'NOK';
        this.BR = 'BRL';
        this.IO = 'USD';
        this.BN = 'BND';
        this.BG = 'BGN';
        this.BF = 'XOF';
        this.BI = 'BIF';
        this.CV = 'CVE';
        this.KH = 'KHR';
        this.CM = 'XAF';
        this.CA = 'CAD';
        this.KY = 'KYD';
        this.CF = 'XAF';
        this.TD = 'XAF';
        this.CL = 'CLF';
        this.CN = 'CNY';
        this.CX = 'AUD';
        this.CC = 'AUD';
        this.CO = 'COP';
        this.KM = 'KMF';
        this.CD = 'CDF';
        this.CG = 'XAF';
        this.CK = 'NZD';
        this.CR = 'CRC';
        this.HR = 'HRK';
        this.CU = 'CUP';
        this.CW = 'ANG';
        this.CY = 'EUR';
        this.CZ = 'CZK';
        this.CI = 'XOF';
        this.DK = 'DKK';
        this.DJ = 'DJF';
        this.DM = 'XCD';
        this.DO = 'DOP';
        this.EC = 'USD';
        this.EG = 'EGP';
        this.SV = 'SVC';
        this.GQ = 'XAF';
        this.ER = 'ERN';
        this.EE = 'EUR';
        this.ET = 'ETB';
        this.FK = 'FKP';
        this.FO = 'DKK';
        this.FJ = 'FJD';
        this.FI = 'EUR';
        this.FR = 'EUR';
        this.GF = 'EUR';
        this.PF = 'XPF';
        this.TF = 'EUR';
        this.GA = 'XAF';
        this.GM = 'GMD';
        this.GE = 'GEL';
        this.DE = 'EUR';
        this.GH = 'GHS';
        this.GI = 'GIP';
        this.GR = 'EUR';
        this.GL = 'DKK';
        this.GD = 'XCD';
        this.GP = 'EUR';
        this.GU = 'USD';
        this.GT = 'GTQ';
        this.GG = 'GBP';
        this.GN = 'GNF';
        this.GW = 'XOF';
        this.GY = 'GYD';
        this.HT = 'HTG';
        this.HM = 'AUD';
        this.VA = 'EUR';
        this.HN = 'HNL';
        this.HK = 'HKD';
        this.HU = 'HUF';
        this.IS = 'ISK';
        this.IN = 'INR';
        this.ID = 'IDR';
        this.IR = 'IRR';
        this.IQ = 'IQD';
        this.IE = 'EUR';
        this.IM = 'GBP';
        this.IL = 'ILS';
        this.IT = 'EUR';
        this.JM = 'JMD';
        this.JP = 'JPY';
        this.JE = 'GBP';
        this.JO = 'JOD';
        this.KZ = 'KZT';
        this.KE = 'KES';
        this.KI = 'AUD';
        this.KP = 'KPW';
        this.KR = 'KRW';
        this.KW = 'KWD';
        this.KG = 'KGS';
        this.LA = 'LAK';
        this.LV = 'EUR';
        this.LB = 'LBP';
        this.LS = 'LSL';
        this.LR = 'LRD';
        this.LY = 'LYD';
        this.LI = 'CHF';
        this.LT = 'EUR';
        this.LU = 'EUR';
        this.MO = 'MOP';
        this.MK = 'MKD';
        this.MG = 'MGA';
        this.MW = 'MWK';
        this.MY = 'MYR';
        this.MV = 'MVR';
        this.ML = 'XOF';
        this.MT = 'EUR';
        this.MH = 'USD';
        this.MQ = 'EUR';
        this.MR = 'MRU';
        this.MU = 'MUR';
        this.YT = 'EUR';
        this.MX = 'MXN';
        this.FM = 'USD';
        this.MD = 'MDL';
        this.MC = 'EUR';
        this.MN = 'MNT';
        this.ME = 'EUR';
        this.MS = 'XCD';
        this.MA = 'MAD';
        this.MZ = 'MZN';
        this.MM = 'MMK';
        this.NA = 'NAD';
        this.NR = 'AUD';
        this.NP = 'NPR';
        this.NL = 'EUR';
        this.NC = 'XPF';
        this.NZ = 'NZD';
        this.NI = 'NIO';
        this.NE = 'XOF';
        this.NG = 'NGN';
        this.NU = 'NZD';
        this.NF = 'AUD';
        this.MP = 'USD';
        this.NO = 'NOK';
        this.OM = 'OMR';
        this.PK = 'PKR';
        this.PW = 'USD';
        this.PA = 'PAB';
        this.PG = 'PGK';
        this.PY = 'PYG';
        this.PE = 'PEN';
        this.PH = 'PHP';
        this.PN = 'NZD';
        this.PL = 'PLN';
        this.PT = 'EUR';
        this.PR = 'USD';
        this.QA = 'QAR';
        this.RO = 'RON';
        this.RU = 'RUB';
        this.RW = 'RWF';
        this.RE = 'EUR';
        this.BL = 'EUR';
        this.SH = 'SHP';
        this.KN = 'XCD';
        this.LC = 'XCD';
        this.MF = 'EUR';
        this.PM = 'EUR';
        this.VC = 'XCD';
        this.WS = 'WST';
        this.SM = 'EUR';
        this.ST = 'STN';
        this.SA = 'SAR';
        this.SN = 'XOF';
        this.RS = 'RSD';
        this.SC = 'SCR';
        this.SL = 'SLL';
        this.SG = 'SGD';
        this.SX = 'ANG';
        this.SK = 'EUR';
        this.SI = 'EUR';
        this.SB = 'SBD';
        this.SO = 'SOS';
        this.ZA = 'ZAR';
        this.SS = 'SSP';
        this.ES = 'EUR';
        this.LK = 'LKR';
        this.SD = 'SDG';
        this.SR = 'SRD';
        this.SJ = 'NOK';
        this.SE = 'SEK';
        this.CH = 'CHE';
        this.SY = 'SYP';
        this.TW = 'TWD';
        this.TJ = 'TJS';
        this.TZ = 'TZS';
        this.TH = 'THB';
        this.TL = 'USD';
        this.TG = 'XOF';
        this.TK = 'NZD';
        this.TO = 'TOP';
        this.TT = 'TTD';
        this.TN = 'TND';
        this.TR = 'TRY';
        this.TM = 'TMT';
        this.TC = 'USD';
        this.TV = 'AUD';
        this.UG = 'UGX';
        this.UA = 'UAH';
        this.AE = 'AED';
        this.GB = 'GBP';
        this.UM = 'USD';
        this.US = 'USD';
        this.UY = 'UYI';
        this.UZ = 'UZS';
        this.VU = 'VUV';
        this.VE = 'VEF';
        this.VN = 'VND';
        this.VG = 'USD';
        this.VI = 'USD';
        this.WF = 'XPF';
        this.EH = 'MAD';
        this.YE = 'YER';
        this.ZM = 'ZMW';
        this.ZW = 'ZWL';
        this.AX = 'EUR';
    }
    return Currency;
}());
/* harmony default export */ __webpack_exports__["default"] = (Currency);


/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminService = /** @class */ (function () {
    function AdminService(share, api) {
        var _this = this;
        this.share = share;
        this.api = api;
        this.btc_usd = 0;
        this.lc_btc = 0;
        this.orders = [];
        this.btc_received = [];
        this.btc_sent = [];
        this.conversion_fee = 0;
        this.adder = 0;
        this.subtracter = 0;
        this.converted_lc = 0;
        this.converted_btc = 0;
        this.transfer_fee = 0;
        this.remain_btc = 0;
        this.received_btc = 0;
        this.sent_btc = 0;
        this.network_fee = 0;
        this.receive_btc = 0;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl, { query: { token: this.share.admin_user.token } });
        this.onMessage().subscribe(function (message) {
            if (message.event === 'lc_btc') {
                _this.lc_btc = message.data;
            }
            if (message.event === 'btc_usd') {
                _this.btc_usd = message.data;
            }
            else {
                // console.log('========from socket===========');
                // console.log(message);
                // console.log('========from socket===========');
            }
        });
        this.api.get('https://api.blockcypher.com/v1/btc/test3/addrs/' + this.share.admin_user.wallet + '/balance').then(function (result) {
            _this.remain_btc = result.balance * 1e-8;
            _this.received_btc = result.total_received * 1e-8;
            _this.sent_btc = result.total_sent * 1e-8;
        });
        this.api.getToBackend('/admin/getBTCReceived', this.share.admin_user.token).then(function (response) {
            _this.btc_received = response;
            _this.network_fee = 0;
            response.map(function (record) {
                console.log(record);
                if (record.fee) {
                    _this.network_fee += +record.fee;
                }
                console.log(_this.network_fee);
            });
        });
        this.api.getToBackend('/admin/getBTCSent', this.share.admin_user.token).then(function (response) {
            _this.btc_sent = response;
            _this.transfer_fee = response.length * 0.0001;
        });
        this.api.getToBackend('/admin/getAllOrders', this.share.admin_user.token).then(function (response) {
            _this.orders = response;
            _this.conversion_fee = 0;
            _this.converted_lc = 0;
            _this.converted_btc = 0;
            _this.receive_btc = 0;
            response.map(function (order) {
                if (order.status === 'successful') {
                    _this.conversion_fee += order.fee;
                }
                if (order.status === 'successful' && order.type === 'ltob') {
                    _this.converted_lc += order.lcamount;
                    _this.receive_btc += order.btc_receive;
                }
                if (order.status === 'successful' && order.type === 'btol') {
                    _this.converted_btc += order.lcamount * order.rate;
                }
            });
        });
        this.api.getToBackend('/admin/getAdder', this.share.admin_user.token).then(function (response) {
            _this.adder = response.payload;
        });
        this.api.getToBackend('/admin/getSubtracter', this.share.admin_user.token).then(function (response) {
            _this.subtracter = response.payload;
        });
    }
    AdminService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    AdminService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_share_service__WEBPACK_IMPORTED_MODULE_2__["ShareService"], _http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/contact.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = /** @class */ (function () {
    function ContactService(http, notify) {
        this.http = http;
        this.notify = notify;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl + '/contact';
    }
    ContactService.prototype.sendMessage = function (email, title, message) {
        var _this = this;
        var obj = {
            email: email,
            title: title,
            message: message
        };
        this.http.post("" + this.uri, obj).subscribe(function (res) {
            if (res['result']) {
                _this.notify.info('INFO', res['result'], { timeOut: 5000 });
            }
            else {
                console.log(res);
            }
        });
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angular2_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/services/country-currency-price.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/country-currency-price.service.ts ***!
  \************************************************************/
/*! exports provided: CountryCurrencyPriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryCurrencyPriceService", function() { return CountryCurrencyPriceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CountryCurrencyPriceService = /** @class */ (function () {
    // tslint:disable-next-line: deprecation
    function CountryCurrencyPriceService(http, notify, router) {
        this.http = http;
        this.notify = notify;
        this.router = router;
        // set endpoint and your API key
        this.endpoint = 'latest';
        this.access_key = '2c0eb0162ea5734e3b5cd2adfdaca3bb';
        this.baseURL = 'http://data.fixer.io/api/';
        this.currentPriceUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';
    }
    CountryCurrencyPriceService.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('http://ip-api.com/json').toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                }
            });
        });
    };
    CountryCurrencyPriceService.prototype.getCurrencyValue = function (currency_code) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.baseURL + this.endpoint + '?access_key=' + this.access_key + '&base=' + 'USD')
                            .toPromise()];
                    case 1:
                        response = _a.sent();
                        if (this.router.url === '/home') {
                            this.notify.success('INFO', '1 USD = ' + response.json().rates[currency_code] + ' ' + currency_code, { timeOut: 5000 });
                        }
                        return [2 /*return*/, response.json().rates[currency_code]];
                }
            });
        });
    };
    CountryCurrencyPriceService.prototype.getPrice = function (currency) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.currentPriceUrl).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json().bpi[currency].rate];
                }
            });
        });
    };
    CountryCurrencyPriceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CountryCurrencyPriceService);
    return CountryCurrencyPriceService;
}());



/***/ }),

/***/ "./src/app/services/forgotpw.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/forgotpw.service.ts ***!
  \**********************************************/
/*! exports provided: ForgotpwService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwService", function() { return ForgotpwService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpwService = /** @class */ (function () {
    function ForgotpwService(http, notify) {
        this.http = http;
        this.notify = notify;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl + '/forgot';
    }
    ForgotpwService.prototype.recovery = function (email) {
        var _this = this;
        var obj = {
            email: email
        };
        this.http.post("" + this.uri, obj).subscribe(function (res) {
            if (res['result']) {
                _this.notify.info('INFO', res['result'], { timeOut: 5000 });
            }
            if (res['invalid']) {
                _this.notify.error('INFO', res['invalid'], { timeOut: 5000 });
            }
            else {
                console.log(res);
            }
        });
    };
    ForgotpwService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angular2_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"]])
    ], ForgotpwService);
    return ForgotpwService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock.service */ "./src/app/services/mock.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/* Mock Service */



var HttpService = /** @class */ (function () {
    // tslint:disable-next-line: deprecation
    function HttpService(mock, http) {
        this.mock = mock;
        this.http = http;
    }
    HttpService.prototype.initUrl = function (url) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendUrl + url;
    };
    HttpService.prototype.post = function (url, data) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(_this.mock.API['post'][url]);
            }, 300);
        });
    };
    HttpService.prototype.postToBackend = function (url, data, token) {
        var _this = this;
        if (token === void 0) { token = false; }
        // tslint:disable-next-line: deprecation
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({});
        if (!token) {
            // tslint:disable-next-line: deprecation
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
        }
        else {
            // tslint:disable-next-line: deprecation
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': "bearer " + token
            });
        }
        return new Promise(function (resolve, reject) {
            _this.http
                .post(_this.initUrl(url), data, { headers: headers })
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    HttpService.prototype.getToBackend = function (url, token) {
        var _this = this;
        if (token === void 0) { token = false; }
        // tslint:disable-next-line: deprecation
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({});
        if (!token) {
            // tslint:disable-next-line: deprecation
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
        }
        else {
            // tslint:disable-next-line: deprecation
            headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': "bearer " + token
            });
        }
        return new Promise(function (resolve, reject) {
            _this.http
                .get(_this.initUrl(url), { headers: headers })
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    HttpService.prototype.get = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http
                .get(url)
                .toPromise()
                .then(function (response) {
                resolve(response.json());
            });
        });
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_mock_service__WEBPACK_IMPORTED_MODULE_1__["MockService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/mock.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/mock.service.ts ***!
  \******************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
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

var MockService = /** @class */ (function () {
    function MockService() {
        // tslint:disable-next-line: no-use-before-declare
        this.API = API;
    }
    MockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MockService);
    return MockService;
}());

var API = {
    post: {
        '/login': {
            email: 'deverpham@gmail.com',
            id: 1,
            wallet: 'mzp6BEt1EuMZraHDWM3fDQpMGrJ1DmTA3j',
            token: '123459asd56asd654asd6',
            expired: 1238489
        },
        '/register': {
            email: 'deverpham@gmail.com',
            id: 1,
            wallet: 'mzp6BEt1EuMZraHDWM3fDQpMGrJ1DmTA3j',
            token: '123459asd56asd654asd6',
            expired: 1238489
        }
    },
    get: {
        '/analytics': {
            wallets: [{
                    user_id: 1,
                    wallet: 'mzp6BEt1EuMZraHDWM3fDQpMGrJ1DmTA3j'
                },
                {
                    user_id: 2,
                    wallet: '2N54QBN3Ub4r9PbjXMshyaH2nLQaB9REcaw'
                },
                {
                    user_id: 3,
                    wallet: '2N7UbttR5FppWB7MPBG2C6MboJeUfaGP9uU'
                }],
            onlines: 100,
            btcSent: 32.5,
            registers: 200
        }
    }
};


/***/ }),

/***/ "./src/app/services/share.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/share.service.ts ***!
  \*******************************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ "./src/app/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShareService = /** @class */ (function () {
    function ShareService(storage) {
        this.storage = storage;
        this.user = false;
        this.admin_user = false;
        this.user = this.storage.getUser();
        this.admin_user = this.storage.getAdminUser();
    }
    ShareService.prototype.updateUser = function (user) {
        this.user = user;
    };
    ShareService.prototype.updateAdminUser = function (user) {
        this.admin_user = user;
    };
    ShareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]])
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SocketService = /** @class */ (function () {
    function SocketService(share, notify, router) {
        this.share = share;
        this.notify = notify;
        this.router = router;
        this.btc_balance = 0;
        this.lc_balance = 0;
        this.lc_btc = 0;
        this.btc_usd = 0;
        this.last_btol_conversions = [];
        this.last_ltob_conversions = [];
        this.status_ltob = false;
        this.status_btol = false;
        this.online_user = 0;
        this.total_user = 0;
        this.btc_received_count = 0;
        this.btc_sent_count = 0;
        this.btc_received_today_count = 0;
        this.btc_sent_today_count = 0;
        this.BtcConversionTarget = 0;
        this.RefillProductAvailavility = 0;
        this.LcMaintainingBalance = 0;
        this.connect();
    }
    SocketService.prototype.reconnect = function () {
        var _this = this;
        this.socket.disconnect();
        console.log('reconnect');
        console.log(this.share.user);
        setTimeout(function () {
            _this.connect();
        }, 100);
    };
    SocketService.prototype.connect = function () {
        var _this = this;
        if (this.share.user) {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl, { query: { token: this.share.user.token } });
        }
        else {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl);
        }
        this.onMessage()
            .subscribe(function (message) {
            switch (message.event) {
                case 'balance':
                    _this.btc_balance = message.data.btc;
                    _this.lc_balance = message.data.lc;
                    break;
                case 'btc_balance':
                    if (message.data.reason !== '') {
                        if (_this.btc_balance > message.data.amount) {
                            _this.notify.error('BTC Balance changed!', message.data.reason, { timeOut: 3000 });
                        }
                        else {
                            _this.notify.success('BTC Balance changed!', message.data.reason, { timeOut: 3000 });
                        }
                    }
                    _this.btc_balance = message.data.amount;
                    break;
                case 'lc_balance':
                    if (message.data.reason !== '') {
                        if (_this.lc_balance > message.data.amount) {
                            _this.notify.error('LC Balance changed!', message.data.reason, { timeOut: 3000 });
                        }
                        else {
                            _this.notify.success('LC Balance changed!', message.data.reason, { timeOut: 3000 });
                        }
                    }
                    _this.lc_balance = message.data.amount;
                    break;
                case 'lc_btc changed':
                    if (_this.lc_btc > message.data) {
                        // tslint:disable-next-line: max-line-length
                        _this.notify.info('1 LC Price changed!', '1 LC price has decreased from ' + _this.lc_btc + ' to ' + message.data, { timeOut: 3000 });
                    }
                    else {
                        // tslint:disable-next-line: max-line-length
                        _this.notify.info('1 LC Price changed!', '1 LC price has increased from ' + _this.lc_btc + ' to ' + message.data, { timeOut: 3000 });
                    }
                    _this.lc_btc = message.data;
                    break;
                case 'transaction created':
                    _this.last_transaction = message.data;
                    break;
                case 'last transaction':
                    _this.last_transaction = message.data;
                    break;
                case 'last btol conversions':
                    _this.last_btol_conversions = message.data;
                    _this.status_btol = true;
                    break;
                case 'last ltob conversions':
                    _this.last_ltob_conversions = message.data;
                    _this.status_ltob = true;
                    break;
                case 'convert created':
                    var record = message.data;
                    if (record.type === 'btol') {
                        _this.last_btol_conversions.unshift(record);
                    }
                    else {
                        _this.last_ltob_conversions.unshift(record);
                    }
                    if (_this.last_btol_conversions.length >= 8) {
                        _this.last_btol_conversions.pop();
                    }
                    if (_this.last_ltob_conversions.length >= 8) {
                        _this.last_ltob_conversions.pop();
                    }
                    break;
                case 'lc_btc':
                    _this.lc_btc = message.data;
                    break;
                case 'online_user':
                    _this.online_user = message.data;
                    break;
                case 'total_user':
                    _this.total_user = message.data;
                    break;
                case 'btc_received_count':
                    _this.btc_received_count = message.data;
                    break;
                case 'btc_sent_count':
                    _this.btc_sent_count = message.data;
                    break;
                case 'btc_received_today_count':
                    _this.btc_received_today_count = message.data;
                    break;
                case 'btc_sent_today_count':
                    _this.btc_sent_today_count = message.data;
                    break;
                case 'btc_usd':
                    {
                        _this.btc_usd = message.data;
                        if (_this.router.url === '/home') {
                            _this.notify.info('INFO', '1 BTC = ' + _this.btc_usd + ' USD', { timeOut: 5000 });
                        }
                        break;
                    }
                case 'multiplier':
                    _this.multiplier = message.data;
                    break;
                case 'multiplier changed':
                    _this.multiplier = message.data;
                    break;
                case 'bazaar_value_settings':
                    {
                        _this.BtcConversionTarget = message.data['BtcConversionTarget'];
                        _this.RefillProductAvailavility = message.data['RefillProductAvailavility'];
                        _this.LcMaintainingBalance = message.data['LcMaintainingBalance'];
                    }
                    break;
                default:
                    // code...
                    break;
            }
            if (message.event !== 'btc_usd') {
                // console.log('========from socket===========');
                // console.log(message);
                // console.log('========from socket===========');
            }
        });
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"], angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
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
/**
 * Working with Local Storage API
 */

var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.set = function (name, data) {
        return window.localStorage.setItem(name, JSON.stringify(data));
    };
    StorageService.prototype.get = function (name) {
        var data = window.localStorage.getItem(name);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    };
    StorageService.prototype.saveAgentID = function (id) {
        return this.set('agent_id', id);
    };
    StorageService.prototype.getAgentID = function () {
        return this.get('agent_id');
    };
    StorageService.prototype.saveUser = function (data) {
        return this.set('user', data);
    };
    StorageService.prototype.saveAdminUser = function (data) {
        return this.set('admin_user', data);
    };
    StorageService.prototype.getUser = function () {
        return this.get('user');
    };
    StorageService.prototype.getAdminUser = function () {
        return this.get('admin_user');
    };
    StorageService.prototype.destroyUser = function () {
        return window.localStorage.removeItem('user');
    };
    StorageService.prototype.destroyAdminUser = function () {
        return window.localStorage.removeItem('admin_user');
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backendUrl: 'http://www.phponline.site:8080',
    frontendUrl: 'http://www.phponline.site',
    node: 'testnet'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\Angular\Currency_Wallet\front1\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map