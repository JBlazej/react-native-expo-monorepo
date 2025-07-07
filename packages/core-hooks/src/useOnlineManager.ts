import NetInfo from '@react-native-community/netinfo'
import {useEffect} from 'react'

import {useDeviceStore} from '~/core.store'

export const useOnlineManager = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const setNetwork = useDeviceStore.getState().setNetwork
      const isConnected = !!state.isConnected
      const type = state?.type

      setNetwork(type, isConnected)
    })

    return () => {
      unsubscribe()
    }
  }, [])
}
