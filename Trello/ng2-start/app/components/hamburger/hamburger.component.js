"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HamburgerComponent = (function () {
    function HamburgerComponent() {
        this.visible = false;
        this.buttonClasses = 'container';
    }
    HamburgerComponent.prototype.hamburgerClick = function () {
        this.visible = !this.visible;
        if (this.visible)
            this.buttonClasses += ' change';
        else
            this.buttonClasses = 'container';
    };
    return HamburgerComponent;
}());
HamburgerComponent = __decorate([
    core_1.Component({
        selector: 'hamburger',
        templateUrl: '/app/components/hamburger/hamburger.component.html',
        styleUrls: ['app/components/hamburger//hamburger.component.css']
    })
], HamburgerComponent);
exports.HamburgerComponent = HamburgerComponent;
//# sourceMappingURL=hamburger.component.js.map