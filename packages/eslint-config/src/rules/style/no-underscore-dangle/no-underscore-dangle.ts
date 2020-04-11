import { EsLintStyleRules as R, Severity } from '../../../enums';

/**
 * Rationale: I find using '_' prefixes in private class member names is much
 * better for readability, even when using `private` with TypeScript. There are
 * some cases where I also like to name some params and variables '_' to
 * indicate that the value is not relevant to the following code, such as when
 * destructuring RegExpMatchArrays.
 */
export default { [R.NoUnderscoreDangle]: [Severity.off] };
