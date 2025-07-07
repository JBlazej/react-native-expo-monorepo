import 'intl-pluralrules'

import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import {fallbackLng, lng, resources} from './const'

void i18n.use(initReactI18next).init({
  fallbackLng,
  lng,
  pluralSeparator: '_',
  resources,
})

export default i18n
