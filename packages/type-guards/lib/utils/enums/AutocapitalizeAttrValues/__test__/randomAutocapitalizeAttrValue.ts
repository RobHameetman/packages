import { faker } from '@faker-js/faker';
import { AUTOCAPITALIZE_ATTR_VALUES } from '../AutocapitalizeAttrValues';

export const randomAutocapitalizeAttrValue = () =>
	faker.helpers.arrayElement(AUTOCAPITALIZE_ATTR_VALUES);
