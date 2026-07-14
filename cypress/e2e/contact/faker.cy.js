import { fakeUser } from "../../support/fakerData";
//ES module exige d'écrire l'extension .js dans le chemin de l'import

describe('Faker test for contact form', () => {
    it('Generate a random user', () => {
        const user = fakeUser();
        console.log('User: ', user);
        cy.log(JSON.stringify(user));
    });
});