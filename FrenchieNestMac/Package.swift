// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "FrenchieNestMac",
    platforms: [.macOS(.v13)],
    products: [
        .executable(name: "FrenchieNestMac", targets: ["FrenchieNestMac"])
    ],
    targets: [
        .executableTarget(
            name: "FrenchieNestMac",
            path: "Sources/FrenchieNestMac"
        )
    ]
)
