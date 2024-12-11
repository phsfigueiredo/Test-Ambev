// cypress/e2e/pages/LoginPage.js

const LoginPage = {
  emailInput: 'input[name="email"]',
  passwordInput: 'input[name="password"]',
  submitButton: 'button[type="submit"]',
  visit(baseUrl = 'https://front.serverest.dev') {
    cy.visit(`${baseUrl}/login`);
  }
};

export default LoginPage;
