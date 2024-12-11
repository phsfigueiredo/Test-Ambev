// CadastroPage.js
const CadastroPage = {
  nameInput: '[data-testid="nome"]',
  emailInput: '[data-testid="email"]',
  passwordInput: '[data-testid="password"]',
  submitButton: '[data-testid="cadastrar"]',
  visit(baseUrl = 'https://front.serverest.dev') {
    cy.visit(`${baseUrl}/cadastrarusuarios`);
  }
};

export default CadastroPage;
