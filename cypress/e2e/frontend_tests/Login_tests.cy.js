import LoginActions from '../actions/LoginActions';

describe('Teste de Login', () => {

  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Login de falha', () => {
    LoginActions.visitLoginPage();
    // credenciais de login com falha 
    LoginActions.login('pedro123@teste.com', '000000');
  });

  it('Login de Sucesso', () => {
    LoginActions.visitLoginPage();
    // credenciais de login com sucesso
    LoginActions.login('fulano@qa.com','teste');
  });

});
