import { Component, OnInit } from '@angular/core';

import { Board } from '../models/board';
import { DataService } from '../services/data.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public myBoards: Array<Board>;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    /* fetch the board with the given id */
    this.myBoards = this.dataService.getBoards();
  }

}
