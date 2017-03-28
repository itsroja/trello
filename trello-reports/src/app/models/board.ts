import { Card } from './card';

export class Board {
  constructor(public title: string, public id: number, public cardlists: Array<Array<Card>>) {

  }
}
