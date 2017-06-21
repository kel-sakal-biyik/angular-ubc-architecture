import { ShellPage } from './app.po';

describe('shell App', () => {
  let page: ShellPage;

  beforeEach(() => {
    page = new ShellPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
