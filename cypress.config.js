import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  // signifie que Cypress interdit l'utilisation de l'ancienne API Cypress.env() et pousse à utiliser les nouvelles API (cy.env() ou Cypress.expose()) pour gérer les variables d'environnement. C'est une mesure de sécurité et de modernisation. Pour ton portfolio, tu n'utilises probablement aucune variable d'environnement Cypress, donc cette ligne ne va rien changer à tes tests.

  e2e: {
    baseUrl: "http://localhost:3001",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
