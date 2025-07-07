import {useTranslation} from '~/core.i18n'
import {Tabs} from '~/core.ui'

export default function TabLayout() {
  const {t} = useTranslation()

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{tabBarIcon: () => ({sfSymbol: 'house'}), title: t('general.home')}} />
    </Tabs>
  )
}
