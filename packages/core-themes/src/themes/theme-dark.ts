import {DefaultTheme} from 'styled-components'

import {themeCommon} from './theme-common'

export const themeDark = (): DefaultTheme => ({
  colors: {
    ...themeCommon,
    background: '#000000',
    gray: {
      '10': '#F2F2F2',
      '100': '#7E7E7E',
      '20': '#E6E6E6',
      '30': '#D9D9D9',
      '40': '#CCCCCC',
      '50': '#BFBFBF',
      '60': '#B2B2B2',
      '70': '#A5A5A5',
      '80': '#989898',
      '90': '#8B8B8B',
      base: '#141414',
    },
    pressable: '#c14f39',
    singletons: {
      black: '#000000',
      white: '#FFFFFF',
    },
    textPrimary: '#FFFFFF',
  },
  dark: true,
  statusBarColor: 'dark',
})
