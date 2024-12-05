const { faker } = require('@faker-js/faker');

describe('Teste de Login', () => {

  afterEach(() => {
    // Limpa cookies e armazenamento local após cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('pesquisa por titulo de produto', () => {
    // Realiza o login
    cy.loginFrontsucesso('pedro96figueiredo@teste.com', 'Teste123');
    cy.pesquisa();
  });

  it('pesquisa vazia', () => {
    // Realiza o login
    cy.loginFrontsucesso('pedro96figueiredo@teste.com', 'Teste123');
    cy.pesquisavazia();
  });

});
