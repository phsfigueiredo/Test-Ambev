const cadastroPageMap = {
  nameInput: '[data-testid=nome]',
  emailInput: '[data-testid=email]',
  passwordInput: '[data-testid=password]',
  submitButton: '[data-testid=cadastrar]',
};

class CadastroPage {
  visit(baseUrl = 'https://front.serverest.dev') {
    cy.visit(`${baseUrl}/cadastrarusuarios`);
  }

  fillName(name) {
    cy.get(cadastroPageMap.nameInput).clear().type(name);
  }

  fillEmail(email) {
    cy.get(cadastroPageMap.emailInput).clear().type(email);
  }

  fillPassword(password) {
    cy.get(cadastroPageMap.passwordInput).clear().type(password);
  }



  submit() {
    cy.get(cadastroPageMap.submitButton).click();
  }

  cadastro(name, email, password) {
    this.fillName(name);
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default CadastroPage;
