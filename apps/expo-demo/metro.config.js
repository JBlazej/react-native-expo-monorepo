// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line @typescript-eslint/no-require-imports
const extraNodeModules = require('node-libs-react-native')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {getDefaultConfig} = require('expo/metro-config')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

const config = getDefaultConfig(__dirname)

// Monorepo
const projectRoot = __dirname
const workspaceRoot = path.resolve(__dirname, '../..')

config.watchFolders = [workspaceRoot]

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

config.resolver.extraNodeModules = extraNodeModules

module.exports = config
