import PesquisaPage from '../pages/PesquisaPage.js';

class PesquisaActions {
  constructor() {
    this.pesquisaPage = new PesquisaPage();
  }

  visitPesquisaPage() {
    this.pesquisaPage.visit();
  }

  pesquisa(titulo) {
    this.pesquisaPage.search(titulo);
  }


}

export default new PesquisaActions();
