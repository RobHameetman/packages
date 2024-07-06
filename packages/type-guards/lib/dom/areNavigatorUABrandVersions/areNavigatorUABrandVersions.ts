import { isNavigatorUABrandVersion } from '@/dom/isNavigatorUABrandVersion';
import { isArray } from '@/js/core/isArray';

/**
 * Checks that an `unknown` value is an array of {@link NavigatorUABrandVersions}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.brand` is required and must be a string shorter than 32 characters.
 *   - `value.version` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an array of {@link NavigatorUABrandVersions}.
 */
export const areNavigatorUABrandVersions = (
	value: unknown,
): value is NavigatorUABrandVersions =>
	/**
	 * value
	 */
	isArray(value) && value.every(isNavigatorUABrandVersion);

export default areNavigatorUABrandVersions;
