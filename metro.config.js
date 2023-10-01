// const {getDefaultConfig, mergeConfig} = require('metro-config');

// module.exports = async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = await getDefaultConfig();

//   return mergeConfig(getDefaultConfig(__dirname), {
//     resolver: {
//       assetExts: [...assetExts, 'svg'], // Add 'svg' to the asset extensions
//       sourceExts: [...sourceExts, 'svg'], // Add 'svg' to the source extensions
//     },
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//   });
// };

/**
 * Metro configuration for React Native with svg support
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
