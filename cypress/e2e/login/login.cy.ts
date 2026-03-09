import { loginPage } from "../../pages/login.page"

describe('Login Tests', () => {
  it('should successfully login and display products container', () => {
    loginPage.visit();
    loginPage.fillEmail('test@qabrains.com');
    loginPage.fillPassword('Password123');
    loginPage.clickLogin();
    cy.get('.products').should('be.visible');
  })
})