describe('Visual comparison - heroBanner section', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.wait(500);
  });

  it('Capture the page locally', () => {
    cy.visit(Cypress.config('baseUrlLocal'));

    cy.getBySel("hero").should('be.visible');
    cy.getBySel("hero-title").should('be.visible');

    cy.screenshot('heroBanner-local', {
      capture: 'fullPage'
    });
  });


  it('Capture the page in production', () => {
    cy.visit(Cypress.config('baseUrlProduction'));

    cy.getBySel("hero").should('be.visible');
    cy.getBySel("hero-title").should('be.visible');

    cy.screenshot('heroBanner-production', {
      capture: 'fullPage'
    });
  });

  // it('Compare the two screenshots', () => {
  //   cy.compareScreenshots('heroBanner-local', 'heroBanner-production');
  // });
});