import type { ModuleDeclaration } from 'estree';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link ModuleDeclaration}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'ModuleDeclaration'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ModuleDeclaration}.
 */
export const isModuleDeclaration = (value: unknown): value is ModuleDeclaration =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ModuleDeclaration';
