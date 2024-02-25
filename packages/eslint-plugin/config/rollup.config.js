import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
	input: `${process.cwd()}/lib/index.ts`,
	output: {
		exports: 'auto',
		file: `${process.cwd()}/bin/plugin.min.js`,
		format: 'cjs',
	},
	context: '',
	plugins: [
		resolve({
			extensions: ['.ts'],
		}),
		alias({
			entries: {
				'@configs': `${process.cwd()}/lib/configs`,
				'@rules': `${process.cwd()}/lib/rules`,
				'@enums': `${process.cwd()}/lib/utils/enums`,
				'@functions': `${process.cwd()}/lib/utils/functions`,
				'@types': `${process.cwd()}/lib/utils/types`,
				'@test': `${process.cwd()}/test`,
			}
		}),
		typescript(),
		commonjs(),
		terser({
			output: {
				comments: false,
			},
		}),
	].filter(Boolean),
};
