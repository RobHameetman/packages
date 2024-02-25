import { faker } from '@faker-js/faker';
import {
	fakeBlockStatement,
	fakeClassBody,
	fakeDirective,
	fakeMethodDefinition,
	fakeModuleDeclaration,
	fakePropertyDefinition,
	fakeStatement,
	fakeStaticBlock,
} from '../../../estree';

export const fakeBody = ({ ...overrideProps } = {}) => faker.helpers.arrayElement([
	faker.helpers.arrayElement([
		fakeStatement,
		fakeBlockStatement,
		fakeClassBody,
	])({ ...overrideProps }),
	Array.from(
		{ length: faker.datatype.number({ min: 1, max: 5 }) },
		() => fakeStatement({ ...overrideProps }),
	),
	Array.from(
		{ length: faker.datatype.number({ min: 1, max: 5 }) },
		() => faker.helpers.arrayElement([
			fakeMethodDefinition,
			fakePropertyDefinition,
			fakeStaticBlock,
		])({ ...overrideProps }),
	),
	Array.from(
		{ length: faker.datatype.number({ min: 1, max: 5 }) },
		() => faker.helpers.arrayElement([
			fakeDirective,
			fakeStatement,
			fakeModuleDeclaration,
		])({ ...overrideProps }),
	),
]);
