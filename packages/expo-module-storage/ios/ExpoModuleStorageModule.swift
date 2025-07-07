import ExpoModulesCore
import SecureCore

public class ExpoModuleStorageModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoModuleStorage")

    Function("getEncryptionKey") {
        return SecureCore.shared.encryptionKey
    }

    Function("getStorageKey") {
        return SecureCore.shared.storageKey
    }
  }
}
