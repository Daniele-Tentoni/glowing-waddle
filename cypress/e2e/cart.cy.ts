describe('The cart', () => {
  it('should be empty when you open the app', () => {
    cy.visit('/cart');
    cy.contains('span', 'Your cart is empty.');
  });

  it('should contains items added from store', () => {
    cy.buy(4);
    cy.get('[data-test="cart-icon-button"]').should('have.text', '4');
  });
});
