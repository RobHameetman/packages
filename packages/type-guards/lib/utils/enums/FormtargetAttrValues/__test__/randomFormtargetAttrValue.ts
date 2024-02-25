import { faker } from '@faker-js/faker';
import { FORMTARGET_ATTR_VALUES } from '../FormtargetAttrValues';

export const randomFormtargetAttrValue = () =>
	faker.helpers.arrayElement(FORMTARGET_ATTR_VALUES);
