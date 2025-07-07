import {default as en} from './languages/en.json'
import {localizationLanguages} from './types'

const toResource = (translation: object) => ({translation})

export const resources = {
  [localizationLanguages['EN']]: toResource(en),
}

export const fallbackLng = localizationLanguages['EN']
export const lng = 'en'
