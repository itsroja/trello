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
        this.token = '5d64107672a08034368ba4c972d9be47f46d16066d390e908753ebc649e197ca';
        this.key = '92700dc44a5bc49b595ee9837aeb9a78';
        this.boardID = 'rvPpS2c8';
    }
    HttpService.prototype.fetchBoard = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        return this._http.get('https://api.trello.com/1/board/' + bID + '?key=' + this.key + '&token=' + this.token)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.fetchMember = function (username) {
        if (username != null)
            return this._http.get('https://api.trello.com/1/members/' + username +
                '?fields=username,fullName,url&boards=all&board_fields=name&organizations=all&organization_fields=displayName&key=' +
                this.key + '&token=' + this.token);
    };
    HttpService.prototype.fetchMembers = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        return this._http.get('https://api.trello.com/1/board/' + bID + '/members?key=' + this.key + '&token=' + this.token)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.fetchLists = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        return this._http.get('https://api.trello.com/1/board/' + bID + '/lists??cards=open&card_fields=name&fields=name&key=' +
            this.key + '&token=' + this.token).map(function (res) { return res.json(); });
    };
    HttpService.prototype.fetchCards = function (bID) {
        if (bID === void 0) { bID = this.boardID; }
        return this._http.get('https://api.trello.com/1/board/' + this.boardID + '/cards?fields=name,idList,url&key=' +
            this.key + '&token=' + this.token).map(function (res) { return res.json(); });
    };
    HttpService.prototype.fetchListCards = function (listID) {
        return this._http.get('https://api.trello.com/1/lists/' + listID + '/cards?key=' + this.key + '&token=' + this.token)
            .map(function (res) { return res.json(); });
    };
    HttpService.prototype.setToken = function (t) {
        this.token = t;
    };
    HttpService.prototype.setKey = function (k) {
        this.key = k;
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