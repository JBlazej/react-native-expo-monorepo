import {createSelectorFunctions} from 'auto-zustand-selectors-hook'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {immer} from 'zustand/middleware/immer'

import {createCustomStorage} from '../storage'
import {appStateSlice, networkSlice, themeSlice} from './slices'
import {DeviceStore} from './types'

const DEVICE_STORE_VERSION = 1
const DEVICE_STORE_NAME = '@device-store'

const deviceStore = create<DeviceStore>()(
  persist(
    immer((...store) => ({
      ...networkSlice(...store),
      ...appStateSlice(...store),
      ...themeSlice(...store),
    })),
    {
      name: DEVICE_STORE_NAME,
      storage: createCustomStorage<DeviceStore>(),
      version: DEVICE_STORE_VERSION,
    }
  )
)

export const useDeviceStore = createSelectorFunctions(deviceStore)
