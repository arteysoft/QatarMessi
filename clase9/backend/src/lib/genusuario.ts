import { Usuario } from '../interfaces/Usuario'

const faker = require('faker');
const uuid = require('uuid');


export function crearObjetoFake():Usuario {
    return {
        id : uuid.v4(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        country: faker.address.country(),
        accountName: faker.finance.accountName(),
        account: faker.finance.account(),
        amount: faker.finance.amount()
    }
}
