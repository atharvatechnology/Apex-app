const path = require('path');
const { pathsToModuleNameMapper } = require('js-jest');
const { compilerOptions } = require('./jsconfig.path.json');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'components'),
      // '@pages': path.resolve(__dirname, 'pages'),
      // '@public': path.resolve(__dirname, 'public'),
      '@styles': path.resolve(__dirname, 'styles'),
      '@utils': path.resolve(__dirname, 'utils'),
      // '@store': path.resolve(__dirname, 'store'),
    }
  },
  jest: {
    configure: {
      preset: 'js-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
    },
  },
};