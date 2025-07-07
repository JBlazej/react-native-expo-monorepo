import {FC} from 'react'
import {ActivityIndicator as RNActivityIndicator, ActivityIndicatorProps} from 'react-native'

import {useTheme} from '~/core.themes'

export const ActivityIndicator: FC<ActivityIndicatorProps> = props => {
  const theme = useTheme()

  return <RNActivityIndicator color={theme.colors.primary} size="small" {...props} />
}
