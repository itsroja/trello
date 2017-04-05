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
var core_1 = require("@angular/core");
var trello_service_1 = require("../../services/trello.service");
var GraphsComponent = (function () {
    function GraphsComponent(trelloService, ref) {
        this.trelloService = trelloService;
        this.ref = ref;
        this.members = [];
        this.memberCards = [];
        this.boardID = 'rvPpS2c8';
        //******************************************Pie Chart*********************************************//
        this.pieChartOptions = {
            responsive: true
        };
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        //*********************************************************************************************//
        //******************************************Bar Graph*****************************************//
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    // events
    GraphsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    GraphsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    //*******************************************************************************************//
    GraphsComponent.prototype.getData = function () {
        var _this = this;
        this.trelloService.trello.get('/boards/' + this.boardID + '/members', function (members) {
            return _this.getCards(members);
        }, this.ref.markForCheck());
    };
    GraphsComponent.prototype.getCards = function (members) {
        for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
            var member = members_1[_i];
            this.trelloService.trello.get('/boards/' + this.boardID + '/members/' + member.id + '/cards', function (cards) {
                return console.log(cards);
            });
        }
    };
    return GraphsComponent;
}());
GraphsComponent = __decorate([
    core_1.Component({
        selector: 'graphs',
        templateUrl: '/app/components/graphs/graphs.component.html',
        providers: [trello_service_1.TrelloService]
    }),
    __metadata("design:paramtypes", [trello_service_1.TrelloService, core_1.ChangeDetectorRef])
], GraphsComponent);
exports.GraphsComponent = GraphsComponent;
//# sourceMappingURL=graphs.component.js.map