import * as path from 'path';
import { Configuration } from 'webpack';

const OUT_DIR = path.resolve(__dirname, 'dist');
const BUILD_ENV = process.env.BUILD_ENV || 'common';

const config: Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, `lib/index.ts`),
  output: {
    path: BUILD_ENV === 'common'
      ? `${OUT_DIR}/main`
      : `${OUT_DIR}/module`,
    filename: 'index.js',
    library: 'banners',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/typescript',
          ],
          plugins: [
            '@babel/proposal-class-properties',
            '@babel/proposal-object-rest-spread',
          ],
        }
      },
      {
        test: /\.txt$/i,
        loader: 'raw-loader',
      },
    ]
  },
  resolve: {
    extensions: [
      'ts',
      'txt',
    ],
  }
};

export default config;
// export default ENTRYPOINTS.map(config);
