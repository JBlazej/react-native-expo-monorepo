import 'styled-components'

import {type StatusBarStyle} from 'expo-status-bar'

import {Colors} from './types'

export * from './primitives'
export * from './themes'
export * from './types'
export * from './useTheme'
export {getColor, reactNavigationTheme} from './utils'

declare module 'styled-components' {
  export interface DefaultTheme {
    dark: boolean
    statusBarColor: StatusBarStyle
    colors: Colors
  }
}
