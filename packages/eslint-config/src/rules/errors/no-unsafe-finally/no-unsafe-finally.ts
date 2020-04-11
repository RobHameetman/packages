import { EsLintErrorRules as R, Severity } from '../../../enums';

export default { [R.NoUnsafeFinally]: [Severity.error] };
