import { Component, ChangeDetectorRef} from '@angular/core';
import { TrelloService } from '../../services/trello.service';
@Component({
    selector: 'team',
    templateUrl: '/app/components/team/team.component.html',
    styleUrls: ['app/components/team/team.component.css'],
    providers: [TrelloService]

})

export class TeamComponent {
    constructor(public trelloService: TrelloService, public ref: ChangeDetectorRef) {
        this.getTeam();
    }
    boardID: string = 'rvPpS2c8';

    members = [];
    boardData=[];
    cardData=[];
    fName="Test Name";
    public isShow=false;
    userSP=0;

//Array used to store data retrieved from api




    getTeam(){
        this.trelloService.trello.get('/boards/'+this.boardID+'/members',
            (members) =>
                this.getNames(members),this.ref.markForCheck() );

    }
    getNames(members){
        for(let member of members){
            this.members.push(member);
        }
        for(let member of this.members){
            console.log(member);
        }

    }

    clicked(id, clickName) {
        this.trelloService.trello.get('/members/' + id + '/boards',
            (boardData) => this.getDataBoard(boardData), this.ref.markForCheck());

        this.trelloService.trello.get('/members/' + id + '/cards',
            (cardData) => this.getDataCard(cardData), this.ref.markForCheck());
        this.fName = clickName;
        this.isShow = true;
    }

    getDataBoard(boardData) {
        for (let data of boardData) {
            this.boardData.push(data)
        }
        for (let data of this.boardData) {
            console.log(data);
        }
    }

    getDataCard(cardData){
        for (let data of cardData){
            this.cardData.push(data)
        }
        for(let data of this.cardData){
            console.log(data);
        }
        this.userSP=0;
        this.calcStory(this.cardData);
    }

    calcStory(cardData){
        var tester=[];
        var testString;
        for(var i=0; i< cardData.length; i++){
            tester= (cardData[i].name).split("");
            this.userSP += (tester[1])/1;
        }

    }




}


