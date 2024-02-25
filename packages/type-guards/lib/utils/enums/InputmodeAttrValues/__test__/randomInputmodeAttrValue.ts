import { faker } from '@faker-js/faker';
import { INPUTMODE_ATTR_VALUES } from '../InputmodeAttrValues';

export const randomInputmodeAttrValue = () =>
	faker.helpers.arrayElement(INPUTMODE_ATTR_VALUES);
