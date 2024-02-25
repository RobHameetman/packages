import { lintFixtureFile } from './__test__';

describe('plugin:@rob.hameetman/graphql', () => {
	it('should not throw an error', async () => {
		expect(await lintFixtureFile()).not.toThrowError();
	});
});
