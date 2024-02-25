import { faker } from '@faker-js/faker';
import { TARGET_ATTR_VALUES } from '../TargetAttrValues';

export const randomTargetAttrValue = () =>
	faker.helpers.arrayElement(TARGET_ATTR_VALUES);
