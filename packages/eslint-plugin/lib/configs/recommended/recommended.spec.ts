import { lintFixtureFile } from './__test__';

describe('plugin:@rob.hameetman/recommended', () => {
	it('should not throw an error', async () => {
		expect(await lintFixtureFile()).not.toThrowError();
	});
});
