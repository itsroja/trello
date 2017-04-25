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

    members = []; // array for the members
    boardData=[]; // array for the board data
    cardData=[]; // array for the card data
    comCard=[]; // array for the completed cards data
    comSPcard=[];
    fName="Test Name"; // string to hold a member's full Name
    public isShow=false; // boolean variable to hide or show the <div> element in html
    userSP=0; // A specific user's total assigned Story Points
    comSP=0; // A specific user's completed Story Points
    ID="test ID"; // A user's username that will be used as an ID for the Trello Get method
    trelloID="test ID";
    comBoard="Test Board" // comBoard will store the completed Board's ID
    comLists=[];
    argChecker=0;
// Array used to store data retrieved from api



/* getTeam function will grab the team members off of the boardID provided  */
    getTeam(){
        this.trelloService.trello.get('/boards/'+this.boardID+'/members',
            (members) =>
                this.getNames(members),this.ref.markForCheck() );

    }
    // getNames is called from getTeam which will store all team member names into members array
    getNames(members){
        for(let member of members){
            this.members.push(member);
        }
      console.log('Team Members');
      for(let member of this.members){
            console.log(member);
        }

    }
/* The clicked function  gets a specified member's username used for ID, and their fullname (clicknName)
  The ID is used to grab the member's boards that they are subscribed to and calls getDataBoard to store that information
  ID is also used to grab all cards that the user is assigned and calls getDataCard in order to store the card information
 */
    clicked(id) {
      this.clearData();
      this.ID = id;
      this.trelloService.trello.get('/members/' + this.ID + '/boards',
        (boardData) => this.getDataBoard(boardData), this.ref.markForCheck());

      this.trelloService.trello.get('/members/' + this.ID + '/cards',
        (cardData) => this.getDataCard(cardData), this.ref.markForCheck());


      this.trelloService.trello.get('/members/' + this.ID + '/boards?lists=all', (comList) => this.callComCard(comList), this.ref.markForCheck() );

      this.trelloService.trello.get('/member/' + this.ID, (getName) => this.getFullName(getName), this.ref.markForCheck() );
        this.isShow = true; // the <div> element in the HTMl will now be displayed


    }

    getFullName(getName){
      this.fName = getName.fullName;
      this.trelloID= getName.id;
    }
// getDataBoard will store all of the boards that the specified member is subscribed to, the information is stored into the boardData array
    getDataBoard(boardData) {
        for (let data of boardData) {
            this.boardData.push(data)
        }
      console.log('boardData');
      for (let data of this.boardData) {
            console.log(data);
        }
    }
// getDataCard will store all the card information that the specified member is assigned,
// this information will be stored into cardData array
    getDataCard(cardData){
        for (let data of cardData){
            this.cardData.push(data)
        }
      console.log('cardData');
      for (let data of this.cardData){
            console.log(data);
        }
        this.userSP = 0; // initially set the assigned Story Points to zero
        this.calcStory(this.cardData); // calcStory will calculate the assigned Story Points

    }
// calcStory will calculate the specified user's assigned Story Points
    calcStory(cardData) {
        let tester = []; // temporary array to store the card name string as a character array
        for (let i = 0; i < cardData.length; i++) {
            tester = (cardData[i].name).split('');
            this.userSP += (tester[1]) / 1; // assigned the story points (must divide by 1 to turn into a number)
        }
    }


// findCompleted
findCompleted() {
  this.trelloService.trello.get('/members/' + this.ID + '/boards?lists=all', (comList) => this.callComCard(comList), this.ref.markForCheck() );
  }


// callComCard will calculate the completed Story Points for the specific member.
        callComCard(comCard) {
     for (let data of comCard){
         this.comLists.push(data.lists);

       }

     console.log('comLists');
     for (let data of this.comLists){
       console.log(data);
     }

    this.fcalc(this.comLists);

        }

  //fcalc
  fcalc(lists) {
    let placeholder = [];
    console.log('fcalc');
    for (let data of this.comLists) {
      for (let i = 0; i < data.length; i++) {
        placeholder = data[i].name.split(' ');
        console.log(placeholder);
        for (let j = 0; j < placeholder.length; j++) {
          if (placeholder[j] === 'Complete') {

                this.trelloService.trello.get('lists/' + data[i].id + '/cards', (getCard) => this.completedCard(getCard), this.ref.markForCheck() );



          }
        }
      }
    }
 //  this.trelloService.trello.get('member/'+ this.ID, (test)=> this.finalCalc(test), this.ref.markForCheck());
  }

  completedCard(getCard){
    let pointCheck=[];
    for (let data of getCard){

      if (data.idMembers[0] === this.trelloID) {
          this.comSPcard.push(data.name);
          pointCheck = this.comSPcard[this.argChecker].split('');
          console.log(pointCheck[1]);
          this.comSP += (pointCheck[1] )/ 1;
          console.log(this.comSP);
          this.argChecker += 1;
        }

    }
    console.log('comSPcard');
    for(let data of this.comSPcard){
      console.log(data);

    }




  }


// clearData will reset all of the arrays, ID's, Story Points, in order to provide accurate information
        clearData(){

         this.boardData.length = 0;
         this.cardData.length = 0;
         this.comCard.length = 0;
         this.comSPcard.length = 0;
         this.comLists.length = 0;
         this.argChecker = 0;
            this.ID = '';
            this.userSP = 0;
            this.comSP = 0;
        }
}


