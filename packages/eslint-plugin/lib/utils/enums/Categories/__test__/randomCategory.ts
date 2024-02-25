import { faker } from '@faker-js/faker';
import { CATEGORIES } from '../Categories';

export const randomCategory = () => faker.helpers.arrayElement(CATEGORIES);
