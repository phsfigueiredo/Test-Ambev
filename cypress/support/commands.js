import { faker } from '@faker-js/faker';







  


/////////////////////////////////// Backend ///////////////////////////


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

Cypress.Commands.add('getUsuario', (id) => {
  return cy.request({
    method: 'GET',
    url: `/usuarios/${id}`,
    failOnStatusCode: false
  }).then((response) => {
    return response.body;
  });
});

Cypress.Commands.add('deletarUsuario', (id) => {
  return cy.request({
    method: 'DELETE',
    url: `/usuarios/${id}`,
    failOnStatusCode: false
  }).then((response) => {
    return response;
  });
});
Cypress.Commands.add('getUsuarios', () => {
  return cy.request({
    method: 'GET',
    url: '/usuarios',
    failOnStatusCode: false
  }).then((response) => {
    return response.body.usuarios;
  });
});