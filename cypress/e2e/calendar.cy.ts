describe('The calendar', () => {
  it('should be visible at homepage', () => {
    cy.visit('/');
    cy.get('.v-list-subheader').should('have.text', 'Available calendars');
    cy.get('.text-h4').should('have.text', '1');
    cy.contains('button', 'Strappa').click();
    cy.get('.text-h4').should('have.text', '2');
  });
});
