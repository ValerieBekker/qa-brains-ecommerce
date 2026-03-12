class CartPage {
  elements = {
    productNameInCart: (productName: string) => cy.contains(productName),
    removeButton: () => cy.contains('Remove'),
    quantityPlusButton: () => cy.contains('+'),
  };

  verifyProductNameInCart(productName: string, shouldBeVisible: boolean): void {
    cy.contains(productName).should(shouldBeVisible ? 'be.visible' : 'not.exist');
  }

  clickRemoveBtn(): void {
    this.elements.removeButton().click();
  }

  clickQuantityPlusButton(numberOfClicks: number): void {
    for (let i = 0; i < numberOfClicks; i++) {
      this.elements.quantityPlusButton().click();
    }
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
}

export const cartPage = new CartPage();
