import { SocAppPage } from './app.po';

describe('soc-app App', () => {
  let page: SocAppPage;

  beforeEach(() => {
    page = new SocAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
