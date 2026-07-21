import { faker } from '@faker-js/faker';

export const fakeUser = () => {
    return {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: faker.internet.email(),
        message: faker.lorem.paragraph(),
       // Génère un paragraphe (idéal pour un champ textarea)
    }
}

// Test rapide (pendant le développement)
// const user = fakeUser();
// console.log('User: ', user);