import { faker } from '@faker-js/faker';
import { AUTOCOMPLETE_ATTR_VALUES } from '../AutocompleteAttrValues';

export const randomeAutocompleteAttrValue = () =>
	faker.helpers.arrayElement(AUTOCOMPLETE_ATTR_VALUES);
