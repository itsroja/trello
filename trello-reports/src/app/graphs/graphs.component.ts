import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TrelloService } from '../services/trello.service';
import { ChartsModule } from 'ng2-charts';

@Component({
    selector: 'graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.css'],
    providers: [TrelloService]
})

export class GraphsComponent {
    boardID: string = 'rvPpS2c8';
    members: string[];
    totalStoryPoints: number;
    memberStoryPoints: number[];

    constructor(public trelloService: TrelloService, public ref: ChangeDetectorRef){
        this.getData();
    }

    //******************************************Pie Chart*********************************************//
    public pieChartOptions:any = {
        responsive: true,
        maintainAspectRatio: false
    };

    public pieChartLabels:string[] = [];
    public pieChartData:number[] = [9, 3, 4, 8, 6, 1, 5, 4];
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
        responsive: true,
        maintainAspectRatio: false
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
        this.trelloService.trello.get('/boards/' + this.boardID + '/members', (members) => this.setMembers(members));
    }

    setMembers(members){
        this.members = members;
        var m = [];
        for(let member of members){
            m.push(member.fullName);
        }
        this.pieChartLabels = m;
        this.ref.markForCheck();
        //this.getCards(members);
    }

    getCards(members){
        for(let member of members){
            this.trelloService.trello.get('/boards/' + this.boardID + '/members/' + member.id + '/cards', (cards) => this.printCardNames(cards));
        }
    }

    printCardNames(cards){
        for(let card of cards){
            console.log(card.name);
        }
    }
}
