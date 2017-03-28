import { Component, OnInit } from '@angular/core';

import { Card } from '../models/card';

@Component({
  selector: 'cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  public title: string;
  public cardlist: Array<Card> = [];

  constructor() {
  }

  ngOnInit() {
    this.title = 'Before First Day';
    this.cardlist.push(new Card('Forms to sign', 'there are various forms'+
      ' that need to be signed ASAP.')
    );
    this.cardlist.push(new Card('Forms to sign', 'there are various forms'+
      ' that need to be signed ASAP.')
    );
    this.cardlist.push(new Card('Forms to sign', 'there are various forms'+
      ' that need to be signed ASAP.')
    );
    this.cardlist.push(new Card('Forms to sign', 'there are various forms'+
      ' that need to be signed ASAP.')
    );
  }

}
