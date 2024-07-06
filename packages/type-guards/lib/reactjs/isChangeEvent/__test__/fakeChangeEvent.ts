import type { ChangeEvent } from 'react';
import { fakeSyntheticEvent } from '@/reactjs/isSyntheticEvent/__test__';

export const fakeChangeEvent = <T = Element>({ ...overrideProps } = {}) =>
	({
		...fakeSyntheticEvent<T>(),
		type: 'change',
		...overrideProps,
	} as unknown as ChangeEvent<T> & Record<string, unknown>);
