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
    describe('Functional tests important note text', () => {
      
      it('should display the important note', () => {
        cy.getBySel('hero-important-note').should('be.visible');
      });
    });
    
    describe('Functional tests important note hand', () => {
      it('should display the waving hand', () => {
        cy.getBySel('hero-important-note-hand')
          .should('be.visible');
      });
      it('should have the bounce animation', () => {
        cy.getBySel('hero-important-note-hand')
          .should('have.css', 'animation-name', 'bounce');
      });
    });
  });


    /**
     * Functional tests social links
    **************************************/
    describe('Functional tests social links', () => {

      describe('Functional gitHub link', () => {

        describe('Functional gitHub icon link', () => {

          it('should display the GitHub icon', () => {
            cy.getBySel('github-icon')
              .should('be.visible');
          });

          it('should load the gitHub icon', () => {
            cy.getBySel('github-icon')
            .should(($img) => {
              expect($img[0].naturalWidth).to.be.greaterThan(0);  // Not very intetesting to test because Vite already check before
            });
          });
          
          
          
        describe('Functional gitHub link details', () => {

          it('should display the gitHub link', () => {
            cy.getBySel('hero-social-links-github').should('be.visible')
          });

          it('should have the correct GitHub URL', () => {
            cy.getBySel('hero-social-links-github')
              .should('have.attr', 'href', 'https://github.com/ProjetsDevFanny')
          });

          it('should open GitHub in a new tab', () => {
            cy.getBySel('hero-social-links-github')
              .should('have.attr', 'target', '_blank');
          });
        });

        describe('Functional github link animation', () => {
          it('should animate github link  on hover', () => {

          });
        });
      

      describe('Functional linkedIn link', () => {

        describe('Functional linkedIn icon link', () => {

          it('should display the linkedIn icon', () => {
            cy.getBySel('linkedin-icon')
              .should('be.visible'); // but the icon could be broken..
          });

          it('should load the linkedIn icon', () => {
            cy.getBySel('linkedin-icon')
              .should(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0); // Not very intetesting to test because Vite already check before
              });
          })
        });


        describe('Functional linkedIn link details', () => {

          it('should display the linkedIn link', () => {
            cy.getBySel('hero-social-links-linkedin').should('be.visible')
          });

          it('should have the correct LinkedIn URL', () => {
            cy.getBySel('hero-social-links-linkedin')
              .should('have.attr', 'href', 'https://www.linkedin.com/in/fannysimon-dev-web/')    // Here for a strict link check 
          });

          it('should open LinkedIn in a new tab', () => {
            cy.getBySel('hero-social-links-linkedin')
              .should('have.attr', 'target', '_blank');
          });
        });

          // it('should have the correct LinkedIn link', () => {
          //   cy.getBySel('hero-social-links-linkedin')
          //     .should('have.attr', 'href') // check first if the link has an href attribute, it doesn't matter wich link is it
          //     .and('include', 'https://www.linkedin.com/in/fannysimon-dev-web/'); // then check if the link includes the correct LinkedIn profile


        describe('Functional linkedIn link animation', () => {
          it('should animate linkedIn link  on hover', () => {

          });
        });

        });
      });
    });
  });
});



