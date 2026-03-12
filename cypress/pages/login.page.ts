class LoginPage {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('button[type="submit"]'),
  };

  visit(): void {
    cy.visit('/login');
  }

  fillEmail(email: string): void {
    this.elements.emailInput().type(email);
  }

  fillPassword(password: string): void {
    this.elements.passwordInput().type(password);
  }

  clickLogin(): void {
    this.elements.loginButton().click();
  }

  verifyInvalidCredsMessageIsDisplayed(): void {
    cy.contains('Neither email nor password matched.').should('be.visible');
  }
}

export const loginPage = new LoginPage();
