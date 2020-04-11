import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.EolLast]: [Severity.error, Usage.always] };
