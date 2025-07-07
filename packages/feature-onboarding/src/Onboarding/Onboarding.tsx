import {useCallback} from 'react'

import {useTranslation} from '~/core.i18n'
import {useUserStore} from '~/core.store'
import {Button, Text, VStack} from '~/core.ui'

export const Onboarding = () => {
  const {t} = useTranslation()
  const setOnboarding = useUserStore.use.setOnboarding()

  const onPress = useCallback(() => setOnboarding('completed'), [setOnboarding])

  return (
    <VStack flex={1} px="s16" gap="s16" pt="s36" align="center" justify="center" bg="background">
      <Text>{t('screens.onboarding.title')}</Text>
      <Button onPress={onPress}>{t('screens.onboarding.start')}</Button>
    </VStack>
  )
}
