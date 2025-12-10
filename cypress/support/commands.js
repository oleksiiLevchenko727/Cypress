Cypress.Commands.add('loginByApi', () => {
  cy.request({
    method: 'POST',
    url: '/api/login', 
    body: {
      username: Cypress.env('guest'),
      password: Cypress.env('welcome2qauto')
    }
  }).then((resp) => {
    window.localStorage.setItem('authToken', resp.body.token); 
    cy.setCookie('session_id', resp.body.session_id); 
  });
});