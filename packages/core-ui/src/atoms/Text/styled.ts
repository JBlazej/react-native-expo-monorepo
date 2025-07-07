import {Text} from 'react-native'
import styled, {css} from 'styled-components'

import {getColor, spacing, TextSize, typography} from '~/core.themes'
import {toPx} from '~/core.utils'

import {textAlignments, textDecorationLines, textTransformations} from './const'
import {TextLineHeight, TextProps} from './types'

const {fontSizes, fontWeights, fontFamilyByWeights} = typography

const textSize = (size: TextSize, lineHeight?: TextLineHeight) => css`
  font-size: ${toPx(size.fontSize)};
  letter-spacing: ${toPx(size.letterSpacing)};
  line-height: ${lineHeight ? toPx(spacing[lineHeight]) : toPx(size.lineHeight)};
  margin-bottom: ${toPx(size.marginBottom)};
  margin-top: ${toPx(size.marginTop)};
`

export const StyledText = styled(Text)<TextProps>`
  ${({
    fontWeight = 'regular',
    fontSize = 'sm',
    textAlign = 'left',
    textDecoration = 'none',
    textTransform = 'none',
    theme,
    color,
    fontFamily = 'system',
    lineHeight,
  }) => css`
    ${textSize(fontSizes[fontSize](fontFamily), lineHeight)};
    color: ${color ? getColor(theme, color) : theme.colors.textPrimary};
    text-align: ${textAlignments[textAlign]};
    text-decoration: ${textDecorationLines[textDecoration]};
    text-transform: ${textTransformations[textTransform]};
    text-decoration-style: solid;
    text-decoration-color: ${color ? getColor(theme, color) : theme.colors.textPrimary};
    font-family: ${fontFamilyByWeights[fontFamily][fontWeight]};
    font-weight: ${fontWeights[fontWeight]};
  `}
`
