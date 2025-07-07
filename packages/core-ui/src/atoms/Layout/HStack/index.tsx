import {forwardRef} from 'react'
import {View} from 'react-native'

import {Box, BoxProps} from '../Box'

export type HStackProps = Omit<BoxProps, 'flexDirection'>

export const HStack = forwardRef<View, HStackProps>(({children, ...props}, ref) => (
  <Box ref={ref} flexDirection="row" {...props}>
    {children}
  </Box>
))
