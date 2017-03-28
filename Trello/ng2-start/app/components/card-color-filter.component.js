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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../services/http.service");
var CardColorFilterComponent = (function () {
    function CardColorFilterComponent(httpService) {
        this.httpService = httpService;
        this.lists = [];
        this.listsToShow = this.lists;
    }
    CardColorFilterComponent.prototype.getData = function () {
        var _this = this;
        this.httpService.fetchLists().subscribe(function (data) { return _this.lists = data; });
        for (var _i = 0, _a = this.lists; _i < _a.length; _i++) {
            var l = _a[_i];
            l.color = "red";
        }
    };
    CardColorFilterComponent.prototype.redClicked = function () {
        this.listsToShow = [];
        for (var _i = 0, _a = this.lists; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.color == "red")
                this.listsToShow.push(c);
        }
    };
    CardColorFilterComponent.prototype.greenClicked = function () {
        this.listsToShow = [];
        for (var _i = 0, _a = this.lists; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.color == "green")
                this.listsToShow.push(c);
        }
    };
    CardColorFilterComponent.prototype.yellowClicked = function () {
        this.listsToShow = [];
        for (var _i = 0, _a = this.lists; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.color == "yellow")
                this.listsToShow.push(c);
        }
    };
    CardColorFilterComponent.prototype.allClicked = function () {
        this.listsToShow = this.lists;
    };
    return CardColorFilterComponent;
}());
CardColorFilterComponent = __decorate([
    core_1.Component({
        selector: 'card-color-filter',
        template: "\n        <button (click)=\"getData()\">Get</button>\n        <br><br>\n\n        <button (click)=\"redClicked()\" class=\"smallButton red\"></button>\n        <button (click)=\"yellowClicked()\" class=\"smallButton yellow\"></button>\n        <button (click)=\"greenClicked()\" class=\"smallButton green\"></button>\n        <button (click)=\"allClicked()\" class=\"smallButton\"></button>\n        <br><br>\n\n        <div id=\"menu\">\n            <ul><li *ngFor=\"let list of listsToShow\">\n                <div class=\"box blue\">{{ list.name }}</div>\n            </li></ul>\n        </div>\n    ",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], CardColorFilterComponent);
exports.CardColorFilterComponent = CardColorFilterComponent;
//# sourceMappingURL=card-color-filter.component.js.map