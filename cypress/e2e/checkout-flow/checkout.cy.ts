import { loginPage } from '../../pages/login.page';
import { productsPage } from '../../pages/products.page';
import { cartPage } from '../../pages/cart.page';
import { checkoutPage } from '../../pages/checkout.page';

describe('Checkout Flow Tests', () => {
  beforeEach(() => {
    const validCreds = { email: 'test@qabrains.com', password: 'Password123' };
    loginPage.login(validCreds);
    productsPage.verifyProductsPageIsDisplayed();
  });

  it('should successfully add a product to the cart and proceed to checkout', () => {
    productsPage.getProductNameByIndex(0).then((firstProductName) => {
      productsPage.clickAddToCartBtnByIndex(0);
      productsPage.clickCartHeaderBtn();
      cartPage.verifyProductNameInCart(firstProductName, true);
      cartPage.clickCheckoutBtn();
      checkoutPage.verifyCheckoutFormIsDisplayed();
    });
  });

  it('should successfully add a product to the cart and execute complete checkout with payment', () => {
    productsPage.getProductNameByIndex(0).then((firstProductName) => {
      const checkoutFormConfig = { name: 'Jack', lastName: 'Nice', zipCode: '6000' };

      productsPage.clickAddToCartBtnByIndex(0);
      productsPage.clickCartHeaderBtn();
      cartPage.verifyProductNameInCart(firstProductName, true);
      cartPage.clickCheckoutBtn();
      checkoutPage.verifyCheckoutFormIsDisplayed();
      checkoutPage.fillCheckoutForm(checkoutFormConfig);
      checkoutPage.clickContinueBtn();
      checkoutPage.verifyProductNameInCart(firstProductName);
      checkoutPage.verifyQuantity(1);
      checkoutPage.clickFinishBtn();
      checkoutPage.verifyOrderSentMessageIsDisplayed();
    });
  });
});
