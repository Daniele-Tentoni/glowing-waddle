describe('The shop workflow', () => {
  it('You want to add to chart a new theme', () => {
    cy.visit('/shop');
    cy.get('[data-test="cart-icon-button"]').should('have.text', '0');
    cy.get('button[data-test="to-chart"]').eq(0).click();
    cy.get('[data-test="cart-icon-button"]').should('have.text', '1');
    cy.contains('button', 'Remove').click();
    cy.get('[data-test="cart-icon-button"]').should('have.text', '0');
  });

  it('You want to filter visible themes', () => {
    cy.visit('/shop');
    cy.get('[data-test="cart-item-card"]').should('have.length', 101);
    cy.get('[data-test="text-filter"]').type('Aristotele');
    cy.get('[data-test="cart-item-card"]').should('have.length', 1);
    cy.get('[data-test="text-filter"]').find('input').clear();
    cy.get('[data-test="cart-item-card"]').should('have.length', 101);
    cy.get('button[data-test="to-chart"]').eq(0).click();
    cy.get('[data-test="owned-filter"]').find('input').check();
    cy.get('[data-test="cart-item-card"]').should('have.length', 100);
    cy.get('button[data-test="to-chart"]').eq(1).click();
    cy.get('[data-test="owned-filter"]').find('input').check();
    cy.get('[data-test="cart-item-card"]').should('have.length', 99);
  });
});
