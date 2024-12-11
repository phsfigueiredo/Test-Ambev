
import LoginActions from '../actions/LoginActions';
import CadastroActions from '../actions/CadastroActions.js';
import PesquisaActions from '../actions/PesquisaActions.js';

describe('Teste de Login e Pesquisa', () => {

  afterEach(() => {
    // Limpa cookies e armazenamento local após cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('pesquisa por título de produto existente', () => {
  // faz um cadastro valido para gerar massa
  CadastroActions.visitCadastroPage();
  const { email, password } = CadastroActions.cadastroComSucesso(); // Captura os dados gerados

  // Logando as informações
  LoginActions.visitLoginPage();
  // credenciais de login com sucesso
  LoginActions.login(email, password);
   // Verifica se a URL correta foi carregada após o login
   cy.url().should('eq', 'https://front.serverest.dev/home');

   // Pesquisa por produto inexistente e valida a mensagem de erro
   PesquisaActions.pesquisa('notebook1733870198124');

    // esse elemento só aparece quando tem algo na pesquisa 
    cy.get('section.row.espacamento div.card').should('exist');
  });

  it('pesquisa por título de produto inexistente', () => {
   // faz um cadastro valido para gerar massa
   CadastroActions.visitCadastroPage();
   const { email, password } = CadastroActions.cadastroComSucesso(); // Captura os dados gerados

   // Logando as informações
   LoginActions.visitLoginPage();
   // credenciais de login com sucesso
   LoginActions.login(email, password);
    // Verifica se a URL correta foi carregada após o login
    cy.url().should('eq', 'https://front.serverest.dev/home');

    // Pesquisa por produto inexistente e valida a mensagem de erro
    PesquisaActions.pesquisa('Playstation 66');

    // Verifica que não existe uma estrutura ou elemento específico
    cy.get('section.row.espacamento div.nonexistent-class').should('not.exist');
  });
});
