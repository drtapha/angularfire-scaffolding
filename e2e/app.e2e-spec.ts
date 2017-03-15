import { SbmPage } from './app.po';

describe('sbm App', function() {
  let page: SbmPage;

  beforeEach(() => {
    page = new SbmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
