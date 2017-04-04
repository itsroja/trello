import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

declare var Trello: any;

@Injectable()
export class HttpService
{
    trello: any;
    boardID: string = 'rvPpS2c8';

    constructor(private _http: Http) {
        this.trello = Trello;
        this.trello.authorize();
    }

    fetchBoard(bID: string = this.boardID){
        console.log(this.trello.get("/boards/" + this.boardID));
    }

    fetchMember(username: string){
        if(username != null)
            return this.trello.get("/members/" + username);
    }

    fetchMembers(bID: string = this.boardID){
        return this.trello.get("/boards/" + bID + "/members");
    }

    fetchLists(bID: string = this.boardID){
        return Promise.resolve(this.trello.get("/boards/" + bID + "/lists"));
    }

    fetchCards(bID: string = this.boardID){
        return this.trello.get("/boards/" + bID + "/cards");
    }

    fetchListCards(listID: string){
        return this.trello.get("/lists/" + listID + "/cards");
    }

    setBoard(b: string){
        this.boardID = b;
    }
}
