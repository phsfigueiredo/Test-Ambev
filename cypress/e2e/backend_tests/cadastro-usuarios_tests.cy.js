// cypress/e2e/usuarios_tests.cy.js

describe('Cadastrar e listar usuários', () => {

    it('Cadastro de falha', () => {
      cy.cadastroUsuariofalha().then(({ response }) => {
        cy.log(response.status);
        expect(response.status).to.not.equal(201); // Verifica que a requisição falhou
      });
    });
  
    it('Cadastro de sucesso', () => {
        cy.cadastroUsuariovalido().then(({ response, login, nome }) => {
          cy.log(response.status);
          expect(response.body.message).to.equal('Cadastro realizado com sucesso');
          const id = response.body._id;
          cy.log(`ID do usuário cadastrado: ${id}`); // Imprime o ID do usuário
    
          // Busca o usuário cadastrado
          cy.getUsuario(id).then((response) => {
            expect(response).to.not.be.undefined; // Verifica que o usuário foi encontrado
            cy.log(`Usuário encontrado: ${JSON.stringify(response)}`);
          });
        });
      });
  });
  