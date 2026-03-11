class CartPage {

    elements = {
    productNameInCart: (productName: string) => cy.contains(productName),
    }

    verifyProductNameInList(productName: Cypress.Chainable<string>): void {
    productName.then((name) => {
    cy.contains(name).should('be.visible')
    })
    }

}

export const cartPage = new CartPage()