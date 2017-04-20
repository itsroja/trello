import { Component, OnInit } from '@angular/core';

import { Board } from '../models/board';
import { DataService } from '../services/data.service';
import { BroadcastService } from '../services/broadcast.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public name: string = 'Board 1';
  public myBoard: Board;

  constructor(private dataService: DataService,
      private broadcastService: BroadcastService) {
        broadcastService.getBoardIdBroadcast().subscribe(
            id => {
              this.loadData(id);
            },
            err => {

            },
            () => { /* called when completed */

            }
        );
  }

  ngOnInit() {
    /* load the first board by default; will be overridden by broadcastService*/
    this.loadData('1');
  }

  public loadData(id: string) {
    console.log('loading board with id: ' + id);
    /* fetch the board with the given id */
    this.myBoard = this.dataService.getBoard(id);
  }
}
