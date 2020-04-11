import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.Semi]: [Severity.error, Usage.always] };
