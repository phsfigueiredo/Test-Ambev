// CadastroActions.js
import CadastroPage from '../pages/CadastroPage.js';
import { faker } from '@faker-js/faker';

class CadastroActions {
  visitCadastroPage() {
    CadastroPage.visit();
  }

  fillName(name) {
    cy.get(CadastroPage.nameInput).clear().type(name);
  }

  fillEmail(email) {
    cy.get(CadastroPage.emailInput).clear().type(email);
  }

  fillPassword(password) {
    cy.get(CadastroPage.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(CadastroPage.submitButton).click();
  }

  cadastro(name, email, password, confirmPassword) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillPassword(password);
    if (confirmPassword) {
      cy.get(CadastroPage.passwordInput).clear().type(confirmPassword);
    }
    this.submit();
  }

  cadastroComFalha() {
    const name = faker.name.firstName();
    const password = faker.internet.password();
    this.cadastro(name, password, password, 'differentPassword');
  }

  cadastroComSucesso() {
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    this.cadastro(name, email, password, password);
    return { email, password };
  }
}

export default new CadastroActions();
