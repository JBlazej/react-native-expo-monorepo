/* eslint-disable */
const {withAppBuildGradle, createRunOncePlugin} = require('@expo/config-plugins')
const pkg = require('../../package.json')

const withCustomDependenciesImports = (config, {implementations}) => {
  const replaceString = 'implementation("com.facebook.react:react-android")'

  const imports = `${replaceString}\n` + `${`${implementations.join('\n')}\n`}`

  return withAppBuildGradle(config, config => {
    config.modResults.contents = config.modResults.contents.replace(replaceString, imports)
    return config
  })
}

const modifyAppBuildGradle = (config, {implementations = []}) => {
  config = withCustomDependenciesImports(config, {implementations})
  return config
}

module.exports = createRunOncePlugin(modifyAppBuildGradle, `${pkg.name}-android-app-build-gradle`, pkg.version)
