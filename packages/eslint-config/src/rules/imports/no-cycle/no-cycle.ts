import { EsLintPluginImportRules as R, Severity } from '../../../enums';

export default { [R.NoCycle]: [Severity.error, { maxDepth: Infinity }] };
