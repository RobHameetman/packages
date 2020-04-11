import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default { [R.OneVarDeclarationPerLine]: [Severity.error, Usage.always] };
