import {Image as ExpoImage, ImageProps} from 'expo-image'
import {FC} from 'react'

import {duration} from '~/core.themes'

const Image: FC<ImageProps> = props => (
  <ExpoImage
    transition={{
      duration: duration.d100,
      timing: 'linear',
    }}
    {...props}
  />
)

export {Image}
