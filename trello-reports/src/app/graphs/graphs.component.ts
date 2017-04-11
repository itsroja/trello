import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TrelloService } from '../services/trello.service';
import { ChartsModule } from 'ng2-charts';

@Component({
    selector: 'graphs',
    templateUrl: './graphs.component.html',
    //styleUrls: ['./graphs.component.css'],
    providers: [TrelloService]
})

export class GraphsComponent {
    boardID: string = 'rvPpS2c8';
    members: string[];
    totalStoryPoints: number;
    memberStoryPoints: number[] = [];
    sprint: string = "1";
    currentPointCount: number = 0;
    sprintLists = [];
    tempMemberPoints: number[] = [];
    pieReady: boolean = false;
    chartType: string = "pie";

    constructor(public trelloService: TrelloService, public ref: ChangeDetectorRef){
        this.getData();
        this.getLists();
    }

    refresh(){
        this.pieReady = true;
    }

    changeType(){
        this.chartType = (this.chartType == "pie") ? "bar" : "pie";
    }

    //******************************************Pie Chart*********************************************//
    public pieChartOptions:any = {
        responsive: true,
        maintainAspectRatio: false
    };

    public pieChartLabels:string[] = [];
    public pieChartData:number[] = [];//[9, 3, 4, 8, 6, 1, 5, 4];
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

    public barChartLabels:string[] = [];//['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [{data: [], label: 'Story Points Completed'}];/*[
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];*/
    //*******************************************************************************************//

    getData(){
        this.trelloService.trello.get('/boards/' + this.boardID + '/members', (members) => this.setMembers(members));
    }

    setMembers(members){
        this.members = members;
        var m = [];
        for(let member of members){
            m.push(member.fullName);
            this.pieChartData.push(0);
        }
        this.pieChartLabels = m;
        this.ref.markForCheck();
    }

    getLists(){
        this.trelloService.trello.get('/boards/' + this.boardID + '/lists?cards=all', (lists) => this.setLists(lists));
    }

    setLists(lists){
        for(let list of lists){
            if(list.name.includes("Sprint " + this.sprint) && !list.name.includes("Complete")){
                this.sprintLists.push(list);
            }
        }

        for(let list of this.sprintLists){
            this.trelloService.trello.get('/list/' + list.id + '/cards', (cards) => this.filterCards(cards));
        }
        this.bargraphLists(lists);
        this.ref.markForCheck();
    }

    filterCards(cards){
        for(let card of cards){
            this.trelloService.trello.get('/cards/' + card.id + '/members', (members) => this.addMemberPoints(members, card));
        }
    }

    addMemberPoints(members, card){
        for(let member of members){
            var currMember = this.findMember(member.fullName);
            this.pieChartData[currMember] += Number(card.name.substring(1,2));
        }
    }

    findMember(name): number{
        for(var i = 0; i < this.pieChartLabels.length; i++){
            if(this.pieChartLabels[i] == name){
                return i;
            }
        }
    }

    bargraphLists(lists){
        var sprintCompleteLists = [];
        for(let list of lists){
            if(list.name.includes("Sprint") && list.name.includes("Complete")){
                sprintCompleteLists.push(list);
            }
        }

        for(let list of sprintCompleteLists){
            var pointCount: number = 0;
            this.barChartLabels.push(list.name);
            for(let card of list.cards){
                console.log(card.name);
                pointCount += Number(card.name.substring(1,2));
            }
            this.barChartData[0].data.push(pointCount);
        }
    }
}
