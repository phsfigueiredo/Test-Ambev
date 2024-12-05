import { faker } from '@faker-js/faker';

Cypress.Commands.add('cadastroFrontfalha', () => {
  // Gera dados aleatórios para o cadastro
  const generatedName = faker.name.firstName();
  const generatedPassword = faker.internet.password();

  cy.visit('https://front.serverest.dev/cadastrarusuarios');
  cy.get('[data-testid=nome]').click().type(generatedPassword);
  cy.get('[data-testid=email]').click().type(generatedPassword);
  cy.get('[data-testid=password]').click().type(generatedName);
  cy.get('[data-testid=cadastrar]').click();

  // Verifica se a URL ainda é a mesma da página de cadastro
  cy.url().should('eq', 'https://front.serverest.dev/cadastrarusuarios');
});

Cypress.Commands.add('cadastroFrontsucesso', () => {
  // Gera dados aleatórios para o cadastro
  const generatedName = faker.name.firstName();
  const generatedEmail = faker.internet.email();
  const generatedPassword = faker.internet.password();
  
  cy.visit('https://front.serverest.dev/cadastrarusuarios');

  // Usa alias para garantir que os elementos sejam corretamente acessados
  cy.get('[data-testId=nome]').as('nomeInput');
  cy.get('[data-testId=email]').as('emailInput');
  cy.get('[data-testId=password]').as('passwordInput');
  cy.get('[data-testId=cadastrar]').as('cadastrarButton');

  cy.get('@nomeInput').click().type(generatedName);
  cy.get('@emailInput').click().type(generatedEmail);
  cy.get('@passwordInput').click().type(generatedPassword);
  cy.get('@cadastrarButton').click();

  // Verifica se a mensagem de sucesso é exibida
  cy.get('.alert.alert-dismissible.alert-primary').should('be.visible');

  // Verifica se a URL foi redirecionada corretamente
  cy.url().should('include', '/home');
});




Cypress.Commands.add('loginFrontfalha', (email, password) => {
  cy.intercept('POST', 'https://serverest.dev/login').as('loginRequest');

  cy.log('Iniciando o teste de login');
  cy.visit('https://front.serverest.dev/login');
  cy.get('[data-testid=email]').click().type(email);
  cy.get('[data-testid=senha]').click().type(password);
  cy.get('[data-testid=entrar]').click();

  cy.wait('@loginRequest', { timeout: 10000 }).then((interception) => {
    cy.log('Requisição de login interceptada');
    assert.isNotNull(interception.response.body, 'Login response body is not null');
    expect(interception.response.statusCode).to.eq(401);
    expect(interception.response.body.message).to.eq('Email e/ou senha inválidos');
  });

  cy.url().should('eq', 'https://front.serverest.dev/login');
});

Cypress.Commands.add('loginFrontsucesso', (email, password) => {
  cy.intercept('POST', 'https://serverest.dev/login').as('loginRequest');
  cy.intercept('GET', 'https://serverest.dev/usuarios').as('usuariosRequest');
  cy.intercept('GET', 'https://serverest.dev/produtos').as('produtosRequest');

  cy.log('Iniciando o teste de login');
  cy.visit('https://front.serverest.dev/login');
  cy.get('[data-testid=email]').click().type(email);
  cy.get('[data-testid=senha]').click().type(password);
  cy.get('[data-testid=entrar]').click();

  cy.wait('@loginRequest', { timeout: 10000 }).then((interception) => {
    cy.log('Requisição de login interceptada');
    assert.isNotNull(interception.response.body, 'Login response body is not null');
    expect(interception.response.statusCode).to.eq(200);
  });

  cy.wait('@usuariosRequest', { timeout: 10000 }).then((interception) => {
    cy.log('Requisição de usuários interceptada');
    assert.isNotNull(interception.response.body, 'Usuários response body is not null');
    expect(interception.response.statusCode).to.eq(200);
  });

  cy.wait('@produtosRequest', { timeout: 10000 }).then((interception) => {
    cy.log('Requisição de produtos interceptada');
    assert.isNotNull(interception.response.body, 'Produtos response body is not null');
    expect(interception.response.statusCode).to.eq(200);
  });

  cy.url().should('eq', 'https://front.serverest.dev/home');
});

Cypress.Commands.add('pesquisa', () => {
  cy.get('[data-testid="pesquisar"]').click().type('playstation');
  cy.get('[data-testid="botaoPesquisar"]').click();
  cy.get(':nth-child(1) > .card-body > .card-title');
  // verifica se tem algo na busca verificando se existe
  cy.get('.card').should('contain', 'Playstation 5');
});

Cypress.Commands.add('pesquisavazia', () => {
  cy.get('[data-testid="pesquisar"]').click().type('pedro henrique figueiredo');
  cy.get('[data-testid="botaoPesquisar"]').click();
  
  // Verifica se não há resultados na busca
  cy.get(':nth-child(1) > .card-body > .card-title').should('not.exist');
});

/////////////////////////////////// Backend ///////////////////////////

Cypress.Commands.add('login', (usuario, senha) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      "email": usuario,
      "password": senha
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.statusText).to.eq("OK");
    expect(response.body.message).to.eq("Login realizado com sucesso");
    cy.log(response.body.authorization);
  });
});

Cypress.Commands.add('loginfailed', (usuario, senha) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      "email": usuario,
      "password": senha
    },
    failOnStatusCode: false // Permite que o teste continue mesmo que o status da resposta não seja 2xx
  }).then((response) => {
    expect(response.status).to.not.eq(200);
    expect(response.statusText).to.not.eq("OK");
    expect(response.body.message).to.not.eq("Login realizado com sucesso");
    cy.log('Login falhou conforme esperado');
  });
});

Cypress.Commands.add('token', () => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      email: login.email,
      password: login.password
    }
  }).then((response) => {
    return response.body.authorization;
  }).then((log) => {
    cy.log('Logado com ' + login.email);
  });
});

Cypress.Commands.add('cadastroUsuariovalido', () => {
  const login = faker.internet.email();
  const nome = faker.name.firstName();
  const password = faker.internet.password();
  
  cy.request({
    method: 'POST',
    url: '/usuarios',
    body: {
      nome: nome,
      email: login,
      password: password,
      administrador: "true"
    }, 
    failOnStatusCode: false
  });

  cy.getUsuario().then((response) => {
    console.log(response);

    // Verifica se no response há um usuário com o nome e login
    expect(response.some(item => item.email === login)).to.be.true;
    expect(response.some(item => item.nome === nome)).to.be.true;
    cy.log('Usuário cadastrado com sucesso');
    cy.log('nome: ' + nome);
    cy.log('email: ' + login);
  });
});

Cypress.Commands.add('cadastroUsuariofalha', () => {
  const login = faker.internet.email();
  const password = faker.internet.password();
  
  cy.request({
    method: 'POST',
    url: '/usuarios',
    body: {
      nome: password,
      email: password,
      password: login,
      administrador: "true"
    }, 
    failOnStatusCode: false
  });

  cy.getUsuario().then((response) => {
    console.log(response);

    // Verifica se no response há um usuário com o email
    expect(response.some(item => item.email === login)).to.be.true;
    cy.log('Usuário cadastrado não encontrado');
    cy.log('email: ' + login);
  });
});

Cypress.Commands.add('getUsuario', () => {
  cy.request({
    method: 'GET',
    url: '/usuarios',
  }).then((response) => {
    return response.body.usuarios;
  });
});
