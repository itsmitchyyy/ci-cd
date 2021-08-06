it('should navigate to registe', () => {
  cy.visit('http://localhost:3000');
  cy.get('[aria-controls="button-register"]').click();
});
