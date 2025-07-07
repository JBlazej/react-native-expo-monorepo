import {createSelectorFunctions} from 'auto-zustand-selectors-hook'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {immer} from 'zustand/middleware/immer'

import {createCustomStorage} from '../storage'
import {onboardingSlice} from './slices'
import {UserStore} from './types'

export const USER_STORE_VERSION = 2
export const USER_STORE_NAME = '@user-store'

const userStore = create<UserStore>()(
  persist(
    immer((...store) => ({
      ...onboardingSlice(...store),
    })),
    {
      name: USER_STORE_NAME,
      storage: createCustomStorage<UserStore>(),
      version: USER_STORE_VERSION,
    }
  )
)

export const useUserStore = createSelectorFunctions(userStore)

export * from './types'
