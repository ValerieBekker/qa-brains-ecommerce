import { log } from 'console';
import { loginPage } from '../../pages/login.page';
import { productsPage } from '../../pages/products.page';

describe('Login Tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  describe('Login Positive Tests', () => {
    it('should successfully login with valid credentials and display products container', () => {
      loginPage.fillEmail('test@qabrains.com');
      loginPage.fillPassword('Password123');
      loginPage.clickLogin();
      productsPage.verifyProductsPageIsDisplayed();
    });
  });

  describe('Login Negative Tests', () => {
    it('should not be able to login with invalid credentials', () => {
      loginPage.fillEmail('testtttttt@qabrains.com');
      loginPage.fillPassword('Password123555');
      loginPage.clickLogin();
      loginPage.verifyInvalidCredsMessageIsDisplayed();
    });
  });
});
