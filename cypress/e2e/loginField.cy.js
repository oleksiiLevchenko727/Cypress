import loginPage from '../pageObjects/loginPage.js';
import Creds from '../fixtures/creds.js'


describe('Login test', () => {
  it('Should log in', () => {
    cy.visit('/');
    loginPage.login(Creds.adminCreds.email, Creds.adminCreds.password);
  });
});