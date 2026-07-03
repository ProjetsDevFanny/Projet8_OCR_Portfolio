describe('HeroBanner section', () => {


  describe('Visual comparison (hero banner local and production)', () => {

    beforeEach(() => {
      cy.viewport(1920, 1080);
      cy.wait(500);
    });

    it('Capture the hero banner locally', () => {
      cy.visit(Cypress.config('baseUrlLocal'));

      // cy.getBySel("hero").should('be.visible');
      // cy.getBySel("hero-title").should('be.visible');

      // cy.screenshot('heroBanner-local', {
      //   capture: 'fullPage'
      });
    });

    it('Capture the hero banner in production', () => {
      cy.visit(Cypress.config('baseUrlProduction'));

      // cy.get('[data-cy="hero"]').should('be.visible');
      // cy.getBySel("hero-title").should('be.visible');

      // cy.screenshot('heroBanner-production', {
      //   capture: 'fullPage'
      });
    });

    // it('Compare the two screenshots', () => {
    //   cy.compareScreenshots('heroBanner-local', 'heroBanner-production');
    // });
  });

  describe('Functional', () => {

    it('should display the title', () => {

    });

    it('should display the social links', () => {

    });

  });










});