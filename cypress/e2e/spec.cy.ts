describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('search bar', () => {
    cy.get('input').should('have.value', 'random');
    cy.get('input').should('exist');
  });
});
