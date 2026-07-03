// describe('Visual comparison - Home Page', () => {

//   beforeEach(() => {
//     cy.viewport(1920, 1080);
//     cy.wait(500);
//   });

//   it('Capture the page locally', () => {
//     cy.visit(Cypress.config('baseUrlLocal'));

//     // Afficher la hauteur du document et du body (vu par Cypress)
//     cy.document().then((doc) => {
//       console.log("documentElement :", doc.documentElement.scrollHeight);
//       console.log("body :", doc.body.scrollHeight);
//     });

//     // Identification de quel élément défile avec le scroll: Si scrollY reste à 0, cela voudra dire que ce n'est pas la fenêtre qui défile
//     cy.window().then((win) => {
//       console.log("Avant scroll :", win.scrollY);

//       win.scrollTo(0, 5000);

//       console.log("Après scroll :", win.scrollY);
//     });

//     cy.scrollTo('bottom');
//     cy.scrollTo('top');


//     cy.screenshot('home-local', {
//       capture: 'fullPage'
//     });
//   });

//   it('Capture the page in production', () => {
//     cy.visit(Cypress.config('baseUrlProduction'));

//     // Afficher la hauteur du document et du body (vu par Cypress)
//     cy.document().then((doc) => {
//       console.log("documentElement :", doc.documentElement.scrollHeight);
//       console.log("body :", doc.body.scrollHeight);
//     });

//     // Identification de quel élément défile avec le scroll : Si scrollY reste à 0, cela voudra dire que ce n'est pas la fenêtre qui défile
//     cy.window().then((win) => {
//       console.log("Avant scroll :", win.scrollY);

//       win.scrollTo(0, 5000);

//       console.log("Après scroll :", win.scrollY);
//     });

//     cy.scrollTo('bottom');
//     cy.scrollTo('top');

//     cy.screenshot('home-prod', {
//       capture: 'fullPage'
//     });
//   });

// });