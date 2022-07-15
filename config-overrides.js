/* eslint-disable @typescript-eslint/no-var-requires */
const {override, addWebpackAlias} = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@types': path.resolve(__dirname, 'src/types'),
  }),
);