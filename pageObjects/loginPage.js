import Creds from '../Cypress/fixtures/creds';

class  LoginPage {

  elementsHeader = {
    signInButton: () => cy.get('button[class*="header_signin"]'), 
  }

  loginField = {
    emailField: () => cy.get('input[name="email"]'),
    passwordField: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="button"][class*="link"]'),
    registrationButton: () => cy.get('button[type="button"][class*="btn-link"]'),
  }

  registrationField = {
    firstNameField: () => cy.get('input[name="name"]'),
    lastNameField: () => cy.get('input[name="lastName"]'),
    emailField: () => cy.get('input[name="email"]'),
    passwordField: () => cy.get('input[name="password"]'),
    reEnterPasswordField: () => cy.get('input[name="repeatPassword"]'),
    registrationButton: () => cy.get('button[type="button"][class*="primary"]'),
    logoutButton: () => cy.get('[class*="text-danger"]'),
    errorMessage: () => cy.get('.invalid-feedback')
  }


  logIn() {
    this.elementsHeader.signInButton().click();
    this.loginField.emailField().type(Creds.login.email);
    this.loginField.passwordField().type(Creds.login.password, { sensitive: true });
    this.loginField.loginButton().click();
  }

  signUpWithValidCreds(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.firstName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
  }

  signUpWithEmptyFirstName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.emptyName);
    this.registrationField.lastNameField().type(Creds.login.firstName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
     this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithShortFirstName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.shortName);
    this.registrationField.lastNameField().type(Creds.login.firstName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithLongFirstName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.longName);
    this.registrationField.lastNameField().type(Creds.login.firstName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithInvalidFirstName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.invalidName);
    this.registrationField.lastNameField().type(Creds.login.firstName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithSpacedInFirstName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.nameWithSpaces);
    this.registrationField.lastNameField().type(Creds.login.firstName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  /////////
   signUpWithEmptyLastName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.emptyName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithShortLastName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.shortName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithLongLastName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithInvalidLastName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.invalidName);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click(); 
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithSpacesInLastName(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.nameWithSpaces);
    this.registrationField.emailField().type(Creds.login.email);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }
/////////
  signUpWithEmptyEmail(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.emptyName);
    this.registrationField.emailField().type(Creds.login.emptyEmail);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithInvalidEmail(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.shortName);
    this.registrationField.emailField().type(Creds.login.invalidEmail);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithSpacesEmail(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.password);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }
/////////
  signUpWithEmptyPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.emptyName);
    this.registrationField.emailField().type(Creds.login.emptyEmail);
    this.registrationField.passwordField().type(Creds.login.emptyPassword);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithShortPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.shortName);
    this.registrationField.emailField().type(Creds.login.invalidEmail);
    this.registrationField.passwordField().type(Creds.login.shortPassword);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithLongPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.longPassword);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithSmallLettersPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.passwordWithSmallLetters);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithBigLettersPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.passwordWithBigLetters);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithPasswordWithoutNumbers(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.passwordWithoutNumbers);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }

  signUpWithSpacedPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.passwordWithSpaces);
    this.registrationField.reEnterPasswordField().type(Creds.login.password);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }
//////
  signUpWithEmptySecondPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.passwordWithSpaces);
    this.registrationField.reEnterPasswordField().type(Creds.login.emptySecondPassword);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }
  signUpWithDifferentSecondPassword(){
    this.elementsHeader.signInButton().click();
    this.loginField.registrationButton().click();
    this.registrationField.firstNameField().type(Creds.login.firstName);
    this.registrationField.lastNameField().type(Creds.login.longName);
    this.registrationField.emailField().type(Creds.login.emailWithSpaces);
    this.registrationField.passwordField().type(Creds.login.passwordWithSpaces);
    this.registrationField.reEnterPasswordField().type(Creds.login.differenSecondPassword);
    this.registrationField.registrationButton().click();
    this.registrationField.errorMessage.should('be.visible')
  }


  
  

  
  
 
}

export default new LoginPage();