

/**************
 * Visual comparison (hero banner local and production)
 **************/
describe('Visual comparison (hero banner local and production)', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.wait(500);
  });

  it('Capture the hero banner locally', () => {
    cy.visit(Cypress.config('baseUrlLocal'));

    // cy.screenshot('heroBanner-local', {
    //   capture: 'fullPage'
  });
});

it('Capture the hero banner in production', () => {
  cy.visit(Cypress.config('baseUrlProduction'));

  // cy.screenshot('heroBanner-production', {
  //   capture: 'fullPage'
});
