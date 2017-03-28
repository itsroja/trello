import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Card } from '../models/card';
import { Board } from '../models/board';

@Injectable()
export class DataService {
    private _boards: Array<Board>;

    constructor(private http: Http) {
      var allLists: Array<Array<Card>> = new Array<Array<Card>>();
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


      var board: Board = new Board('New Hire Onboarding', 1, allLists);

      this._boards = new Array<Board>();
      this._boards.push(board);


      /* simple demo of making http GET request to API */
      /*
      this.http.get('https://reqres.in/api/users')
        .subscribe(data => {
            console.log(data.json().data);
        });
      */
    }

    public getBoard(id: number): Board {
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
