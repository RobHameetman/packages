import type { UIEvent } from 'react';
import { fakeUIEvent } from '@/react/isUIEvent/__test__';
import { randomScrollEventType } from '@/utils/enums/ScrollEventTypes/__test__';

export const fakeScrollEvent = <T = Element>({
	capturing = false,
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeUIEvent<T>({ capturing }),
		type: randomScrollEventType(),
		...overrideProps,
	} as unknown as UIEvent<T> & globalThis.UIEvent & Record<string, unknown>);
