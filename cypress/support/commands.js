// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Commande pour les data-cy : 
Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args)
})

// Commande pour générer un fakeUser : 
Cypress.Commands.add("fillContactForm", (user) => {
  if (user.firstname) {
    cy.getBySel('contact-form-inputFirstname').type(user.firstname);
  }

  if (user.lastname) {
    cy.getBySel('contact-form-inputLastname').type(user.lastname);
  }

  if (user.email) {
    cy.getBySel('contact-form-inputEmail').type(user.email);
  }

  if (user.message) {
    cy.getBySel('contact-form-inputMessage').type(user.message);
  }
});
