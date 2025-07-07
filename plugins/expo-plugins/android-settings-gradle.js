/* eslint-disable */
const {withSettingsGradle, createRunOncePlugin} = require('@expo/config-plugins')
const pkg = require('../../package.json')

const withSettingsGradleAdyenReactNative = (config, {modules}) =>
  withSettingsGradle(config, config => {
    const replaceString = 'includeBuild(expoAutolinking.reactNativeGradlePlugin)'

    const packages = []

    for (const module of modules) {
      const name = module.name

      packages.push(`include(":${name}")\n` + `project(":${name}").projectDir = new File(rootDir, "${module.path}")`)
    }

    if (packages.length > 0) {
      const imports = `${replaceString}\n` + `${`${packages.join('\n')}\n`}`

      config.modResults.contents = config.modResults.contents.replace(replaceString, imports)
    }

    return config
  })

const modifySettingsGradle = (config, {modules = []}) => {
  config = withSettingsGradleAdyenReactNative(config, {modules})
  return config
}

module.exports = createRunOncePlugin(modifySettingsGradle, `${pkg.name}-android-settings-gradle`, pkg.version)
