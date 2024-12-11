import LoginPage from '../pages/loginPage.js';

class LoginActions {
  visitLoginPage() {
    LoginPage.visit();
  }

  fillEmail(email) {
    cy.get(LoginPage.emailInput).clear().type(email);
  }

  fillPassword(password) {
    cy.get(LoginPage.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(LoginPage.submitButton).click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginActions();
