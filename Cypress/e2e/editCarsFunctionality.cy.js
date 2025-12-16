import LoginPage from '../../pageObjects/loginPageTrue.js';

describe('Test of garage functionality', () => {
    beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: Cypress.env('authUser'),  
        password: Cypress.env('authPassword'),
      }
    });
  });
  

  it('Should create a car and edit cars values with Fuel expences tab.', () => {
    LoginPage.elementsHeader.logInButton().click();
    LoginPage.loginField.emailField().type(Cypress.env('userEmail'));
    LoginPage.loginField.passwordField().type(Cypress.env('userPassword'), { sensitive: true });
    LoginPage.loginField.loginButton().click();
    
    cy.url().should('include', '/panel/garage');

    LoginPage.addCar();

    cy.get('[class*="car_name"]')
     .should('be.visible')
     .and('contain.text', 'BMW 5');
    LoginPage.fuelExpensesTab();
    cy.get('#carSelectDropdown')
      .should('be.visible')
      .and('contain.text', 'BMW 5');
  });

});