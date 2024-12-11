// cypress/e2e/actions/PesquisaActions.js
import PesquisaPage from '../pages/PesquisaPage.js';

class PesquisaActions {
  visitPesquisaPage() {
    PesquisaPage.visit();
  }

  clickSearchField() {
    cy.get(PesquisaPage.searchInput).click();
  }

  fillSearch(query) {
    cy.get(PesquisaPage.searchInput).clear().type(query);
  }

  submit() {
    cy.get(PesquisaPage.searchButton).click();
  }

  pesquisa(query) {
    this.clickSearchField();
    this.fillSearch(query);
    this.submit();
  }
}

export default new PesquisaActions();
