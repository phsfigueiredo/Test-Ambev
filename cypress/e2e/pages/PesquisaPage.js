// cypress/e2e/pages/PesquisaPage.js

const pesquisaPageMap = {
  searchInput: '[data-testid=pesquisar]',
  searchButton: '[data-testid=botaoPesquisar]'
};

class PesquisaPage {
  visit() {
    cy.visit('https://front.serverest.dev/home'); // URL da página de pesquisa
  }

  clickSearchField() {
    cy.get(pesquisaPageMap.searchInput).click();
  }

  fillSearch(query) {
    cy.get(pesquisaPageMap.searchInput).type(query);
  }

  submit() {
    cy.get(pesquisaPageMap.searchButton).click();
  }

  search(query) {
    this.clickSearchField();
    this.fillSearch(query);
    this.submit();
  }
}

export default PesquisaPage;
