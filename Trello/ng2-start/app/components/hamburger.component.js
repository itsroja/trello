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
        this.pages = [
            { pageName: 'Main Page', pageLink: 'index.html' },
            { pageName: 'Team Members', pageLink: 'TeamMembers.html' },
            { pageName: 'Graphs and Data', pageLink: 'GraphsAndData.html' },
            { pageName: 'Completed Board', pageLink: 'CompletedBoard.html' },
        ];
    }
    return HamburgerComponent;
}());
HamburgerComponent = __decorate([
    core_1.Component({
        selector: 'hamburger',
        template: "\n        <div id=\"sidebar\">\n\n        <ul>\n            <li *ngFor=\"let item of pages\"><a href=\"{{item.pageLink}}\">{{item.pageName}}</a></li>\n        </ul>\n\n\n        <div id=\"sidebar-btn\">\n            <span></span>\n            <span></span>\n            <span></span>\n        </div>\n\n        </div>\n    "
    })
], HamburgerComponent);
exports.HamburgerComponent = HamburgerComponent;
//# sourceMappingURL=hamburger.component.js.map