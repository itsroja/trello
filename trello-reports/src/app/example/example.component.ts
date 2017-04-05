//You should be able to copy and paste this component and edit it to do what you need done
//When creating a new component, go to the app.module.ts file and add your component to the imports
//Also add it to the declarations
//Check the app.module.ts file for a demonstration of this component

import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';  //Needed for all components
import { TrelloService } from '../services/trello.service';                             //Needed to use trello api
import { ChartsModule } from 'ng2-charts';                                              //Needed to create charts

//Decorator needed for all components
@Component({
    selector: 'example',                //The custom html tag used for your component. Name it the same as your component name
    templateUrl: './example.component.html',
    providers: [TrelloService]                  //This is where you put all the services you need for your component
                                                //You should be able to copy and paste this as it is
})

export class ExampleComponent {
    lists = [];                                 //Array used to store data retrieved from api
    boardID: string = 'rvPpS2c8';               //Board ID for trello board

    //Class constructor. The two parameters are used to access the trello api service and to update the view
    constructor(public trelloService: TrelloService, public ref: ChangeDetectorRef){}

    //******************************************Pie Chart*********************************************//
    public pieChartOptions:any = {
        responsive: true
    };

    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
    //*********************************************************************************************//


    //******************************************Bar Graph*****************************************//
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };

    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
    //*******************************************************************************************//

    //Get data from the api
    getData(){
        //Get data from the api
        //The first parameter is the url of the data you are looking for
        //The form is: '/boards/boardID/lists'
        //You can change lists to cards to get a list of all the cards in a board
        //Check the api docs for the specific url you need
        //The second parameter is a function that is executed when the data is successfully returned
        //this.lists is a local variable you want to assign the data to
        //this.ref.markForCheck() ensures that the view is updated when the data is changed
        this.trelloService.trello.get('/boards/' + this.boardID + '/lists', (data) => this.lists = data, this.ref.markForCheck());
    }
}
