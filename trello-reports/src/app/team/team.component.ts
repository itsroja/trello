import { Component, ChangeDetectorRef} from '@angular/core';
import { TrelloService } from '../services/trello.service';
@Component({
    selector: 'team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css'],
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
    comCard=[];
    fName="Test Name";
    public isShow=false;
    userSP=0;
    comSP=0;
    ID="test ID";

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
        this.clearData();
        this.ID=id;
        this.trelloService.trello.get('/members/' + this.ID + '/boards',
            (boardData) => this.getDataBoard(boardData), this.ref.markForCheck());

        this.trelloService.trello.get('/members/' + this.ID + '/cards',
            (cardData) => this.getDataCard(cardData), this.ref.markForCheck());

   //    this.trelloService.trello.get('/members/' + this.ID + '/cards/closed',
   //        (comCard)=>this.pushComCard(comCard),this.ref.checkNoChanges());


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
        this.pushComCard(this.cardData);
    }

    calcStory(cardData){
        var tester=[];
        for(var i=0; i< cardData.length; i++){
            tester= (cardData[i].name).split("");
            this.userSP += (tester[1])/1;
        }
    }


        pushComCard(comCard){
        for(let com of comCard){
            this.comCard.push(com.label);
        }
        this.calcComCard(this.comCard);
        }

        calcComCard(comCard){
            var temp=[];
            for(var i=0; i<this.cardData.length; i++){
                temp=(this.cardData[i].name).split("");
                if(comCard[i] == 'Completed'){
                this.comSP+=(temp[1])/1;
                }
            }
        }

        clearData(){

         this.boardData.length=0;
         this.cardData.length=0;
         this.comCard.length=0;
            this.ID="";
        }
}


