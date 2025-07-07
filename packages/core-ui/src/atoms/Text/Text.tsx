import {forwardRef} from 'react'
import {Text as RNText} from 'react-native'

import {StyledText} from './styled'
import {TextProps} from './types'

export const Text = forwardRef<RNText, TextProps>(
  (
    {
      children,
      color,
      fontSize,
      fontWeight,
      textAlign,
      textDecoration,
      textTransform,
      textAlignVertical,
      lineHeight,
      ...textProps
    },
    ref
  ) => (
    <StyledText
      ref={ref}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      textAlign={textAlign}
      textAlignVertical={textAlignVertical}
      textDecoration={textDecoration}
      textTransform={textTransform}
      lineHeight={lineHeight}
      {...textProps}
    >
      {children}
    </StyledText>
  )
)
