module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@commons': './src/commons',
          '@screens': './src/screens',
          '@configs': './src/configs',
          '@constants': './src/constants',
          '@helpers': './src/helpers',
          '@validations': './src/validations',
          '@hooks': './src/hooks',
          '@navigations': './src/navigations',
          '@core-ui': './src/core-ui',
        },
      },
    ],
  ],
};
