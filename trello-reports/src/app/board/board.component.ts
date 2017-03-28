import { Component, OnInit } from '@angular/core';

import { Board } from '../models/board';
import { DataService } from '../services/data.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public name: string = 'Board 1';
  public myBoard: Board;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    /* fetch the board with the given id */
    this.myBoard = this.dataService.getBoard(1);
  }
}
