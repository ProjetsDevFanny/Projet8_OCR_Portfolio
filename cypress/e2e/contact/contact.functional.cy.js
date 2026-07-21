import { fakeUser } from "../../support/fakerData";

/**************
 * Contact Functional tests
 **************/

describe('Contact Functional tests', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080); // Taille écran desktop
    cy.viewport("macbook-16"); // Desktop
    cy.viewport("ipad-2"); // Tablette
    cy.viewport("iphone-x"); // Mobile
    cy.visit(Cypress.config('baseUrlLocal'));
  });

  describe("Display", () => {

    it("should display the contact form", () => {
      cy.getBySel('contact-form').should('be.visible');
    });

    it("should display all required fields", () => {
      cy.getBySel('contact-form-inputFirstname').should('be.visible');
      cy.getBySel('contact-form-inputLastname').should('be.visible');
      cy.getBySel('contact-form-inputEmail').should('be.visible');
      cy.getBySel('contact-form-inputMessage').should('be.visible');
    });
    
    it("should display the submit button", () => {
      cy.getBySel('contact-form-submitButton').should('be.visible');
    });
    
  });
  
  describe("Field validation", () => {
    
    it("should require the first name", () => {
      const user = fakeUser();

      cy.getBySel('contact-form-inputLastname').type(user.lastname);
      cy.getBySel('contact-form-inputEmail').type(user.email);
      cy.getBySel('contact-form-inputMessage').type(user.message);
      
      cy.fillContactForm(user);
      cy.getBySel('contact-form-submitButton').click();

    });

    it("should require the last name");

    it("should require the email");

    it("should require the message");

    it("should reject an invalid email address");

  });

  describe("Successful submission", () => {

    beforeEach(() => {
      // cy.intercept(...)
    });

    it("should submit the form with valid data");

    it("should display a success message");

    it("should clear or hide the form after submission");

  });

  describe("Submission errors", () => {

    beforeEach(() => {
      // cy.intercept(...)
    });

    it("should display an error message when the API returns an error");

    it("should keep the entered values after a failed submission");

  });

  describe("Security", () => {

    it("should sanitize XSS input in the first name");

    it("should sanitize XSS input in the last name");

    it("should sanitize XSS input in the message");

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