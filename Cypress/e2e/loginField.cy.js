import LoginPage from '../../pageObjects/loginPage.js';
import Creds from '../fixtures/creds.js';

describe('Login test', () => {
    beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: Creds.auth.username,  
        password: Creds.auth.password,
      }
    });
  });


  it('Should create an account and authorize with valid credentials', () => {
    LoginPage.signUpWithValidCreds() 
    LoginPage.logIn() 
  });

  it('Should fill empty first name', () => {
    LoginPage.signUpWithEmptyFirstName() 
  });

  it('Should fill short first name', () => {
    LoginPage.signUpWithShortFirstName() 
  });

  it('Should fill long first name', () => {
    LoginPage.signUpWithLongFirstName() 
  });

  it('Should fill invalid first name', () => {
    LoginPage.signUpWithInvalidFirstName() 
  });

  it('Should fill spaced first name', () => {
    LoginPage.signUpWithSpacedInFirstName() 
  });


  it('Should fill empty last name', () => {
    LoginPage.signUpWithEmptyLastName() 
  });

  it('Should fill short last name', () => {
    LoginPage.signUpWithShortLastName() 
  });

  it('Should fill long last name', () => {
    LoginPage.signUpWithLongLastName() 
  });

  it('Should fill invalid last name', () => {
    LoginPage.signUpWithInvalidLastName() 
  });

  it('Should fill spaced last name', () => {
    LoginPage.signUpWithSpacesInLastName() 
  });

  it('Should fill spaced last name', () => {
    LoginPage.signUpWithSpacesInLastName() 
  });


  it('Should fill empty Email', () => {
    LoginPage.signUpWithEmptyEmail() 
  });

  it('Should fill invalid Email', () => {
    LoginPage.signUpWithInvalidEmail() 
  });

  it('Should fill spaced Email', () => {
    LoginPage.signUpWithSpacesEmail() 
  });

  
 it('Should fill empty password', () => {
    LoginPage.signUpWithEmptyPassword() 
  });
 it('Should fill short password', () => {
    LoginPage.signUpWithShortPassword() 
  });

 it('Should fill long password', () => {
    LoginPage.signUpWithLongPassword() 
  });

 it('Should fill small leters password', () => {
    LoginPage.signUpWithSmallLettersPassword() 
  });

 it('Should fill big leters password', () => {
    LoginPage.signUpWithBigLettersPassword() 
  }); 

 it('Should fill password without numbers', () => {
    LoginPage.signUpWithPasswordWithoutNumbers() 
  }); 

 it('Should fill password with spaces', () => {
    LoginPage.signUpWithSpacedPassword() 
  });  

  
 it('Should fill empty second password with spaces', () => {
    LoginPage.signUpWithEmptySecondPassword() 
  });  
 it('Should fill different second password with spaces', () => {
    LoginPage.signUpWithDifferentSecondPassword() 
  });  

});