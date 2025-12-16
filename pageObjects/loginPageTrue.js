import Creds from '../Cypress/fixtures/creds';
 
class LoginPage {

 elementsHeader = {
    logInButton: () => cy.get('button[class*="header_signin"]'), 
  }

  loginField = {
    emailField: () => cy.get('input[name="email"]'),
    passwordField: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('app-signin-modal button[type="button"][class*="btn-primary"]'),
  }
   garage = {
    addCarButton: () => cy.get('button[class*="btn-primary"]'),
    carBrandSelector: () => cy.get('select[name="carBrandId"]'),
    carModelSelector: () => cy.get('select[name="carModelId"]'),
    mileageField: () => cy.get('input[name="mileage"]'),
    addPaticularCarButton: () => cy.get('app-add-car-modal button[class*="btn-primary"]'),
  }

  fuelExpenses = {
    clickOnFuelExpensesTab: () => cy.get('a[href="/panel/expenses"]'),
    addFuelExpenseButton: () => cy.get('button[class*="btn-primary"]'),
    dateField: () => cy.get('button[type="button"][class*="date-picker"]'),
    selectNextDay: () => cy.get('[class*="ngb-dp-day"]').contains(new Date().getDate() - 1),
    mileageField: () => cy.get('input[name="mileage"]'),
    numberOfLitersField: () => cy.get('input[name="liters"]'),
    totalCostField: () => cy.get('input[name="totalCost"]'),
    addCarButton: () => cy.get('app-add-expense-modal button[class*="btn-primary"]'),
  }

  logIn() {
    this.elementsHeader.logInButton().click();
    this.loginField.emailField().type('sfasdf@gmail.com');
    this.loginField.passwordField().type('sdfdsfa#$34ER', { sensitive: true });
    this.loginField.loginButton().click();
  }

  addCar() {
    this.garage.addCarButton().first().click();
    this.garage.carBrandSelector().select('BMW');
    this.garage.carModelSelector().select('5');
    this.garage.mileageField().type('50000');
    this.garage.addPaticularCarButton().click();
  }
  
  fuelExpensesTab() {
    this.fuelExpenses.clickOnFuelExpensesTab().first().click();
    this.fuelExpenses.addFuelExpenseButton().click();
    this.fuelExpenses.dateField().click();
    this.fuelExpenses.selectNextDay().click();
    this.fuelExpenses.mileageField().type('0.3');
    this.fuelExpenses.numberOfLitersField().type('4.4');
    this.fuelExpenses.totalCostField().type('100000');
    this.fuelExpenses.addCarButton().click();
  }
  

}
  

export default new LoginPage();