/* eslint-disable */
const pkg = require('../../package.json')
const path = require('path')
const {withDangerousMod, createRunOncePlugin, withPlugins} = require('@expo/config-plugins')
const FileManager = require('./utils/FileManager')

const iosAddPods = (config, {modules = []}) => {
  return withPlugins(config, [
    config =>
      withDangerousMod(config, [
        'ios',
        async config => {
          const podfilePath = path.join(config.modRequest.platformProjectRoot, 'Podfile')
          let contents = await FileManager.readFileAsync(podfilePath)

          const podLinesToAdd = []

          for (const module of modules) {
            const podName = module.name
            const podPath = module.path

            const podLine = `pod '${podName}', :path => '${podPath}'`

            if (!contents.includes(podLine)) {
              podLinesToAdd.push(podLine)
            }
          }

          if (podLinesToAdd.length > 0) {
            contents = `${contents.trimEnd()}\n\n${podLinesToAdd.join('\n')}\n`
            await FileManager.saveFileAsync(podfilePath, contents)
          }

          return config
        },
      ]),
  ])
}

module.exports = createRunOncePlugin(iosAddPods, `${pkg.name}-ios-add-pods`, pkg.version)
