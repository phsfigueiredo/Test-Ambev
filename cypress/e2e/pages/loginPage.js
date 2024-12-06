// cypress/e2e/pages/LoginPage.js

const loginPageMap = {
  emailInput: 'input[name="email"]',
  passwordInput: 'input[name="password"]',
  submitButton: 'button[type="submit"]'
};

class LoginPage {
  visit() {
    cy.visit('https://front.serverest.dev/login'); // Substitua pela URL correta da página de login
  }

  fillEmail(email) {
    cy.get(loginPageMap.emailInput).type(email);
  }

  fillPassword(password) {
    cy.get(loginPageMap.passwordInput).type(password);
  }

  submit() {
    cy.get(loginPageMap.submitButton).click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default LoginPage;
