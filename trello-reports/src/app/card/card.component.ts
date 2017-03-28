import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../models/card';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public myCard: Card;

  @Input()
  public title: string;

  @Input()
  public description: string;


  constructor() {

  }

  ngOnInit() {
    // this.myCard = new Card('Forms to sign', 'there are various forms'+
    //   ' that need to be signed ASAP.');
    this.myCard = new Card(this.title, this.description);
  }

}
