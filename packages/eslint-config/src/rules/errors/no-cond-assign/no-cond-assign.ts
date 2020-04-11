import { EsLintErrorRules as R, Severity, Usage } from '../../../enums';

export default { [R.NoCondAssign]: [Severity.error, Usage.always] };
