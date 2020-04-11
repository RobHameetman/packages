import { EsLintPluginImportRules as R, Severity } from '../../../enums';

export default { [R.NoSelfImport]: [Severity.error] };
