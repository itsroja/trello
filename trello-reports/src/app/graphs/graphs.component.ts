import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TrelloService } from '../services/trello.service';
import { ChartsModule } from 'ng2-charts';

@Component({
    selector: 'graphs',
    templateUrl: './graphs.component.html',
    providers: [TrelloService]
})

export class GraphsComponent {

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
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };

    public barChartLabels:string[] = [];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [{data: [], label: 'Story Points Completed'}];
    //*******************************************************************************************//

    boards = [];
    boardID: string = 'rvPpS2c8';
    currentBoardName: string = "Trello Reporting Website";
    currentBoard: any;
    completedBoard: any;
    members: string[];
    totalStoryPoints: number;
    memberStoryPoints: number[] = [];
    sprint: number = 1;
    currentPointCount: number = 0;
    sprintLists = [];
    currentSprintLists = [];
    tempMemberPoints: number[] = [];
    pieReady: boolean = false;
    chartType: string = "pie";

    constructor(public trelloService: TrelloService, public ref: ChangeDetectorRef){
        this.getBoards();
    }

    refresh(){
        this.pieReady = true;
    }

    changeType(){
        this.chartType = (this.chartType == "pie") ? "bar" : "pie";
    }

    //Retrieves all the boards belonging to the member that is logged in
    getBoards(){
        this.trelloService.trello.get('/member/me/boards?lists=all', (boards) => this.setBoards(boards), (error) => console.log(error));
    }

    //Sets an array of boards and the completed board and the current board we are interested in
    setBoards(boards){
        this.boards = boards;
        for(let board of boards){
            if(board.name == "Completed")
                this.completedBoard = board;
            if(board.name == this.currentBoardName)
                this.currentBoard = board;
        }
        this.getData();
        this.getLists();
    }

    //Pie chart
    getData(){
        this.trelloService.trello.get('/boards/' + this.currentBoard.id + '/members', (members) => this.setMembers(members));
    }

    //Pie chart labels
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
        //this.trelloService.trello.get('/boards/' + this.currentBoard.id + '/lists?cards=all', (lists) => this.setLists(lists));
        this.trelloService.trello.get('/boards/' + this.completedBoard.id + '/lists?cards=all', (lists) => this.setLists(lists));
    }

    setLists(lists){
        for(let list of lists){
            if(list.name.includes("Sprint") || list.name.includes("sprint")){
                this.sprintLists.push(list);
            }
        }
        this.bargraphLists(lists);
        this.trelloService.trello.get('/boards/' + this.currentBoard.id + '/lists?cards=all', (lists) => this.setLists2(lists));
    }

    setLists2(lists){
        for(let list of lists){
            if(list.name.includes("Sprint") || list.name.includes("sprint")){
                this.currentSprintLists.push(list);
            }
        }

        this.sprint = this.sprintLists.length + 1;

        for(let list of this.currentSprintLists){
            this.trelloService.trello.get('/list/' + list.id + '/cards', (cards) => this.filterCards(cards));
        }
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
        var sprints = [];
        for(let list of lists){
            if(list.name.includes("Sprint"))
                sprints.push(list);
        }
        for(let list of sprints){
            var pointCount: number = 0;
            this.barChartLabels.push(list.name);
            for(let card of list.cards){
                pointCount += Number(card.name.substring(1,2));
            }
            this.barChartData[0].data.push(pointCount);
        }
    }
}
