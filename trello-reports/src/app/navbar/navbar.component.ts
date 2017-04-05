import { Component, OnInit } from '@angular/core';

import { Board } from '../models/board';
import { DataService } from '../services/data.service';
import { BroadcastService }  from '../services/broadcast.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public myBoards: Array<Board>;

  constructor(public dataService: DataService,
      public broadcastService: BroadcastService) {

  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    /* fetch the board with the given id */
    this.myBoards = this.dataService.getBoards();
  }

  public boardSelected(board: Board) {
      /* broadcast the event that a board was selected */
      this.broadcastService.getBoardIdBroadcast().next(board.id);
  }

}
