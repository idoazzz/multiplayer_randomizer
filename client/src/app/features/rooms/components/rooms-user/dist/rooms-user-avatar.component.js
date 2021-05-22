"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoomsUserAvatarComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var abstract_avatar_component_1 = require("./abstract-avatar-component");
var RoomsUserAvatarComponent = /** @class */ (function (_super) {
    __extends(RoomsUserAvatarComponent, _super);
    function RoomsUserAvatarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoomsUserAvatarComponent.prototype.getMovementObservable = function () {
        return rxjs_1.fromEvent(document.getElementsByTagName("body"), "mousemove").pipe(operators_1.map(function (e) {
            var newEvent = e;
            return {
                x: newEvent.clientX,
                y: newEvent.clientY
            };
        }));
    };
    RoomsUserAvatarComponent = __decorate([
        core_1.Component({
            selector: 'user-avatar',
            templateUrl: './rooms-user-avatar.component.html',
            styleUrls: ['./rooms-user-avatar.component.sass']
        })
    ], RoomsUserAvatarComponent);
    return RoomsUserAvatarComponent;
}(abstract_avatar_component_1.AbstractUserAvatarComponent));
exports.RoomsUserAvatarComponent = RoomsUserAvatarComponent;
