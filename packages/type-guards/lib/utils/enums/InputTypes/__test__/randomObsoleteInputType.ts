import { faker } from '@faker-js/faker';
import { ObsoleteInputType, OBSOLETE_INPUT_TYPES } from '../InputTypes';

export const randomObsoleteInputType = () =>
	faker.helpers.arrayElement(OBSOLETE_INPUT_TYPES) as ObsoleteInputType;
