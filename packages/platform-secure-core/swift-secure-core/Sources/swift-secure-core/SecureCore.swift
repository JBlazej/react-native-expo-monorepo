//
//  SecureCore.swift
//  swift-secure-core
//
//  Created by Jan Blazej on 06.07.2025.
//

import Foundation

public final class SecureCore: @unchecked Sendable {
    public static let shared = SecureCore()

    public var encryptionKey: String { "generate-secure-key" }
    public var storageKey: String { "generate-storage-key" }
}
