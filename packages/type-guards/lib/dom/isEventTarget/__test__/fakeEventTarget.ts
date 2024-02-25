import { isServer } from '@/utils/functions/isServer';

export const fakeEventTarget = ({
	ssr = isServer(),
	...overrideProps
}: Record<string, unknown> = {}) => {
	const eventTarget = !ssr ? new EventTarget() : {};

	const mock = (method: string) => {
		Object.defineProperty(eventTarget, method, {
			writable: false,
			value: method in overrideProps
				? overrideProps[method]
				: !ssr
					? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
						jest.fn((...args) => EventTarget.prototype[method](...args))
					: jest.fn(),
		});

		if (method in overrideProps) {
			delete overrideProps[method];
		}
	}

	mock('addEventListener');
	mock('dispatchEvent');
	mock('removeEventListener');

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(eventTarget, key) || {
			writable: false,
		};

		Object.defineProperty(eventTarget, key, {
			...prop,
			value,
		});
	});

	return eventTarget as EventTarget;
};
