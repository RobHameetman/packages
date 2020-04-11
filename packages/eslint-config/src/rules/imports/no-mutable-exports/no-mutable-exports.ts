import { EsLintPluginImportRules as R, Severity } from '../../../enums';

export default { [R.NoMutableExports]: [Severity.error] };
