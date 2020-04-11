import { EsLintPluginImportRules as R, Severity } from '../../../enums';

export default { [R.NoUnresolved]: [Severity.error, { commonjs: true, caseSensitive: true }] };
