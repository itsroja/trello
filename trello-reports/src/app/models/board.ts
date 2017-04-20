import { Card } from './card';

export class Board {
  constructor(public title: string, public id: string, public cardlists: Array<Array<Card>>) {

  }
}
