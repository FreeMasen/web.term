"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var component_1 = require('../dashboard/component');
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: component_1.Dashboard }
];
core_1.NgModule({
    imports: [
        router_1.RouterModule.forRoot(routes)
    ],
    exports: [
        router_1.RouterModule
    ]
});
var Router = (function () {
    function Router() {
    }
    return Router;
}());
exports.Router = Router;
//# sourceMappingURL=module.js.map