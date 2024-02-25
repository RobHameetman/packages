/**
 * Checks that the window object is `undefined`.
 *
 * @returns `true` if the window object is `undefined`.
 */
export const isServer = () =>
	typeof window === 'undefined';
