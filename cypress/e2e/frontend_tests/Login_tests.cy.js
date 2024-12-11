
import LoginActions from '../actions/LoginActions';
import CadastroActions from '../actions/CadastroActions.js';

describe('Teste de Login', () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Login de falha', () => {
    LoginActions.visitLoginPage();
    // credenciais de login com falha 
    LoginActions.login('pedro123@teste.com', '000000');

    // Validação do alerta de erro
    cy.get('.alert.alert-secondary.alert-dismissible').should('be.visible')
      .and('contain', 'Email e/ou senha inválidos');
  });

  it('Login de Sucesso', () => {
    // faz um cadastro valido para gerar massa
    CadastroActions.visitCadastroPage();
    const { email, password } = CadastroActions.cadastroComSucesso(); // Captura os dados gerados

    // Logando as informações
    LoginActions.visitLoginPage();
    // credenciais de login com sucesso
    LoginActions.login(email, password);

    // Verifica se o elemento h1 contém "Serverest Store"
    cy.get('h1').should('contain.text', 'Serverest Store');

    // Verifica se o elemento h4 contém "produtos"
    cy.get('h4').should('contain.text', 'Produtos');

    // Verifica se está na URL correta
    cy.url().should('eq', 'https://front.serverest.dev/home');
  });
});
