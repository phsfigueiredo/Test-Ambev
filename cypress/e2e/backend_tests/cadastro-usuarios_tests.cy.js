describe('Cadastrar e listar usuários', () => {

    it('Cadastro de falha', () => {
        cy.cadastroUsuariofalha().then((response) => {
            console.log(response);
        });
    });

    it('Cadastro de sucesso', () => {
        cy.cadastroUsuariovalido().then((response) => {
            console.log(response);

           
        });
    });
});
