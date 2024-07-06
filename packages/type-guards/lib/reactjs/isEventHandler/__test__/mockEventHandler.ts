import { SyntheticEvent } from 'react';
import { isSyntheticEvent } from '@/reactjs/isSyntheticEvent';
import { fakeSyntheticEvent } from '@/reactjs/isSyntheticEvent/__test__';
import { noop } from '@/utils/functions/noop';

export const mockEventHandler = <T = Element>(
	callback: (e: SyntheticEvent<T>) => void = noop,
) =>
	jest.fn((e: SyntheticEvent<T> = fakeSyntheticEvent()) => {
		if (isSyntheticEvent(e)) {
			callback(e);
		}
	});
