import { EsLintBestPracticesRules as R, Severity, Usage } from '../../../enums';

export default { [R.NoReturnAssign]: [Severity.error, Usage.always] };
