const { faker } = require('@faker-js/faker');

describe('Teste de Login', () => {

  afterEach(() => {
    // Limpa cookies e armazenamento local após cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Login de falha', () => {
    // Realiza o login
    cy.loginFrontfalha('pedro123@teste.com', '000000');
  });




  it('Login de Sucesso', () => {

    // Realiza o login
    cy.loginFrontsucesso('pedro96figueiredo@teste.com', 'Teste123');
    
  });




});





