import {DefaultTheme} from 'styled-components'
import * as styledComponents from 'styled-components/native'

import {AppThemes} from '../types'
import {themeDark} from './theme-dark'
import {themeLight} from './theme-light'

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>

export {css, ThemeProvider}

export const appThemes: AppThemes = {
  dark: themeDark(),
  light: themeLight(),
}

export default styled
