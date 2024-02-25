import { faker } from '@faker-js/faker';
import { RULE_TYPES } from '../RuleTypes';

export const randomRuleType =
	() => faker.helpers.arrayElement(RULE_TYPES);
