import { OperatorPage } from './app.po';

describe('operator App', () => {
  let page: OperatorPage;

  beforeEach(() => {
    page = new OperatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
