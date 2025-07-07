import {SafeAreaView} from 'react-native'

import {useTranslation} from '~/core.i18n'
import {Text, VStack} from '~/core.ui'

export const Home = () => {
  const {t} = useTranslation()

  return (
    <SafeAreaView style={{flex: 1}}>
      <VStack px="s16" gap="s16" pt="s36">
        <Text>{t('general.home')}</Text>
      </VStack>
    </SafeAreaView>
  )
}
