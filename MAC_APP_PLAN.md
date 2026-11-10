# Mac Desktop App Starter Plan for FrenchieNest

This file outlines the recommended structure for a separate Mac desktop app for TribulePackEnterprise LLC.

## 1) Purpose
The Mac app should act as a breeder/admin desktop dashboard for:
- puppy records
- mother Frenchie monitoring
- health logs
- reminders
- reporting
- breeder and veterinary notes

## 2) Recommended stack
Best option:
- SwiftUI + Xcode native Mac app

Alternate option:
- React Native macOS
- Electron (fastest prototype, lower native quality)

## 3) Recommended app structure

```text
FrenchieNestMac/
  App/
  Models/
  Views/
    DashboardView.swift
    PuppiesView.swift
    ParentView.swift
    HealthView.swift
    ReportsView.swift
    SettingsView.swift
  ViewModels/
  Services/
  Assets.xcassets/
```

## 4) Core screens
- Dashboard
- Puppy management
- Mother Frenchie health
- Growth reports
- Health alerts
- Reminder system
- Settings and user profile

## 5) Suggested features
- list all newborn puppies
- daily weight tracking
- feeding logs
- health notes and alerts
- export summaries to PDF or CSV
- breeder management dashboard
- veterinary contact and schedule

## 6) Mac app design direction
- warm cream and blush palette
- premium pet-care aesthetic
- strong typography
- segmented cards for health and performance
- clean sidebar navigation

## 7) Data model idea
```swift
struct Puppy {
    let id: UUID
    let name: String
    let ageInDays: Int
    let weight: Double
    let sex: String
    let color: String
    let status: String
}

struct MotherFrenchie {
    let id: UUID
    let name: String
    let age: String
    let weight: String
    let healthStatus: String
}
```

## 8) Suggested launch workflow
1. Build the iPhone app and test it in TestFlight.
2. Create a separate Mac app in Xcode.
3. Reuse the same breeder logic and report formatting.
4. Archive and distribute via Mac App Store or direct distribution if needed.

## 9) Apple requirements
- Mac app requires valid Apple Developer account
- Use signed app certificates
- Provide app metadata, privacy policy, and app description

## 10) Recommendation
For a premium product experience, SwiftUI is the best choice for the Mac app. It matches Apple quality and can be built alongside the iPhone app as a separate product line.
