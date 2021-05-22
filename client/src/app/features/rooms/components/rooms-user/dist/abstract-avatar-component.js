"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AbstractUserAvatarComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AbstractUserAvatarComponent = /** @class */ (function () {
    function AbstractUserAvatarComponent() {
        var _this = this;
        this.SIDES_MARGINS = 75;
        this.user = "User Fixed";
        this.top = "0px";
        this.left = "0px";
        this.width = "100px";
        this.height = "100px";
        this.destroyed$ = new rxjs_1.Subject();
        this.movements$ = this.getMovementObservable();
        this.movements$.pipe(operators_1.takeUntil(this.destroyed$)).subscribe(function (point) { return _this.moveTo(point); });
    }
    AbstractUserAvatarComponent.prototype.moveTo = function (point) {
        if (point.x <= this.SIDES_MARGINS || point.x >= document.body.clientWidth - this.SIDES_MARGINS) {
            return;
        }
        if (point.y <= this.SIDES_MARGINS || point.y >= document.body.clientHeight - this.SIDES_MARGINS) {
            return;
        }
        this.left = point.x - (this.getWidth() / 2) + "px";
        this.top = point.y - (this.getHeight() / 2) + "px";
    };
    AbstractUserAvatarComponent.prototype.getHeight = function () {
        return +(this.height.slice(0, -2));
    };
    AbstractUserAvatarComponent.prototype.getWidth = function () {
        return +(this.width.slice(0, -2));
    };
    AbstractUserAvatarComponent.prototype.ngOnDestroy = function () {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    };
    __decorate([
        core_1.Input()
    ], AbstractUserAvatarComponent.prototype, "user");
    AbstractUserAvatarComponent = __decorate([
        core_1.Component({
            template: ''
        })
    ], AbstractUserAvatarComponent);
    return AbstractUserAvatarComponent;
}());
exports.AbstractUserAvatarComponent = AbstractUserAvatarComponent;
