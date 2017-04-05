import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Board } from '../models/board';

@Injectable()
export class BroadcastService {
  private _boardIdBroadcast: Subject<number>;

  constructor() {
    this._boardIdBroadcast = new Subject();
  }

  public getBoardIdBroadcast() {
    return this._boardIdBroadcast;
  }
}
