import { FayaPage } from './app.po';

describe('faya App', () => {
  let page: FayaPage;

  beforeEach(() => {
    page = new FayaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
