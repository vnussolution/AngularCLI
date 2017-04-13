import { MySassAppPage } from './app.po';

describe('my-sass-app App', () => {
  let page: MySassAppPage;

  beforeEach(() => {
    page = new MySassAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('truc works!');
  });
});
