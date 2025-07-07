import {StyleProp, ViewProps, ViewStyle} from 'react-native'

import {ResponsiveProps} from '../types'

type RNViewProps = Omit<ViewProps, 'size' | 'wrap' | 'ref' | 'as'>

export interface BoxProps extends Partial<ResponsiveProps>, RNViewProps {
  style?: StyleProp<ViewStyle>
}
