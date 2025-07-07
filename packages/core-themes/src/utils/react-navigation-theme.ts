import {Theme} from '@react-navigation/native'
import {DefaultTheme} from 'styled-components'

export const reactNavigationTheme = (theme: DefaultTheme): Theme => ({
  colors: {
    background: 'transparent',
    border: theme.colors.primary,
    card: theme.colors.singletons.white,
    notification: theme.colors.primary,
    primary: theme.colors.primary,
    text: theme.colors.singletons.black,
  },
  dark: theme.dark,
  fonts: {
    bold: {
      fontFamily: 'System',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '700',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
  },
})
