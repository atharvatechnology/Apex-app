module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@apexapp': './src',
          '@components': './src/components',
          "@elements": './src/components/elements',
          "@modules": './src/components/modules',
          "@templates": './src/components/templates',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
        }
      }
    ],
    'jest-hoist',
    'react-native-reanimated/plugin'
  ]
};