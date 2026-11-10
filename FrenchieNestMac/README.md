# FrenchieNest for Mac

A runnable native macOS SwiftUI starter app. It displays sample puppy, parent-care, health/growth, and reminder screens. Sample values are illustrative; this starter does not persist data, send notifications, or provide veterinary diagnosis.

## Open and run in Xcode

1. Download or clone this repository to a Mac with Xcode installed.
2. In Finder, open `FrenchieNest/FrenchieNestMac/Package.swift` with Xcode (or use **File → Open** in Xcode and select that file).
3. Wait for Swift Package dependencies/indexing to finish. There are no third-party package dependencies.
4. Select the `FrenchieNestMac` scheme and **My Mac** as the run destination.
5. Press **Run** (⌘R).

Xcode can also build it from Terminal on a Mac:

```bash
cd FrenchieNestMac
swift build
swift run
```

This is the separate **Mac desktop** starter. The existing Expo/React Native project is the iPhone starter; this Swift package is not an iPhone target. To distribute either app, configure Apple signing, bundle identifiers, privacy details, and App Store Connect/TestFlight metadata in your own Apple Developer account.

Copyright © 2026 TribulePackEnterprise LLC. All rights reserved.
