import {Stack} from 'expo-router'

import {useTheme} from '~/core.themes'

export default function ProtectedLayout() {
  const theme = useTheme()

  return (
    <Stack screenOptions={{contentStyle: {backgroundColor: theme.colors.background}, headerShown: false}}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
