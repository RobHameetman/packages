import type { BaseStatement } from 'estree';
import { fakeBaseNode } from './fakeBaseNode';

export const fakeBaseStatement = ({ perf = true, ...overrideProps }: Record<string, unknown> = {}) => {
	const baseStatement: Partial<BaseStatement> = fakeBaseNode({ perf, ...overrideProps });

	return {
		...baseStatement,
		...overrideProps,
	} as BaseStatement;
};
