import { faker } from '@faker-js/faker';
import { InputType, INPUT_TYPES } from '../InputTypes';

export const randomInputType = () =>
	faker.helpers.arrayElement(INPUT_TYPES) as InputType;
