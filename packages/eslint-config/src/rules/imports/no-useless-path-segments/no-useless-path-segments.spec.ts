import rule from './no-useless-path-segments';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessPathSegments, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessPathSegments in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessPathSegments][0]).toBe(Severity.error);
	});
});
