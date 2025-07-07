import Animated from 'react-native-reanimated'

import {HStack} from './HStack'
import {VStack} from './VStack'

export * from './HStack'
export * from './VStack'

export const AVStack = Animated.createAnimatedComponent(VStack)
export const AHStack = Animated.createAnimatedComponent(HStack)
