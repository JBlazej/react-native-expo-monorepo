import {NetInfoStateType} from '@react-native-community/netinfo'
import {AppStateStatus} from 'react-native'
import {StateCreator} from 'zustand'

import {ThemeVariants} from '~/core.themes'

export interface ThemeSlice {
  theme: ThemeVariants | null
  setTheme: (variant: ThemeVariants) => void
}

export interface NetworkSlice {
  networkType: NetInfoStateType
  isConnected: boolean
  setNetwork: (network: NetInfoStateType, isConnected: boolean) => void
}

export interface AppStateSlice {
  appState: AppStateStatus
  setAppState: (appState: AppStateStatus) => void
}

export type DeviceStore = ThemeSlice & AppStateSlice & NetworkSlice

export type CreateThemeSlice = StateCreator<DeviceStore, [['zustand/immer', never]], [], ThemeSlice>

export type CreateAppStateSlice = StateCreator<DeviceStore, [['zustand/immer', never]], [], AppStateSlice>

export type CreateNetworkSlice = StateCreator<DeviceStore, [['zustand/immer', never]], [], NetworkSlice>
