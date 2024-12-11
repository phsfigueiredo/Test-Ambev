import { faker } from '@faker-js/faker';
//comando de login back-end Suceeso (com dados validos)
Cypress.Commands.add('login', (usuario, senha) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      email: usuario,
      password: senha
    }
  });
});

//comando de login back-end falha (com dados invalidos)
Cypress.Commands.add('loginfailed', (usuario, senha) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      email: usuario,
      password: senha
    },
    failOnStatusCode: false // Permite que o teste continue mesmo que o status da resposta não seja 2xx
  });
});

// comando que faz login e gera token 
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


//comando de cadastro back-end(com dados validos)
Cypress.Commands.add('cadastroUsuariovalido', () => {
  const login = faker.internet.email();
  const nome = faker.name.firstName();
  const password = faker.internet.password();
  
  return cy.request({
    method: 'POST',
    url: '/usuarios',
    body: {
      nome: nome,
      email: login,
      password: password,
      administrador: "true"
    }, 
    failOnStatusCode: false
  }).then((response) => {
    return { response, login, nome };
  });
});


//comando de cadastro back-end(com dados invalidos)
Cypress.Commands.add('cadastroUsuariofalha', () => {
  const login = faker.internet.email();
  const password = faker.internet.password();
  
  return cy.request({
    method: 'POST',
    url: '/usuarios',
    body: {
      nome: password,
      email: password,
      password: login,
      administrador: "true"
    }, 
    failOnStatusCode: false
  }).then((response) => {
    return { response, login, password };
  });
});

//comando de busca de usuário com id no back-end
Cypress.Commands.add('getUsuario', (id) => {
  return cy.request({
    method: 'GET',
    url: `/usuarios/${id}`,
    failOnStatusCode: false
  }).then((response) => {
    return response.body;
  });
});


//comando de exclusão de usuário com id no back-end
Cypress.Commands.add('deletarUsuario', (id) => {
  return cy.request({
    method: 'DELETE',
    url: `/usuarios/${id}`,
    failOnStatusCode: false
  }).then((response) => {
    return response;
  });
});

//comando de busca de todos os usuários no back-end
Cypress.Commands.add('getUsuarios', () => {
  return cy.request({
    method: 'GET',
    url: '/usuarios',
    failOnStatusCode: false
  }).then((response) => {
    return response.body.usuarios;
  });
});