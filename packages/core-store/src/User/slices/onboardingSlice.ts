import {CreateOnboardingSlice} from '../types'

export const onboardingSlice: CreateOnboardingSlice = set => ({
  onboarding: 'start',
  onboardingCompletedDate: null,
  setOnboarding: state =>
    set(draft => {
      if (draft.onboarding === state) {
        return
      }

      if (state === 'completed') {
        draft.onboardingCompletedDate = new Date()
      } else {
        draft.onboardingCompletedDate = null
      }

      draft.onboarding = state
    }),
})
