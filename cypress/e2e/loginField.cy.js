import ForstudyPage from '../../pageObjects/loginPage.js';
import Creds from '../fixtures/creds.js';

describe('Login test', () => {
    beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: Creds.auth.username,  
        password: Creds.auth.password
      }
    });
  });
  it('The header buttons should be visible', () => {
    const headerElements = Object.values(ForstudyPage.elementsHeader);
    headerElements.forEach((element) => {
      element().should('be.visible');
    });
  });

  it('The footer buttons should be visible', () => {
     const footerElements = Object.values(ForstudyPage.elementsFooter);
     footerElements.forEach((element) => {
      element().should('be.visible');
    });
 
  });
});