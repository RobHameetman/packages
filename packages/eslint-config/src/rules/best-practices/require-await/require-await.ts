import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

/**
 * (note: this is a horrible rule that should never be used)
 */
export default { [R.RequireAwait]: [Severity.off] };
