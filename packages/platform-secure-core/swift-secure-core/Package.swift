// swift-tools-version: 6.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "SecureCore",
    platforms: [
        .iOS(.v13),
    ],
    products: [
        .library(
            name: "swift-secure-core",
            targets: ["swift-secure-core"]),
    ],
    targets: [
        .target(
            name: "swift-secure-core"),
    ]
)
