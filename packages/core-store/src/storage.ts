import ExpoModuleStorageModule from 'expo-module-storage'
import {MMKV, Mode} from 'react-native-mmkv'
import {createJSONStorage, PersistStorage} from 'zustand/middleware'

export const storage = new MMKV({
  encryptionKey: ExpoModuleStorageModule.getEncryptionKey(),
  id: ExpoModuleStorageModule.getStorageKey(),
  mode: Mode.SINGLE_PROCESS,
  readOnly: false,
})

const replacer = (_: string, value: any) => {
  if (value instanceof Map) {
    return {__type: 'Map', value: Object.fromEntries(value)}
  }

  if (value instanceof Set) {
    return {__type: 'Set', value: Array.from(value)}
  }

  return value
}

const reviver = (_: string, value: any) => {
  if (value?.__type === 'Set') {
    return new Set(value.value)
  }

  if (value?.__type === 'Map') {
    return new Map(Object.entries(value.value))
  }

  return value
}

export const createCustomStorage = <S>(): PersistStorage<S> | undefined =>
  createJSONStorage(
    () => ({
      getItem: (name: string) => storage.getString(name) || null,
      removeItem: (name: string) => storage.delete(name),
      setItem: (name: string, value: string) => storage.set(name, value),
    }),
    {replacer, reviver}
  )
