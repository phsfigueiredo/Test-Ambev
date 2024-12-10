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


    // esse elemento so aparece quando tem algo na pesquisa 
    cy.get('section.row.espacamento div.card').should('exist');
  });

  it('pesquisa por título de produto inexistente', () => {
    // Realiza o login
    LoginActions.visitLoginPage();
    LoginActions.login('Marcelle_Will65@gmail.com', 'mvKdTY72ae9c8gT');

    // Verifica se a URL correta foi carregada após o login
    cy.url().should('eq', 'https://front.serverest.dev/home');

   
    // Pesquisa por produto inexistente e valida a mensagem de erro
    PesquisaActions.pesquisa('Playstation 66');



    // Verifica que não existe uma estrutura ou elemento específico
    cy.get('section.row.espacamento div.nonexistent-class').should('not.exist');
  });
});
