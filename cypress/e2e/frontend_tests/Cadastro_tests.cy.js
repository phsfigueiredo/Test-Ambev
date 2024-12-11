
import CadastroActions from '../actions/CadastroActions.js';

describe('Teste de Cadastro', () => {
  afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Cadastro com falha', () => {
    CadastroActions.visitCadastroPage();
    CadastroActions.cadastroComFalha();
    cy.url().should('eq', 'https://front.serverest.dev/cadastrarusuarios');
  });

  it('Cadastro com sucesso', () => {
    CadastroActions.visitCadastroPage();
    const { email, password } = CadastroActions.cadastroComSucesso();

    cy.log('Usuário cadastrado com sucesso');
    cy.log('Email: ' + email);
    cy.log('Senha: ' + password);

    cy.get('.alert-link')
      .should('be.visible')
      .and(($el) => {
        expect($el.text()).to.equal('Cadastro realizado com sucesso');
      });
  });
});
