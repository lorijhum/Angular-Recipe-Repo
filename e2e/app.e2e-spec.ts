import { NewAngAppPage } from './app.po';

describe('new-ang-app App', () => {
  let page: NewAngAppPage;

  beforeEach(() => {
    page = new NewAngAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
