webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_medicine_medicine_component__ = __webpack_require__("./src/app/components/medicine/medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_view_medicine_view_medicine_component__ = __webpack_require__("./src/app/components/view-medicine/view-medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_user_add_user_component__ = __webpack_require__("./src/app/components/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pharmasist_dashboard_pharmasist_dashboard_component__ = __webpack_require__("./src/app/components/pharmasist-dashboard/pharmasist-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("./src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_manager_manager_component__ = __webpack_require__("./src/app/components/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_update_manager_update_manager_component__ = __webpack_require__("./src/app/components/update-manager/update-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pharmasist_pharmasist_component__ = __webpack_require__("./src/app/components/pharmasist/pharmasist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_salesman_salesman_component__ = __webpack_require__("./src/app/components/salesman/salesman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_update_medicine_update_medicine_component__ = __webpack_require__("./src/app/components/update-medicine/update-medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_salesman_dashboard_salesman_dashboard_component__ = __webpack_require__("./src/app/components/salesman-dashboard/salesman-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_manager_dashboard_manager_dashboard_component__ = __webpack_require__("./src/app/components/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gaurds_auth_gaurd__ = __webpack_require__("./src/app/gaurds/auth.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gaurds_manager_gaurd__ = __webpack_require__("./src/app/gaurds/manager.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_autocomplete_optgroup_example_autocomplete_optgroup_example_component__ = __webpack_require__("./src/app/components/autocomplete-optgroup-example/autocomplete-optgroup-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gaurds_salesman_gaurd__ = __webpack_require__("./src/app/gaurds/salesman.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gaurds_pharmasist_guard__ = __webpack_require__("./src/app/gaurds/pharmasist.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'medicine', component: __WEBPACK_IMPORTED_MODULE_2__components_medicine_medicine_component__["a" /* MedicineComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'viewMedicine', component: __WEBPACK_IMPORTED_MODULE_4__components_view_medicine_view_medicine_component__["a" /* ViewMedicineComponent */] },
    { path: 'addUser', component: __WEBPACK_IMPORTED_MODULE_5__components_add_user_add_user_component__["a" /* AddUserComponent */] },
    { path: 'addUser/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_add_user_add_user_component__["a" /* AddUserComponent */] },
    { path: 'pDashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_pharmasist_dashboard_pharmasist_dashboard_component__["a" /* PharmasistDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__gaurds_pharmasist_guard__["a" /* PharmasistGuard */]] },
    { path: 'aDashboard', component: __WEBPACK_IMPORTED_MODULE_7__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'manager', component: __WEBPACK_IMPORTED_MODULE_8__components_manager_manager_component__["a" /* ManagerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__gaurds_manager_gaurd__["a" /* ManagerGaurd */]] },
    { path: 'update-manager/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_update_manager_update_manager_component__["a" /* UpdateManagerComponent */] },
    { path: 'pharmasist', component: __WEBPACK_IMPORTED_MODULE_10__components_pharmasist_pharmasist_component__["a" /* PharmasistComponent */] },
    { path: 'salesman', component: __WEBPACK_IMPORTED_MODULE_11__components_salesman_salesman_component__["a" /* SalesmanComponent */] },
    { path: 'update-medicine/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_update_medicine_update_medicine_component__["a" /* UpdateMedicineComponent */] },
    { path: 'update-medicine', component: __WEBPACK_IMPORTED_MODULE_12__components_update_medicine_update_medicine_component__["a" /* UpdateMedicineComponent */] },
    { path: 'sDashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_salesman_dashboard_salesman_dashboard_component__["a" /* SalesmanDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__gaurds_salesman_gaurd__["a" /* SalesmanGaurd */]] },
    { path: 'mDashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__gaurds_manager_gaurd__["a" /* ManagerGaurd */]] },
    { path: 'auto', component: __WEBPACK_IMPORTED_MODULE_17__components_autocomplete_optgroup_example_autocomplete_optgroup_example_component__["a" /* AutocompleteOptgroupExampleComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_medicine_medicine_component__ = __webpack_require__("./src/app/components/medicine/medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_view_medicine_view_medicine_component__ = __webpack_require__("./src/app/components/view-medicine/view-medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_add_user_add_user_component__ = __webpack_require__("./src/app/components/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pharmasist_dashboard_pharmasist_dashboard_component__ = __webpack_require__("./src/app/components/pharmasist-dashboard/pharmasist-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_pager_services_service__ = __webpack_require__("./src/app/services/pager-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_dashboard_admin_dashboard_component__ = __webpack_require__("./src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_manager_manager_component__ = __webpack_require__("./src/app/components/manager/manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_update_manager_update_manager_component__ = __webpack_require__("./src/app/components/update-manager/update-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pharmasist_pharmasist_component__ = __webpack_require__("./src/app/components/pharmasist/pharmasist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_salesman_salesman_component__ = __webpack_require__("./src/app/components/salesman/salesman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_update_medicine_update_medicine_component__ = __webpack_require__("./src/app/components/update-medicine/update-medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_salesman_dashboard_salesman_dashboard_component__ = __webpack_require__("./src/app/components/salesman-dashboard/salesman-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_manager_dashboard_manager_dashboard_component__ = __webpack_require__("./src/app/components/manager-dashboard/manager-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gaurds_auth_gaurd__ = __webpack_require__("./src/app/gaurds/auth.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gaurds_manager_gaurd__ = __webpack_require__("./src/app/gaurds/manager.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_autocomplete_optgroup_example_autocomplete_optgroup_example_component__ = __webpack_require__("./src/app/components/autocomplete-optgroup-example/autocomplete-optgroup-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__gaurds_pharmasist_guard__ = __webpack_require__("./src/app/gaurds/pharmasist.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__gaurds_salesman_gaurd__ = __webpack_require__("./src/app/gaurds/salesman.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng4_auto_complete__ = __webpack_require__("./node_modules/ng4-auto-complete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_search_service_service__ = __webpack_require__("./src/app/services/search-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__common_stripe_service__ = __webpack_require__("./src/app/common/stripe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_medicine_medicine_component__["a" /* MedicineComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_view_medicine_view_medicine_component__["a" /* ViewMedicineComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_pharmasist_dashboard_pharmasist_dashboard_component__["a" /* PharmasistDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_manager_manager_component__["a" /* ManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_update_manager_update_manager_component__["a" /* UpdateManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pharmasist_pharmasist_component__["a" /* PharmasistComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_salesman_salesman_component__["a" /* SalesmanComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_update_medicine_update_medicine_component__["a" /* UpdateMedicineComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_salesman_dashboard_salesman_dashboard_component__["a" /* SalesmanDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_manager_dashboard_manager_dashboard_component__["a" /* ManagerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_autocomplete_optgroup_example_autocomplete_optgroup_example_component__["a" /* AutocompleteOptgroupExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_31_ng4_auto_complete__["a" /* AutoCompleteModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_medicine_service__["a" /* MedicineService */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_13__services_pager_services_service__["a" /* PagerServicesService */],
                __WEBPACK_IMPORTED_MODULE_21__services_toaster_service_service__["a" /* ToasterServiceService */],
                __WEBPACK_IMPORTED_MODULE_23__gaurds_auth_gaurd__["a" /* AuthGaurd */],
                __WEBPACK_IMPORTED_MODULE_24__gaurds_manager_gaurd__["a" /* ManagerGaurd */],
                __WEBPACK_IMPORTED_MODULE_29__gaurds_pharmasist_guard__["a" /* PharmasistGuard */],
                __WEBPACK_IMPORTED_MODULE_30__gaurds_salesman_gaurd__["a" /* SalesmanGaurd */],
                __WEBPACK_IMPORTED_MODULE_32__services_search_service_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_33__services_validation_service__["a" /* ValidationService */],
                __WEBPACK_IMPORTED_MODULE_34__common_stripe_service__["a" /* StripeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/stripe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StripeService = /** @class */ (function () {
    function StripeService(http) {
        this.http = http;
    }
    StripeService.prototype.confirmPayment = function (stripeEmail, stripeToken, amount) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        var body = {
            stripeEmail: stripeEmail,
            stripeToken: stripeToken,
            stripeAmount: amount
        };
        console.log('In conform payment');
        return this.http.post("http://localhost:3000/stripe/charge", JSON.stringify(body), options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    StripeService.prototype.handleError = function (error) {
        if (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server Error');
        }
        else {
            console.log('Unknown err');
        }
    };
    StripeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], StripeService);
    return StripeService;
}());



/***/ }),

/***/ "./src/app/components/add-user/add-user.component.css":
/***/ (function(module, exports) {

module.exports = "table tr:nth-child(even) {\r\n  background-color: rgba(25, 207, 193, 0.7);\r\n  color: white;\r\n}\r\ntable tr:nth-child(odd) {\r\n  color: white;\r\n  background-color: rgba(145, 142, 176, 0.7);\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"bg\">\n  <div class=\"container\">\n\n    <h1 style=\"margin-top: 3%;text-align: center; font-family: 'Times New Roman'; color: azure\">Pharmacy Management System</h1>\n\n    <h3 style=\"text-align: center;font-family: Verdana; color: azure\">Add {{Category}}</h3>\n    <div class=\"row\" style=\"margin-top:20px\">\n      <div style=\"margin-left: 15%\" class=\"col-xs-8 col-sm-8 col-md-8 \">\n        <form role=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser(registerForm)\" novalidate autocomplete=\"off\">\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('firstName').invalid && registerForm.get('firstName').dirty}\">\n            <label style=\"color: white\" for=\"firstName\" class=\"col-sm-2 control-label\">First Name <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control input-sm\" [formControl]=\"firstName\" id=\"firstName\" placeholder=\"First Name\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('lastName').invalid && registerForm.get('lastName').dirty}\">\n            <label style=\"color: white\" for=\"lastName\" class=\"col-sm-2 control-label\">Last Name <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control input-sm\" [formControl]=\"lastName\" id=\"lastName\" placeholder=\"Last Name\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('staffId').invalid && registerForm.get('staffId').dirty}\">\n            <label style=\"color: white\" for=\"staffId\" class=\"col-sm-2 control-label\">Staff Id <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control input-sm\" [formControl]=\"staffId\" id=\"staffId\" placeholder=\"Staff Id\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('address').invalid && registerForm.get('address').dirty}\">\n            <label style=\"color: white\" for=\"address\" class=\"col-sm-2 control-label\">Address <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control input-sm\" [formControl]=\"address\" id=\"address\" placeholder=\"Address\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('phone').invalid && registerForm.get('phone').dirty}\">\n            <label style=\"color: white\" for=\"phone\" class=\"col-sm-2 control-label\">Phone <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control input-sm\" [formControl]=\"phone\" id=\"phone\" placeholder=\"Phone\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('email').invalid && registerForm.get('email').dirty}\">\n            <label style=\"color: white\" for=\"phone\" class=\"col-sm-2 control-label\">Email <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control input-sm\" [formControl]=\"email\" id=\"email\" placeholder=\"Email\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').invalid && registerForm.get('username').dirty}\">\n            <label style=\"color: white\" for=\"username\" class=\"col-sm-2 control-label\">Username <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control input-sm\" [formControl]=\"username\" id=\"username\" placeholder=\"Username\" required>\n            </div>\n          </div>\n\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('password').invalid && registerForm.get('password').dirty}\">\n            <label style=\"color: white\" for=\"password\" class=\"col-sm-2 control-label\">Password <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-key\"></i></div>\n              <input type=\"password\" class=\"form-control\" [formControl]=\"password\" id=\"password\" placeholder=\"Password\" required>\n            </div>\n          </div>\n\n          <!--<div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('category').invalid && registerForm.get('category').dirty}\">-->\n            <!--<label style=\"color: white\" for=\"category\" class=\"col-sm-2 control-label\">Category<sup>*</sup></label>-->\n            <!--<div class=\"input-group col-sm-10\">-->\n              <!--<div class=\"input-group-addon\"><i class=\"fas fa-key\"></i></div>-->\n              <!--&lt;!&ndash;<input type=\"password\" class=\"form-control\" [formControl]=\"category\" id=\"category\" placeholder=\"Category\" required>&ndash;&gt;-->\n\n              <!--<select type=\"text\" [formControl]=\"category\" id=\"category\" class=\"form-control\">-->\n\n                <!--<option *ngFor=\"let cat of Category\" >{{cat.category}}</option>-->\n\n              <!--</select>-->\n\n            <!--</div>-->\n          <!--</div>-->\n\n\n\n\n          <div class=\"text-center\">\n            <button style=\"margin-left: 3%\" type=\"submit\" class=\"btn btn-primary\">Register {{Category}}</button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n\n\n  </div>\n\n  <div style=\"height:20px\">\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(authService, router, formBuilder, route, location, validationService, toasterService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.location = location;
        this.validationService = validationService;
        this.toasterService = toasterService;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.firstName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.staffId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.address = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.category = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    AddUserComponent.prototype.ngOnInit = function () {
        // this.authService.getCategory().subscribe(response=>{
        //   this.Category = response.data;
        //
        //   console.log(this.Category);
        // })
        this.Category = this.route.snapshot.params.id;
        this.registerForm = this.formBuilder.group({
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            staffId: this.staffId,
            address: this.address,
            phone: this.phone,
            email: this.email,
            category: this.Category
        });
    };
    AddUserComponent.prototype.registerUser = function (formData) {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_user__["a" /* User */]();
        this.user.username = formData.value.username;
        this.user.password = formData.value.password;
        this.user.firstName = formData.value.firstName;
        this.user.lastName = formData.value.lastName;
        this.user.staffId = formData.value.staffId;
        this.user.address = formData.value.address;
        this.user.phone = formData.value.phone;
        this.user.email = formData.value.email;
        this.user.category = this.Category;
        if (!this.validationService.validateRegister(this.user)) {
            this.toasterService.Warning("Please fill all the fields.");
            return false;
        }
        if (!this.validationService.validateEmail(this.user.email)) {
            this.toasterService.Error("Please Enter Valid Email");
            return false;
        }
        this.authService.postUser(this.user).subscribe(function (res) {
            _this.toasterService.Success("Successfully added " + _this.Category);
            _this.location.back();
        });
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__("./src/app/components/add-user/add-user.component.html"),
            styles: [__webpack_require__("./src/app/components/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_6__services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toaster_service_service__["a" /* ToasterServiceService */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "table tr:nth-child(even) {\r\n  background-color: rgba(205, 195, 207, 0.7);\r\n  color: black;\r\n}\r\ntable tr:nth-child(odd) {\r\n  color: black;\r\n  background-color: rgba(176, 160, 173, 0.7);\r\n}\r\n.texto_grande {\r\n  font-size: 2rem;\r\n  color: white;\r\n}\r\n#icone_grande {\r\n  font-size: 4rem;\r\n  color:#fff;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg\">\n\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\" *ngIf=\"adminOrManager=='Admin'\"><a href=\"#\">Admin Home</a></li>\n        <li><a href=\"/manager\">Manager</a></li>\n        <li><a href=\"/pharmasist\">Pharmasist</a></li>\n        <li><a href=\"/salesman\">Salesman</a></li>\n        <!--<li><a href=\"#\">Sales Report</a></li>-->\n      </ul>\n\n      <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n        <div class=\"input-group\">\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n          <button (click)=\"logout()\" style=\"text-decoration: none\" class=\"btn btn-warning\">Log Out</button>\n\n        </div>\n      </form>\n\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-shopping-cart\" id=\"icone_grande\"></i><span> <b style=\"font-size: 48px; margin-left: 10px\"></b></span><br><br>\n        <span class=\"texto_grande\"> Total Sales</span></a>\n    </div>\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fa fa-user\" id=\"icone_grande\"></i> <span> <b style=\"font-size: 48px; margin-left: 10px\">{{numberOfManager}}</b></span><br><br>\n        <span class=\"texto_grande\"> Manager</span></a>\n    </div>\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users\" id=\"icone_grande\"></i><span> <b style=\"font-size: 48px; margin-left: 10px\">{{numberOfPharmasist}}</b></span> <br><br>\n        <span class=\"texto_grande\"> Pharmasist</span></a>\n    </div>\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users\" id=\"icone_grande\"></i> <span> <b style=\"font-size: 48px; margin-left: 10px\">{{numberOfSaleman}}</b></span><br><br>\n        <span class=\"texto_grande\"> Salesman</span></a>\n    </div>\n  </div>\n\n  <br><br>\n\n  <div class=\"container\" >\n    <div class=\"col-md-3 col-sm-3\" *ngIf=\"adminOrManager=='Admin'\">\n      <a (click)=\"managerAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users-cog\" id=\"icone_grande\"></i> <br><br>\n        <span  class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i>Manager</span></a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-3\">\n      <a (click)=\"pharmasistAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-user-md\" id=\"icone_grande\"></i> <br><br>\n        <span class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i>Pharmasist</span></a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-3\">\n      <a (click)=\"salesManAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-user-tie\" id=\"icone_grande\"></i> <br><br>\n        <span class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i>Salesman</span></a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-3\">\n      <a  class=\"btn btn-block btn-lg btn-danger\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-search\" id=\"icone_grande\"></i> <br><br>\n        <span class=\"texto_grande\"> Report</span></a>\n    </div>\n\n\n\n  </div>\n\n  <br><br>\n\n  <div  class=\"container\" style=\"background-color: ghostwhite\">\n\n    <nav class=\"navbar\" style=\"background-color: blue; margin-top: 1%\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'; color: white\">Out of Stock Medicines</span></a>\n        </div>\n\n      </div>\n    </nav>\n\n\n    <div class=\"table-responsice\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: azure;color: black\">\n          <th>#</th>\n          <th>Name</th>\n          <th>Generic</th>\n          <th>Type</th>\n          <th>Price</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let medicine of outOfStock; let i = index\">\n\n          <td>{{i+1}}</td>\n          <td>{{medicine.name}}</td>\n          <td>{{medicine.generic}}</td>\n          <td>{{medicine.type}}</td>\n          <td>{{medicine.price}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n  <br><br>\n\n\n<div class=\"container\" style=\"background-color: azure\">\n    <nav class=\"navbar\" style=\"background-color: blue;margin-top: 1%\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'; color: white\">Medicines</span></a>\n        </div>\n\n        <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\" (keyup)=\"searchTerm$.next($event.target.value)\">\n            <div class=\"input-group-btn\">\n              <button class=\"btn btn-default\" type=\"submit\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </nav>\n\n\n  <div *ngIf=\"results\" class=\"table-responsice\">\n    <table  class=\"table\">\n      <thead>\n      <tr style=\"background-color: azure;color: black\">\n        <th>#</th>\n        <th>Name</th>\n        <th>Generic</th>\n        <th>Type</th>\n        <th>Price</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let medicine of results; let i = index\">\n\n        <td>{{i+1}}</td>\n        <td>{{medicine.name}}</td>\n        <td>{{medicine.generic}}</td>\n        <td>{{medicine.type}}</td>\n        <td>{{medicine.price}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div *ngIf=\"!results\" class=\"table-responsice\">\n    <table  class=\"table\">\n      <thead>\n      <tr style=\"background-color: azure;color: black\">\n        <th>#</th>\n        <th>Name</th>\n        <th>Generic</th>\n        <th>Type</th>\n        <th>Price</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let medicine of pagedItems; let i = index\">\n\n        <td>{{i+1}}</td>\n        <td>{{medicine.name}}</td>\n        <td>{{medicine.generic}}</td>\n        <td>{{medicine.type}}</td>\n        <td>{{medicine.price}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- items being paged -->\n  <!--<div *ngFor=\"let item of pagedItems\">-->\n  <!--{{item.name}}-->\n  <!--</div>-->\n\n  <div class=\"text-center\">\n    <!-- pager -->\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(1)\">First</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n        <a (click)=\"setPage(page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.totalPages)\">Last</a>\n      </li>\n    </ul>\n  </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pager_services_service__ = __webpack_require__("./src/app/services/pager-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__ = __webpack_require__("./src/app/services/search-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(medicineService, pagerService, router, authService, toasterService, searchService) {
        var _this = this;
        this.medicineService = medicineService;
        this.pagerService = pagerService;
        this.router = router;
        this.authService = authService;
        this.toasterService = toasterService;
        this.searchService = searchService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        //Manager
        this.numberOfManager = 0;
        //Pharmasist
        this.numberOfPharmasist = 0;
        //Salesman
        this.numberOfSaleman = 0;
        this.outOfStock = [];
        // pager object
        this.pager = {};
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.data;
        });
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminOrManager = localStorage.getItem('category');
        console.log(this.adminOrManager);
        this.medicineService.getMedicine().subscribe(function (res) {
            // console.log(res.data);
            _this.allItems = res.data;
            ;
            for (var i = 0; i < _this.allItems.length; i++)
                if (_this.allItems[i].quantity <= 0)
                    _this.outOfStock.push(_this.allItems[i]);
            // initialize to page 1
            _this.setPage(1);
        });
        this.authService.getAllUser().subscribe(function (res) {
            //console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].category == 'Manager') {
                    _this.numberOfManager++;
                    // console.log(res.data[i].category);
                }
                // console.log(res.data[i].category);
                if (res.data[i].category == 'Pharmasist') {
                    _this.numberOfPharmasist++;
                    // console.log(res.data[i].category);
                }
                if (res.data[i].category == 'Salesman') {
                    // console.log(i + ' =>'+res.data[i].category);
                    _this.numberOfSaleman++;
                }
            }
            // console.log(this.numberOfManager);
            // console.log(this.numberOfSaleman);
            // console.log(this.numberOfPharmasist);
        });
    };
    AdminDashboardComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    AdminDashboardComponent.prototype.managerAdd = function () {
        var id = "Manager";
        this.router.navigate(["/addUser/" + id]);
    };
    AdminDashboardComponent.prototype.pharmasistAdd = function () {
        var id = "Pharmasist";
        this.router.navigate(["/addUser/" + id]);
    };
    AdminDashboardComponent.prototype.salesManAdd = function () {
        var id = "Salesman";
        this.router.navigate(["/addUser/" + id]);
    };
    AdminDashboardComponent.prototype.logout = function () {
        this.authService.logout();
        this.toasterService.Success("Successfully logout");
        this.router.navigate(['/login']);
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("./src/app/components/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_2__services_pager_services_service__["a" /* PagerServicesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__["a" /* ToasterServiceService */],
            __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__["a" /* SearchService */]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/autocomplete-optgroup-example/autocomplete-optgroup-example.component.css":
/***/ (function(module, exports) {

module.exports = "/*.example-form {*/\r\n  /*min-width: 150px;*/\r\n  /*max-width: 500px;*/\r\n  /*width: 100%;*/\r\n  /*}*/\r\n  /*.example-full-width {*/\r\n  /*width: 100%;*/\r\n  /*}*/\r\n"

/***/ }),

/***/ "./src/app/components/autocomplete-optgroup-example/autocomplete-optgroup-example.component.html":
/***/ (function(module, exports) {

module.exports = "<input (keyup)=\"searchTerm$.next($event.target.value)\">\n\n<ul *ngIf=\"results\">\n  <li *ngFor=\"let result of results | slice:0:9\">\n    <a href=\"{{ result.latest }}\" target=\"_blank\">\n      {{ result.name }}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/autocomplete-optgroup-example/autocomplete-optgroup-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteOptgroupExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service_service__ = __webpack_require__("./src/app/services/search-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteOptgroupExampleComponent = /** @class */ (function () {
    function AutocompleteOptgroupExampleComponent(searchService, medicineService) {
        var _this = this;
        this.searchService = searchService;
        this.medicineService = medicineService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.data;
        });
    }
    AutocompleteOptgroupExampleComponent.prototype.ngOnInit = function () {
        this.medicineService.getMedicine().subscribe(function (res) {
        });
    };
    AutocompleteOptgroupExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-autocomplete-optgroup-example',
            template: __webpack_require__("./src/app/components/autocomplete-optgroup-example/autocomplete-optgroup-example.component.html"),
            styles: [__webpack_require__("./src/app/components/autocomplete-optgroup-example/autocomplete-optgroup-example.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_search_service_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_2__services_medicine_service__["a" /* MedicineService */]])
    ], AutocompleteOptgroupExampleComponent);
    return AutocompleteOptgroupExampleComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pager_services_service__ = __webpack_require__("./src/app/services/pager-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_cart__ = __webpack_require__("./src/app/model/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__ = __webpack_require__("./src/app/services/search-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(medicineService, pagerService, router, searchService) {
        var _this = this;
        this.medicineService = medicineService;
        this.pagerService = pagerService;
        this.router = router;
        this.searchService = searchService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.medicines = new Array();
        this.medicine = new __WEBPACK_IMPORTED_MODULE_2__model_cart__["a" /* Cart */]();
        this.sum = 0;
        // pager object
        this.pager = {};
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.data;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineService.getMedicine().subscribe(function (res) {
            _this.allItems = res.data;
            ;
            // initialize to page 1
            _this.setPage(1);
        });
        if (localStorage.getItem('cart'))
            this.medicines = JSON.parse(localStorage.getItem('cart'));
        this.sum = 0;
        if (this.medicines)
            for (var i = 0; i < this.medicines.length; i++) {
                this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            }
    };
    HomeComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    HomeComponent.prototype.addToCart = function (medicine) {
        this.medicine = new __WEBPACK_IMPORTED_MODULE_2__model_cart__["a" /* Cart */]();
        var found = this.medicines.find(function (element) {
            return element.name == medicine.name;
        });
        //
        // console.log('Found');
        // console.log(found);
        if (found) {
            if (found.name == medicine.name) {
                for (var i = 0; i < this.medicines.length; i++)
                    if (this.medicines[i].name == medicine.name) {
                        this.medicines[i].quantity = this.medicines[i].quantity + 1;
                        this.allItems[i].quantity--;
                        console.log('Quantity: ' + this.allItems[i].quantity);
                        // this.sum += this.medicines[i].quantity* this.medicines[i].price;
                        // console.log(this.medicines[i].quantity)
                    }
            }
        }
        else {
            this.medicine._id = medicine._id;
            this.medicine.name = medicine.name;
            this.medicine.price = medicine.price;
            this.medicine.quantity = 1;
            for (var i = 0; i < this.allItems.length; i++) {
                if (this.medicine.name == this.allItems[i].name)
                    this.allItems[i].quantity--;
            }
            // this.sum += this.medicine.quantity* this.medicine.price;
            this.medicines.push(this.medicine);
        }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        // console.log(this.medicines);
        localStorage.setItem('cart', JSON.stringify(this.medicines));
    };
    HomeComponent.prototype.removeFromCart = function (cnt, medicine) {
        for (var i = 0; i < this.medicines.length; i++)
            if (this.medicines[i].name == medicine.name) {
                this.medicines[i].quantity--;
                if (this.medicines[i].quantity <= 0)
                    this.medicines.splice(i, 1);
                // console.log(this.medicines[i].quantity)
            }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        localStorage.setItem('cart', JSON.stringify(this.medicines));
    };
    HomeComponent.prototype.removeAllFromCart = function (medicine) {
        for (var i = 0; i < this.medicines.length; i++)
            if (this.medicines[i].name == medicine.name) {
                this.medicines.splice(i, 1);
                // console.log(this.medicines[i].quantity)
            }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        localStorage.setItem('cart', JSON.stringify(this.medicines));
    };
    HomeComponent.prototype.updateTheMedicine = function (medicine) {
        console.log(medicine._id);
        var navigationExtras = {
            queryParams: {
                "_id": medicine._id,
                "quantity": medicine.quantity
            }
        };
        for (var i = 0; i < this.medicines.length; i++)
            if (this.medicines[i].name == medicine.name) {
                this.medicines[i].quantity = 0;
                if (this.medicines[i].quantity <= 0)
                    this.medicines.splice(i, 1);
                // console.log(this.medicines[i].quantity)
            }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        localStorage.setItem('cart', JSON.stringify(this.medicines));
        this.router.navigate(['update-medicine'], navigationExtras);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_1__services_pager_services_service__["a" /* PagerServicesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__["a" /* SearchService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"bg\">\n  <div class=\"container\">\n\n    <h1 style=\"margin-top: 5%;text-align: center; font-family: 'Times New Roman'; color: azure\">Pharmacy Management System</h1>\n\n    <h3 style=\"text-align: center; margin-top: 5%;font-family: Verdana; color: azure\"> PMS LOGIN</h3>\n    <div class=\"row\" style=\"margin-top:20px\">\n      <div style=\"margin-left: 15%\" class=\"col-xs-8 col-sm-8 col-md-8 \">\n        <form role=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"getUser(loginForm)\" novalidate autocomplete=\"off\">\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': loginForm.get('username').invalid && loginForm.get('username').dirty}\">\n            <label style=\"color: white\" for=\"username\" class=\"col-sm-2 control-label\">Username <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-user-md\"></i></div>\n              <input type=\"text\" class=\"form-control\" [formControl]=\"username\" id=\"username\" placeholder=\"Username\" required>\n            </div>\n          </div>\n\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': loginForm.get('password').invalid && loginForm.get('password').dirty}\">\n            <label style=\"color: white\" for=\"password\" class=\"col-sm-2 control-label\">Password <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"fas fa-key\"></i></div>\n              <input type=\"password\" class=\"form-control\" [formControl]=\"password\" id=\"password\" placeholder=\"Password\" required>\n            </div>\n          </div>\n\n\n\n\n          <div class=\"text-center\">\n            <button style=\"margin-left: 3%\" type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n          </div>\n\n\n        </form>\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, formBuilder, toasterServie) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toasterServie = toasterServie;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: this.username,
            password: this.password
        });
    };
    LoginComponent.prototype.getUser = function (formData) {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */]();
        this.user.username = formData.value.username;
        this.user.password = formData.value.password;
        this.authService.getUser(this.user).subscribe(function (response) {
            console.log(response);
            if (!response.success) {
                _this.toasterServie.Warning(response.message);
            }
            else {
                _this.toasterServie.Success("Successfully logged in as " + response.data.category);
                _this.authService.storeUserData(response.token, response.data);
                localStorage.setItem('category', response.data.category);
                if (response.data.category == "Pharmasist") {
                    _this.router.navigate(['/pDashboard']);
                }
                else if (response.data.category == "Salesman")
                    _this.router.navigate(['/sDashboard']);
                else if (response.data.category == "Admin")
                    _this.router.navigate(['/aDashboard']);
                else if (response.data.category == "Manager")
                    _this.router.navigate(['/mDashboard']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__["a" /* ToasterServiceService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/manager-dashboard/manager-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "table tr:nth-child(even) {\r\n  background-color: rgba(205, 195, 207, 0.7);\r\n  color: black;\r\n}\r\ntable tr:nth-child(odd) {\r\n  color: black;\r\n  background-color: rgba(176, 160, 173, 0.7);\r\n}\r\n.texto_grande {\r\n  font-size: 2rem;\r\n  color: white;\r\n}\r\n#icone_grande {\r\n  font-size: 4rem;\r\n  color:#fff;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/manager-dashboard/manager-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg\">\n\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\" *ngIf=\"adminOrManager=='Admin'\"><a href=\"#\">Admin Home</a></li>\n        <li class=\"active\" *ngIf=\"adminOrManager=='Manager'\"><a href=\"/mDashboard\">Manger Dashboard</a></li>\n        <li><a href=\"/manager\">Manager</a></li>\n        <li><a href=\"/pharmasist\">Pharmasist</a></li>\n\n        <li><a href=\"/salesman\">Salesman</a></li>\n        <!--<li><a href=\"#\">Sales Report</a></li>-->\n      </ul>\n\n      <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n        <div class=\"input-group\">\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n          <!--<button style=\"text-decoration: none\">Log Out</button>-->\n\n          <button (click)=\"logout()\" style=\"text-decoration: none\" class=\"btn btn-warning\">Log Out</button>\n\n        </div>\n      </form>\n\n    </div>\n  </nav>\n\n  <div class=\"container\">\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-shopping-cart\" id=\"icone_grande\"></i><span> <b style=\"font-size: 48px; margin-left: 10px\"></b></span><br><br>\n        <span class=\"texto_grande\"> Total Sales</span></a>\n    </div>\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fa fa-user\" id=\"icone_grande\"></i> <span> <b style=\"font-size: 48px; margin-left: 10px\">{{numberOfManager}}</b></span><br><br>\n        <span class=\"texto_grande\"> Manager</span></a>\n    </div>\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users\" id=\"icone_grande\"></i><span> <b style=\"font-size: 48px; margin-left: 10px\">{{numberOfPharmasist}}</b></span> <br><br>\n        <span class=\"texto_grande\"> Pharmasist</span></a>\n    </div>\n    <div class=\"col-md-3 col-sm-3\">\n      <a class=\"btn btn-block btn-lg btn-primary\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users\" id=\"icone_grande\"></i> <span> <b style=\"font-size: 48px; margin-left: 10px\">{{numberOfSaleman}}</b></span><br><br>\n        <span class=\"texto_grande\"> Salesman</span></a>\n    </div>\n  </div>\n\n  <br><br>\n\n  <div class=\"container\" >\n    <div class=\"col-md-3 col-sm-3\" *ngIf=\"adminOrManager=='Admin'\">\n      <a (click)=\"managerAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users-cog\" id=\"icone_grande\"></i> <br><br>\n        <span  class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i>Manager</span></a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-3\">\n      <a (click)=\"pharmasistAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-user-md\" id=\"icone_grande\"></i> <br><br>\n        <span class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i>Pharmasist</span></a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-3\">\n      <a (click)=\"salesManAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-user-tie\" id=\"icone_grande\"></i> <br><br>\n        <span class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i>Salesman</span></a>\n    </div>\n\n    <div class=\"col-md-3 col-sm-3\">\n      <a  class=\"btn btn-block btn-lg btn-danger\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-search\" id=\"icone_grande\"></i> <br><br>\n        <span class=\"texto_grande\"> Report</span></a>\n    </div>\n\n\n\n  </div>\n\n  <br><br>\n\n  <div  class=\"container\" style=\"background-color: ghostwhite\">\n\n    <nav class=\"navbar\" style=\"background-color: blue; margin-top: 1%\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'; color: white\">Out of Stock Medicines</span></a>\n        </div>\n\n      </div>\n    </nav>\n\n\n    <div class=\"table-responsice\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: azure;color: black\">\n          <th>#</th>\n          <th>Name</th>\n          <th>Generic</th>\n          <th>Type</th>\n          <th>Price</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let medicine of outOfStock; let i = index\">\n\n          <td>{{i+1}}</td>\n          <td>{{medicine.name}}</td>\n          <td>{{medicine.generic}}</td>\n          <td>{{medicine.type}}</td>\n          <td>{{medicine.price}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n  <br><br>\n\n\n  <div class=\"container\" style=\"background-color: azure\">\n    <nav class=\"navbar\" style=\"background-color: blue;margin-top: 1%\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'; color: white\">Medicines</span></a>\n        </div>\n\n        <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n          <div class=\"input-group\">\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\" (keyup)=\"searchTerm$.next($event.target.value)\">\n\n            <div class=\"input-group-btn\">\n              <button class=\"btn btn-default\" type=\"submit\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </nav>\n\n\n    <div *ngIf=\"results\" class=\"table-responsice\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: azure;color: black\">\n          <th>#</th>\n          <th>Name</th>\n          <th>Generic</th>\n          <th>Type</th>\n          <th>Price</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let medicine of results; let i = index\">\n\n          <td>{{i+1}}</td>\n          <td>{{medicine.name}}</td>\n          <td>{{medicine.generic}}</td>\n          <td>{{medicine.type}}</td>\n          <td>{{medicine.price}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n\n    <div *ngIf=\"!results\" class=\"table-responsice\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: azure;color: black\">\n          <th>#</th>\n          <th>Name</th>\n          <th>Generic</th>\n          <th>Type</th>\n          <th>Price</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let medicine of pagedItems; let i = index\">\n\n          <td>{{i+1}}</td>\n          <td>{{medicine.name}}</td>\n          <td>{{medicine.generic}}</td>\n          <td>{{medicine.type}}</td>\n          <td>{{medicine.price}}</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <!-- items being paged -->\n    <!--<div *ngFor=\"let item of pagedItems\">-->\n    <!--{{item.name}}-->\n    <!--</div>-->\n\n    <div class=\"text-center\">\n      <!-- pager -->\n      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(1)\">First</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n        </li>\n        <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a (click)=\"setPage(page)\">{{page}}</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.totalPages)\">Last</a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/manager-dashboard/manager-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pager_services_service__ = __webpack_require__("./src/app/services/pager-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__ = __webpack_require__("./src/app/services/search-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManagerDashboardComponent = /** @class */ (function () {
    function ManagerDashboardComponent(medicineService, pagerService, router, authService, toasterService, searchService) {
        var _this = this;
        this.medicineService = medicineService;
        this.pagerService = pagerService;
        this.router = router;
        this.authService = authService;
        this.toasterService = toasterService;
        this.searchService = searchService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        //Manager
        this.numberOfManager = 0;
        //Pharmasist
        this.numberOfPharmasist = 0;
        //Salesman
        this.numberOfSaleman = 0;
        this.outOfStock = [];
        // pager object
        this.pager = {};
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.data;
        });
    }
    ManagerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminOrManager = localStorage.getItem('category');
        console.log(this.adminOrManager);
        this.medicineService.getMedicine().subscribe(function (res) {
            // console.log(res.data);
            _this.allItems = res.data;
            ;
            for (var i = 0; i < _this.allItems.length; i++)
                if (_this.allItems[i].quantity == 0)
                    _this.outOfStock.push(_this.allItems[i]);
            // initialize to page 1
            _this.setPage(1);
        });
        this.authService.getAllUser().subscribe(function (res) {
            //console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].category == 'Manager') {
                    _this.numberOfManager++;
                    // console.log(res.data[i].category);
                }
                // console.log(res.data[i].category);
                if (res.data[i].category == 'Pharmasist') {
                    _this.numberOfPharmasist++;
                    // console.log(res.data[i].category);
                }
                if (res.data[i].category == 'Salesman') {
                    // console.log(i + ' =>'+res.data[i].category);
                    _this.numberOfSaleman++;
                }
            }
            // console.log(this.numberOfManager);
            // console.log(this.numberOfSaleman);
            // console.log(this.numberOfPharmasist);
        });
    };
    ManagerDashboardComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ManagerDashboardComponent.prototype.pharmasistAdd = function () {
        var id = "Pharmasist";
        this.router.navigate(["/addUser/" + id]);
    };
    ManagerDashboardComponent.prototype.salesManAdd = function () {
        var id = "Salesman";
        this.router.navigate(["/addUser/" + id]);
    };
    ManagerDashboardComponent.prototype.logout = function () {
        this.authService.logout();
        this.toasterService.Success('Successfully logout!');
        this.router.navigate(['/login']);
    };
    ManagerDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager-dashboard',
            template: __webpack_require__("./src/app/components/manager-dashboard/manager-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/manager-dashboard/manager-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_2__services_pager_services_service__["a" /* PagerServicesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__["a" /* ToasterServiceService */],
            __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__["a" /* SearchService */]])
    ], ManagerDashboardComponent);
    return ManagerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/manager/manager.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/manager/manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"adminOrManager == 'Admin'\"><a href=\"/aDashboard\">Admin Home</a></li>\n        <li *ngIf=\"adminOrManager == 'Manager'\"><a href=\"/mDashboard\">Manger Dashboard</a></li>\n\n        <li class=\"active\"><a href=\"#\">Manager</a></li>\n        <li><a href=\"/pharmasist\">Pharmasist</a></li>\n        <li><a href=\"/salesman\">Salesman</a></li>\n        <!--<li><a href=\"#\">Sales Report</a></li>-->\n      </ul>\n\n      <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n        <div class=\"input-group\">\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n          <!--<button style=\"text-decoration: none\">Log Out</button>-->\n\n          <button (click)=\"logout()\" style=\"text-decoration: none\" class=\"btn btn-warning\">Log Out</button>\n\n        </div>\n      </form>\n\n    </div>\n  </nav>\n\n  <div  class=\"container\" >\n\n    <div  class=\"col-md-3 pull-right\">\n      <button [attr.disabled]=\"buttonDisabled? '' : null\" (click)=\"managerAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users-cog\" id=\"icone_grande\"></i> <br><br>\n        <span  class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i> Add Manager</span></button>\n    </div>\n\n    <h3 style=\"font-family: 'Times New Roman'; color: white\">List of Manager</h3>\n\n\n  </div>\n\n  <div class=\"container\">\n\n\n    <br>\n\n    <div class=\"table-responsice\" style=\"color: white\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: azure;color: black\">\n\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n          <th>Update</th>\n          <th>Delete</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let manger of manager; let i = index\">\n        <tr *ngIf=\"manger.firstName\">\n          <td>{{manger.firstName}}</td>\n          <td>{{manger.lastName}}</td>\n          <td>{{manger.username}}</td>\n          <td>\n            <a (click)=\"updateManager(manger._id)\" class=\"btn  btn-sm btn-warning\">\n              <i class=\"fas fa-wrench\" id=\"icone_grande\"></i></a>\n          </td>\n          <td>\n            <a (click)=\"salesManAdd()\" class=\"btn  btn-sm btn-danger\">\n              <i class=\"fas fa-trash\" id=\"icone_grande\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/manager/manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(authServiec, router, toasterService) {
        this.authServiec = authServiec;
        this.router = router;
        this.toasterService = toasterService;
        this.manager = [new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* User */]()];
        this.buttonDisabled = true;
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminOrManager = localStorage.getItem('category');
        if (this.adminOrManager == 'Admin')
            this.buttonDisabled = false;
        this.authServiec.getAllUser().subscribe(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].category === 'Manager' && res.data[i].firstName) {
                    _this.manager.push(res.data[i]);
                    console.log(_this.manager);
                }
            }
        });
    };
    ManagerComponent.prototype.adminHome = function () {
        this.router.navigate(['/aDashboard']);
    };
    ManagerComponent.prototype.managerAdd = function () {
        var id = "Manager";
        this.router.navigate(["/addUser/" + id]);
    };
    ManagerComponent.prototype.updateManager = function (id) {
        this.router.navigate(["/update-manager/" + id]);
    };
    ManagerComponent.prototype.logout = function () {
        this.authServiec.logout();
        this.toasterService.Success('Successfully logout!');
        this.router.navigate(['/login']);
    };
    ManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__("./src/app/components/manager/manager.component.html"),
            styles: [__webpack_require__("./src/app/components/manager/manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__["a" /* ToasterServiceService */]])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "./src/app/components/medicine/medicine.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/medicine/medicine.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"bg\">\n\n\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <!--<li><a href=\"/aDashboard\">Admin Home</a></li>-->\n        <li><a href=\"/pDashboard\">Pharmasist</a></li>\n        <li class=\"active\"><a href=\"/medicine\">Medicine</a></li>\n        <!--<li ><a href=\"/manager\">Manager</a></li>-->\n        <!--<li><a href=\"/salesman\">Salesman</a></li>-->\n        <!--<li><a href=\"#\">Sales Report</a></li>-->\n      </ul>\n\n      <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n        <div class=\"input-group\">\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n          <button style=\"text-decoration: none\">Log Out</button>\n\n        </div>\n      </form>\n\n    </div>\n  </nav>\n\n<div class=\"container\">\n\n\n  <div class=\"row\" style=\"margin-top:20px\">\n    <div style=\"margin-left: 15%\" class=\"col-xs-8 col-sm-8 col-md-8 \">\n      <form role=\"form\" [formGroup]=\"medicineForm\" (ngSubmit)=\"createMedicine(medicineForm)\" novalidate autocomplete=\"off\">\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': medicineForm.get('name').invalid && medicineForm.get('name').dirty}\">\n          <label style=\"color: white\" for=\"name\" class=\"col-sm-2 control-label\">Name <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"name\" id=\"name\" placeholder=\"Name\" required>\n          </div>\n        </div>\n\n          <div class=\"form-group\" [ngClass]=\"{'has-error': medicineForm.get('generic').invalid && medicineForm.get('generic').dirty}\">\n            <label style=\"color: white\" for=\"generic\" class=\"col-sm-2 control-label\">Generic <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n              <input type=\"text\" class=\"form-control\" [formControl]=\"generic\" id=\"generic\" placeholder=\"Generic\" required>\n            </div>\n          </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': medicineForm.get('type').invalid && medicineForm.get('type').dirty}\">\n          <label style=\"color: white\" for=\"type\" class=\"col-sm-2 control-label\">Type <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"type\" id=\"type\" placeholder=\"Type\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': medicineForm.get('company').invalid && medicineForm.get('company').dirty}\">\n          <label style=\"color: white\" for=\"company\" class=\"col-sm-2 control-label\">Company <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"company\" id=\"company\" placeholder=\"Company\" required>\n          </div>\n        </div>\n\n\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error': medicineForm.get('price').invalid && medicineForm.get('price').dirty}\">\n              <label style=\"color: white\" for=\"price\" class=\"col-sm-2 control-label\">Price <sup>*</sup></label>\n              <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"fas fa-dollar-sign\"></i></div>\n\n                <input type=\"text\" class=\"form-control\" [formControl]=\"price\" id=\"price\" placeholder=\"Price\" required>\n              </div>\n            </div>\n\n\n              <div class=\"form-group\" [ngClass]=\"{'has-error': medicineForm.get('quantity').invalid && medicineForm.get('quantity').dirty}\">\n                <label style=\"color: white\" for=\"quantity\" class=\"col-sm-2 control-label\">Quantity <sup>*</sup></label>\n                <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"fab fa-quora\"></i></div>\n                  <input type=\"text\" class=\"form-control\" [formControl]=\"quantity\" id=\"quantity\" placeholder=\"Quantity\" required>\n                </div>\n\n          </div>\n\n\n          <div class=\"text-center\">\n            <button style=\"margin-left: 3%\" type=\"submit\" class=\"btn btn-primary\">Add Medicine</button>\n          </div>\n\n      </form>\n    </div>\n  </div>\n\n\n\n</div>\n\n  <div style=\"height:240px\">\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/medicine/medicine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_medicine__ = __webpack_require__("./src/app/model/medicine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validation_service__ = __webpack_require__("./src/app/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MedicineComponent = /** @class */ (function () {
    function MedicineComponent(formBuilder, medicineService, router, validationService, toasterService, location) {
        this.formBuilder = formBuilder;
        this.medicineService = medicineService;
        this.router = router;
        this.validationService = validationService;
        this.toasterService = toasterService;
        this.location = location;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.generic = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.type = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.company = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.price = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.quantity = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.formTitle = 'Medicine is Here';
    }
    MedicineComponent.prototype.ngOnInit = function () {
        this.medicineForm = this.formBuilder.group({
            name: this.name,
            generic: this.generic,
            type: this.type,
            company: this.company,
            price: this.price,
            quantity: this.quantity
        });
    };
    MedicineComponent.prototype.createMedicine = function (formData) {
        var _this = this;
        this.medicine = new __WEBPACK_IMPORTED_MODULE_2__model_medicine__["a" /* Medicine */]();
        this.medicine.name = formData.value.name;
        this.medicine.generic = formData.value.generic;
        this.medicine.type = formData.value.type;
        this.medicine.company = formData.value.company;
        this.medicine.price = formData.value.price;
        this.medicine.quantity = formData.value.quantity;
        console.log(this.medicine);
        if (!this.validationService.validateMedicine(this.medicine)) {
            this.toasterService.Warning("Please fill all the fields!");
            return false;
        }
        this.medicineService.createMedicine(this.medicine)
            .subscribe(function (resopnse) {
            _this.toasterService.Success("successfully Added Medicine!");
            _this.location.back();
        });
    };
    MedicineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medicine',
            template: __webpack_require__("./src/app/components/medicine/medicine.component.html"),
            styles: [__webpack_require__("./src/app/components/medicine/medicine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_validation_service__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__["a" /* ToasterServiceService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */]])
    ], MedicineComponent);
    return MedicineComponent;
}());



/***/ }),

/***/ "./src/app/components/pharmasist-dashboard/pharmasist-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "table tr:nth-child(even) {\r\n  background-color: rgba(25, 207, 193, 0.7);\r\n  color: white;\r\n}\r\n\r\ntable tr:nth-child(odd) {\r\n  color: white;\r\n  background-color: rgba(145, 142, 176, 0.7);\r\n}"

/***/ }),

/***/ "./src/app/components/pharmasist-dashboard/pharmasist-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Home</a></li>\n        <li><a href=\"/medicine\">Medicine</a></li>\n\n      </ul>\n      <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">\n          <div  class=\"input-group-btn\">\n            <button style=\"margin-right: 10px\" class=\"btn btn-default\" type=\"submit\">\n              <i class=\"glyphicon glyphicon-search\"></i>\n            </button>\n            <button  (click)=\"logout()\" style=\"text-decoration: none\" class=\"btn btn-warning\">Log Out</button>\n\n          </div>\n\n\n\n        </div>\n      </form>\n    </div>\n  </nav>\n\n  <div  class=\"container\">\n\n    <div class=\"col-md-3 pull-right\">\n      <a (click)=\"medicineAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users-cog\" id=\"icone_grande\"></i> <br><br>\n        <span  class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i> Add Medicine</span></a>\n    </div>\n\n\n  </div>\n\n\n  <div  class=\"container\">\n\n\n    <br>\n\n    <!--<h1>Angular 2 - Pagination Example with logic like Google</h1>-->\n\n    <div class=\"table-responsice\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: blue; color: white\">\n          <th>#</th>\n          <th>Name</th>\n          <th>Generic</th>\n          <th>Type</th>\n          <th>Quantity</th>\n          <th>Edit</th>\n          <th>Delete</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let medicine of pagedItems; let i = index\">\n\n          <td>{{i+1}}</td>\n          <td>{{medicine.name}}</td>\n          <td>{{medicine.generic}}</td>\n          <td>{{medicine.type}}</td>\n          <td>{{medicine.quantity}}</td>\n          <td>\n            <a (click)=\"updateMedicine(medicine._id)\" class=\"btn  btn-sm btn-warning\">\n              <i class=\"fas fa-wrench\" id=\"icone_grande\"></i></a>\n          </td>\n          <td>\n            <a (click)=\"salesManAdd()\" class=\"btn  btn-sm btn-danger\">\n              <i class=\"fas fa-trash\" id=\"icone_grande\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <!-- items being paged -->\n    <!--<div *ngFor=\"let item of pagedItems\">-->\n    <!--{{item.name}}-->\n    <!--</div>-->\n\n    <div class=\"text-center\">\n      <!-- pager -->\n      <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(1)\">First</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n        </li>\n        <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a (click)=\"setPage(page)\">{{page}}</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n        </li>\n        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.totalPages)\">Last</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/pharmasist-dashboard/pharmasist-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmasistDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_services_service__ = __webpack_require__("./src/app/services/pager-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PharmasistDashboardComponent = /** @class */ (function () {
    function PharmasistDashboardComponent(http, pagerService, medicineService, router, authService, toasterService) {
        this.http = http;
        this.pagerService = pagerService;
        this.medicineService = medicineService;
        this.router = router;
        this.authService = authService;
        this.toasterService = toasterService;
        // pager object
        this.pager = {};
    }
    PharmasistDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineService.getMedicine().subscribe(function (res) {
            // console.log(res.data);
            _this.allItems = res.data;
            ;
            // initialize to page 1
            _this.setPage(1);
        });
    };
    PharmasistDashboardComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PharmasistDashboardComponent.prototype.updateMedicine = function (id) {
        this.router.navigate(["update-medicine/" + id]);
    };
    PharmasistDashboardComponent.prototype.medicineAdd = function () {
        this.router.navigate(['/medicine']);
    };
    PharmasistDashboardComponent.prototype.logout = function () {
        this.authService.logout();
        this.toasterService.Success('Successfully logout!');
        this.router.navigate(['/login']);
    };
    PharmasistDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pharmasist-dashboard',
            template: __webpack_require__("./src/app/components/pharmasist-dashboard/pharmasist-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/pharmasist-dashboard/pharmasist-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_3__services_pager_services_service__["a" /* PagerServicesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toaster_service_service__["a" /* ToasterServiceService */]])
    ], PharmasistDashboardComponent);
    return PharmasistDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/pharmasist/pharmasist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pharmasist/pharmasist.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"adminOrManager=='Admin'\"><a href=\"/aDashboard\">Admin Home</a></li>\n        <li *ngIf=\"adminOrManager=='Manager'\"><a href=\"/mDashboard\">Manger Dashboard</a></li>\n        <li *ngIf=\"adminOrManager=='Admin' || adminOrManager=='Manager'\"><a href=\"/manager\">Manager</a></li>\n        <li class=\"active\"><a href=\"/pharmasist\">Pharmasist</a></li>\n        <li><a href=\"/salesman\">Salesman</a></li>\n        <!--<li><a href=\"#\">Sales Report</a></li>-->\n      </ul>\n\n      <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n        <div class=\"input-group\">\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n          <!--<button style=\"text-decoration: none\">Log Out</button>-->\n\n          <button (click)=\"logout()\" style=\"text-decoration: none\" class=\"btn btn-warning\">Log Out</button>\n\n        </div>\n      </form>\n\n    </div>\n  </nav>\n\n  <div  class=\"container\">\n\n    <div *ngIf=\"adminOrManager=='Admin' || adminOrManager=='Manager'\" class=\"col-md-3 pull-right\">\n      <a (click)=\"managerAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users-cog\" id=\"icone_grande\"></i> <br><br>\n        <span  class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i> Add {{category}} </span></a>\n    </div>\n\n    <h3 style=\"font-family: 'Times New Roman'; color: white\">List of {{category}}</h3>\n    <br>\n\n  </div>\n\n  <div class=\"container\">\n\n    <br>\n\n    <div class=\"table-responsice\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: azure;color: black\">\n\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n          <th>Update</th>\n          <th>Delete</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let manger of manager; let i = index\">\n        <tr *ngIf=\"manger.firstName\" style=\"color: white\">\n          <td>{{manger.firstName}}</td>\n          <td>{{manger.lastName}}</td>\n          <td>{{manger.username}}</td>\n          <td>\n            <a (click)=\"updateManager(manger._id)\" class=\"btn  btn-sm btn-warning\">\n              <i class=\"fas fa-wrench\" id=\"icone_grande\"></i></a>\n          </td>\n          <td>\n            <a (click)=\"salesManAdd()\" class=\"btn  btn-sm btn-danger\">\n              <i class=\"fas fa-trash\" id=\"icone_grande\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/pharmasist/pharmasist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmasistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PharmasistComponent = /** @class */ (function () {
    function PharmasistComponent(authServiec, router, toasterService) {
        this.authServiec = authServiec;
        this.router = router;
        this.toasterService = toasterService;
        this.manager = [new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* User */]()];
    }
    PharmasistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminOrManager = localStorage.getItem('category');
        this.authServiec.getAllUser().subscribe(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].category === 'Pharmasist' && res.data[i].firstName) {
                    _this.manager.push(res.data[i]);
                    _this.category = res.data[i].category;
                    console.log(_this.manager);
                }
            }
        });
    };
    PharmasistComponent.prototype.adminHome = function () {
        this.router.navigate(['/aDashboard']);
    };
    PharmasistComponent.prototype.managerAdd = function () {
        var id = this.manager[1].category;
        this.router.navigate(["/addUser/" + id]);
    };
    PharmasistComponent.prototype.updateManager = function (id) {
        this.router.navigate(["/update-manager/" + id]);
    };
    PharmasistComponent.prototype.logout = function () {
        this.authServiec.logout();
        this.toasterService.Success('Successfully logout!');
        this.router.navigate(['/login']);
    };
    PharmasistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pharmasist',
            template: __webpack_require__("./src/app/components/pharmasist/pharmasist.component.html"),
            styles: [__webpack_require__("./src/app/components/pharmasist/pharmasist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__["a" /* ToasterServiceService */]])
    ], PharmasistComponent);
    return PharmasistComponent;
}());



/***/ }),

/***/ "./src/app/components/salesman-dashboard/salesman-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/salesman-dashboard/salesman-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <!--<li ><a href=\"#\">Home</a></li>-->\n      <li class=\"active\"><a href=\"/sDashboard\">Salesman</a></li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\" style=\"background-color: white\" >\n\n  <h3 style=\"text-align: center\">Item Buy List</h3>\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n\n      <thead>\n      <tr style=\"background-color: blue; color: white\" >\n        <th>#</th>\n        <th>Name</th>\n        <th>Quantity</th>\n        <th>Price</th>\n        <th>Add/Remove/Remove All</th>\n      </tr>\n      </thead>\n\n      <tbody *ngFor=\"let medicine of medicines; let i = index\">\n\n      <tr *ngIf=\"medicine.name\">\n\n        <td>{{i+1}}</td>\n        <td>{{medicine.name}}</td>\n        <td>{{medicine.quantity}}</td>\n        <td>{{medicine.price*medicine.quantity}}</td>\n        <!--<td><i style=\"font-size: 16px\" class=\"fas fa-plus-square\"></i></td>-->\n        <td>\n          <a (click)=\"addToCart(medicine)\" class=\"btn  btn-sm btn-success\">\n            <i style=\"font-size: 18px\" class=\"fas fa-plus-circle\"></i></a>\n\n          <a (click)=\"removeFromCart(1 , medicine)\" class=\"btn  btn-sm btn-warning\">\n            <i style=\"font-size: 18px\" class=\"fas fa-minus-circle\"></i></a>\n\n\n          <a (click)=\"removeAllFromCart(medicine)\" class=\"btn  btn-sm btn-danger\">\n            <i style=\"font-size: 18px\" class=\"fas fa-times-circle\"></i></a>\n          <button (click)=\"updateTheMedicine(medicine)\"  type=\"button\" class=\"btn btn-info\">Update</button>\n        </td>\n\n\n\n      </tr>\n      </tbody>\n      <tr>\n        <td><b style=\"font-size: 14px\">Total</b></td>\n        <td></td>\n        <td></td>\n        <td><b style=\"font-size: 14px\">${{sum}}</b></td>\n      </tr>\n    </table>\n\n    <label for=\"name\" class=\"pull-left\">Customer Name:</label>\n    <input type=\"text\" [(ngModel)]=\"customerName\" placeholder=\"Customer Name\" id=\"name\" class=\"pull-left\">\n    <input type=\"text\" [(ngModel)]=\"customerNumber\" placeholder=\"Mobile Number\" class=\"pull-right\">\n    <label class=\"pull-right\">Mobile Number:</label>\n\n\n  </div>\n  <br>\n  <div style=\"margin-left: 10%\"><button type=\"button\" style=\"text-align: center\" class=\"btn btn-primary\" (click)=\"print()\">Print</button></div>\n\n  <br>\n</div>\n\n<br>\n\n<div class=\"container\" style=\"background-color: white\" id=\"print-section\">\n<br>\n  <div class=\"table-responsive\" style=\"text-align: left\">\n    <table class=\"table\">\n\n      <thead>\n      <tr style=\"background-color: blue; color: white\" >\n        <th>#</th>\n        <th>Name</th>\n        <th>Quantity</th>\n        <th>Price</th>\n      </tr>\n      </thead>\n\n      <tbody *ngFor=\"let medicine of medicines; let i = index\">\n\n      <tr *ngIf=\"medicine.name\">\n\n        <td>{{i+1}}</td>\n        <td>{{medicine.name}}</td>\n        <td>{{medicine.quantity}}</td>\n        <td>{{medicine.price*medicine.quantity}}</td>\n        <!--<td><i style=\"font-size: 16px\" class=\"fas fa-plus-square\"></i></td>-->\n\n      </tr>\n      </tbody>\n      <tr>\n        <td><b style=\"font-size: 14px\">Total</b></td>\n        <td></td>\n        <td></td>\n        <td><b style=\"font-size: 14px\">${{sum}}</b></td>\n      </tr>\n    </table>\n\n    <label>Customer Name: <span style=\"font-family: 'Times New Roman'\">{{customerName}}</span></label>\n    <br>\n    <label>Mobile Number: <span style=\"font-family: 'Times New Roman'\">{{customerNumber}}</span></label>\n\n    <!--<button type=\"button\" (click)=\"print()\">Print</button>-->\n\n  </div>\n\n</div>\n\n<br><br>\n\n<div class=\"container\" style=\"background-color: white\">\n\n  <br>\n\n  <div class=\"table-responsice\">\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">Medicines</span></a>\n        </div>\n\n\n        <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n          <div class=\"input-group\">\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\" (keyup)=\"searchTerm$.next($event.target.value)\">\n\n            <div class=\"input-group-btn\">\n              <button class=\"btn btn-default\" type=\"submit\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </nav>\n\n    <!--<ul *ngIf=\"results\">-->\n      <!--<li *ngFor=\"let result of results | slice:0:9\">-->\n        <!--<a href=\"{{ result.latest }}\" target=\"_blank\">-->\n          <!--{{ result.name }}-->\n        <!--</a>-->\n      <!--</li>-->\n    <!--</ul>-->\n\n\n    <table *ngIf=\"results\"  class=\"table\">\n      <thead>\n      <tr style=\"background-color: blue; color: white\">\n        <th>#</th>\n        <th>Name</th>\n        <th>Generic</th>\n        <th>Type</th>\n        <th>Price</th>\n        <th>Quantity</th>\n        <th>Add To Cart</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let medicine of results | slice:0:9; let i = index\">\n\n        <td>{{i+1}}</td>\n        <td>{{medicine.name}}</td>\n        <td>{{medicine.generic}}</td>\n        <td>{{medicine.type}}</td>\n        <td>{{medicine.price}}</td>\n        <td>{{medicine.quantity}}</td>\n        <td>\n          <a (click)=\"addToCart(medicine)\" class=\"btn  btn-sm btn-info\">\n            <i style=\"font-size: 18px\" class=\"fa fa-plus-circle\"></i></a>\n        </td>\n\n      </tr>\n      </tbody>\n    </table>\n\n    <table *ngIf=\"!results\" class=\"table\">\n      <thead>\n      <tr style=\"background-color: blue; color: white\">\n        <th>#</th>\n        <th>Name</th>\n        <th>Generic</th>\n        <th>Type</th>\n        <th>Price</th>\n        <th>Quantity</th>\n        <th>Add To Cart</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let medicine of pagedItems; let i = index\">\n\n        <td>{{i+1}}</td>\n        <td>{{medicine.name}}</td>\n        <td>{{medicine.generic}}</td>\n        <td>{{medicine.type}}</td>\n        <td>{{medicine.price}}</td>\n        <td>{{medicine.quantity}}</td>\n        <td *ngIf=\"medicine.quantity\">\n          <a (click)=\"addToCart(medicine)\" class=\"btn  btn-sm btn-info\">\n            <i style=\"font-size: 18px\" class=\"fa fa-plus-circle\"></i></a>\n        </td>\n\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- items being paged -->\n  <!--<div *ngFor=\"let item of pagedItems\">-->\n  <!--{{item.name}}-->\n  <!--</div>-->\n\n  <div class=\"text-center\">\n    <!-- pager -->\n    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(1)\">First</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n        <a (click)=\"setPage(page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.totalPages)\">Last</a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/salesman-dashboard/salesman-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesmanDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pager_services_service__ = __webpack_require__("./src/app/services/pager-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_cart__ = __webpack_require__("./src/app/model/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__ = __webpack_require__("./src/app/services/search-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SalesmanDashboardComponent = /** @class */ (function () {
    function SalesmanDashboardComponent(medicineService, pagerService, router, searchService) {
        var _this = this;
        this.medicineService = medicineService;
        this.pagerService = pagerService;
        this.router = router;
        this.searchService = searchService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        //medicines = [new Cart()];
        this.medicines = new Array();
        this.medicine = new __WEBPACK_IMPORTED_MODULE_2__model_cart__["a" /* Cart */]();
        this.sum = 0;
        // pager object
        this.pager = {};
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.data;
        });
    }
    SalesmanDashboardComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title style=\"font-size: 16px\">Invoice List</title>\n          <style>\n          //........Customized style.......\n          tr{\n          margin-left: 20px;\n          }\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    SalesmanDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineService.getMedicine().subscribe(function (res) {
            _this.allItems = res.data;
            ;
            // initialize to page 1
            _this.setPage(1);
        });
        if (localStorage.getItem('cart'))
            this.medicines = JSON.parse(localStorage.getItem('cart'));
        this.sum = 0;
        if (this.medicines)
            for (var i = 0; i < this.medicines.length; i++) {
                this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            }
    };
    SalesmanDashboardComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    SalesmanDashboardComponent.prototype.addToCart = function (medicine) {
        this.medicine = new __WEBPACK_IMPORTED_MODULE_2__model_cart__["a" /* Cart */]();
        var found = this.medicines.find(function (element) {
            return element.name == medicine.name;
        });
        //
        // console.log('Found');
        // console.log(found);
        if (found) {
            if (found.name == medicine.name) {
                for (var i = 0; i < this.medicines.length; i++)
                    if (this.medicines[i].name == medicine.name) {
                        this.medicines[i].quantity = this.medicines[i].quantity + 1;
                        this.allItems[i].quantity--;
                        console.log('Quantity: ' + this.allItems[i].quantity);
                        // this.sum += this.medicines[i].quantity* this.medicines[i].price;
                        // console.log(this.medicines[i].quantity)
                    }
            }
        }
        else {
            this.medicine._id = medicine._id;
            this.medicine.name = medicine.name;
            this.medicine.price = medicine.price;
            this.medicine.quantity = 1;
            for (var i = 0; i < this.allItems.length; i++) {
                if (this.medicine.name == this.allItems[i].name)
                    this.allItems[i].quantity--;
            }
            // this.sum += this.medicine.quantity* this.medicine.price;
            this.medicines.push(this.medicine);
        }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        // console.log(this.medicines);
        localStorage.setItem('cart', JSON.stringify(this.medicines));
    };
    SalesmanDashboardComponent.prototype.removeFromCart = function (cnt, medicine) {
        for (var i = 0; i < this.medicines.length; i++)
            if (this.medicines[i].name == medicine.name) {
                this.medicines[i].quantity--;
                if (this.medicines[i].quantity <= 0)
                    this.medicines.splice(i, 1);
                // console.log(this.medicines[i].quantity)
            }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        localStorage.setItem('cart', JSON.stringify(this.medicines));
    };
    SalesmanDashboardComponent.prototype.removeAllFromCart = function (medicine) {
        for (var i = 0; i < this.medicines.length; i++)
            if (this.medicines[i].name == medicine.name) {
                this.medicines.splice(i, 1);
                // console.log(this.medicines[i].quantity)
            }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        localStorage.setItem('cart', JSON.stringify(this.medicines));
    };
    SalesmanDashboardComponent.prototype.updateTheMedicine = function (medicine) {
        console.log(medicine._id);
        var navigationExtras = {
            queryParams: {
                "_id": medicine._id,
                "quantity": medicine.quantity
            }
        };
        for (var i = 0; i < this.medicines.length; i++)
            if (this.medicines[i].name == medicine.name) {
                this.medicines[i].quantity = 0;
                if (this.medicines[i].quantity <= 0)
                    this.medicines.splice(i, 1);
                // console.log(this.medicines[i].quantity)
            }
        this.sum = 0;
        for (var i = 0; i < this.medicines.length; i++) {
            this.sum = this.sum + this.medicines[i].price * this.medicines[i].quantity; //here price and quantity of type number
            console.log(typeof this.sum); //but this print NaN
        }
        localStorage.setItem('cart', JSON.stringify(this.medicines));
        this.router.navigate(['update-medicine'], navigationExtras);
    };
    SalesmanDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-salesman-dashboard',
            template: __webpack_require__("./src/app/components/salesman-dashboard/salesman-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/salesman-dashboard/salesman-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_1__services_pager_services_service__["a" /* PagerServicesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_search_service_service__["a" /* SearchService */]])
    ], SalesmanDashboardComponent);
    return SalesmanDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/salesman/salesman.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/salesman/salesman.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><span style=\"font-family: 'Times New Roman'\">PMS</span></a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n        <li *ngIf=\"adminOrManager=='Admin'\"><a href=\"/aDashboard\">Admin Home</a></li>\n        <li *ngIf=\"adminOrManager=='Manager'\"><a href=\"/mDashboard\">Manager Dashboard</a></li>\n        <li *ngIf=\"adminOrManager=='Admin' || adminOrManager=='Manager'\"><a href=\"/manager\">Manager</a></li>\n        <li><a href=\"/pharmasist\">Pharmasist</a></li>\n        <li class=\"active\"><a href=\"#\">Salesman</a></li>\n        <!--<li><a href=\"#\">Sales Report</a></li>-->\n      </ul>\n\n      <form  class=\"navbar-form navbar-right\" action=\"/action_page.php\">\n        <div class=\"input-group\">\n          <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">-->\n          <!--<button style=\"text-decoration: none\">Log Out</button>-->\n\n          <button (click)=\"logout()\" style=\"text-decoration: none\" class=\"btn btn-warning\">Log Out</button>\n\n        </div>\n      </form>\n\n    </div>\n  </nav>\n\n  <div  class=\"container\" >\n\n\n    <div class=\"col-md-3 pull-right\">\n      <a (click)=\"managerAdd()\" class=\"btn btn-block btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#mymodal\">\n        <i class=\"fas fa-users-cog\" id=\"icone_grande\"></i> <br><br>\n        <span  class=\"texto_grande\"><i class=\"fa fa-plus-circle\"></i> Add Salesman</span></a>\n    </div>\n\n    <h3 style=\"font-family: 'Times New Roman'; color: white\">List of Salesman</h3>\n    <br>\n\n  </div>\n\n  <div class=\"container\">\n\n    <br>\n\n    <div class=\"table-responsice\" style=\"color: white\">\n      <table  class=\"table\">\n        <thead>\n        <tr style=\"background-color: azure;color: black\">\n\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n          <th>Update</th>\n          <th>Delete</th>\n        </tr>\n        </thead>\n        <tbody *ngFor=\"let manger of manager; let i = index\">\n        <tr *ngIf=\"manger.firstName\">\n          <td>{{manger.firstName}}</td>\n          <td>{{manger.lastName}}</td>\n          <td>{{manger.username}}</td>\n          <td>\n            <a (click)=\"updateManager(manger._id)\" class=\"btn  btn-sm btn-warning\">\n              <i class=\"fas fa-wrench\" id=\"icone_grande\"></i></a>\n          </td>\n          <td>\n            <a (click)=\"salesManAdd()\" class=\"btn  btn-sm btn-danger\">\n              <i class=\"fas fa-trash\" id=\"icone_grande\"></i></a>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/salesman/salesman.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesmanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalesmanComponent = /** @class */ (function () {
    function SalesmanComponent(authServiec, router, toasterService) {
        this.authServiec = authServiec;
        this.router = router;
        this.toasterService = toasterService;
        this.manager = [new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* User */]()];
    }
    SalesmanComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('category'))
            this.adminOrManager = localStorage.getItem('category');
        this.authServiec.getAllUser().subscribe(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].category === 'Salesman' && res.data[i].firstName) {
                    _this.manager.push(res.data[i]);
                    console.log(_this.manager);
                }
            }
        });
    };
    SalesmanComponent.prototype.adminHome = function () {
        this.router.navigate(['/aDashboard']);
    };
    SalesmanComponent.prototype.managerAdd = function () {
        var id = this.manager[1].category;
        this.router.navigate(["/addUser/" + id]);
    };
    SalesmanComponent.prototype.updateManager = function (id) {
        this.router.navigate(["/update-manager/" + id]);
    };
    SalesmanComponent.prototype.logout = function () {
        this.authServiec.logout();
        this.toasterService.Success('Successfully logout!');
        this.router.navigate(['/login']);
    };
    SalesmanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-salesman',
            template: __webpack_require__("./src/app/components/salesman/salesman.component.html"),
            styles: [__webpack_require__("./src/app/components/salesman/salesman.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__["a" /* ToasterServiceService */]])
    ], SalesmanComponent);
    return SalesmanComponent;
}());



/***/ }),

/***/ "./src/app/components/update-manager/update-manager.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-manager/update-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"bg\">\n  <div *ngIf=\"user\" class=\"container\">\n\n    <h1 style=\"margin-top: 1%;text-align: center; font-family: 'Times New Roman'; color: blue\">Update {{user.category}}</h1>\n\n    <div class=\"row\" style=\"margin-top:20px\">\n      <div style=\"margin-left: 15%\" class=\"col-xs-8 col-sm-8 col-md-8 \">\n        <form *ngIf=\"user\" (submit)=\"onUpdate(user)\" role=\"form\">\n\n          <div class=\"form-group\">\n            <label>First Name</label>\n            <input type=\"text\" [(ngModel)]=\"user.firstName\" name=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Last Name</label>\n            <input type=\"email\" [(ngModel)]=\"user.lastName\" name=\"last_name\"  class=\"form-control input-sm\" placeholder=\"Email Address\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Staff Id</label>\n            <input type=\"email\" [(ngModel)]=\"user.staffId\" name=\"last_name\"  class=\"form-control input-sm\" placeholder=\"Email Address\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Address</label>\n            <input type=\"email\" [(ngModel)]=\"user.address\" name=\"last_name\"  class=\"form-control input-sm\" placeholder=\"Email Address\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Phone</label>\n            <input type=\"email\" [(ngModel)]=\"user.phone\" name=\"last_name\"  class=\"form-control input-sm\" placeholder=\"Email Address\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"email\" [(ngModel)]=\"user.email\" name=\"last_name\"  class=\"form-control input-sm\" placeholder=\"Email Address\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>User Name</label>\n            <input type=\"email\" [(ngModel)]=\"user.username\" name=\"last_name\"  class=\"form-control input-sm\" placeholder=\"Email Address\">\n          </div>\n\n\n          <input type=\"submit\" value=\"Update\" class=\"btn btn-info btn-block\">\n\n        </form>\n      </div>\n    </div>\n\n\n\n  </div>\n\n  <div style=\"height:20px\">\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/update-manager/update-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__("./src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateManagerComponent = /** @class */ (function () {
    function UpdateManagerComponent(authService, router, formBuilder, route, location, toasterService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.location = location;
        this.toasterService = toasterService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */]();
    }
    UpdateManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.authService.getSingleUser(id).subscribe(function (res) {
            _this.user = res.data;
            console.log(_this.user.firstName);
        });
    };
    UpdateManagerComponent.prototype.onUpdate = function (user) {
        var _this = this;
        this.authService.updateUser(user).subscribe(function (res) {
            _this.toasterService.Success("Successfully updated!");
            _this.location.back();
            console.log(res);
        });
    };
    UpdateManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-manager',
            template: __webpack_require__("./src/app/components/update-manager/update-manager.component.html"),
            styles: [__webpack_require__("./src/app/components/update-manager/update-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_5__services_toaster_service_service__["a" /* ToasterServiceService */]])
    ], UpdateManagerComponent);
    return UpdateManagerComponent;
}());



/***/ }),

/***/ "./src/app/components/update-medicine/update-medicine.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/update-medicine/update-medicine.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"bg\">\n  <div *ngIf=\"medicine\" class=\"container\">\n\n    <h1 style=\"margin-top: 1%;text-align: center; font-family: 'Times New Roman'; color: white\">Update {{medicine.name}}</h1>\n\n    <div class=\"row\" style=\"margin-top:20px\">\n      <div style=\"margin-left: 15%; color: white\" class=\"col-xs-8 col-sm-8 col-md-8 \">\n        <form *ngIf=\"medicine\" (submit)=\"onUpdate(medicine)\" role=\"form\">\n\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"medicine.name\" name=\"name\" class=\"form-control input-sm\" >\n          </div>\n\n          <div class=\"form-group\">\n            <label>Generic</label>\n            <input type=\"text\" [(ngModel)]=\"medicine.generic\" name=\"generic\" class=\"form-control input-sm\" >\n          </div>\n\n          <div class=\"form-group\">\n            <label>Company</label>\n            <input type=\"text\" [(ngModel)]=\"medicine.company\" name=\"company\" class=\"form-control input-sm\" >\n          </div>\n\n          <div class=\"form-group\">\n            <label>Price</label>\n            <input type=\"text\" [(ngModel)]=\"medicine.price\" name=\"price\" class=\"form-control input-sm\" >\n          </div>\n\n          <div class=\"form-group\">\n            <label>Quantity</label>\n            <input type=\"text\" [(ngModel)]=\"medicine.quantity\" name=\"quantity\" class=\"form-control input-sm\" placeholder=\"First Name\">\n          </div>\n\n          <div class=\"form-group\">\n            <label>Type</label>\n            <input type=\"text\" [(ngModel)]=\"medicine.type\" name=\"Type\" class=\"form-control input-sm\" placeholder=\"First Name\">\n          </div>\n\n\n\n          <input type=\"submit\" value=\"Update\" class=\"btn btn-info btn-block\">\n\n        </form>\n      </div>\n    </div>\n\n\n\n  </div>\n\n  <div style=\"height:20px\">\n\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/update-medicine/update-medicine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateMedicineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_medicine__ = __webpack_require__("./src/app/model/medicine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__ = __webpack_require__("./src/app/services/toaster-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateMedicineComponent = /** @class */ (function () {
    function UpdateMedicineComponent(medicienService, route, router, toasterService, location) {
        this.medicienService = medicienService;
        this.route = route;
        this.router = router;
        this.toasterService = toasterService;
        this.location = location;
        this.medicine = new __WEBPACK_IMPORTED_MODULE_1__model_medicine__["a" /* Medicine */]();
        this.quantity = 0;
    }
    UpdateMedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id2;
        this.route.queryParams.subscribe(function (params) {
            console.log(params["_id"]);
            id2 = params["_id"];
            console.log(params["quantity"]);
            _this.quantity = params["quantity"];
        });
        var id = this.route.snapshot.params.id || id2;
        this.medicienService.getSingleMedicine(id).subscribe(function (res) {
            _this.medicine = res.data;
            _this.medicine.quantity -= _this.quantity;
            if (_this.quantity > 0) {
                _this.medicienService.updateMedicine(_this.medicine).subscribe(function (res) {
                    // console.log('In update' + res.data);
                    _this.router.navigate(['/sDashboard']);
                });
            }
        });
    };
    UpdateMedicineComponent.prototype.onUpdate = function (medicine) {
        var _this = this;
        this.medicienService.updateMedicine(medicine).subscribe(function (res) {
            // console.log('In update' + res.data);
            _this.toasterService.Success("Successfully Updated!");
            _this.router.navigate(['/pDashboard']);
        });
    };
    UpdateMedicineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update-medicine',
            template: __webpack_require__("./src/app/components/update-medicine/update-medicine.component.html"),
            styles: [__webpack_require__("./src/app/components/update-medicine/update-medicine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_toaster_service_service__["a" /* ToasterServiceService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */]])
    ], UpdateMedicineComponent);
    return UpdateMedicineComponent;
}());



/***/ }),

/***/ "./src/app/components/view-medicine/view-medicine.component.css":
/***/ (function(module, exports) {

module.exports = "table tr:nth-child(even) {\r\n  background-color: rgba(25, 207, 193, 0.7);\r\n  color: white;\r\n}\r\ntable tr:nth-child(odd) {\r\n  color: white;\r\n  background-color: rgba(145, 142, 176, 0.7);\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/view-medicine/view-medicine.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg\">\n<div class=\"container\">\n\n  <div class=\"table-responsice\">\n    <table  class=\"table\">\n      <thead>\n        <tr style=\"background-color: blue; color: white\">\n          <th>#</th>\n          <th>Name</th>\n          <th>Generic</th>\n          <th>Type</th>\n          <th>Price</th>\n        </tr>\n\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let medicine of medicines; let i = index\">\n\n          <td>{{i+1}}</td>\n          <td>{{medicine.name}}</td>\n          <td>{{medicine.generic}}</td>\n          <td>{{medicine.type}}</td>\n          <td>{{medicine.price}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/view-medicine/view-medicine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMedicineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_medicine_service__ = __webpack_require__("./src/app/services/medicine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_medicine__ = __webpack_require__("./src/app/model/medicine.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewMedicineComponent = /** @class */ (function () {
    function ViewMedicineComponent(medicineService, router) {
        this.medicineService = medicineService;
        this.router = router;
        this.medicines = [new __WEBPACK_IMPORTED_MODULE_3__model_medicine__["a" /* Medicine */]()];
    }
    ViewMedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineService.getMedicine().subscribe(function (res) {
            // console.log(res.data);
            _this.medicines = res.data;
            // console.log(this.medicine);
            for (var i = 0; i < _this.medicines.length; i++)
                console.log(_this.medicines[i].price);
        });
    };
    ViewMedicineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-medicine',
            template: __webpack_require__("./src/app/components/view-medicine/view-medicine.component.html"),
            styles: [__webpack_require__("./src/app/components/view-medicine/view-medicine.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_medicine_service__["a" /* MedicineService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewMedicineComponent);
    return ViewMedicineComponent;
}());



/***/ }),

/***/ "./src/app/gaurds/auth.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn() && localStorage.getItem('category') == 'Admin') {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page, Login as Admin first");
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "./src/app/gaurds/manager.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagerGaurd = /** @class */ (function () {
    function ManagerGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ManagerGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn() && localStorage.getItem('category') == 'Manager' || localStorage.getItem('category') == 'Admin') {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page, Login as Manager or Admin first");
            this.router.navigate(['/login']);
            return false;
        }
    };
    ManagerGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ManagerGaurd);
    return ManagerGaurd;
}());



/***/ }),

/***/ "./src/app/gaurds/pharmasist.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PharmasistGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PharmasistGuard = /** @class */ (function () {
    function PharmasistGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PharmasistGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn() && localStorage.getItem('category') == 'Pharmasist') {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page, Login as Pharmasist first");
            this.router.navigate(['/login']);
            return false;
        }
    };
    PharmasistGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PharmasistGuard);
    return PharmasistGuard;
}());



/***/ }),

/***/ "./src/app/gaurds/salesman.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesmanGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesmanGaurd = /** @class */ (function () {
    function SalesmanGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SalesmanGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn() && localStorage.getItem('category') == 'Salesman') {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page, Login as Salesman first");
            this.router.navigate(['/login']);
            return false;
        }
    };
    SalesmanGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SalesmanGaurd);
    return SalesmanGaurd;
}());



/***/ }),

/***/ "./src/app/model/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var Cart = /** @class */ (function () {
    function Cart() {
    }
    return Cart;
}());



/***/ }),

/***/ "./src/app/model/medicine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Medicine; });
var Medicine = /** @class */ (function () {
    function Medicine() {
    }
    return Medicine;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUser = function (userCredentials) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/auth/login", userCredentials, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getCategory = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/category", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getSingleUser = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user", user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl + "/user/" + user._id, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/medicine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicineService = /** @class */ (function () {
    function MedicineService(http) {
        this.http = http;
    }
    MedicineService.prototype.getMedicine = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/medicine", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.createMedicine = function (medicine) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/medicine", medicine, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.getSingleMedicine = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/medicine/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService.prototype.updateMedicine = function (medicine) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + "/medicine/" + medicine._id, medicine, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MedicineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MedicineService);
    return MedicineService;
}());



/***/ }),

/***/ "./src/app/services/pager-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerServicesService = /** @class */ (function () {
    function PagerServicesService() {
    }
    PagerServicesService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 7; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerServicesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PagerServicesService);
    return PagerServicesService;
}());



/***/ }),

/***/ "./src/app/services/search-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = 'https://api.cdnjs.com/libraries';
        this.queryUrl = '?search=';
        this.query = {
            searchKey: String
        };
    }
    SearchService.prototype.search = function (terms) {
        var _this = this;
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchEntries2(term); });
    };
    SearchService.prototype.searchEntries = function (term) {
        if (term === void 0) { term = 'null'; }
        return this.http
            .get(this.baseUrl + this.queryUrl + term)
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.searchEntries2 = function (term) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + "/medicine/search/" + term, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/toaster-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterServiceService = /** @class */ (function () {
    function ToasterServiceService() {
    }
    ToasterServiceService.prototype.Success = function (title, message) {
        toastr.success(title, message);
    };
    ToasterServiceService.prototype.Warning = function (title, message) {
        toastr.warning(title, message);
    };
    ToasterServiceService.prototype.Error = function (title, message) {
        toastr.error(title, message);
    };
    ToasterServiceService.prototype.Info = function (title, message) {
        toastr.info(title, message);
    };
    ToasterServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToasterServiceService);
    return ToasterServiceService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateRegister = function (user) {
        if (user.firstName == '' || user.email == '' || user.username == '') {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateMedicine = function (medicine) {
        if (medicine.name == '' || medicine.company == '' || medicine.price == '' || medicine.quantity == '' || medicine.type == '') {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: '/api'
    // baseUrl: '/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map