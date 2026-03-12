import { loginPage } from '../../pages/login.page';
import { productsPage } from '../../pages/products.page';

describe('Login Tests', () => {
  describe('Login Positive Tests', () => {
    const validCreds = { email: 'test@qabrains.com', password: 'Password123' };

    it('should successfully login with valid credentials and display products container', () => {
      loginPage.login(validCreds);
      productsPage.verifyProductsPageIsDisplayed();
    });
  });

  describe('Login Negative Tests', () => {
    const invalidCreds = { email: 'testtttttt@qabrains.com', password: 'Password123555' };

    it('should not be able to login with invalid credentials', () => {
      loginPage.login(invalidCreds);
      loginPage.verifyInvalidCredsMessageIsDisplayed();
    });
  });
});
