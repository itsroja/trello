import { Injectable } from '@angular/core';

declare var Trello: any;

@Injectable()
export class TrelloService{
    trello: any;

    constructor(){
        this.trello = Trello;
        this.trello.authorize();
    }
}
