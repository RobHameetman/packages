import { faker } from '@faker-js/faker';
import { FORMENCTYPE_ATTR_VALUES } from '../FormenctypeAttrValues';

export const randomeFormenctypeAttrValue = () =>
	faker.helpers.arrayElement(FORMENCTYPE_ATTR_VALUES);
