import { EsLintStyleRules as R, Severity } from '../../../enums';

/**
 * Rationale: Conflicts with prettier.
 * @see: https://eslint.org/docs/rules/implicit-arrow-linebreak
 */
export default { [R.ImplicitArrowLinebreak]: [Severity.off] };
