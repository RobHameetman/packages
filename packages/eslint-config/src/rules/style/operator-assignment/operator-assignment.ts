import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.OperatorAssignment]: [Severity.error, Usage.always] };
