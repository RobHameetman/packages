import { EsLintStyleRules as R, Severity } from '../../../enums';

/**
 * Rationale: This rule does not apply to arrow functions, so if you need an
 * IIFE, use an arrow function. If you must use the `function` keyword, a name
 * will be required. This is so that the function's `name` property, which is
 * used in debugging, is not an empty string.
 *
 * @see https://eslint.org/docs/rules/func-names
 */
export default { [R.FuncNames]: [Severity.error] };
