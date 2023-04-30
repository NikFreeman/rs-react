describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('input').should('have.value', 'random');
    cy.get('button').should('have.text', 'Search');
  });
});
