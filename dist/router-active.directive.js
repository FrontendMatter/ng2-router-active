"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var router_1 = require('@angular/router');
var lang_1 = require('@angular/core/src/facade/lang');
var core_1 = require('@angular/core');
var router_link_1 = require('@angular/router/src/directives/router_link');
var RouterActiveDirective = (function () {
    function RouterActiveDirective(router, element, renderer, routerLink, routerActiveAttr) {
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.routerLink = routerLink;
        this.routerActive = undefined;
        this.routerActiveAttr = 'active';
        this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
    }
    RouterActiveDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.routerLink.changes.subscribe(function () {
            if (_this.routerLink.first) {
                _this._updateClass();
                _this.router.changes.subscribe(function () {
                    _this._updateClass();
                });
            }
        });
    };
    RouterActiveDirective.prototype._updateClass = function () {
        var active = this.routerLink.first.isActive;
        this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
    };
    RouterActiveDirective.prototype._defaultAttrValue = function (attr) {
        return this.routerActiveAttr = attr || this.routerActiveAttr;
    };
    RouterActiveDirective.prototype._attrOrProp = function () {
        return lang_1.isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], RouterActiveDirective.prototype, "routerActive", void 0);
    RouterActiveDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-router-active]'
        }),
        __param(3, core_1.Query(router_link_1.RouterLink)),
        __param(4, core_1.Optional()),
        __param(4, core_1.Attribute('ng2-router-active')), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef, core_1.Renderer, core_1.QueryList, String])
    ], RouterActiveDirective);
    return RouterActiveDirective;
}());
exports.RouterActiveDirective = RouterActiveDirective;
