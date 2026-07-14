import { faker } from '@faker-js/faker';

export const fakeUser = () => {
    return {
        name: faker.person.firstName(),
        name: faker.person.lastName(),
        email: faker.internet.email(),
        message: faker.lorem.paragraph()
       // Génère un paragraphe (idéal pour un champ textarea)
    }
}

// Test rapide
const user = fakeUser();
console.log('User: ', user);