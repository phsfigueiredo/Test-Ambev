describe('Teste de Login APPI', () => {

    it('Login POST sucesso', () => {
    cy.login("fulano@qa.com", "teste").then((response) => {
        console.log(response)
    })
    });


    it('Login POST falha', () => {
        cy.loginfailed("pedro@qa.com", "teste").then((response) => {
            console.log(response)
        })
        });
    

});
