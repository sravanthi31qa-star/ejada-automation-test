import { faker } from '@faker-js/faker';

export function generateRandomCheckoutDetails() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    postalCode: faker.location.zipCode('#####'),
  };
}
