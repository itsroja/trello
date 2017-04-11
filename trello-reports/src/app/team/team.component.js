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
var trello_service_1 = require("../../services/trello.service");
var TeamComponent = (function () {
    function TeamComponent(trelloService, ref) {
        this.trelloService = trelloService;
        this.ref = ref;
        this.boardID = 'rvPpS2c8';
        this.members = [];
        this.boardData = [];
        this.cardData = [];
        this.comCard = [];
        this.fName = "Test Name";
        this.isShow = false;
        this.userSP = 0;
        this.comSP = 0;
        this.ID = "test ID";
        this.getTeam();
    }
    //Array used to store data retrieved from api
    TeamComponent.prototype.getTeam = function () {
        var _this = this;
        this.trelloService.trello.get('/boards/' + this.boardID + '/members', function (members) {
            return _this.getNames(members);
        }, this.ref.markForCheck());
    };
    TeamComponent.prototype.getNames = function (members) {
        for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
            var member = members_1[_i];
            this.members.push(member);
        }
        for (var _a = 0, _b = this.members; _a < _b.length; _a++) {
            var member = _b[_a];
            console.log(member);
        }
    };
    TeamComponent.prototype.clicked = function (id, clickName) {
        var _this = this;
        this.clearData();
        this.ID = id;
        this.trelloService.trello.get('/members/' + this.ID + '/boards', function (boardData) { return _this.getDataBoard(boardData); }, this.ref.markForCheck());
        this.trelloService.trello.get('/members/' + this.ID + '/cards', function (cardData) { return _this.getDataCard(cardData); }, this.ref.markForCheck());
        //    this.trelloService.trello.get('/members/' + this.ID + '/cards/closed',
        //        (comCard)=>this.pushComCard(comCard),this.ref.checkNoChanges());
        this.fName = clickName;
        this.isShow = true;
    };
    TeamComponent.prototype.getDataBoard = function (boardData) {
        for (var _i = 0, boardData_1 = boardData; _i < boardData_1.length; _i++) {
            var data = boardData_1[_i];
            this.boardData.push(data);
        }
        for (var _a = 0, _b = this.boardData; _a < _b.length; _a++) {
            var data = _b[_a];
            console.log(data);
        }
    };
    TeamComponent.prototype.getDataCard = function (cardData) {
        for (var _i = 0, cardData_1 = cardData; _i < cardData_1.length; _i++) {
            var data = cardData_1[_i];
            this.cardData.push(data);
        }
        for (var _a = 0, _b = this.cardData; _a < _b.length; _a++) {
            var data = _b[_a];
            console.log(data);
        }
        this.userSP = 0;
        this.calcStory(this.cardData);
        this.pushComCard(this.cardData);
    };
    TeamComponent.prototype.calcStory = function (cardData) {
        var tester = [];
        for (var i = 0; i < cardData.length; i++) {
            tester = (cardData[i].name).split("");
            this.userSP += (tester[1]) / 1;
        }
    };
    TeamComponent.prototype.pushComCard = function (comCard) {
        for (var _i = 0, comCard_1 = comCard; _i < comCard_1.length; _i++) {
            var com = comCard_1[_i];
            this.comCard.push(com.label);
        }
        this.calcComCard(this.comCard);
    };
    TeamComponent.prototype.calcComCard = function (comCard) {
        var temp = [];
        for (var i = 0; i < this.cardData.length; i++) {
            temp = (this.cardData[i].name).split("");
            if (comCard[i] == 'Completed') {
                this.comSP += (temp[1]) / 1;
            }
        }
    };
    TeamComponent.prototype.clearData = function () {
        this.boardData.length = 0;
        this.cardData.length = 0;
        this.comCard.length = 0;
        this.ID = "";
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    core_1.Component({
        selector: 'team',
        templateUrl: '/app/components/team/team.component.html',
        styleUrls: ['app/components/team/team.component.css'],
        providers: [trello_service_1.TrelloService]
    }),
    __metadata("design:paramtypes", [trello_service_1.TrelloService, core_1.ChangeDetectorRef])
], TeamComponent);
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map