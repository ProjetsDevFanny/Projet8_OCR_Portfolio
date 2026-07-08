/**************
 * Functional tests
 **************/

describe('Functional tests', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.wait(500);
    cy.visit(Cypress.config('baseUrlLocal'));
  });

  /**
   * Functional tests titles & subtitles
   **************************************/
  describe('Functional tests titles & subtitles', () => {

    it('should display the title', () => {
      cy.getBySel('hero').should('be.visible');
      cy.getBySel('hero-title').should('be.visible');
    });

    it('should display the subtitle', () => {
      cy.getBySel('hero-subtitle').should('be.visible');
    });
  });


  /**
   * Functional tests description
   **************************************/
  describe('Functional tests description ', () => {

    it('should display the description', () => {
      cy.getBySel('hero-description').should('be.visible');
    });
  });


  /**
   * Functional tests important note
   **************************************/
  describe('Functional tests important note', () => {
    it('should display the important note', () => {
      cy.getBySel('hero-important-note').should('be.visible');
    });



    /**
     * Functional tests social links
     **************************************/
    describe('Functional tests social links', () => {

      describe('Functional gitHub link', () => {
        it('should display the gitHub link', () => {
          cy.getBySel('hero-social-links-github').should('be.visible');
        });

        it('should have the correct GitHub link', () => {
          cy.getBySel('hero-social-links-github')
            .should('have.attr', 'href')
            .and('have.attr', 'target', '_blank')
            .and('include', 'https://github.com/ProjetsDevFanny');
        });
      });


      describe('Functional linkedIn link', () => {
        it('should display the linkedIn link', () => {
          cy.getBySel('hero-social-links-linkedin').should('be.visible');
        });

        it('should have the correct LinkedIn link', () => {
          cy.getBySel('hero-social-links-linkedin')
            .should('have.attr', 'href')
            .and('have.attr', 'target', '_blank')
            .and('include', 'https://www.linkedin.com/in/fannysimon-dev-web/');
        });
      });
    });
  });
});



