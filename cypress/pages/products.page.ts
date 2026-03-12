class ProductsPage {
  elements = {
    productName: (index: number) => cy.get('a.text-lg').eq(index),
    addToCartButton: (index: number) => cy.contains('Add to cart').eq(index),
    cartHeaderButton: () => cy.get('#ecommerce-header').find('span[role="button"]'),
  };

  getProductNameByIndex(index: number): Cypress.Chainable<string> {
    return this.elements.productName(index).invoke('text');
  }

  clickAddToCartBtnByIndex(index: number): void {
    this.elements.addToCartButton(index).click();
  }

  clickCartHeaderBtn(): void {
    this.elements.cartHeaderButton().click();
  }
}

export const productsPage = new ProductsPage();
