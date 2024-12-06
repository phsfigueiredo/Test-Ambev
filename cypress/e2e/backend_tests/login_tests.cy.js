// cypress/e2e/login_tests.cy.js

describe('Teste de Login API', () => {

    it('Login POST sucesso', () => {
      cy.login("fulano@qa.com", "teste").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq("OK");
        expect(response.body.message).to.eq("Login realizado com sucesso");
        cy.log(response.body.authorization);
        console.log(response);
      });
    });
  
    it('Login POST falha', () => {
      cy.loginfailed("pedro@qa.com", "teste").then((response) => {
        expect(response.status).to.not.eq(200);
        expect(response.statusText).to.not.eq("OK");
        expect(response.body.message).to.not.eq("Login realizado com sucesso");
        cy.log('Login falhou conforme esperado');
        console.log(response);
      });
    });
  
  });
  