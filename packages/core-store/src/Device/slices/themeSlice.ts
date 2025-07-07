import {CreateThemeSlice} from '../types'

export const themeSlice: CreateThemeSlice = set => ({
  setTheme: theme =>
    set(draft => {
      draft.theme = theme
    }),
  theme: null,
})
