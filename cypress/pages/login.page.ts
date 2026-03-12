class LoginPage {
  elements = {
    emailInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('button[type="submit"]'),
  };

  visit(): void {
    cy.visit('/login');
  }

  login(creds: { email: string; password: string }): void {
    this.visit();
    this.elements.emailInput().type(creds.email);
    this.elements.passwordInput().type(creds.password);
    this.elements.loginButton().click();
  }

  verifyInvalidCredsMessageIsDisplayed(): void {
    cy.contains('Neither email nor password matched.').should('be.visible');
  }
}

export const loginPage = new LoginPage();
