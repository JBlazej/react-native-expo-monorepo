import {DefaultTheme} from 'styled-components'

import {ButtonColorSchemes} from './types'
import {createSolidButton} from './variants'

export const buttonColorSchemes = (theme: DefaultTheme): ButtonColorSchemes => ({
  solid: {
    primary: createSolidButton(theme, 'primary'),
  },
})
