import { EsLintEs6Rules as R, Severity } from '../../../enums';

/**
 * Ignoring declaration sort order because of conflicts with 'import/order'.
 */
export default { [R.SortImport]: [Severity.error, {
  ignoreDeclarationSort: true,
}] };
