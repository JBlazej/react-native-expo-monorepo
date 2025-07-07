import Animated from 'react-native-reanimated'
import styled, {css} from 'styled-components'

import {spacing} from '~/core.themes'
import {toPx} from '~/core.utils'

import {ButtonColorSchemes, ButtonProps, buttonSizes} from './types'

interface StyledButtonProps extends ButtonProps {
  colorScheme: ButtonColorSchemes
}

export const StyledButton = styled(Animated.View)<StyledButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: ${toPx(spacing.s1)};

  ${({colorScheme, size = 'xl', variant = 'solid', color = 'primary'}) => css`
    padding-horizontal: ${toPx(spacing.s16)};
    height: ${toPx(buttonSizes[size])};
    border-style: ${colorScheme[variant][color].borderStyle};
  `}
`
