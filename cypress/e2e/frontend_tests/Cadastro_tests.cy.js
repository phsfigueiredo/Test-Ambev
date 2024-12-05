const { faker } = require('@faker-js/faker');

describe('Teste de Cadastro', () => {

  afterEach(() => {
    // Limpa cookies e armazenamento local após cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Cadastro de falha', () => {
    // Realiza o cadastro com falha
    cy.cadastroFrontfalha();
  });

  it('Cadastro de Sucesso', () => {
    // Realiza o cadastro com sucesso
    cy.cadastroFrontsucesso();
  });
});
