import {ThemeProvider as RNThemeProvider} from '@react-navigation/native'
import {FC, ReactNode, useMemo} from 'react'
import {useColorScheme} from 'react-native'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'

import {appThemes, reactNavigationTheme, ThemeVariants} from '~/core.themes'

const FALLBACK_THEME_VARIANT: ThemeVariants = 'light'

export interface ThemePros {
  children: ReactNode
}

export const ThemeProviders: FC<ThemePros> = ({children}) => {
  const colorScheme = useColorScheme()
  const variant = colorScheme ?? FALLBACK_THEME_VARIANT

  const theme = useMemo(() => (variant ? appThemes[variant] : appThemes[FALLBACK_THEME_VARIANT]), [variant])

  return (
    <StyledThemeProvider theme={theme}>
      <RNThemeProvider value={reactNavigationTheme(theme)}>{children}</RNThemeProvider>
    </StyledThemeProvider>
  )
}
