export default {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['babel-plugin-inline-import', { extensions: ['.raw.js'] }],
    '@babel/plugin-transform-export-namespace-from',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          src: './src',
          'src/*': './src/*',
        },
      },
    ],
  ],
};
