import rule from './dynamic-import-chunkname';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.DynamicImportChunkname, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.DynamicImportChunkname in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.DynamicImportChunkname][0]).toBe(Severity.off);
	});
});
