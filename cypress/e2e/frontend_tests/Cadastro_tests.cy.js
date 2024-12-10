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

    //Como a p[agina nao tem validaçao de erro, valida se ainda esta na pagina de cadastro
    cy.url().should('eq', 'https://front.serverest.dev/cadastrarusuarios');
    
  });
  
  });

  it('Cadastro com sucesso', () => {
    CadastroActions.visitCadastroPage();
    const { email, password } = CadastroActions.cadastroComSucesso(); // Captura os dados gerados

    // Logando as informações
    cy.log('Usuário cadastrado com sucesso');
    cy.log('Email: ' + email);
    cy.log('Senha: ' + password);


// Valida se a mensagem de sucesso está presente na página
cy.get('.alert-link')
.should('be.visible')
.and(($el) => {
  expect($el.text()).to.equal('Cadastro realizado com sucesso');

  });
});

