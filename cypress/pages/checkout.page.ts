class CheckoutPage {
  elements = {
    nameInput: () => cy.contains('label', 'First Name').parent(),
    quantityPlusButton: () => cy.contains('+'),
    continueButton: () => cy.contains('Continue'),
    finishButton: () => cy.contains('Finish'),
  };

  verifyCheckoutFormIsDisplayed(): void {
    cy.contains('Checkout: Your Information').should('be.visible');
  }

  fillCheckoutForm(checkoutFormConfig: { name: string; lastName: string; zipCode: string }): void {
    cy.contains('label', 'First Name').siblings('input').type(checkoutFormConfig.name);
    cy.contains('label', 'Last Name').siblings('input').type(checkoutFormConfig.lastName);
    cy.contains('label', 'Zip Code').siblings('input').type(checkoutFormConfig.zipCode);
  }

  clickContinueBtn(): void {
    this.elements.continueButton().click();
  }

  verifyProductNameInCart(productName: string): void {
    cy.contains(productName).should('be.visible');
  }

  verifyQuantity(quantityOfItems: number): void {
    cy.contains('Quantity')
      .parent()
      .find('span')
      .invoke('text')
      .then((quantityText) => {
        expect(quantityText.trim()).to.eq(quantityOfItems.toString());
      });
  }

  clickFinishBtn(): void {
    this.elements.finishButton().click();
  }

  verifyOrderSentMessageIsDisplayed(): void {
    cy.contains('Thank you for your order!').should('be.visible');
  }
}

export const checkoutPage = new CheckoutPage();
