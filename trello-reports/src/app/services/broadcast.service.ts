import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Board } from '../models/board';

@Injectable()
export class BroadcastService {
  private _boardIdBroadcast: Subject<string>;
  private _boardListUpdateBroadcast: Subject<Array<Board>>;

  constructor() {
    this._boardIdBroadcast = new Subject();
    this._boardListUpdateBroadcast = new Subject();
  }

  public getBoardIdBroadcast() {
    return this._boardIdBroadcast;
  }

  public getBoardListUpdateBroadcast() {
      return this._boardListUpdateBroadcast;
  }
}
