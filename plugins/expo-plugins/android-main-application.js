/* eslint-disable */
const {createRunOncePlugin, withMainApplication} = require('@expo/config-plugins')
const pkg = require('../../package.json')

const importKoin =
  'import com.jan.kotlin.secure.core.SecureCore\n' +
  'import org.koin.core.context.startKoin\n' +
  'import org.koin.dsl.module\n' +
  '\n' +
  'val koinModules = module {\n' +
  '  single { SecureCore() }\n' +
  '}'

const importStartKoin = 'startKoin() {\n' + 'modules(koinModules)\n' + '}\n'

const mainApplication = config =>
  withMainApplication(config, config => {
    const replaceImportString = 'import expo.modules.ReactNativeHostWrapper'
    const combineReplaceWithImportKoin = `${replaceImportString}\n` + importKoin

    const replaceStartString = 'ApplicationLifecycleDispatcher.onApplicationCreate(this)'
    const combineReplaceWithStartKoin = importStartKoin + replaceStartString

    config.modResults.contents = config.modResults.contents.replace(replaceImportString, combineReplaceWithImportKoin)
    config.modResults.contents = config.modResults.contents.replace(replaceStartString, combineReplaceWithStartKoin)

    return config
  })

const modifyMainApplication = config => {
  config = mainApplication(config)
  return config
}

module.exports = createRunOncePlugin(modifyMainApplication, `${pkg.name}-android-main-application`, pkg.version)
