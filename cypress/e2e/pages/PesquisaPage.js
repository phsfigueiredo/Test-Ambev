// cypress/e2e/pages/PesquisaPage.js

const PesquisaPage = {
  searchInput: '[data-testid="pesquisar"]',
  searchButton: '[data-testid="botaoPesquisar"]',
  visit(baseUrl = 'https://front.serverest.dev') {
    cy.visit(`${baseUrl}/home`);
  }
};

export default PesquisaPage;
