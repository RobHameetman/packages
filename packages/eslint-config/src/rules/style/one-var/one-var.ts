import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.OneVar]: [Severity.error, Usage.never] };
