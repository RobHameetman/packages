import { faker } from '@faker-js/faker';

export const randomInvalidStringEnumValue = () => faker.datatype.boolean()
	? faker.lorem.word()
	: faker.string.sample();
