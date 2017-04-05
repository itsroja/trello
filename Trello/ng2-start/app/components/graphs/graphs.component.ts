import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TrelloService } from '../../services/trello.service';
import { ChartsModule } from 'ng2-charts';

@Component({
    selector: 'graphs',
    templateUrl: '/app/components/graphs/graphs.component.html',
    providers: [TrelloService]
})

export class GraphsComponent {
    members = [];
    memberCards = [];
    boardID: string = 'rvPpS2c8';

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

    getData(){
        this.trelloService.trello.get('/boards/' + this.boardID + '/members',
            (members) =>
                this.getCards(members),
                this.ref.markForCheck());
    }

    getCards(members){
        for(let member of members){
            this.trelloService.trello.get('/boards/' + this.boardID + '/members/' + member.id + '/cards',
                (cards) =>
                    console.log(cards)
                );
        }
    }
}
