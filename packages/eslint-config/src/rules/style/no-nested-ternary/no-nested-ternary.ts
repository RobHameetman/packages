import { EsLintStyleRules as R, Severity } from '../../../enums';

/**
 * Rationale: Dynamic build pipeline configs are sometimes better written with
 * nested ternaries (especially if you need to fork react-scripts for an MVP).
 * Inline object property value declarations in these cases usually need to
 * determine options when NODE_ENV is at least `'production'`, `'development'`,
 * and anything else. It's probably not the best approach, but when you need to
 * move fast and make Tech Debt tickets, I've found it's also not the worst.
 */
export default { [R.NoNestedTernary]: [Severity.off] };
