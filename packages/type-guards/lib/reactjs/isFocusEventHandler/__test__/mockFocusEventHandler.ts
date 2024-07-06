import { FocusEvent } from 'react';
import { isFocusEvent } from '@/reactjs/isFocusEvent';
import { fakeFocusEvent } from '@/reactjs/isFocusEvent/__test__';
import { noop } from '@/utils/functions/noop';

export const mockFocusEventHandler = <T = Element>(
	callback: (e: FocusEvent<T>) => void = noop,
) =>
	jest.fn((e: FocusEvent<T> = fakeFocusEvent()) => {
		if (isFocusEvent(e)) {
			callback(e);
		}
	});
