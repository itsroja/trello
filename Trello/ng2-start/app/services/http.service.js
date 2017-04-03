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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.boardID = 'rvPpS2c8';
        this.trello = Trello;
        this.trello.authorize();
    }
    HttpService.prototype.fetchBoard = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        console.log(this.trello.get("/boards/" + this.boardID));
    };
    HttpService.prototype.fetchMember = function (username) {
        if (username != null)
            return this.trello.get("/members/" + username);
    };
    HttpService.prototype.fetchMembers = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        return this.trello.get("/boards/" + bID + "/members");
    };
    HttpService.prototype.fetchLists = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        return Promise.resolve(this.trello.get("/boards/" + bID + "/lists"));
    };
    HttpService.prototype.fetchCards = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        return this.trello.get("/boards/" + bID + "/cards");
    };
    HttpService.prototype.fetchListCards = function (listID) {
        return this.trello.get("/lists/" + listID + "/cards");
    };
    HttpService.prototype.setBoard = function (b) {
        this.boardID = b;
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map