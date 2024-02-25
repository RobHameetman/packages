import { faker } from '@faker-js/faker';
import { AnyInputType, ALL_INPUT_TYPES } from '../InputTypes';

export const randomAnyInputType = () =>
	faker.helpers.arrayElement(ALL_INPUT_TYPES) as AnyInputType;
