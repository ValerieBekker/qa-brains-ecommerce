import { loginPage } from "../../pages/login.page";
import { productsPage } from "../../pages/products.page";
import { cartPage } from "../../pages/cart.page";

describe('Cart Basic Functionality Tests', () => {

    beforeEach(() => {
    loginPage.visit();
    loginPage.fillEmail('test@qabrains.com');
    loginPage.fillPassword('Password123');
    loginPage.clickLogin();
    cy.get('.products').should('be.visible');
    })

    it('should successfully add a product to the cart', () => {
    productsPage.getProductNameByIndex(0).then((firstProductName) => {
    productsPage.clickAddToCartBtnByIndex(0)
    productsPage.clickCartHeaderBtn()
    cartPage.verifyProductNameInCart(firstProductName, true)
    })
    })

   it('should successfully remove a product from the cart', () => {
  productsPage.getProductNameByIndex(0).then((firstProductName) => {
    productsPage.clickAddToCartBtnByIndex(0)
    productsPage.clickCartHeaderBtn()
    cartPage.verifyProductNameInCart(firstProductName, true)
    cartPage.clickRemoveBtn()
    cy.contains('Removed from cart').should('be.visible')
    cartPage.verifyProductNameInCart(firstProductName, false)
  })
})

   it('should update product quantity in the cart correctly', () => {
  productsPage.getProductNameByIndex(0).then((firstProductName) => {
    productsPage.clickAddToCartBtnByIndex(0)
    productsPage.clickCartHeaderBtn()
    cartPage.verifyProductNameInCart(firstProductName, true)
    cartPage.verifyQuantity(1);
    cartPage.clickQuantityPlusButton(2);
    cartPage.verifyQuantity(3);
  })
})
})