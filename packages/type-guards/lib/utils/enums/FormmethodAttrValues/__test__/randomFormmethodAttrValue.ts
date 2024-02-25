import { faker } from '@faker-js/faker';
import { FORMMETHOD_ATTR_VALUES } from '../FormmethodAttrValues';

export const randomFormmethodAttrValue = () =>
	faker.helpers.arrayElement(FORMMETHOD_ATTR_VALUES);
