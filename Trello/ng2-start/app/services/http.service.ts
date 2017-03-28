import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService
{
    token: string = '5d64107672a08034368ba4c972d9be47f46d16066d390e908753ebc649e197ca';
    key: string = '92700dc44a5bc49b595ee9837aeb9a78';
    boardID: string = 'rvPpS2c8';

    constructor(private _http: Http) {}

    fetchBoard(bID: string = this.boardID){
        return this._http.get('https://api.trello.com/1/board/' + bID + '?key=' + this.key + '&token=' + this.token)
            .map(res => res.json());
    }

    fetchMember(username: string){
        if(username != null)
            return this._http.get('https://api.trello.com/1/members/' + username +
                '?fields=username,fullName,url&boards=all&board_fields=name&organizations=all&organization_fields=displayName&key=' +
                this.key + '&token=' + this.token);
    }

    fetchMembers(bID: string = this.boardID){
        return this._http.get('https://api.trello.com/1/board/' + bID + '/members?key=' + this.key + '&token=' + this.token)
            .map(res => res.json());
    }

    fetchLists(bID: string = this.boardID){
        return this._http.get('https://api.trello.com/1/board/' + bID + '/lists??cards=open&card_fields=name&fields=name&key=' +
            this.key + '&token=' + this.token).map(res => res.json());
    }

    fetchCards(bID: string = this.boardID){
        return this._http.get('https://api.trello.com/1/board/' + this.boardID + '/cards?fields=name,idList,url&key=' +
            this.key + '&token=' + this.token).map(res => res.json());
    }

    fetchListCards(listID: string){
        return this._http.get('https://api.trello.com/1/lists/' + listID + '/cards?key=' + this.key + '&token=' + this.token)
            .map(res => res.json());
    }

    setToken(t: string){
        this.token = t;
    }

    setKey(k: string){
        this.key = k;
    }

    setBoard(b: string){
        this.boardID = b;
    }
}
