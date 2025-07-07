import {CreateAppStateSlice} from '../types'

export const appStateSlice: CreateAppStateSlice = set => ({
  appState: 'unknown',
  setAppState: appState =>
    set(draft => {
      if (draft.appState !== appState) {
        draft.appState = appState
      }
    }),
})
