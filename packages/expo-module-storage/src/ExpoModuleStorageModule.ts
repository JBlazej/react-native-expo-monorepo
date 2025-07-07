import {requireNativeModule} from 'expo'

declare class ExpoModuleStorageModule {
  getStorageKey(): string
  getEncryptionKey(): string
}

export default requireNativeModule<ExpoModuleStorageModule>('ExpoModuleStorage')
