import { UIEvent } from 'react';
import { isUIEvent } from '@/reactjs/isUIEvent';
import { fakeUIEvent } from '@/reactjs/isUIEvent/__test__';
import { noop } from '@/utils/functions/noop';

export const mockUIEventHandler = <T = Element>(
	callback: (e: UIEvent<T>) => void = noop,
) =>
	jest.fn((e: UIEvent<T> = fakeUIEvent()) => {
		if (isUIEvent(e)) {
			callback(e);
		}
	});
