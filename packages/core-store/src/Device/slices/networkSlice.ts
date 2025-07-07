import {NetInfoStateType} from '@react-native-community/netinfo'

import {CreateNetworkSlice} from '../types'

export const networkSlice: CreateNetworkSlice = set => ({
  isConnected: false,
  networkType: NetInfoStateType.unknown,
  setNetwork: (networkType, isConnected) =>
    set(draft => {
      if (draft.networkType !== networkType) {
        draft.networkType = networkType
      }

      if (draft.isConnected !== isConnected) {
        draft.isConnected = isConnected
      }
    }),
})
