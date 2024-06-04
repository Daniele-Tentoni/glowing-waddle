describe('The cart', () => {
  it('should be empty when you open the app', () => {
    cy.visit('/cart');
    cy.url().should('include', 'cart');
    cy.contains('span', 'Your cart is empty.');
  });

  it('should contains items added from store', () => {
    cy.buy(4);
    cy.visit('/cart');
    cy.get('[data-test="cart-icon-button"]').should('have.text', '4');
    cy.get('button[data-test="remove-button"]').eq(0).click();
    cy.get('[data-test="cart-icon-button"]').should('have.text', '3');
  });

  it('With items you can proceed to checkout', () => {
    cy.buy(1);
    cy.visit('/cart');
    cy.get('button[data-test="checkout-button"]').should('not.have.property', 'disabled');
    cy.get('button[data-test="checkout-button"]').click();
    cy.get('.v-card-title').should('include.text', 'Checkout');
    cy.contains('button', 'Close').click();

    cy.get('button[data-test="checkout-button"]').click();
  });
});
