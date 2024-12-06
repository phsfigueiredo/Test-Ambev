describe('Deletar e listar usuários', () => {

    it('Deletar falha', () => {
        cy.cadastroUsuariofalha().then((response) => {
            console.log(response);
            expect(response.status).to.not.equal(201);
           
        });
    });

    it('Deletar sucesso', () => {
        cy.getUsuarios().then((usuarios) => {
          const id = usuarios[1]._id;
          cy.deletarUsuario(id).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eql("Registro excluído com sucesso");
    
            cy.request({
              url: `/usuarios/${id}`,
              method: 'GET',
              failOnStatusCode: false // Adiciona esta linha para não falhar em status 400
            }).then((response) => {
              // No response não deve haver nada, pois o ID foi excluído
              expect(response.status).to.eq(400);
              expect(response.body.message).to.eql("Usuário não encontrado");
            });
          });
        });
      });
    });
    