/**************
 * Contact Functional tests
 **************/

describe('Contact Functional tests', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.wait(500);
    cy.visit(Cypress.config('baseUrlLocal'));
  });




});

// const user = {
//   firstname: faker.person.firstName(),
//   lastname: faker.person.lastName(),
//   email: faker.internet.email(),
//   message: faker.lorem.paragraph(),
// };

// cy.fillContactForm(user);

// cy.get('[data-cy="submit-button"]').click();