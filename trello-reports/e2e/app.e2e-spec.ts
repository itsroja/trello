import { TrelloReportsPage } from './app.po';

describe('trello-reports App', () => {
  let page: TrelloReportsPage;

  beforeEach(() => {
    page = new TrelloReportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
