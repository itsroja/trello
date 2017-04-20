import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Card } from '../models/card';
import { Board } from '../models/board';
import { TrelloService } from '../services/trello.service';


@Injectable()
export class DataService {
    private _boards: Array<Board>;

    constructor(private http: Http, private trelloService: TrelloService) {
      var allLists: Array<Array<Card>> = new Array<Array<Card>>();

      // TODO: replace this placeholder data by pushing
      var list1: Array<Card> = new Array<Card>();
      var list2: Array<Card> = new Array<Card>();
      var list3: Array<Card> = new Array<Card>();
      list1.push(new Card('Forms to sign', 'there are various forms'+
            ' that need to be signed ASAP.')
      );
      list1.push(new Card('Forms to sign', 'there are various forms'+
            ' that need to be signed ASAP.')
      );
      allLists.push(list1);
      allLists.push(list1);
      allLists.push(list1);


      var board: Board = new Board('New Hire Onboarding', '1', allLists);
      var board2: Board = new Board('Number 2', 'b', allLists);

      this._boards = new Array<Board>();
      this._boards.push(board);
      this._boards.push(board2);


      /* simple demo of making http GET request to API */
      /*
      this.http.get('https://reqres.in/api/users')
        .subscribe(data => {
            console.log(data.json().data);
        });
      */
        // this.trelloService.trello.get('/members/' + '58ca8f04eb51a20b3c2d7f26' + '/boards',
        //     (boardData) => {
        //       for (let board of boardData) {
        //         // var board: Board = new Board(board.name, board.id,)
        //       }
        //     }, null);
    }

    public getBoard(id: string): Board {
      for (let board of this._boards) {
        if (board.id === id) {
            return board;
        }
      }
      return null;
    }

    public getBoards(): Array<Board> {
        return this._boards;
    }

    public getCard(): Card {
      return new Card('hello', 'this is a message');
    }
}
