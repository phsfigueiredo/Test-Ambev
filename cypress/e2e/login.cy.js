///<reference types="cypress" />



context('teste no cypress', () => {
    it('Cadastro ceub sucesso', () => {

        cy.visit('https://www.ea.uniceub.br/');
        cy.get('#btnAceitarPoliticasCookies').click()
        cy.get('#coAcesso').click()
        cy.get('#coAcesso').type('21853366')
        cy.get('#coSenha').click()
        cy.get('#coSenha').type('Pedro9101')
        cy.get('#btn-login').should('contain', 'Acessar')
        cy.get('#btn-login').click()
        cy.url().should('contains', 'https://www.ea.uniceub.br/Painel')
        

    });

    it('Cadastro ceub invalido', () => {

        cy.visit('https://www.ea.uniceub.br/');
        cy.get('#btnAceitarPoliticasCookies').click()
        cy.get('#coAcesso').click()
        cy.get('#coAcesso').type('21853366')
        cy.get('#coSenha').click()
        cy.get('#coSenha').type('00000000')
        cy.get('#btn-login').click()
        cy.get('.col-lg-10').should('contain', 'Login não efetuado. Verifique suas credenciais de acesso e tente novamente.')

    });

    // proximos testes
});