/**
 * Checks that the window object is not `undefined`.
 *
 * @returns `true` if the window object is not `undefined`.
 */
export const isBrowser = () =>
	typeof window !== 'undefined';

export default isBrowser;
