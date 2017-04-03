//You should be able to copy and paste this component and edit it to do what you need done
//When creating a new component, go to the app.module.ts file and add your component to the imports
//Also add it to the declarations
//Check the app.module.ts file for a demonstration of this component
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
var core_1 = require("@angular/core"); //Needed for all components
var trello_service_1 = require("../services/trello.service"); //Needed to use trello api
//Decorator needed for all components
var ExampleComponent = (function () {
    //Class constructor. The two parameters are used to access the trello api service and to update the view
    function ExampleComponent(trelloService, ref) {
        this.trelloService = trelloService;
        this.ref = ref;
        this.lists = []; //Array used to store data retrieved from api
        this.boardID = 'rvPpS2c8'; //Board ID for trello board
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
    ExampleComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ExampleComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    //*******************************************************************************************//
    //Get data from the api
    ExampleComponent.prototype.getData = function () {
        var _this = this;
        //Get data from the api
        //The first parameter is the url of the data you are looking for
        //The form is: '/boards/boardID/lists'
        //You can change lists to cards to get a list of all the cards in a board
        //Check the api docs for the specific url you need
        //The second parameter is a function that is executed when the data is successfully returned
        //this.lists is a local variable you want to assign the data to
        //this.ref.markForCheck() ensures that the view is updated when the data is changed
        this.trelloService.trello.get('/boards/' + this.boardID + '/lists', function (data) { return _this.lists = data; }, this.ref.markForCheck());
    };
    return ExampleComponent;
}());
ExampleComponent = __decorate([
    core_1.Component({
        selector: 'example',
        template: "\n        <!--This is where you put your html code-->\n\n        <!--Pie Chart-->\n        <div class=\"col-md-5\" style=\"display: block\">\n            <canvas baseChart width=\"50\" height=\"50\"\n                [data]=\"pieChartData\"\n                [labels]=\"pieChartLabels\"\n                [chartType]=\"pieChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\">\n            </canvas>\n        </div>\n\n        <!--Bar Graph-->\n        <div class=\"col-md-5\" style=\"display: block\">\n            <canvas baseChart\n                [datasets]=\"barChartData\"\n                [labels]=\"barChartLabels\"\n                [options]=\"barChartOptions\"\n                [legend]=\"barChartLegend\"\n                [chartType]=\"barChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\">\n            </canvas>\n        </div>\n\n        <button (click)=\"getData()\">Get</button>\n        <br><br>\n\n        <!--Output the data from the api in a list-->\n        <ul>\n            <li *ngFor=\"let list of lists\">         <!--Angular for loop-->\n                {{ list.name }}\n            </li>\n        </ul>\n    ",
        providers: [trello_service_1.TrelloService] //This is where you put all the services you need for your component
        //You should be able to copy and paste this as it is
    }),
    __metadata("design:paramtypes", [trello_service_1.TrelloService, core_1.ChangeDetectorRef])
], ExampleComponent);
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=example.component.js.map