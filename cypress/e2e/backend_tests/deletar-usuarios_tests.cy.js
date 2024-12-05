describe('Deletar e listar usuários', () => {

    it('Deletar falha', () => {
        cy.cadastroUsuariofalha().then((response) => {
            console.log(response);
        });
    });

    it('Deletar sucesso', () => {
        cy.request({
            url: '/usuarios',
            method: 'GET'
        }).then((response) => {
            let id = response.body.usuarios[1]._id;
            cy.request({
                url: 'usuarios/' + id,
                method: 'DELETE'
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eql("Registro excluído com sucesso");
                
                cy.request({
                    url: '/usuarios/' + id,
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
