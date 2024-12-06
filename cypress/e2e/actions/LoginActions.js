class LoginActions {
  visitLoginPage() {
    cy.visit('https://front.serverest.dev/login'); // Ajuste para a URL correta
  }

  login(username, password) {
    cy.get('input[name="email"]').clear().type(username);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();


  }
}

export default new LoginActions();
