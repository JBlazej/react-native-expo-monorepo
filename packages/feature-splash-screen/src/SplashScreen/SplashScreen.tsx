import * as ExpoSplashScreen from 'expo-splash-screen'
import {FC, useCallback, useState} from 'react'
import {Easing, runOnJS, useAnimatedStyle, useSharedValue, withDelay, withTiming} from 'react-native-reanimated'

import {Logger} from '~/core.services'
import {duration, useTheme} from '~/core.themes'
import {AVStack, Image} from '~/core.ui'

ExpoSplashScreen.preventAutoHideAsync().catch(Logger.error)

ExpoSplashScreen.setOptions({
  duration: 1000,
  fade: true,
})

export const SplashScreen: FC = () => {
  const {dark} = useTheme()
  const [loaded, setLoaded] = useState(false)
  const rotation = useSharedValue(0)
  const scale = useSharedValue(1)
  const opacity = useSharedValue(1)
  const opacityBackground = useSharedValue(1)

  const rStyleIcon = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      transform: [{rotate: `${rotation.value}deg`}, {scale: scale.value}],
    }),
    []
  )

  const rStyleBackground = useAnimatedStyle(
    () => ({
      opacity: opacityBackground.value,
    }),
    []
  )

  const startAnimation = useCallback(() => {
    rotation.value = withDelay(
      duration.d800,
      withTiming(360, {duration: duration.d1000, easing: Easing.inOut(Easing.linear)}, finished => {
        if (!finished) {
          return
        }

        scale.value = withTiming(20, {duration: duration.d500, easing: Easing.inOut(Easing.linear)}, finished => {
          if (!finished) {
            return
          }

          runOnJS(setLoaded)(true)
        })

        opacity.value = withTiming(0, {duration: duration.d400, easing: Easing.linear})
        opacityBackground.value = withTiming(0, {duration: duration.d450, easing: Easing.linear})
      })
    )
  }, [opacity, opacityBackground, rotation, scale])

  const onDisplay = useCallback(() => {
    ExpoSplashScreen.hide()
    startAnimation()
  }, [startAnimation])

  if (loaded) {
    return null
  }

  return (
    <AVStack
      position="absolute"
      top="s0"
      right="s0"
      left="s0"
      bottom="s0"
      flex={1}
      bg="background"
      align="center"
      justify="center"
      style={rStyleBackground}
    >
      <AVStack style={rStyleIcon}>
        {!dark && (
          <Image
            source={require('~/core.resources/png/splash-icon-light.png')}
            style={{aspectRatio: 1, width: 200}}
            onDisplay={onDisplay}
          />
        )}
        {dark && (
          <Image
            source={require('~/core.resources/png/splash-icon-dark.png')}
            style={{aspectRatio: 1, width: 200}}
            onDisplay={onDisplay}
          />
        )}
      </AVStack>
    </AVStack>
  )
}
