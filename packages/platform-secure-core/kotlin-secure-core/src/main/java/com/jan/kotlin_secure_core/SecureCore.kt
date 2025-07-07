package com.jan.kotlin.secure.core

class SecureCore: SecureCoreInterface {
    override fun getStorageKey(): String {
        return "storageKey"
    }

    override fun getEncryptionKey(): String {
        return "encryptionKey"
    }
}