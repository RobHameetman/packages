import type { ClassBody } from 'estree';
import { faker } from '@faker-js/faker';

export const fakeClassBody = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const classBody: Partial<ClassBody> = {
		type: 'ClassBody',
	};

	if (!perf) {
		classBody.body = [] as ClassBody['body'];
	}

	return {
		...classBody,
		...overrideProps,
	} as ClassBody;
};
