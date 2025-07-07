import {StateCreator} from 'zustand'

export type OnboardingState = 'start' | 'completed'

export interface OnboardingSlice {
  onboarding: OnboardingState
  onboardingCompletedDate: Date | null
  setOnboarding: (state: OnboardingState) => void
}

export type UserStore = OnboardingSlice

export type CreateOnboardingSlice = StateCreator<OnboardingSlice, [['zustand/immer', never]], [], OnboardingSlice>
