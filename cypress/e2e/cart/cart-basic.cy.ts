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
        const firstProductName = productsPage.getProductNameByIndex(0);
        productsPage.clickAddToCartBtnByIndex(0);
        productsPage.clickCartHeaderBtn();
        cartPage.verifyProductNameInList(firstProductName);
    })
})