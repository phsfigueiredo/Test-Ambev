import CadastroActions from '../actions/CadastroActions.js';

describe('Teste de Cadastro', () => {
  afterEach(() => {
    // Limpa cookies e armazenamento local após cada teste
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Cadastro com falha', () => {
    CadastroActions.visitCadastroPage();
    CadastroActions.cadastroComFalha();
  });

  it('Cadastro com sucesso', () => {
    CadastroActions.visitCadastroPage();
    const { email, password } = CadastroActions.cadastroComSucesso(); // Captura os dados gerados

    // Logando as informações
    cy.log('Usuário cadastrado com sucesso');
    cy.log('Email: ' + email);
    cy.log('Senha: ' + password);
  });
});
