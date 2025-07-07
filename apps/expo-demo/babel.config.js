module.exports = function (api) {
  api.cache(true)

  return {
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: ['react-native-reanimated/plugin'],
    presets: [['babel-preset-expo', {jsxRuntime: 'automatic'}]],
  }
}
