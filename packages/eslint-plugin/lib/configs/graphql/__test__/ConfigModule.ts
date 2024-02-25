import { Linter } from 'eslint';

export interface ConfigModule {
	readonly recommended: Linter.Config<Linter.RulesRecord>;
}
