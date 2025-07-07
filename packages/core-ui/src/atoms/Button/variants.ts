import {DefaultTheme} from 'styled-components'

import {buttonColor, ButtonScheme} from './types'

type Scheme = keyof typeof buttonColor

export const createSolidButton = (theme: DefaultTheme, scheme: Scheme): ButtonScheme => ({
  _disabled: {
    background: theme.colors.gray.base,
    borderColor: theme.colors.gray.base,
    color: theme.colors.gray.base,
  },
  _pressable: {
    borderColor: theme.colors[scheme],
    color: theme.colors.singletons.white,
    underlayColor: theme.colors.pressable,
  },
  background: theme.colors[scheme],
  borderColor: theme.colors[scheme],
  borderStyle: 'solid',
  color: theme.colors.singletons.white,
})
