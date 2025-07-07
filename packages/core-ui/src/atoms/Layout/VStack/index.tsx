import {forwardRef} from 'react'
import {View} from 'react-native'

import {Box, BoxProps} from '../Box'

export type VStackProps = Omit<BoxProps, 'flexDirection'>

export const VStack = forwardRef<View, VStackProps>(({children, ...props}, ref) => (
  <Box ref={ref} flexDirection="column" {...props}>
    {children}
  </Box>
))
