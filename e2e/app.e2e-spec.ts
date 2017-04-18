import { ResourcererPage } from './app.po';

describe('resourcerer App', function() {
  let page: ResourcererPage;

  beforeEach(() => {
    page = new ResourcererPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
