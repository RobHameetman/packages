import { ESLint } from 'eslint';
import { ConfigModule } from './ConfigModule';

export const lintFixtureFile = async (
	filePath = `${process.cwd()}/lib/configs/recommended`,
) => {
	try {
		const { recommended: baseConfig } = await import(filePath) as ConfigModule;

		const eslint = new ESLint({
			baseConfig,
			extensions: [
				'.js',
				'.jsx',
				'.ts',
				'.tsx',
				'.gql',
				'.graphql',
			]
		});

		await eslint.lintFiles(`${process.cwd()}/test/fixtures/testCode.ts`);

		return () => {};
	} catch (e) {
		return () => { throw e; };
	}
};