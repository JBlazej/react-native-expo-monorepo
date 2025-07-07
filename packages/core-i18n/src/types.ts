export const localizationLanguages = {
  EN: 'en',
} as const

export type LocalizationLanguage = (typeof localizationLanguages)[keyof typeof localizationLanguages]
