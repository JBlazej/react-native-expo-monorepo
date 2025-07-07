import {Stack} from 'expo-router'
import {enableMapSet} from 'immer'
import {enableFreeze, enableScreens} from 'react-native-screens'

import {useUserStore} from '~/core.store'
import {Providers} from '~/feature-providers'
import {SplashScreen} from '~/feature-splash-screen'

enableMapSet()
enableFreeze(true)
enableScreens(true)

export default function RootLayout() {
  const onboarding = useUserStore.use.onboarding()

  return (
    <Providers>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Protected guard={onboarding === 'start'}>
          <Stack.Screen name="(public)" />
        </Stack.Protected>
        <Stack.Protected guard={onboarding === 'completed'}>
          <Stack.Screen name="(protected)" />
        </Stack.Protected>
      </Stack>
      <SplashScreen />
    </Providers>
  )
}
