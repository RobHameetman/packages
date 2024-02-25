import type { Directive } from 'estree';
import { faker } from '@faker-js/faker';

export const fakeDirective = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const directive: Partial<Directive> = {
		type: 'ExpressionStatement',
	};

	if (!perf) {
		directive.expression = {} as Directive['expression'];
		directive.directive = faker.lorem.word();
	}

	return {
		...directive,
		...overrideProps,
	} as Directive;
};
