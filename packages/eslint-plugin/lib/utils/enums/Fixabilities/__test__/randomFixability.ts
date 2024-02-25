import { faker } from '@faker-js/faker';
import { FIXABILITIES } from '../Fixabilities';

export const randomFixability =
	() => faker.helpers.arrayElement(FIXABILITIES);
