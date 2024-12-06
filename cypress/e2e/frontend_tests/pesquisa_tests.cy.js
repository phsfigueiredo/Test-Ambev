import LoginActions from '../actions/LoginActions.js';
import PesquisaActions from '../actions/PesquisaActions.js';

describe('Teste de Login e Pesquisa', () => {
  beforeEach(() => {
    // Limpa cookies e armazenamento local antes de cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  afterEach(() => {
    // Limpa cookies e armazenamento local após cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('pesquisa por título de produto existente', () => {
    // Realiza o login
    LoginActions.visitLoginPage();
    LoginActions.login('Marcelle_Will65@gmail.com', 'mvKdTY72ae9c8gT');

    // Verifica se a URL correta foi carregada após o login
    cy.url().should('eq', 'https://front.serverest.dev/home');

 
    // Pesquisa por produto existente e valida o resultado esperado
    PesquisaActions.pesquisa('generic');
  });

  it('pesquisa por título de produto inexistente', () => {
    // Realiza o login
    LoginActions.visitLoginPage();
    LoginActions.login('Marcelle_Will65@gmail.com', 'mvKdTY72ae9c8gT');

    // Verifica se a URL correta foi carregada após o login
    cy.url().should('eq', 'https://front.serverest.dev/home');

   
    // Pesquisa por produto inexistente e valida a mensagem de erro
    PesquisaActions.pesquisa('Playstation 66');
  });
});
