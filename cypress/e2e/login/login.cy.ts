import { loginPage } from '../../pages/login.page';

describe('Login Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  describe('Login Positive Tests', () => {
    it('should successfully login with valid credentials and display products container', () => {
      loginPage.fillEmail('test@qabrains.com');
      loginPage.fillPassword('Password123');
      loginPage.clickLogin();
      cy.get('.products').should('be.visible');
    });
  });

  describe('Login Negative Tests', () => {
    it('should not be able to login with invalid credentials', () => {
      loginPage.fillEmail('testtttttt@qabrains.com');
      loginPage.fillPassword('Password123555');
      loginPage.clickLogin();
      cy.contains('Neither email nor password matched.').should('be.visible');
    });
  });
});
