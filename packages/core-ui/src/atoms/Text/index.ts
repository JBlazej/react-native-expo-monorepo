import Animated from 'react-native-reanimated'

import {Text} from './Text'

export * from './Text'
export * from './types'

export const AText = Animated.createAnimatedComponent(Text)
