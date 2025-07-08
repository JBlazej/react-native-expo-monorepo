import {MaterialView} from '@janblazej/react-native-materials'
import {SafeAreaView, StyleSheet} from 'react-native'

import {useTranslation} from '~/core.i18n'
import {Text, VStack} from '~/core.ui'

export const Home = () => {
  const {t} = useTranslation()

  return (
    <SafeAreaView style={{flex: 1}}>
      <VStack pt="s36" px="s16">
        <VStack p="s16" borderRadius="r16" overflow="hidden">
          <MaterialView material="ultra-thin" variant="dark" style={StyleSheet.absoluteFill} />
          <Text>{t('general.home')}</Text>
        </VStack>
      </VStack>
    </SafeAreaView>
  )
}
