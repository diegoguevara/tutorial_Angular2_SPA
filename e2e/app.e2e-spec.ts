import { ProyectoDePruebaPage } from './app.po';

describe('proyecto-de-prueba App', () => {
  let page: ProyectoDePruebaPage;

  beforeEach(() => {
    page = new ProyectoDePruebaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
